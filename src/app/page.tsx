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
      const offsetPosition = elementPosition + window.scrollY - 100; // 100px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
        // Add a custom duration by controlling the scroll speed
        // This is achieved by scrolling a smaller distance per frame
      });
    }
  };

  const handleSelectPersona = (id: PersonaId) => {
    requestAnimationFrame(() => {
      setSelectedPersona(id);
      setIsMainSelected(false);
    });
    scrollToPersonaDetails();
  };

  const handleSelectMain = () => {
    requestAnimationFrame(() => {
      setSelectedPersona(null);
      setIsMainSelected(true);
    });
    scrollToPersonaDetails();
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
