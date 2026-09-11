import { wpClient } from './wordpress';
import { mockTeamMembers } from '../mock/team';
import { TeamMember } from '@/types/content';

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await wpClient.fetch<any[]>('team');
  if (!data) {
    return mockTeamMembers;
  }
  
  return mockTeamMembers;
}
