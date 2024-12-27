'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BubbleChart } from '@/components/BubbleChart';
import { PersonaSection } from '@/components/PersonaSection';
import { DevRelPillars } from '@/components/DevRelPillars';
import type { PersonaId } from '@/types/portfolio';

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaId | null>(null);
  const [isMainSelected, setIsMainSelected] = useState(true);

  const scrollToPersonaDetails = () => {
    const element = document.getElementById('persona-details');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPersona = (id: PersonaId) => {
    setSelectedPersona(id);
    setIsMainSelected(false);
    // Delay scroll by 2 seconds
    setTimeout(scrollToPersonaDetails, 2000);
  };

  const handleSelectMain = () => {
    setSelectedPersona(null);
    setIsMainSelected(true);
    // Delay scroll by 2 seconds
    setTimeout(scrollToPersonaDetails, 2000);
  };

  return (
    <>
      <Header onSelectPersona={handleSelectPersona} />
      <main className="min-h-screen">
        <section id="personas" className="pt-32 md:pt-24 px-6">
          <BubbleChart 
            selectedPersona={selectedPersona} 
            onSelectPersona={handleSelectPersona}
            onSelectMain={handleSelectMain}
            isMainSelected={isMainSelected}
          />
          <PersonaSection 
            selectedPersona={selectedPersona} 
            onSelectPersona={handleSelectPersona}
            isMainSelected={isMainSelected}
          />
        </section>
        <section id="pillars">
          <DevRelPillars />
        </section>
      </main>
      <Footer />
    </>
  );
}
