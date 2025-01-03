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
    setTimeout(() => {
      const element = document.getElementById('persona-details');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 100;
        
        const duration = 1500; // 1.5 seconds
        const startPosition = window.scrollY;
        const distance = offsetPosition - startPosition;
        const startTime = performance.now();

        const easeInOutQuad = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        const scroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

          if (progress < 1) {
            requestAnimationFrame(scroll);
          }
        };

        requestAnimationFrame(scroll);
      }
    }, 100); // Small delay to ensure state updates have completed
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
