export interface TransformationDimension {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: {
    category?: string;
    items: string[];
  }[];
}

export interface TransformationTargetGroup {
  title: string;
  items: string[];
}

export interface ApproachDimension {
  number: string;
  tag: string;
  title: string;
  description: string;
}

export interface SolutionOffering {
  title: string;
  description: string;
}

export interface BeforeAfterShift {
  today: string;
  shift: string;
}

export interface TransformationAreaData {
  slug: string;
  headerCategory: string;
  mainTitle: string;
  introParagraphs: string[];
  quoteBanner?: string;
  whatCanTransformTitle: string;
  whatCanTransformSubtext: string;
  dimensions: TransformationDimension[];
  whoIsThisForTitle: string;
  whoIsThisForSubtext: string;
  whoIsThisForGroups?: TransformationTargetGroup[];
  whoIsThisForBullets?: string[];
  whoIsThisForCallout?: string;
  approachTitle: string;
  approachSubtitle: string;
  approachIntro: string;
  approachDimensions: ApproachDimension[];
  solutionsTitle?: string;
  solutionsSubtitle?: string;
  solutions?: SolutionOffering[];
  whatItLooksLikeTitle?: string;
  whatItLooksLikeSubtext?: string;
  shifts?: BeforeAfterShift[];
  shiftsNote?: string;
  whyTitle?: string;
  whyIntro?: string;
  whyBeliefs?: string[];
  whyCoreMessage?: string;
  closingTitle: string;
  closingBody: string[];
  ctaTitle: string;
  ctaSubtext: string;
  ctaButtonText: string;
}

