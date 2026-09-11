import { wpClient } from './wordpress';
import { mockPodcastEpisodes } from '../mock/podcast';
import { PodcastEpisode } from '@/types/content';

export async function getPodcastEpisodes(): Promise<PodcastEpisode[]> {
  const data = await wpClient.fetch<any[]>('podcast');
  if (!data) {
    return mockPodcastEpisodes;
  }
  
  return mockPodcastEpisodes;
}
