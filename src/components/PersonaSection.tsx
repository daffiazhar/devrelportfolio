import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { MainBubbleBio } from '@/components/MainBubbleBio';
import { portfolioData } from '@/config/portfolio-data';
import type { PersonaId } from '@/types/portfolio';

interface PersonaSectionProps {
  selectedPersona: PersonaId | null;
  onSelectPersona: (id: PersonaId) => void;
  isMainSelected: boolean;
}

const personaOrder: PersonaId[] = ['music maker', 'programmer'];

export function PersonaSection({ selectedPersona, onSelectPersona, isMainSelected }: PersonaSectionProps) {
  if (!selectedPersona && !isMainSelected) return null;
  
  if (isMainSelected) {
    return <MainBubbleBio onSelectPersona={onSelectPersona} />;
  }

  const currentPersona = portfolioData[selectedPersona!];
  const currentIndex = personaOrder.indexOf(selectedPersona!);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < personaOrder.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      onSelectPersona(personaOrder[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectPersona(personaOrder[currentIndex + 1]);
    }
  };

  return (
    <div className="mt-12 space-y-8">
      {currentPersona.color.startsWith('linear-gradient') ? (
        <div
          style={{ background: currentPersona.color, borderRadius: '0.5rem', padding: 0 }}
        >
          <div
            id="persona-details"
            className="rounded-lg p-8 transition-colors duration-300"
            style={{}}
          >
            <div className="flex items-center justify-between mb-8">
              {hasPrevious && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="mr-4"
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </Button>
              )}
              {!hasPrevious && <div className="w-12 mr-4" />}
              <div className="flex-1 text-center">
                <p className="text-sm text-white-400 mb-2">
                  Salah Satu Hobiku Adalah{currentPersona.title.toLowerCase().startsWith('e') ? '' : ''}...
                </p>
                <h2 className="text-4xl font-bold mb-4">
                  {currentPersona.emoji} {currentPersona.title}
                </h2>
                <p className="text-sm text-gray-400">{currentPersona.description}</p>
              </div>
              {hasNext && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="ml-4"
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </Button>
              )}
              {!hasNext && <div className="w-12 ml-4" />}
            </div>

            <section>
              <h3 className="text-2xl font-semibold mb-6">
                Pengalamanku
              </h3>
              <ExperienceTimeline experiences={currentPersona.experiences} />
            </section>
          </div>
        </div>
      ) : (
        <div
          id="persona-details"
          className="rounded-lg p-8 transition-colors duration-300"
          style={{
            backgroundColor: currentPersona.color.replace('1)', '0.1)')
          }}
        >
          <div className="flex items-center justify-between mb-8">
            {hasPrevious && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="mr-4"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </Button>
            )}
            {!hasPrevious && <div className="w-12 mr-4" />}
            <div className="flex-1 text-center">
              <p className="text-sm text-white-400 mb-2">
                Salah Satu Hobiku Adalah{currentPersona.title.toLowerCase().startsWith('e') ? '' : ''}...
              </p>
              <h2 className="text-4xl font-bold mb-4">
                {currentPersona.emoji} {currentPersona.title}
              </h2>
              <p className="text-sm text-gray-400">{currentPersona.description}</p>
            </div>
            {hasNext && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="ml-4"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </Button>
            )}
            {!hasNext && <div className="w-12 ml-4" />}
          </div>

          <section>
            <h3 className="text-2xl font-semibold mb-6">
              My {currentPersona.title}-Related Experiences
            </h3>
            <ExperienceTimeline experiences={currentPersona.experiences} />
          </section>
        </div>
      )}
    </div>
  );
} 