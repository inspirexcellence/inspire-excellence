import { wpClient } from './wordpress';
import { mockSiteSettings } from '../mock/site-settings';
import { SiteSettings } from '@/types/content';

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await wpClient.fetch<any>('settings');
  if (!data) {
    return mockSiteSettings;
  }
  
  return mockSiteSettings;
}
