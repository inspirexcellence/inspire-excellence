export class WPClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl =
      process.env.NEXT_PUBLIC_WP_URL ||
      process.env.WORDPRESS_API_URL ||
      'https://cms.inspirexcellence.org';
  }

  async fetch<T>(endpoint: string, params: Record<string, string> = {}): Promise<T | null> {
    if (!this.baseUrl) {
      console.warn('WordPress URL not configured.');
      return null;
    }

    try {
      // Normalise URL whether passed as https://cms.inspirexcellence.org OR https://cms.inspirexcellence.org/wp-json/wp/v2
      const cleanBase = this.baseUrl
        .trim()
        .replace(/\/+$/, '')
        .replace(/\/wp-json\/wp\/v2\/?$/, '');

      const cleanEndpoint = endpoint.replace(/^\/+/, '');
      const url = new URL(`${cleanBase}/wp-json/wp/v2/${cleanEndpoint}`);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      const response = await fetch(url.toString(), {
        next: { revalidate: 1800 },
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'InspireExcellence-NextApp/1.0',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(`WP API returned HTTP ${response.status} ${response.statusText}`);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.warn('WP Fetch notice (falling back to cached data):', error instanceof Error ? error.message : error);
      return null;
    }
  }
}

export const wpClient = new WPClient();
