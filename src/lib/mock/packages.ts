import { Package } from '@/types/content';

export const mockPackages: Package[] = [
  {
    id: 'targeted-transformation',
    slug: 'targeted-transformation',
    title: 'Targeted Transformation (1-on-1)',
    description: 'High-touch bespoke coaching with Prerona Roy for executives and high-achievers.',
    features: ['Personalized coaching plan', 'Weekly 1-on-1 sessions', 'Psychocybernetics & NLP tools', 'Progress tracking & accountability', 'Email support between sessions'],
    target: 'CXOs, Founders, Senior Leaders',
    price: null,
    priceNote: 'Custom — based on scope and goals',
    highlighted: false
  },
  {
    id: 'holistic-life-evolution',
    slug: 'holistic-life-evolution',
    title: 'Holistic Life Evolution',
    description: 'Comprehensive transformation across all 5 life dimensions.',
    features: ['All Targeted Transformation features', '5-dimension life assessment', 'Health & vitality optimization', 'Relationship & communication coaching', 'Leadership Compass workbook'],
    target: 'Leaders seeking whole-life transformation',
    price: null,
    priceNote: 'Custom — discovery session required',
    highlighted: true
  },
  {
    id: 'group-empowerment',
    slug: 'group-empowerment',
    title: 'Group Empowerment',
    description: 'Corporate workshops and team alignment programs.',
    features: ['Team assessment & diagnostics', 'Group facilitation & workshops', 'Leadership dynamics training', 'Conflict resolution frameworks', 'Quarterly review sessions'],
    target: 'Organisations, teams, departments',
    price: null,
    priceNote: 'Custom — based on group size',
    highlighted: false
  }
];
