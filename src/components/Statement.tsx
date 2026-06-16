export default function Statement() {
  return (
    <section className="bg-white relative">
      {/* Decorative background shapes */}
      <div
        className="absolute top-0 left-0 w-40 h-40 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{ background: '#E8A800', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      {/* White top — title + logo */}
      <div className="py-16 md:py-24 px-6 sm:px-8 flex flex-col items-center text-center relative overflow-hidden">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-tight mb-10 md:mb-14 tracking-tight" style={{ color: '#E8A800' }}>
          We at Future Bridge<br />Development Action
        </h2>

        {/* Responsive SVG — scales with container */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <svg viewBox="0 0 320 120" className="w-full h-auto">
            <path
              d="M20 110 Q160 15 300 110"
              fill="none"
              stroke="#6B9C1F"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M55 110 Q160 30 265 110"
              fill="none"
              stroke="#E8A800"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Green band */}
      <div className="py-16 md:py-24 px-6 sm:px-8 relative overflow-hidden" style={{ background: '#6B9C1F' }}>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-15"
          aria-hidden="true"
          style={{ background: '#E8A800', clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p className="text-white text-base md:text-lg leading-relaxed">
            We believe every community deserves the opportunity to grow, succeed, and build a better future. We work to support vulnerable communities through sustainable development, climate-smart solutions, and opportunities that improve everyday lives.
          </p>
          <div className="flex justify-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ background: '#E8A800' }} />
            <div className="w-2 h-2 rounded-full opacity-50" style={{ background: '#E8A800' }} />
            <div className="w-2 h-2 rounded-full opacity-30" style={{ background: '#E8A800' }} />
          </div>
          <p className="text-white text-base md:text-lg leading-relaxed">
            We are passionate about helping farmers, youth, women, and small businesses become stronger and more self-reliant. By working together with communities and partners, we aim to create lasting change, protect natural resources, and build hope for future generations.
          </p>
        </div>
      </div>
    </section>
  );
}
