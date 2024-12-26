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
      <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-muted -translate-x-1/2" />
      
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="relative">
            <Card className={cn(
              "transition-all duration-300",
              isCurrent(experience.date) ? "shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "hover:shadow-lg"
            )}>
              <CardContent className="p-4 space-y-2">
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
                      ) : (
                        experience.title
                      )}
                    </h3>
                    {isCurrent(experience.date) && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-accent1/20 text-accent1 font-medium animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {experience.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-accent1/10 text-accent1"
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