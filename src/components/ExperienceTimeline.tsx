import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import type { Experience } from '@/types/portfolio';
import { cn } from '@/lib/utils';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const isCurrent = (date: string) => {
    const year = parseInt(date.split('-')[0]);
    return year >= 2024;
  };

  return (
    <div className="relative space-y-8">
      {/* Center line that connects all cards */}
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="relative">
            <Card className={cn(
              "transition-all duration-300 bg-black/20 text-white shadow-none rounded-lg border-0",
              isCurrent(experience.date) ? "hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "hover:shadow-lg"
            )}>
              <CardContent className="p-4 space-y-2 bg-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">
                      {experience.title.includes('BlessOut') ? (
                        <a 
                          href="https://www.blessout.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent1 transition-colors"
                        >
                          {experience.title}
                        </a>
                      ) : experience.link ? (
                        <a 
                          href={experience.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent1 transition-colors"
                        >
                          {experience.title}
                        </a>
                      ) : (
                        experience.title
                      )}
                    </h3>
                    {isCurrent(experience.date) && (
                      null
                    )}
                  </div>
                  <span className="text-sm text-white font-mono">
                    {experience.date}
                  </span>
                </div>
                <p className="text-sm text-white">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-accent1/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 