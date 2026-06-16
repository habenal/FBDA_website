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
    <section id="pillars" className="bg-white py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-4">
            Pillars of Impact
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-16" style={{ background: '#E8A800' }} />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16">
          <Reveal>
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
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

          <div className="flex-1 w-full space-y-6 md:space-y-7">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-4 sm:gap-5 group">
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mt-1 shadow-md group-hover:shadow-lg transition-shadow"
                      style={{ background: p.color }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-black uppercase tracking-wide mb-2 leading-tight" style={{ color: p.color }}>
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {p.text}
                      </p>
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
