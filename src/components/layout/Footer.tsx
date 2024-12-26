import Image from 'next/image';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/garysheng',
    icon: '/social/github.svg'
  },
  {
    label: 'X',
    href: 'https://x.com/garysheng',
    icon: '/social/x.svg'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/garysheng',
    icon: '/social/linkedin.svg'
  }
];

export function Footer() {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="https://www.garysheng.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent1 transition-colors"
              >
                garysheng.com
              </a>
              <a 
                href="https://github.com/garysheng/devrelportfolio.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent1 transition-colors"
              >
                Fork this template on GitHub
              </a>
            </div>
          </div>
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Feel free to DM me on{' '}
              <a 
                href="https://x.com/garysheng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent1 hover:text-accent2 transition-colors"
              >
                X
              </a>
              {' '}or{' '}
              <a 
                href="https://linkedin.com/in/garysheng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent1 hover:text-accent2 transition-colors"
              >
                LinkedIn
              </a>
              {' '}if you&apos;d like to chat about supercharging your developer ecosystem!
            </p>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
} 