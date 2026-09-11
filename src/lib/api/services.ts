import { wpClient } from './wordpress';
import { mockServices } from '../mock/services';
import { Service } from '@/types/content';

export async function getServices(): Promise<Service[]> {
  const data = await wpClient.fetch<any[]>('services');
  if (!data) {
    return mockServices;
  }
  
  // Assume WP mapping logic here
  return mockServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find(s => s.slug === slug) || null;
}
