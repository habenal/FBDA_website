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
    <section id="values" className="relative py-20 md:py-24 overflow-hidden" style={{ background: '#6B9C1F' }}>
      {/* Decorative corners — scaled for mobile */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 pointer-events-none"
        aria-hidden="true"
        style={{ background: '#E8A800', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'rgba(0,0,0,0.1)', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase text-center tracking-tight mb-10 md:mb-14">
          Core Values
        </h2>

        <div className="space-y-4 md:space-y-6">
          {values.map((v, i) => (
            <Reveal key={v.number} delay={i * 100}>
              <div className="bg-white rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 relative w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center">
                  <svg viewBox="0 0 56 64" width="100%" height="100%">
                    <path
                      d="M28 2 L54 12 L54 38 Q54 54 28 62 Q2 54 2 38 L2 12 Z"
                      fill="#E8A800"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-black">
                    {v.number}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg mb-1" style={{ color: '#6B9C1F' }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>

                <div
                  className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full mt-1"
                  style={{ background: '#E8A800' }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
