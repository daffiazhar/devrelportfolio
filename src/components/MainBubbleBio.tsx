import { Card } from '@/components/ui/card';

export function MainBubbleBio() {
  return (
    <div className="mt-12">
      <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold">👋 Hi, I&apos;m Gary</h2>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Entrepreneurial, ex-Google software engineer with a BS in Computer Science from Duke University. 
            Based in the US with a passion for creating innovative tools and systems that empower individuals and communities. 
            Well connected in crypto, AI, and impact sectors, currently focused on front-end development with React / Next.js 
            and leveraging AI to rapidly prototype and ship impactful products from start to finish, including cross-platform 
            apps and services. Was awarded Forbes 30 Under 30 for social entrepreneurship.
          </p>
          <p className="text-gray-400 text-base animate-pulse mt-4">
            ✨ Click on the Software Engineer, Educator, or Movement Builder bubbles to explore my journey in each role
          </p>
        </div>
      </Card>
    </div>
  );
} 