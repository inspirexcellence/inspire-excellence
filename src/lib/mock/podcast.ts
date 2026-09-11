import { PodcastEpisode } from '@/types/content';

export const mockPodcastEpisodes: PodcastEpisode[] = [
  {
    id: 'ep-1',
    title: 'Rewiring Your Narrative Identity',
    episodeNumber: 1,
    host: 'Prerona Roy',
    duration: '45 min',
    description: 'In this inaugural episode, we explore how the stories we tell ourselves shape our reality, and how to consciously rewrite them.',
    audioUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=800&fit=crop'
  },
  {
    id: 'ep-2',
    title: 'Leading Through Crisis',
    episodeNumber: 2,
    host: 'Prerona Roy',
    guest: 'Lt Col Abhinandan Roy',
    duration: '52 min',
    description: 'Drawing from 20 years of military experience, we discuss actionable strategies for maintaining clarity and direction during times of intense crisis.',
    audioUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=800&fit=crop'
  },
  {
    id: 'ep-3',
    title: 'The Power of Psychocybernetics',
    episodeNumber: 3,
    host: 'Prerona Roy',
    duration: '38 min',
    description: 'A deep dive into how self-image controls your success, and practical exercises to recalibrate your internal success mechanism.',
    audioUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop'
  }
];
