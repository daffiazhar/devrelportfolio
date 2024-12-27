import { Card } from '@/components/ui/card';

export function MainBubbleBio() {
  const scrollToPersonas = () => {
    document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      id="persona-details"
      className="mt-12"
    >
      <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold">👋 Hi, I&apos;m Gary</h2>
          <div className="text-lg text-gray-300 max-w-2xl space-y-4">
            <p>
              I&apos;m a unique blend of{' '}
              <span className="text-[#6366F1] bg-[#6366F1]/10 px-1 rounded">software engineer</span>,{' '}
              <span className="text-[#8B5CF6] bg-[#8B5CF6]/10 px-1 rounded">educator</span>, and{' '}
              <span className="text-[#EC4899] bg-[#EC4899]/10 px-1 rounded">movement builder</span>{' '}
              - three personas that combine to create an ideal skillset for supercharging developer ecosystems.
            </p>
            <p>
              My engineering background from Google and Duke gives me deep technical credibility, while my experience 
              as an educator helps me make complex concepts accessible and engaging.
            </p>
            <p>
              As a movement builder, I understand how to cultivate thriving communities and drive adoption.
            </p>
            <p>
              <strong>This <span className="animate-shimmer bg-[linear-gradient(110deg,#fff,15%,#6366F1,35%,#8B5CF6,50%,#EC4899,65%,#fff,85%,#fff)] bg-[length:200%_100%] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">combination</span> allows me to not just build great developer tools, but to teach their value 
              effectively and build passionate communities around them.</strong>
            </p>
          </div>
          <button 
            onClick={scrollToPersonas}
            className="text-gray-400 text-base hover:text-accent1 transition-colors cursor-pointer animate-pulse mt-4"
          >
            ✨ Click on the Software Engineer, Educator, or Movement Builder bubbles to explore how each persona contributes to my DevRel approach
          </button>
        </div>
      </Card>
    </div>
  );
} 