export const individualTransformationData: TransformationAreaData = {
  slug: 'individual',
  headerCategory: 'INDIVIDUAL TRANSFORMATION',
  mainTitle: 'Become the Person You Need to Be for the Life You Want to Create.',
  introParagraphs: [
    'Meaningful transformation begins when you start changing not just what you do, but how you think, perceive yourself, respond to challenges and engage with the world around you.',
    'At Inspire Excellence, we work with individuals who are ready to move beyond limiting patterns, unlock their potential and create a more intentional, fulfilling and successful life.',
    'Whether you are navigating a personal transition, seeking professional growth, strengthening relationships or redefining your identity, we help you create the internal shifts that translate into meaningful external change.',
    'Because the quality of your life is deeply influenced by the quality of your thoughts, choices, behaviours and relationships.',
  ],
  whatCanTransformTitle: 'What Can Transform?',
  whatCanTransformSubtext:
    'We believe transformation is multidimensional. It touches the way you think, the way you relate to others, the way you perform and ultimately the way you experience life.\n\nHere are the six dimensions of individual transformation we work across.',
  dimensions: [
    {
      number: '01',
      title: 'Identity Transformation',
      subtitle: 'From Self-Doubt to Self-Belief. From Limitation to Possibility.',
      description:
        'The way you see yourself influences the decisions you make, the opportunities you pursue and the boundaries you place on your own potential.\n\nWe help you identify and shift the beliefs, perceptions and behavioural patterns that may be holding you back.',
      outcomes: [
        {
          items: [
            'Develop a stronger and more empowering self-image.',
            'Build confidence and trust in your own capabilities.',
            'Identify and challenge limiting beliefs.',
            'Break repetitive patterns that no longer serve you.',
            'Move beyond the need for constant external validation.',
            'Develop a stronger sense of personal agency and ownership.',
          ],
        },
      ],
    },
    {
      number: '02',
      title: 'Emotional Transformation',
      subtitle: 'From Emotional Reactivity to Emotional Intelligence.',
      description:
        "Your ability to understand and regulate your emotions influences how you handle pressure, navigate uncertainty and respond to life's challenges.\n\nWe help you develop greater emotional awareness, resilience and the ability to respond consciously rather than react automatically.",
      outcomes: [
        {
          items: [
            'Recognise emotional triggers and recurring responses.',
            'Develop greater emotional regulation.',
            'Navigate stress and uncertainty with composure.',
            'Build resilience during challenging situations.',
            'Reduce the influence of fear and self-doubt on decisions.',
            'Develop healthier ways of responding to difficult experiences.',
          ],
        },
      ],
    },
    {
      number: '03',
      title: 'Relationship Transformation',
      subtitle: 'From Disconnection to Meaningful Connection.',
      description:
        'The quality of our relationships influences our happiness, confidence, emotional well-being and overall experience of life.\n\nWhether it is personal relationships, family dynamics or professional interactions, we help you understand relationship patterns and develop healthier ways of connecting with others.',
      outcomes: [
        {
          category: 'Personal and family relationships',
          items: [
            'Communicate needs and expectations more effectively.',
            'Develop emotional availability and deeper connections.',
            'Establish healthy boundaries without guilt.',
            'Navigate disagreements without damaging relationships.',
            'Build mutual respect, trust and understanding.',
          ],
        },
        {
          category: 'Professional relationships',
          items: [
            'Develop stronger interpersonal skills.',
            'Navigate workplace dynamics with maturity.',
            'Handle difficult conversations confidently.',
            'Build trust and collaborative relationships.',
            'Communicate assertively without being confrontational.',
          ],
        },
      ],
    },
    {
      number: '04',
      title: 'Communication Transformation',
      subtitle: 'From Being Understood Occasionally to Communicating with Clarity and Impact.',
      description:
        'How effectively you communicate often determines how well you are understood, respected and able to influence the people around you.\n\nWe help you become a more confident, articulate and impactful communicator.',
      outcomes: [
        {
          items: [
            'Express thoughts and ideas with clarity.',
            'Communicate confidently and assertively.',
            'Develop persuasive communication skills.',
            'Become a more attentive and empathetic listener.',
            'Navigate difficult conversations constructively.',
            'Speak with confidence in professional and social settings.',
          ],
        },
      ],
    },
    {
      number: '05',
      title: 'Performance Transformation',
      subtitle: 'From Constant Busyness to Meaningful Achievement.',
      description:
        "Sometimes, the biggest obstacle to progress isn't a lack of ability. It is the inability to consistently translate intentions into action.\n\nWe help individuals strengthen their focus, execution, discipline and ability to perform consistently.",
      outcomes: [
        {
          items: [
            'Develop clarity around priorities.',
            'Improve focus and productivity.',
            'Overcome procrastination and execution gaps.',
            'Build consistency and personal accountability.',
            'Make confident and timely decisions.',
            'Develop resilience and sustainable performance habits.',
          ],
        },
      ],
    },
    {
      number: '06',
      title: 'Personal Growth & Life Transformation',
      subtitle: 'From Living by Default to Living by Design.',
      description:
        'There comes a point when external achievements are no longer enough. You begin asking deeper questions about fulfilment, purpose, relationships and the direction of your life.\n\nWe help you reconnect with what matters, redefine your priorities and create a life that is more aligned with who you are becoming.',
      outcomes: [
        {
          items: [
            'Gain clarity about personal goals and aspirations.',
            'Discover greater alignment between values and actions.',
            'Develop stronger personal boundaries.',
            'Navigate life transitions with confidence.',
            'Create a healthier balance between personal and professional priorities.',
            'Build a greater sense of purpose and fulfilment.',
          ],
        },
      ],
    },
  ],
  whoIsThisForTitle: 'Who Is This For?',
  whoIsThisForSubtext:
    'Individual transformation is for people who recognise that growth is a continuous journey, regardless of where they currently stand.\n\nYou may be:',
  whoIsThisForBullets: [
    'A professional looking to redefine your identity and career direction.',
    'An entrepreneur navigating the pressures of business and personal life.',
    'A leader wanting to strengthen your influence, confidence and interpersonal effectiveness.',
    'Someone experiencing recurring relationship challenges or emotional patterns.',
    'An individual navigating a significant life transition.',
    'Someone who has achieved considerable success but feels disconnected from personal fulfilment.',
    'A person who knows they are capable of more but struggles to translate that potential into action.',
  ],
  whoIsThisForCallout:
    "You don't need to be struggling to deserve transformation. Sometimes, you simply need to be ready for your next evolution.",
  approachTitle: 'Our Approach',
  approachSubtitle: 'Transformation That Goes Beyond Surface-Level Change',
  approachIntro:
    'At Inspire Excellence, we believe lasting transformation requires more than motivation, information or temporary behavioural changes.\n\nOur approach integrates identity work, behavioural understanding, neuroscience-informed principles, reflective inquiry and strategic coaching to help individuals create meaningful shifts.\n\nWe focus on three interconnected dimensions:',
  approachDimensions: [
    {
      number: '01',
      tag: 'Internal',
      title: 'Transform How You Think',
      description: 'Understand your beliefs, perceptions, emotional patterns and internal narratives.',
    },
    {
      number: '02',
      tag: 'Behavioural',
      title: 'Transform How You Act',
      description: 'Develop new behaviours, communication patterns, decision-making abilities and habits.',
    },
    {
      number: '03',
      tag: 'Experiential',
      title: 'Transform How You Experience Life',
      description: 'Create healthier relationships, greater personal effectiveness, professional impact and a stronger sense of fulfilment.',
    },
  ],
  closingTitle: 'Your Next Chapter Begins with a Decision.',
  closingBody: [
    'You may not be able to change everything around you immediately. But you can begin changing how you think, respond, choose and move forward.',
    'The person you are becoming will shape the possibilities you create.',
    'Are you ready to begin your transformation?',
  ],
  ctaTitle: "Let's Begin Your Transformation.",
  ctaSubtext: 'Discover the shifts you need to make and explore the right transformation journey for your goals.',
  ctaButtonText: 'Book a Consultation Now',
};

