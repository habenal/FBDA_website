export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Corner accents — hidden on mobile to avoid clutter */}
      <div
        className="hidden md:block absolute right-0 top-0 w-2 bottom-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: '#6B9C1F' }}
      />
      <div
        className="hidden md:block absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{ background: '#6B9C1F', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
      <div
        className="hidden md:block absolute bottom-0 left-0 w-32 h-32 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{ background: '#E8A800', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex justify-end mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tight">
            About Us
          </h2>
        </div>

        <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed md:text-justify">
          <p>
            Future Bridge Development Action is an Ethiopian non-profit organization focused on building resilient, self-sustaining, and climate-smart communities. Guided by its mission of "Bridging the Divide," the organization works to connect vulnerable communities with sustainable economic opportunities, innovation, and inclusive development.
          </p>
          <p>
            FBDA supports smallholder farmers, MSMEs, women, youth, and underserved groups by promoting sustainable livelihoods, climate resilience, financial inclusion, and market access. Its work focuses on creating long-term social and economic impact through practical, community-driven solutions.
          </p>
          <p>
            The organization operates across sectors such as agriculture, livestock, leather, coffee, cotton, and green industrial development while collaborating with government institutions, private-sector partners, cooperatives, and development organizations to strengthen inclusive and sustainable growth in Ethiopia.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full" style={{ background: '#6B9C1F' }} />
            <h3 className="text-lg font-black uppercase tracking-widest" style={{ color: '#6B9C1F' }}>
              Vision
            </h3>
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-[3px]" style={{ borderColor: '#6B9C1F' }}>
            To create a world where inclusive and climate-smart value chains empower resilient, self-sustaining, and prosperous communities.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full" style={{ background: '#6B9C1F' }} />
            <h3 className="text-lg font-black uppercase tracking-widest" style={{ color: '#6B9C1F' }}>
              Mission
            </h3>
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-4 border-l-[3px]" style={{ borderColor: '#6B9C1F' }}>
            To drive sustainable economic growth by empowering smallholder producers, workers, and MSMEs through inclusive value chains, localized innovation, financial inclusion, and climate-smart development practices.
          </p>
        </div>
      </div>
    </section>
  );
}
