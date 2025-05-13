import { Card } from '@/components/ui/card';

const pillars = [
  {
    id: 'jelas-tujuan',
    description: '',
    emoji: '🎯',
    color: 'from-violet-500 to-violet-700',
    custom: true,
    heading: 'Jelas Tujuan',
    body: 'Tanpa tujuan yang jelas, kepercayaan diri akan rapuh. Fokus dimulai dari arah yang terang.'
  },
  {
    id: 'education',
    description: '',
    emoji: '💎',
    color: 'from-blue-500 to-blue-700',
    custom: true,
    heading: 'Unggul dalam Sikap',
    body: 'Keunggulan sejati bukan dari hasil, tapi dari cara kita bersikap dalam proses.                                 '
  },
  {
    id: 'advocacy',
    description: '',
    emoji: '⚡',
    color: 'from-indigo-500 to-indigo-700',
    custom: true,
    heading: 'Aktif',
    body: 'Diam tak membuatmu percaya diri—bergeraklah, maka keyakinan akan tumbuh.'
  },
  {
    id: 'content',
    description: '',
    emoji: '🛡️',
    color: 'from-purple-500 to-purple-700',
    custom: true,
    heading: 'Resiliensi',
    body: 'Setiap tekanan membentuk daya tahan. Resiliensi adalah otot yang dilatih oleh kegagalan.'
  },
  {
    id: 'rewards',
    description: '',
    emoji: '👁️',
    color: 'from-rose-500 to-rose-700',
    custom: true,
    heading: 'Atensi',
    body: 'Dengan perhatian yang penuh, hal kecil pun bisa jadi luar biasa.'
  }
];

export function DevRelPillars() {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">🏛️ 5 Pilar JUARA Untuk Menjadi Daffi</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full mx-auto overflow-hidden h-full">
        {pillars.map((pillar) => (
          <Card 
            key={pillar.id}
            className="p-4 bg-gradient-to-r hover:scale-[1.01] transition-transform duration-200 w-full h-full flex flex-col"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)), linear-gradient(to right, var(--${pillar.color}-from), var(--${pillar.color}-to))`
            }}
          >
            <div className="flex items-start gap-4 h-full">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mt-1">
                <span className="text-2xl">{pillar.emoji}</span>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-white mb-1">{pillar.heading}</div>
                <div className="text-gray-300 text-base">{pillar.body}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 