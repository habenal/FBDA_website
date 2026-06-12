export default function Statement() {
  return (
    <section className="bg-white">
      {/* White top — title + logo */}
      <div className="py-14 md:py-20 px-6 sm:px-8 flex flex-col items-center text-center relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-8 md:mb-10" style={{ color: '#E8A800' }}>
          We at Future Bridge<br />Development Action
        </h2>

        {/* Responsive SVG — scales with container */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
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
      <div className="py-12 md:py-16 px-6 sm:px-8" style={{ background: '#6B9C1F' }}>
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-white text-base md:text-lg leading-relaxed">
            We believe every community deserves the opportunity to grow, succeed, and build a better future. We work to support vulnerable communities through sustainable development, climate-smart solutions, and opportunities that improve everyday lives.
          </p>
          <p className="text-white text-base md:text-lg leading-relaxed">
            We are passionate about helping farmers, youth, women, and small businesses become stronger and more self-reliant. By working together with communities and partners, we aim to create lasting change, protect natural resources, and build hope for future generations.
          </p>
        </div>
      </div>
    </section>
  );
}
