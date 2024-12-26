import { Card } from '@/components/ui/card';

const pillars = [
  {
    id: 'community',
    description: 'Build and nurture vibrant developer communities through genuine connections.',
    emoji: '🤝',
    color: 'from-violet-500 to-violet-700'
  },
  {
    id: 'education',
    description: 'Create exceptional documentation and high-quality demo repositories.',
    emoji: '📚',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'advocacy',
    description: 'Champion developer needs and provide clear feedback to product teams.',
    emoji: '📢',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'content',
    description: 'Produce engaging technical content that educates and inspires developers.',
    emoji: '✍️',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'research',
    description: 'Explore state-of-the-art tools to stay ahead of developer experience trends.',
    emoji: '🔍',
    color: 'from-pink-500 to-pink-700'
  }
];

export function DevRelPillars() {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">DevRel Pillars ✨</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My approach: exceptional docs, genuine community engagement, and continuous exploration.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {pillars.map((pillar) => (
          <Card 
            key={pillar.id}
            className="p-4 bg-gradient-to-r hover:scale-[1.01] transition-transform duration-200"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)), linear-gradient(to right, var(--${pillar.color}-from), var(--${pillar.color}-to))`
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-2xl">{pillar.emoji}</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-base">{pillar.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 