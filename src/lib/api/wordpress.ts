export class WPClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_WP_URL || '';
  }

  async fetch<T>(endpoint: string, params: Record<string, string> = {}): Promise<T | null> {
    if (!this.baseUrl) {
      console.warn('WordPress URL not configured.');
      return null;
    }

    try {
      const url = new URL(`${this.baseUrl}/wp-json/wp/v2/${endpoint}`);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      const response = await fetch(url.toString(), {
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        console.error(`WP API Error: ${response.status} ${response.statusText}`);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('WP Fetch Error:', error);
      return null;
    }
  }
}

export const wpClient = new WPClient();
