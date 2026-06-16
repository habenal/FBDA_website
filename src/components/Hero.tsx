export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white">

      {/* ── Desktop diagonal panels (md+) ── */}
      <div className="hidden md:block absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: '#6B9C1F', clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: '#E8A800', clipPath: 'polygon(60% 0, 63% 0, 53% 100%, 50% 100%)' }}
        />
      </div>

      {/* ── Mobile full green background (below md) ── */}
      <div className="md:hidden absolute inset-0" style={{ background: '#6B9C1F' }} aria-hidden="true" />

      {/* ── Decorative geometric shapes ── */}
      <div className="hidden lg:block absolute top-20 right-16 w-32 h-32 opacity-20 pointer-events-none" style={{ background: '#E8A800', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="hidden lg:block absolute bottom-32 left-24 w-28 h-28 opacity-15 pointer-events-none" style={{ background: '#6B9C1F', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)' }} />

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex relative z-10 min-h-screen">
        {/* Left: text */}
        <div className="w-[55%] flex flex-col justify-center px-12 lg:px-20 pt-20 pb-12">
          <p className="text-sm font-bold tracking-[0.3em] uppercase mb-6" style={{ color: '#E8A800' }}>
            Agenda 2026
          </p>
          <h1 className="text-white font-black uppercase leading-[0.95] tracking-tight">
            <span className="block text-[clamp(3.5rem,8vw,6.5rem)]">Company</span>
            <span className="block text-[clamp(3.5rem,8vw,6.5rem)]">Profile</span>
          </h1>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-1.5 w-20" style={{ background: '#E8A800' }} />
            <p className="text-white/80 text-sm font-semibold tracking-widest uppercase">
              Future Bridge Development Action
            </p>
          </div>
        </div>
        {/* Right: logo */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          <LogoMark size={180} />
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-black uppercase tracking-wide" style={{ color: '#6B9C1F' }}>
              Future Bridge
            </div>
            <div className="text-xs font-semibold tracking-[0.35em] uppercase mt-2" style={{ color: '#E8A800' }}>
              Development Action
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center gap-8">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E8A800' }}>
            Agenda 2026
          </p>
          <h1 className="text-white font-black uppercase leading-[0.88] tracking-tight text-[clamp(3rem,16vw,5rem)]">
            Company<br />Profile
          </h1>
          <div className="mt-6 mx-auto h-1 w-12" style={{ background: '#E8A800' }} />
        </div>
        <LogoMark size={140} />
        <div className="text-center">
          <div className="text-xl font-black uppercase tracking-wide text-white">
            Future Bridge
          </div>
          <div className="text-xs font-semibold tracking-[0.35em] uppercase mt-2" style={{ color: '#E8A800' }}>
            Development Action
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        style={{ color: '#E8A800' }}
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          className="animate-bounce opacity-60 group-hover:opacity-100 transition-opacity"
        >
          <path
            d="M7 0 L7 18 M2 13 L7 20 L12 13"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}

function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.45} viewBox="0 0 180 80">
      <path d="M8 75 Q90 8 172 75" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" />
      <path d="M30 75 Q90 22 150 75" fill="none" stroke="#E8A800" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
