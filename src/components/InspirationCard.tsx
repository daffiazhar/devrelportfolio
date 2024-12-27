import { Card } from '@/components/ui/card';
import Image from 'next/image';
import type { PersonaInspiration } from '@/types/portfolio';

interface InspirationCardProps {
  inspiration: PersonaInspiration;
  className?: string;
}

export function InspirationCard({ inspiration, className }: InspirationCardProps) {
  return (
    <Card className={`p-6 bg-black/60 backdrop-blur-sm ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={inspiration.image}
            alt={inspiration.name}
            fill
            className="object-cover"
            sizes="100px"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{inspiration.name}</h3>
          <p className="text-gray-400 text-sm">{inspiration.role}</p>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-accent1">He inspires me to:</h4>
        <ul className="space-y-2">
          {inspiration.lessons.map((lesson, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
              <span className="text-accent1 mt-1">•</span>
              <span>{lesson}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
} 