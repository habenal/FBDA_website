export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative geometric elements */}
      <div
        className="hidden md:block absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-8"
        aria-hidden="true"
        style={{ background: '#6B9C1F', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
      <div
        className="hidden lg:block absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{ background: '#E8A800', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-0">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-4">
            About Us
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-16" style={{ background: '#E8A800' }} />
          </div>
        </div>

        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p className="text-justify">
            Future Bridge Development Action is an Ethiopian non-profit organization focused on building resilient, self-sustaining, and climate-smart communities. Guided by its mission of <span className="font-semibold" style={{ color: '#6B9C1F' }}>"Bridging the Divide,"</span> the organization works to connect vulnerable communities with sustainable economic opportunities, innovation, and inclusive development.
          </p>
          <p className="text-justify">
            FBDA supports smallholder farmers, MSMEs, women, youth, and underserved groups by promoting sustainable livelihoods, climate resilience, financial inclusion, and market access. Its work focuses on creating long-term social and economic impact through practical, community-driven solutions.
          </p>
          <p className="text-justify">
            The organization operates across sectors such as agriculture, livestock, leather, coffee, cotton, and green industrial development while collaborating with government institutions, private-sector partners, cooperatives, and development organizations to strengthen inclusive and sustainable growth in Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-16 md:mt-20">
          <div className="relative p-8 rounded-2xl" style={{ background: '#6B9C1F' }}>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg" style={{ background: '#E8A800' }} />
            <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">🎯</span> Vision
            </h3>
            <p className="text-white/95 text-sm md:text-base leading-relaxed">
              To create a world where inclusive and climate-smart value chains empower resilient, self-sustaining, and prosperous communities.
            </p>
          </div>

          <div className="relative p-8 rounded-2xl" style={{ background: '#E8A800' }}>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg" style={{ background: '#6B9C1F' }} />
            <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">🚀</span> Mission
            </h3>
            <p className="text-white/95 text-sm md:text-base leading-relaxed">
              To drive sustainable economic growth by empowering smallholder producers, workers, and MSMEs through inclusive value chains, localized innovation, financial inclusion, and climate-smart development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
