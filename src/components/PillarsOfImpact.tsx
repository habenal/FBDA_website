import { Globe, Cpu, Coins, Users, Heart } from 'lucide-react';
import Reveal from './Reveal';

const pillars = [
  {
    icon: Globe,
    title: 'Climate Resilience & Environmental Sustainability',
    text: 'Building resilient communities through climate-smart solutions, environmental protection, sustainable resource management, and long-term food security initiatives.',
    color: '#4A6B10',
  },
  {
    icon: Cpu,
    title: 'Industrial Development & Digital Transformation',
    text: 'Promoting sustainable industrial growth through innovation, digitalization, quality improvement, recycling practices, and safer, more competitive value chains.',
    color: '#6B9C1F',
  },
  {
    icon: Coins,
    title: 'Rural Finance, Market Access & Job Creation',
    text: 'Strengthening economic opportunities by improving financial inclusion, market access, entrepreneurship, and sustainable livelihood creation for communities.',
    color: '#8AB82E',
  },
  {
    icon: Users,
    title: 'Women, Youth & Disability Inclusion',
    text: 'Empowering women, youth, and persons with disabilities through equal opportunities, skills development, leadership, and inclusive participation in society.',
    color: '#E8A800',
  },
  {
    icon: Heart,
    title: 'Humanitarian Response & Community Recovery',
    text: 'Supporting vulnerable communities with humanitarian assistance, recovery programs, and resilience-building efforts during and after crises and disasters.',
    color: '#C08A00',
  },
];

export default function PillarsOfImpact() {
  return (
    <section id="pillars" className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase text-center tracking-tight mb-12 md:mb-16">
          Pillars of Impact
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          <Reveal>
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
                <path d="M 100,10 A 90,90 0 0,1 185.6,72.2 L 152.3,83.0 A 55,55 0 0,0 100,45 Z" fill="#4A6B10" />
                <path d="M 185.6,72.2 A 90,90 0 0,1 152.9,172.8 L 132.3,144.5 A 55,55 0 0,0 152.3,83.0 Z" fill="#6B9C1F" />
                <path d="M 152.9,172.8 A 90,90 0 0,1 47.1,172.8 L 67.7,144.5 A 55,55 0 0,0 132.3,144.5 Z" fill="#8AB82E" />
                <path d="M 47.1,172.8 A 90,90 0 0,1 14.4,72.2 L 47.7,83.0 A 55,55 0 0,0 67.7,144.5 Z" fill="#E8A800" />
                <path d="M 14.4,72.2 A 90,90 0 0,1 100,10 L 100,45 A 55,55 0 0,0 47.7,83.0 Z" fill="#C08A00" />
                <circle cx="100" cy="100" r="50" fill="white" />
                <path d="M 68,110 Q 100,78 132,110" fill="none" stroke="#6B9C1F" strokeWidth="6" strokeLinecap="round" />
                <path d="M 76,110 Q 100,84 124,110" fill="none" stroke="#E8A800" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </Reveal>

          <div className="flex-1 w-full space-y-5 md:space-y-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-3 sm:gap-4">
                    <div
                      className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: p.color }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-wide mb-1" style={{ color: p.color }}>
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
