import { Service } from '@/types/content';

export const mockServices: Service[] = [
  {
    id: 'strategy-alignment',
    slug: 'strategy-alignment',
    title: 'Strategy & Alignment',
    description: 'Clarify vision, redefine goals and align people around what matters most.',
    iconName: 'strategy',
    features: ['Vision clarification', 'Goal redefinition', 'Team alignment', 'Strategic mapping'],
    order: 1
  },
  {
    id: 'culture-transformation',
    slug: 'culture-transformation',
    title: 'Culture Transformation',
    description: 'Build adaptive, collaborative and high-trust cultures that enable change.',
    iconName: 'culture',
    features: ['Culture assessment', 'Trust building', 'Adaptive structures', 'Change enablement'],
    order: 2
  },
  {
    id: 'process-operating-model',
    slug: 'process-operating-model',
    title: 'Process & Operating Model',
    description: 'Design stable, scalable systems and operating models that drive performance.',
    iconName: 'process',
    features: ['System design', 'Scalability planning', 'Performance driving', 'Model optimization'],
    order: 3
  },
  {
    id: 'leadership-development',
    slug: 'leadership-development',
    title: 'Leadership Development',
    description: 'Equip leaders with the mindset, skills and confidence to lead at every level.',
    iconName: 'leadership',
    features: ['Mindset coaching', 'Skill building', 'Confidence boosting', 'Level-agnostic leadership'],
    order: 4
  },
  {
    id: 'change-implementation',
    slug: 'change-implementation',
    title: 'Change Implementation',
    description: 'Turn strategy into action with structured programs that deliver lasting results.',
    iconName: 'change',
    features: ['Action turning', 'Structured programming', 'Lasting result delivery', 'Implementation tracking'],
    order: 5
  }
];