export const foundersAndLeadersTransformationData: TransformationAreaData = {
  slug: 'leadership',
  headerCategory: 'FOUNDERS & LEADERS',
  mainTitle: 'Lead with Clarity. Influence with Purpose. Build Beyond Yourself.',
  introParagraphs: [
    'The journey from being a capable professional to becoming an exceptional leader requires more than experience, knowledge or technical expertise.',
    'It requires a shift in identity, thinking, decision-making, communication and the ability to bring out the best in others.',
    'At Inspire Excellence, we work with founders, entrepreneurs, CEOs and senior corporate leaders to strengthen the person behind the position.',
    'Whether you are scaling a business, leading a growing team, navigating organisational complexity or preparing for your next level of leadership, we help you develop the clarity, capabilities and leadership behaviours required to move forward.',
    'Because leadership is not just about what you achieve. It is about the people you influence, the decisions you make and the impact you create.',
  ],
  whatCanTransformTitle: 'The Leadership & Founder Transformation Experience',
  whatCanTransformSubtext:
    'We work across six interconnected dimensions to help founders and leaders evolve from individual contributors and functional managers into confident, influential and effective leaders.',
  dimensions: [
    {
      number: '01',
      title: 'Founder Transformation',
      subtitle: 'From Business Operator to Visionary Enterprise Builder',
      description:
        "Building a business demands more than entrepreneurial ambition. As a business grows, the founder must evolve from being the driving force behind every activity to becoming the architect of the organisation's future.\n\nWe help founders shift their mindset, strengthen strategic thinking and develop the leadership capabilities required to build sustainable businesses.",
      outcomes: [
        {
          items: [
            'Founder Identity: Move from being involved in everything to becoming a strategic business leader.',
            'Strategic Clarity: Develop a clear vision, priorities and direction for your business.',
            'Decision-Making: Move from overthinking and reactive decisions to confident strategic choices.',
            'Delegation & Ownership: Stop being the bottleneck and develop accountability within your team.',
            'Growth Mindset: Identify limiting beliefs and behaviours that restrict business growth.',
            'Revenue Thinking: Develop a stronger orientation towards business opportunities, value creation and sustainable growth.',
            'Execution Discipline: Translate business vision into focused action and measurable priorities.',
            'Leadership Independence: Build an organisation that does not depend on your constant intervention.',
          ],
        },
      ],
    },
    {
      number: '02',
      title: 'Leadership Transformation',
      subtitle: 'From Managing People to Inspiring Performance',
      description:
        'Leadership is not defined by a designation. It is reflected in the ability to influence people, create direction, navigate complexity and inspire collective achievement.\n\nWe help leaders strengthen their leadership identity, presence and effectiveness so they can lead with greater confidence, clarity and purpose.',
      outcomes: [
        {
          items: [
            'Leadership Presence: Develop the confidence and credibility to command respect.',
            'Influence & Authority: Influence decisions and people without relying solely on positional power.',
            'Strategic Leadership: Think beyond immediate responsibilities and anticipate future challenges.',
            'Decision Confidence: Make difficult decisions with clarity and conviction.',
            'Adaptive Leadership: Navigate uncertainty, change and competing priorities effectively.',
            'Leadership Accountability: Take ownership of outcomes rather than merely managing activities.',
            'Executive Maturity: Develop composure, perspective and sound judgement under pressure.',
            'Leadership Identity: Evolve from managing responsibilities to creating direction and impact.',
          ],
        },
      ],
    },
    {
      number: '03',
      title: 'Communication & Influence Transformation',
      subtitle: 'From Having a Voice to Creating an Impact',
      description:
        "A leader's effectiveness is significantly influenced by how well they communicate, articulate their vision and bring people along.\n\nWe help founders and leaders become more intentional, persuasive and influential communicators.",
      outcomes: [
        {
          items: [
            'Articulate ideas with clarity and conviction.',
            'Communicate vision in a way that creates alignment.',
            'Develop executive presence and confident public speaking.',
            'Influence stakeholders, clients and teams.',
            'Navigate difficult conversations without avoidance.',
            'Give feedback that encourages accountability and growth.',
            'Negotiate with confidence and communicate assertively.',
            'Listen actively and understand different perspectives.',
          ],
        },
      ],
    },
    {
      number: '04',
      title: 'People & Team Leadership Transformation',
      subtitle: 'From Managing Individuals to Building High-Performing Teams',
      description:
        "An organisation's growth is often constrained by its ability to develop, engage and retain capable people.\n\nWe help leaders move beyond task management and develop the ability to build empowered, accountable and collaborative teams.",
      outcomes: [
        {
          items: [
            'Talent Development: Identify and develop individual strengths and potential.',
            'Delegation: Empower people to take responsibility and ownership.',
            'Accountability: Create clarity around expectations, responsibilities and outcomes.',
            'Team Alignment: Build shared understanding of goals and priorities.',
            'Conflict Management: Navigate personality differences and workplace challenges.',
            'Performance Conversations: Address performance gaps constructively.',
            'Trust Building: Create an environment where people feel valued and responsible.',
            'Succession & Empowerment: Develop people who can take on greater responsibilities.',
          ],
        },
      ],
    },
    {
      number: '05',
      title: 'Performance & Execution Transformation',
      subtitle: 'From Constant Activity to Strategic Execution',
      description:
        'The ability to translate vision into consistent execution separates ambition from achievement.\n\nWe help founders and leaders improve their focus, prioritisation and execution capabilities while managing the complexity that comes with greater responsibility.',
      outcomes: [
        {
          items: [
            'Develop clarity around strategic priorities.',
            'Move from reactive working to proactive planning.',
            'Improve time, energy and attention management.',
            'Overcome procrastination and decision fatigue.',
            'Strengthen execution discipline.',
            'Develop performance accountability.',
            'Manage pressure without compromising effectiveness.',
            'Create sustainable high-performance habits.',
          ],
        },
      ],
    },
    {
      number: '06',
      title: 'Identity, Emotional Intelligence & Resilience',
      subtitle: 'From Internal Limitations to Conscious Leadership',
      description:
        'Leadership brings unique psychological and emotional demands. The pressure to perform, responsibility for others, uncertainty and constant decision-making can influence how leaders think, feel and behave.\n\nWe help leaders understand the internal patterns that influence their leadership effectiveness and develop greater self-awareness, emotional intelligence and resilience.',
      outcomes: [
        {
          items: [
            'Recognise limiting beliefs and self-sabotaging patterns.',
            'Build confidence and trust in your own decisions.',
            'Manage emotional triggers and reactive behaviours.',
            'Develop resilience during uncertainty and setbacks.',
            'Navigate professional and personal pressures more consciously.',
            'Establish healthier boundaries.',
            'Reduce the need for constant validation and approval.',
            'Develop a stronger and more grounded leadership identity.',
          ],
        },
      ],
    },
  ],
  whoIsThisForTitle: 'Who Is This For?',
  whoIsThisForSubtext:
    'Our Founders & Leaders transformation experience is designed for individuals who carry the responsibility of creating growth, leading people and shaping the future of organisations.',
  whoIsThisForGroups: [
    {
      title: 'Founders & Entrepreneurs',
      items: [
        'Business owners looking to scale beyond their individual capacity.',
        'Founders who have become the bottleneck in their own businesses.',
        'Entrepreneurs navigating business growth and leadership complexity.',
        'Founders seeking greater strategic clarity and execution discipline.',
      ],
    },
    {
      title: 'CEOs & Senior Corporate Leaders',
      items: [
        'Senior executives preparing for greater leadership responsibilities.',
        'Leaders managing complex teams and stakeholder relationships.',
        'Executives looking to strengthen influence and leadership presence.',
        'Leaders navigating organisational change and transformation.',
      ],
    },
    {
      title: 'Emerging & Mid-Level Leaders',
      items: [
        'Managers transitioning into leadership roles.',
        'High-potential professionals preparing for greater responsibilities.',
        'Professionals looking to strengthen people management and communication.',
        'Individuals seeking to move from functional expertise to effective leadership.',
      ],
    },
  ],
  approachTitle: 'Our Approach',
  approachSubtitle: 'We Transform the Leader Behind the Results.',
  approachIntro:
    'At Inspire Excellence, we believe that leadership transformation must go beyond acquiring management techniques.\n\nIt requires a deeper shift in how leaders think, perceive challenges, make decisions, interact with people and translate intentions into action.\n\nOur approach integrates identity work, neuroscience-informed principles, behavioural understanding, leadership development and strategic coaching.\n\nWe work across three dimensions:',
  approachDimensions: [
    {
      number: '01',
      tag: 'The Leader Within',
      title: 'Transform Your Thinking & Identity',
      description: 'Develop self-awareness, confidence, emotional intelligence, strategic thinking and a stronger leadership identity.',
    },
    {
      number: '02',
      tag: 'The Leader in Action',
      title: 'Transform Your Leadership Behaviours',
      description: 'Strengthen communication, decision-making, influence, accountability, delegation and people leadership.',
    },
    {
      number: '03',
      tag: 'The Leader’s Impact',
      title: 'Transform Your Outcomes',
      description: 'Create stronger teams, healthier organisational relationships, better execution and sustainable business growth.',
    },
  ],
  closingTitle: 'Your Next Level of Leadership Begins with You.',
  closingBody: [
    'The next stage of your growth may not require you to work harder, take on more responsibilities or acquire another qualification.',
    'It may require you to think differently, lead differently and become a different kind of leader.',
    'Whether you are building an enterprise, leading a team or preparing for a greater role, your next level begins with your willingness to evolve.',
  ],
  ctaTitle: 'Ready to Evolve as a Leader?',
  ctaSubtext: "Let's identify the shifts that can help you unlock your leadership potential and create greater impact.",
  ctaButtonText: 'Book a Consultation Now',
};

