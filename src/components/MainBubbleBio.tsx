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
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            I&apos;m a unique blend of software engineer, educator, and movement builder - three personas that combine 
            to create an ideal skillset for supercharging developer ecosystems. My engineering background from Google 
            and Duke gives me deep technical credibility, while my experience as an educator helps me make complex 
            concepts accessible and engaging. As a movement builder, I understand how to cultivate thriving communities 
            and drive adoption. This combination allows me to not just build great developer tools, but to teach 
            their value effectively and build passionate communities around them.
          </p>
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