import type { Persona } from '@/types/portfolio';

export const portfolioData: Record<Persona['id'], Persona> = {
  'engineer': {
    id: 'engineer',
    title: 'Software Engineer',
    emoji: '👨‍💻',
    color: 'rgba(99, 102, 241, 1)',
    description: 'Building tools and platforms that empower developers to create amazing experiences.',
    inspirations: [
      {
        name: 'Guillermo Rauch',
        role: 'CEO & Founder at Vercel',
        image: '/inspirations/guillermo-rauch.jpg',
        lessons: [
          'Celebrate and amplify developers who use your tools creatively',
          'Build developer tools that solve real pain points with exceptional UX',
          'Foster a culture of open source and community celebration',
          'Make complex technologies accessible and delightful to use'
        ]
      },
      {
        name: 'Dan Abramov',
        role: 'Former React Core Team Member at Meta',
        image: '/inspirations/dan-abramov.jpg',
        lessons: [
          'Stay curious and embrace continuous learning in technology',
          'Create tools that solve real developer pain points (Redux, Create React App)',
          'Share knowledge openly and make complex concepts approachable',
          'Build with a focus on developer experience and maintainability'
        ]
      },
      {
        name: 'Nader Dabit',
        role: 'Director of DevRel at Eigen Labs',
        image: '/inspirations/nader-dabit.jpg',
        lessons: [
          'Stay adaptable across technologies (Web2 → Web3, Mobile → Cloud)',
          'Create high-impact developer content and documentation',
          'Build genuine communities around emerging technologies',
          'Balance teaching fundamentals with cutting-edge tech'
        ]
      },
      {
        name: 'Kevin Owocki',
        role: 'Founder of Gitcoin',
        image: '/inspirations/kevin-owocki.jpg',
        lessons: [
          'Embrace experimentation through diverse side projects',
          'Build and nurture technical communities for shared growth',
          'Align technical work with broader social impact',
          'Create systems that incentivize open source contribution'
        ]
      }
    ],
    experiences: [
      {
        title: 'Gauntlet AI Training Program',
        description: 'Selected for an intensive 12-week AI engineering program in Austin, combining rapid application development with advanced AI integration. The program focuses on building production-grade applications using modern AI tools and architecting systems that leverage multiple AI services.',
        date: '2025',
        tags: ['AI Engineering', 'System Architecture', 'Production Development']
      },
      {
        title: 'BlessOut - Cross-Platform eCard App',
        description: 'Developed and launched a full-stack eCard application with web and mobile versions. Successfully deployed to iOS and Android app stores, demonstrating expertise in modern web and mobile development technologies.',
        date: '2024',
        tags: ['Next.js', 'Firebase', 'React Native', 'Expo', 'Cross-Platform Development']
      },
      {
        title: 'AI-Powered Development Exploration',
        description: 'Focused on experimenting with AI-powered IDEs and building user interfaces that reduce cognitive load and typing demands. Deepening expertise in modern software engineering practices and AI integration.',
        date: '2024',
        tags: ['AI Integration', 'UI/UX', 'Modern Development']
      },
      {
        title: 'Frontend Engineering Team Lead at Google Cloud',
        description: 'Led a team focused on building the frontend of Cloud SQL. Gained deep insights into the importance of developer infrastructure, documentation, and user-centric product development for driving adoption.',
        date: '2015-2019',
        tags: ['Google Cloud', 'Frontend Development', 'Team Leadership', 'Developer Experience']
      }
    ]
  },
  'educator': {
    id: 'educator',
    title: 'Educator',
    emoji: '👨‍🏫',
    color: 'rgba(139, 92, 246, 1)',
    description: 'Empowering the next generation of developers through mentorship and education.',
    inspirations: [
      {
        name: 'Jesse Michels',
        role: 'Creator of American Alchemy',
        image: '/inspirations/jesse-michels.jpg',
        lessons: [
          'Challenge established norms and explore unconventional perspectives',
          'Connect diverse fields to create more engaging educational content',
          'Leverage multiple content formats to reach different learning styles',
          'Foster critical thinking through thought-provoking discussions'
        ]
      },
      {
        name: 'Patrick Bet-David',
        role: 'Founder of Valuetainment',
        image: '/inspirations/patrick-bet-david.jpg',
        lessons: [
          'Blend educational content with engaging storytelling ("valuetainment")',
          'Break down complex concepts into simple, actionable steps',
          'Create content across multiple formats to reach diverse audiences',
          'Make learning memorable through practical examples and humor'
        ]
      },
      {
        name: 'Jeff Delaney',
        role: 'Creator of Fireship.io',
        image: '/inspirations/jeff-delaney.jpg',
        lessons: [
          'Develop a distinctive voice and style in educational content',
          'Create concise, focused content that respects developers\' time',
          'Make learning addictive through short, high-impact tutorials',
          'Balance consistency with exploring diverse technical topics'
        ]
      },
      {
        name: 'Andreas Antonopoulos',
        role: 'Bitcoin Educator & Author',
        image: '/inspirations/andreas-antonopoulos.jpg',
        lessons: [
          'Break down complex technical concepts using relatable analogies',
          'Maintain perpetual curiosity even as an established expert',
          'Focus on foundational knowledge over trendy topics',
          'Connect technical concepts to broader societal implications'
        ]
      },
      {
        name: 'Fidias',
        role: 'YouTuber & European Parliament Member',
        image: '/inspirations/fidias.jpg',
        lessons: [
          'Blend education with entertainment to maximize engagement',
          'Build authentic connections through consistent audience interaction',
          'Adapt content strategy based on platform-specific dynamics',
          'Turn complex topics into relatable, shareable content'
        ]
      },
      {
        name: 'Austen Allred',
        role: 'Co-founder & CEO of BloomTech',
        image: '/inspirations/austen-allred.jpg',
        lessons: [
          'Align educational incentives with student outcomes',
          'Focus on hands-on, project-based learning over lectures',
          'Use technology to personalize the learning experience',
          'Build systems that make quality education more accessible'
        ]
      },
    ],
    experiences: [
      {
        title: 'America 2.0 Substack',
        description: 'Publishing a weekly Substack exploring paths to accelerate humanity towards a Golden Age. Built an engaged audience of 500+ readers, focusing on concepts like democratizing human flourishing, Society Stack, and foundational technologies for local resilience.',
        date: '2024',
        tags: ['Digital Publishing', 'Future Studies', 'Systems Thinking', 'Societal Innovation'],
        link: 'https://substack.garysheng.com'
      },
      {
        title: 'Co-Founder & Chief Innovation Officer at Civics Unplugged',
        description: 'Built first curriculum, designed mentorship program, and led cultivation of global, digital-first community of young civic innovators now consisting of 2000+ alumni across 80+ countries. Created Dream DAO to train students on web3 for positive impact. Honored by Forbes 30 Under 30.',
        date: '2019-2022',
        tags: ['Community Building', 'Curriculum Design', 'Web3 Education', 'Youth Empowerment']
      },
      {
        title: 'Cultural Commentary on TikTok',
        description: 'Built an audience of 130,000+ followers in a few months through engaging content focused on centrist and independent politics, demonstrating ability to connect with Gen-Z audience on complex topics.',
        date: '2022',
        tags: ['Social Media Education', 'Political Discourse', 'Digital Content Creation']
      }
    ]
  },
  'movement-builder': {
    id: 'movement-builder',
    title: 'Movement Builder',
    emoji: '🔥',
    color: 'rgba(236, 72, 153, 1)',
    description: 'Creating communities and initiatives that drive positive change in tech.',
    inspirations: [
      {
        name: 'Vitalik Buterin',
        role: 'Co-founder of Ethereum',
        image: '/inspirations/vitalik-buterin.jpg',
        lessons: [
          'Build platforms that enable new possibilities and empower communities',
          'Foster open dialogue and transparent collaboration across diverse groups',
          'Experiment with innovative ideas through real-world implementations',
          'Balance technological vision with practical community needs'
        ]
      },
      {
        name: 'Naval Ravikant',
        role: 'Co-founder of AngelList',
        image: '/inspirations/naval-ravikant.jpg',
        lessons: [
          'Leverage specific knowledge and technology to create unique value',
          'Master both building and storytelling to grow movements',
          'Play long-term games with long-term people',
          'Create platforms that enable others to succeed'
        ]
      },
      {
        name: 'Vivek Ramaswamy',
        role: 'Founder of Roivant & Strive',
        image: '/inspirations/vivek-ramaswamy.jpg',
        lessons: [
          'Be contrarian but right - challenge consensus with solid reasoning',
          'Build movements across multiple platforms and mediums',
          'Articulate clear, distinctive positions on complex issues',
          'Scale impact through both digital and traditional channels'
        ]
      },
    ],
    experiences: [
      {
        title: 'Zuzalu Ecosystem Contributor',
        description: 'Early contributor to the Zuzalu ecosystem, helping pioneer the concept of popup villages and innovative community living experiments.',
        date: '2024',
        tags: ['Community Design', 'Innovation', 'Future Cities'],
        link: 'https://www.palladiummag.com/2023/10/06/why-i-built-zuzalu/'
      },
      {
        title: 'Web3 Impact Community Builder',
        description: 'Actively contributed to popularizing the convergence of web3 and social impact through regular content creation and supporting early-stage projects at the intersection of crypto and social good.',
        date: '2022-2024',
        tags: ['Web3', 'Social Impact', 'Community Building', 'Content Creation']
      },
      {
        title: 'Co-Founder of Dancing Pineapple',
        description: 'Created and grew a feel-good electronic music brand that promoted artists across four continents. Produced 24 concerts in NYC and LA, helping launch artists who later performed at major festivals like Coachella and EDC Vegas. Curated therapeutic electronic music that resonated deeply with audiences.',
        date: '2015-2019',
        tags: ['Music Curation', 'Event Production', 'Artist Development', 'Brand Building']
      },
      {
        title: 'Criminal Justice Reform Advocate',
        description: 'Built and grew a Facebook page from scratch to 800,000 followers, focused on criminal justice reform and raising awareness about key issues.',
        date: '2017',
        tags: ['Digital Advocacy', 'Social Justice', 'Community Growth']
      },
      {
        title: 'College Dance Team Leader',
        description: 'Led a premier dance team that consistently packed the largest campus auditorium for showcases, demonstrating early leadership in community building through arts and performance.',
        date: 'College',
        tags: ['Leadership', 'Performance Arts', 'Event Organization']
      },
      {
        title: 'High School Community Builder',
        description: 'Organized and negotiated sanctioned campus dance parties and LAN gaming events, bringing together different student communities through shared experiences.',
        date: 'High School',
        tags: ['Event Planning', 'Community Building', 'Gaming Culture']
      }
    ]
  }
}; 