export const peopleAndTeamsTransformationData: TransformationAreaData = {
  slug: 'people',
  headerCategory: 'PEOPLE & TEAMS',
  mainTitle: 'Build People Who Perform. Create Teams That Excel.',
  introParagraphs: [
    "An organisation's greatest asset is not just the talent it attracts, but the potential it develops.",
    'High-performing organisations are built by people who take ownership, communicate effectively, collaborate meaningfully and remain committed to collective success.',
    'Yet, even talented teams can struggle with communication gaps, conflicting priorities, low accountability, disengagement and ineffective collaboration.',
    'At Inspire Excellence, we help organisations unlock the potential of their people and transform the way teams think, interact, collaborate and perform.',
    'Through structured people development, behavioural transformation and team effectiveness interventions, we help create environments where individuals thrive and collective excellence becomes possible.',
    'Because when people evolve, teams become stronger. And when teams become stronger, organisations move forward.',
  ],
  whatCanTransformTitle: 'What Can Transform?',
  whatCanTransformSubtext: 'We work across six interconnected dimensions of people and team transformation.',
  dimensions: [
    {
      number: '01',
      title: 'Mindset & Behavioural Transformation',
      subtitle: 'From Limiting Behaviours to Growth-Oriented Thinking',
      description:
        'The way people think influences how they approach challenges, respond to feedback, take ownership and contribute to the organisation.\n\nWe help individuals recognise unproductive thinking patterns and develop behaviours that support personal effectiveness and collective growth.',
      outcomes: [
        {
          items: [
            'Develop a growth-oriented mindset.',
            'Move from a fixed mindset to openness to learning.',
            'Replace blame-oriented behaviour with personal ownership.',
            'Develop greater adaptability and openness to change.',
            'Build confidence and self-belief.',
            'Overcome resistance to new ideas and ways of working.',
            'Develop proactive and solution-oriented thinking.',
            'Strengthen personal accountability.',
          ],
        },
      ],
    },
    {
      number: '02',
      title: 'Communication & Interpersonal Effectiveness',
      subtitle: 'From Communication Gaps to Meaningful Collaboration',
      description:
        'Communication challenges often create misunderstandings, delays, unnecessary conflict and reduced productivity.\n\nWe help people develop the ability to communicate with clarity, listen actively, express perspectives confidently and build stronger professional relationships.',
      outcomes: [
        {
          items: [
            'Communicate ideas with clarity and confidence.',
            'Develop active listening and empathy.',
            'Express disagreements constructively.',
            'Give and receive feedback effectively.',
            'Navigate difficult workplace conversations.',
            'Reduce assumptions and communication gaps.',
            'Develop assertiveness without aggression.',
            'Build trust through transparent communication.',
          ],
        },
      ],
    },
    {
      number: '03',
      title: 'Collaboration & Team Effectiveness',
      subtitle: 'From Individual Contributors to Collective Achievers',
      description:
        'A team is not simply a group of people working together. It is a collective of individuals aligned around shared objectives, mutual trust and complementary capabilities.\n\nWe help teams move beyond individual silos and develop stronger collaboration, shared responsibility and collective ownership.',
      outcomes: [
        {
          items: [
            'Build trust and psychological safety within teams.',
            'Develop stronger cross-functional collaboration.',
            'Create clarity around shared goals and responsibilities.',
            'Reduce workplace friction and unnecessary competition.',
            'Leverage individual strengths and diverse perspectives.',
            'Improve coordination and decision-making.',
            'Develop shared accountability.',
            'Strengthen team cohesion and collective ownership.',
          ],
        },
      ],
    },
    {
      number: '04',
      title: 'Ownership, Accountability & Execution',
      subtitle: 'From Task Completion to Ownership of Outcomes',
      description:
        'Organisations often have capable people but struggle to translate their capabilities into consistent execution.\n\nWe help individuals and teams develop a stronger sense of ownership, responsibility and commitment towards outcomes.',
      outcomes: [
        {
          items: [
            'Move from task-based working to outcome-based thinking.',
            'Develop personal accountability.',
            'Take initiative rather than wait for instructions.',
            'Improve prioritisation and execution discipline.',
            'Strengthen problem-solving capabilities.',
            'Reduce dependency on constant supervision.',
            'Develop a proactive approach to challenges.',
            'Create greater consistency in performance.',
          ],
        },
      ],
    },
    {
      number: '05',
      title: 'Emotional Intelligence & Workplace Relationships',
      subtitle: 'From Workplace Friction to Respectful Professional Relationships',
      description:
        'People bring different personalities, expectations, communication styles and emotional responses into the workplace.\n\nThe ability to understand these differences and navigate them constructively is essential to building healthy and productive teams.\n\nWe help individuals develop greater emotional awareness and interpersonal maturity.',
      outcomes: [
        {
          items: [
            'Recognise personal emotional triggers.',
            'Develop emotional regulation under pressure.',
            'Navigate personality differences effectively.',
            'Manage disagreements without damaging relationships.',
            'Develop empathy and perspective-taking.',
            'Build professional boundaries.',
            'Respond constructively to feedback and criticism.',
            'Create healthier workplace relationships.',
          ],
        },
      ],
    },
    {
      number: '06',
      title: 'Potential, Capability & Performance Development',
      subtitle: 'From Existing Capabilities to Expanded Potential',
      description:
        'People perform at their best when they have the confidence, capabilities and environment to grow.\n\nWe help organisations strengthen individual capabilities and create opportunities for people to become more effective contributors, collaborators and future leaders.',
      outcomes: [
        {
          items: [
            'Identify individual strengths and development opportunities.',
            'Strengthen problem-solving and critical thinking.',
            'Develop adaptability and learning agility.',
            'Improve confidence in taking on new responsibilities.',
            'Build emerging leadership capabilities.',
            'Strengthen time and priority management.',
            'Develop continuous learning habits.',
            'Improve individual and collective performance.',
          ],
        },
      ],
    },
  ],
  whoIsThisForTitle: 'Who Is This For?',
  whoIsThisForSubtext:
    'Our People & Teams transformation programmes are designed for organisations that want to invest in the development of their people and strengthen collective effectiveness.',
  whoIsThisForGroups: [
    {
      title: 'Business Owners & Founders',
      items: [
        'Build teams that take ownership.',
        'Reduce dependency on the founder for everyday decisions.',
        'Develop stronger collaboration and accountability.',
        'Create a performance-oriented work environment.',
      ],
    },
    {
      title: 'HR & L&D Leaders',
      items: [
        'Strengthen behavioural and interpersonal competencies.',
        'Develop effective learning and development initiatives.',
        'Address communication and collaboration gaps.',
        'Build a culture of continuous development.',
      ],
    },
    {
      title: 'Department Heads & Functional Leaders',
      items: [
        'Improve team effectiveness.',
        'Strengthen accountability and execution.',
        'Develop collaborative working relationships.',
        'Address performance and behavioural challenges.',
      ],
    },
    {
      title: 'Employees & Emerging Talent',
      items: [
        'Develop professional confidence.',
        'Strengthen communication and interpersonal skills.',
        'Improve personal effectiveness.',
        'Build adaptability and readiness for greater responsibilities.',
      ],
    },
  ],
  approachTitle: 'Our Approach',
  approachSubtitle: 'Beyond Training. Towards Behavioural Transformation.',
  approachIntro:
    'Traditional training often focuses on transferring knowledge and developing skills. However, knowing what to do does not always translate into doing it consistently.\n\nAt Inspire Excellence, we focus on bridging the gap between awareness, behaviour and application.\n\nOur approach integrates behavioural understanding, neuroscience-informed principles, experiential learning, reflective practices and practical workplace application.\n\nWe work across three dimensions:',
  approachDimensions: [
    {
      number: '01',
      tag: 'Individual Growth',
      title: 'Transform the Individual',
      description: 'Develop self-awareness, mindset, emotional intelligence, confidence and personal accountability.',
    },
    {
      number: '02',
      tag: 'Collective Effectiveness',
      title: 'Transform the Team',
      description: 'Strengthen communication, collaboration, trust, conflict resolution and shared ownership.',
    },
    {
      number: '03',
      tag: 'Performance & Application',
      title: 'Transform Workplace Behaviours',
      description: 'Translate learning into everyday actions, stronger execution and measurable improvements in team effectiveness.',
    },
  ],
  solutionsTitle: 'Our People & Team Development Experiences',
  solutionsSubtitle: 'Structured interventions organisations can engage us for:',
  solutions: [
    {
      title: 'Behavioural Transformation Workshops',
      description: 'Develop self-awareness, ownership, emotional intelligence and effective workplace behaviours.',
    },
    {
      title: 'Team Effectiveness Interventions',
      description: 'Strengthen trust, communication, collaboration and collective accountability.',
    },
    {
      title: 'Communication & Interpersonal Development',
      description: 'Improve workplace communication, feedback, assertiveness and relationship-building capabilities.',
    },
    {
      title: 'Emerging Leader Development',
      description: 'Prepare high-potential employees and managers for greater leadership responsibilities.',
    },
    {
      title: 'Performance & Accountability Programmes',
      description: 'Develop execution discipline, personal ownership and outcome-oriented behaviours.',
    },
  ],
  closingTitle: 'Build a Workplace Where People Can Do Their Best Work.',
  closingBody: [
    'The success of an organisation is not determined by strategy alone. It is reflected in how its people think, communicate, collaborate and take responsibility for the outcomes they create.',
    'When individuals grow, teams become stronger. When teams become stronger, organisations become more capable of achieving their vision.',
    'Invest in your people. Transform the way they work together. Elevate what your organisation can achieve.',
  ],
  ctaTitle: "Let's Transform the Way Your People Work Together.",
  ctaSubtext: "Every organisation has unique people challenges. Let's understand yours and explore how we can create a meaningful development journey for your teams.",
  ctaButtonText: 'Book a Consultation Now',
};

