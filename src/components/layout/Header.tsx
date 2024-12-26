import { cn } from '@/lib/utils';
import { Navigation } from '@/components/Navigation';
import { MobileNav } from '@/components/MobileNav';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 py-4 px-6',
      'bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-sm',
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gary Sheng</h1>
          <p className="text-sm text-muted-foreground">Software Engineer • Educator • Movement Builder</p>
        </div>
        <div className="flex items-center gap-4">
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </header>
  );
} 