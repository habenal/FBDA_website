import Reveal from './Reveal';

const values = [
  {
    number: 1,
    title: 'Humanity',
    description:
      'Prioritizing dignity, inclusion, and community well-being in every program and partnership.',
  },
  {
    number: 2,
    title: 'Integrity & Transparency',
    description:
      'Promoting ethical, data-driven decisions with accountability and openness at every level.',
  },
  {
    number: 3,
    title: 'Sustainable Empowerment',
    description:
      'Strengthening communities through long-term economic opportunities, resilience, and self-reliance.',
  },
  {
    number: 4,
    title: 'Locally-Led Innovation',
    description:
      'Advancing practical solutions driven by local knowledge, collaboration, and community leadership.',
  },
];

export default function CoreValues() {
  return (
    <section id="values" className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#6B9C1F' }}>
      {/* Decorative geometric elements */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 pointer-events-none opacity-20"
        aria-hidden="true"
        style={{ background: '#E8A800', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 pointer-events-none opacity-15"
        aria-hidden="true"
        style={{ background: 'rgba(255,255,255,0.08)', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-4">
            Core Values
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-16" style={{ background: '#E8A800' }} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {values.map((v, i) => (
            <Reveal key={v.number} delay={i * 100}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
                    <svg viewBox="0 0 56 64" width="100%" height="100%">
                      <path
                        d="M28 2 L54 12 L54 38 Q54 54 28 62 Q2 54 2 38 L2 12 Z"
                        fill="#E8A800"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform">
                      {v.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-black text-base sm:text-lg mb-3 leading-tight" style={{ color: '#6B9C1F' }}>
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#6B9C1F' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#E8A800' }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