export const organisationalTransformationData: TransformationAreaData = {
  slug: 'organisations',
  headerCategory: 'ORGANISATIONAL TRANSFORMATION',
  mainTitle: 'Transform Your Organisation. Unlock Its Collective Potential.',
  introParagraphs: [
    'Organisations today operate in an environment of constant change, increasing complexity and evolving expectations.',
    'Yet, having a great strategy, talented people and ambitious goals does not automatically translate into organisational excellence.',
    'The real differentiator lies in how effectively an organisation aligns its people, leadership, culture, behaviours and execution around a common vision.',
    'At Inspire Excellence, we partner with organisations to strengthen the human and behavioural dimensions of organisational performance.',
    'We work at the intersection of leadership, people development, behavioural transformation and organisational effectiveness to help businesses build more aligned, accountable, adaptable and high-performing workplaces.',
    'Because organisational transformation is not just about changing how an organisation works. It is about transforming the way people think, lead, interact and create outcomes together.',
  ],
  whatCanTransformTitle: 'What Can Transform?',
  whatCanTransformSubtext:
    'Organisational excellence is built through multiple interconnected dimensions. We help organisations identify the gaps that restrict their effectiveness and develop the capabilities needed to evolve.',
  dimensions: [
    {
      number: '01',
      title: 'Organisational Culture Transformation',
      subtitle: 'From Existing Work Patterns to a Culture of Excellence',
      description:
        'Culture is not simply what an organisation says it values. It is reflected in the behaviours it encourages, the decisions it makes and the way people interact every day.\n\nWe help organisations consciously shape workplace cultures that encourage ownership, trust, collaboration, accountability and continuous improvement.',
      outcomes: [
        {
          items: [
            'Define and strengthen organisational values and behaviours.',
            'Build a culture of ownership and accountability.',
            'Encourage transparency and constructive communication.',
            'Reduce silo-based working and internal friction.',
            'Strengthen trust across organisational levels.',
            'Encourage learning, innovation and continuous improvement.',
            'Align everyday behaviours with organisational values.',
            'Build a culture that supports sustainable performance.',
          ],
        },
      ],
    },
    {
      number: '02',
      title: 'Leadership & Organisational Alignment',
      subtitle: 'From Disconnected Leadership to Shared Direction',
      description:
        "An organisation's ability to execute its vision depends significantly on the alignment of its leadership.\n\nWhen leaders operate with different priorities, expectations and approaches, the impact is felt across teams and functions.\n\nWe help organisations strengthen leadership alignment and create greater consistency in how leaders communicate, make decisions and drive organisational priorities.",
      outcomes: [
        {
          items: [
            'Align leadership teams around a shared vision.',
            'Establish clarity around strategic priorities.',
            'Strengthen leadership accountability.',
            'Improve cross-functional decision-making.',
            'Develop consistent leadership behaviours.',
            'Strengthen communication between senior leadership and teams.',
            'Build ownership for organisational outcomes.',
            'Develop leaders capable of navigating change and complexity.',
          ],
        },
      ],
    },
    {
      number: '03',
      title: 'People & Behavioural Transformation',
      subtitle: 'From Individual Potential to Organisational Capability',
      description:
        "An organisation's performance is shaped by the collective behaviours, attitudes and capabilities of its people.\n\nEven the most talented workforce can struggle when people lack ownership, resist change, operate in silos or fail to translate expectations into action.\n\nWe help organisations develop people who are more self-aware, accountable, adaptable and aligned with organisational objectives.",
      outcomes: [
        {
          items: [
            'Develop growth-oriented and solution-focused mindsets.',
            'Strengthen employee ownership and accountability.',
            'Address behavioural patterns that restrict performance.',
            'Improve interpersonal and professional effectiveness.',
            'Build adaptability and readiness for change.',
            'Develop stronger problem-solving capabilities.',
            'Encourage initiative and independent thinking.',
            'Create alignment between individual contributions and organisational goals.',
          ],
        },
      ],
    },
    {
      number: '04',
      title: 'Organisational Communication & Collaboration',
      subtitle: 'From Functional Silos to Connected Teams',
      description:
        'Organisational effectiveness depends on how well people communicate, exchange information, resolve differences and collaborate across functions.\n\nCommunication gaps and disconnected teams can create unnecessary friction, slow execution and affect the overall employee experience.\n\nWe help organisations develop stronger communication practices and collaborative working relationships.',
      outcomes: [
        {
          items: [
            'Strengthen cross-functional communication.',
            'Improve information flow across organisational levels.',
            'Reduce misunderstandings and communication barriers.',
            'Build collaborative relationships across departments.',
            'Develop constructive conflict-resolution capabilities.',
            'Strengthen feedback and dialogue mechanisms.',
            'Create greater alignment between teams.',
            'Encourage shared responsibility for organisational outcomes.',
          ],
        },
      ],
    },
    {
      number: '05',
      title: 'Performance & Execution Transformation',
      subtitle: 'From Strategic Intent to Consistent Execution',
      description:
        'Many organisations have ambitious goals but struggle to translate strategy into consistent execution.\n\nThe challenge often lies in unclear accountability, competing priorities, ineffective coordination and inconsistent performance behaviours.\n\nWe help organisations strengthen the behavioural and execution capabilities that support organisational effectiveness.',
      outcomes: [
        {
          items: [
            'Align individual and team goals with organisational priorities.',
            'Strengthen performance ownership and accountability.',
            'Improve execution discipline and follow-through.',
            'Develop outcome-oriented working practices.',
            'Strengthen problem-solving and decision-making.',
            'Improve coordination between functions.',
            'Encourage continuous performance improvement.',
            'Develop a stronger performance-oriented culture.',
          ],
        },
      ],
    },
    {
      number: '06',
      title: 'Change & Organisational Adaptability',
      subtitle: 'From Resistance to Readiness for Change',
      description:
        'Organisational change is rarely just a structural or operational exercise. It also requires people to rethink established practices, adapt their behaviours and embrace new ways of working.\n\nWhether an organisation is expanding, restructuring, introducing new technology or evolving its business model, its ability to navigate the human side of change is critical.\n\nWe help organisations strengthen their readiness for change and develop the mindsets and behaviours needed to navigate transformation.',
      outcomes: [
        {
          items: [
            'Identify behavioural barriers to organisational change.',
            'Build greater openness to new ideas and practices.',
            'Strengthen adaptability and learning agility.',
            'Develop leadership capabilities for change.',
            'Improve communication during transitions.',
            'Address resistance through awareness and engagement.',
            'Encourage innovation and experimentation.',
            'Build a culture of continuous evolution.',
          ],
        },
      ],
    },
  ],
  whoIsThisForTitle: 'Who Is This For?',
  whoIsThisForSubtext:
    'Our organisational transformation engagements are designed for businesses that recognise the importance of developing their people, strengthening leadership and building more effective organisational environments.',
  whoIsThisForGroups: [
    {
      title: 'Business Owners & Founders',
      items: [
        'Organisations preparing for their next phase of growth.',
        'Businesses experiencing founder dependency.',
        'Companies looking to establish stronger accountability.',
        'Businesses seeking to develop a more empowered workforce.',
      ],
    },
    {
      title: 'CEOs & Managing Directors',
      items: [
        'Organisations looking to align leadership teams.',
        'Businesses navigating organisational complexity.',
        'Companies seeking to improve execution and effectiveness.',
        'Organisations preparing for significant change.',
      ],
    },
    {
      title: 'CHROs & HR Leaders',
      items: [
        'Organisations looking to strengthen workplace culture.',
        'Businesses investing in behavioural transformation.',
        'Companies seeking to improve collaboration and engagement.',
        'HR teams looking for structured people development interventions.',
      ],
    },
    {
      title: 'Business Heads & Functional Leaders',
      items: [
        'Departments struggling with cross-functional alignment.',
        'Teams experiencing communication and accountability gaps.',
        'Functions seeking stronger execution capabilities.',
        'Leaders looking to develop a more collaborative work environment.',
      ],
    },
  ],
  approachTitle: 'Our Approach',
  approachSubtitle: 'Transformation That Connects People, Culture & Performance.',
  approachIntro:
    'At Inspire Excellence, we believe organisational transformation must address both the visible and invisible factors that influence how an organisation functions.\n\nStrategies, processes and structures are important. But the behaviours, mindsets, relationships and leadership practices within an organisation determine how effectively these translate into everyday outcomes.\n\nOur approach integrates organisational understanding, behavioural insights, neuroscience-informed principles, leadership development and strategic interventions.\n\nWe work across four interconnected dimensions:',
  approachDimensions: [
    {
      number: '01',
      tag: 'Strategic Alignment',
      title: 'Align the Organisation',
      description: 'Establish clarity around organisational vision, priorities, leadership expectations and desired outcomes.',
    },
    {
      number: '02',
      tag: 'People & Leadership',
      title: 'Develop Organisational Capability',
      description: 'Strengthen leadership effectiveness, people capabilities, behavioural competencies and collective ownership.',
    },
    {
      number: '03',
      tag: 'Culture & Behaviour',
      title: 'Transform How People Work Together',
      description: 'Develop healthier workplace dynamics, communication, accountability and collaborative behaviours.',
    },
    {
      number: '04',
      tag: 'Execution & Evolution',
      title: 'Translate Transformation into Action',
      description: 'Embed new ways of working, reinforce desired behaviours and evaluate progress against agreed organisational outcomes.',
    },
  ],
  solutionsTitle: 'Our Organisational Transformation Solutions',
  solutionsSubtitle: 'Our key engagement offerings designed for sustainable institutional impact:',
  solutions: [
    {
      title: 'Organisational Culture & Values Transformation',
      description: 'Help define, strengthen and embed the behaviours and values that shape your organisational culture.',
    },
    {
      title: 'Leadership Alignment & Development',
      description: 'Strengthen leadership effectiveness, alignment, accountability and the ability to lead organisational change.',
    },
    {
      title: 'People & Behavioural Transformation',
      description: 'Develop the mindsets, interpersonal capabilities and behaviours required for effective workplace performance.',
    },
    {
      title: 'Team & Cross-Functional Effectiveness',
      description: 'Improve collaboration, communication, trust and shared ownership across departments.',
    },
    {
      title: 'Performance & Accountability Transformation',
      description: 'Strengthen execution, responsibility, performance behaviours and outcome orientation.',
    },
    {
      title: 'Change Readiness & Adaptability',
      description: 'Help people and leaders navigate organisational transitions and embrace evolving business realities.',
    },
  ],
  whatItLooksLikeTitle: 'What Does Organisational Transformation Look Like?',
  whatItLooksLikeSubtext: 'We believe transformation should translate into observable changes in how an organisation operates.',
  shifts: [
    { today: 'Leadership working in silos', shift: 'Aligned leadership teams' },
    { today: 'Founder-dependent decisions', shift: 'Distributed ownership' },
    { today: 'Employees waiting for instructions', shift: 'Proactive and accountable people' },
    { today: 'Departmental friction', shift: 'Cross-functional collaboration' },
    { today: 'Unclear expectations', shift: 'Role and outcome clarity' },
    { today: 'Blame-oriented behaviours', shift: 'Solution-oriented thinking' },
    { today: 'Resistance to change', shift: 'Adaptability and learning' },
    { today: 'Inconsistent execution', shift: 'Disciplined performance' },
  ],
  shiftsNote: 'These are examples of transformation outcomes we can work towards with organisations, depending on their starting point and business objectives.',
  whyTitle: 'Why Inspire Excellence?',
  whyIntro: 'We approach organisational transformation through the lens of human potential.\n\nOur work goes beyond conventional training interventions by connecting individual identity, behavioural patterns, leadership effectiveness and organisational performance.',
  whyBeliefs: [
    'Organisational culture is shaped by everyday behaviours.',
    'Leadership effectiveness influences collective performance.',
    'People perform better when they have clarity, capability and ownership.',
    'Strong relationships create stronger working environments.',
    'Sustainable change requires consistent reinforcement, not just one-time interventions.',
  ],
  whyCoreMessage: "We don't just work on what people need to learn. We work on how they need to think, behave and work together.",
  closingTitle: "Let's Build an Organisation That Evolves.",
  closingBody: [
    'Every organisation has a different starting point, different challenges and different aspirations.',
    'Whether you are looking to strengthen your leadership team, transform workplace culture, develop people capabilities or improve organisational effectiveness, we would love to understand your priorities.',
  ],
  ctaTitle: "Your Organisation's Next Evolution Starts Here.",
  ctaSubtext: 'Let\'s explore how we can help you unlock the potential of your people and create an organisation built for sustainable excellence.',
  ctaButtonText: "Discuss Your Organisation's Transformation",
};

export const transformationAreasList: TransformationAreaData[] = [
  individualTransformationData,
  foundersAndLeadersTransformationData,
  peopleAndTeamsTransformationData,
  organisationalTransformationData,
];

export function getTransformationAreaData(slug: string): TransformationAreaData | null {
  const normalized = slug.toLowerCase();
  if (normalized === 'individual' || normalized === 'personal' || normalized === 'relationships' || normalized === 'performance') {
    return individualTransformationData;
  }
  if (normalized === 'leadership' || normalized === 'founders' || normalized === 'founders-leaders') {
    return foundersAndLeadersTransformationData;
  }
  if (normalized === 'people' || normalized === 'teams' || normalized === 'people-teams') {
    return peopleAndTeamsTransformationData;
  }
  if (normalized === 'organisations' || normalized === 'organizations' || normalized === 'culture') {
    return organisationalTransformationData;
  }
  return null;
}
