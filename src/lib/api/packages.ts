import { wpClient } from './wordpress';
import { mockPackages } from '../mock/packages';
import { Package } from '@/types/content';

export async function getPackages(): Promise<Package[]> {
  const data = await wpClient.fetch<any[]>('packages');
  if (!data) {
    return mockPackages;
  }
  
  return mockPackages;
}

export async function getPackageBySlug(slug: string): Promise<Package | null> {
  const packages = await getPackages();
  return packages.find(p => p.slug === slug) || null;
}
