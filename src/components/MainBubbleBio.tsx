import { useState } from 'react';
import { Card } from '@/components/ui/card';
import type { PersonaId } from '@/types/portfolio';

interface MainBubbleBioProps {
  onSelectPersona?: (id: PersonaId) => void;
}

export function MainBubbleBio({ onSelectPersona }: MainBubbleBioProps) {
  const [text, setText] = useState('');

  const scrollToPersonas = () => {
    document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePersonaClick = (id: PersonaId) => {
    if (onSelectPersona) {
      onSelectPersona(id);
    }
  };

  // Edit the text below to change what appears under the heading
  const myText = `Namaku Daffi Azhar Nagata, Panggilanku Daffi. Aku pernah menjadi Co-Host di Saluran Televisi Terbesar Se-Indonesia. Untuk lebih lanjut tentang itu, cek persona Co-Host di bagian atas!`;

  return (
    <div 
      id="persona-details"
      className="mt-12"
    >
      <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold">👋 Halo!, Aku Daffi</h2>
          <div className="mt-4 text-lg text-gray-200 whitespace-pre-line">{myText}</div>
        </div>
      </Card>
    </div>
  );
} 