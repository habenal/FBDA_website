import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icon';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Core Values', href: '#values' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <BridgeLogo small scrolled={scrolled} />
          <div className="leading-tight">
            <div
              className={`text-sm font-black tracking-wide transition-colors ${
                scrolled ? 'text-green-brand' : 'text-white'
              }`}
            >
              FUTURE BRIDGE
            </div>
            <div
              className={`text-[10px] font-semibold tracking-widest transition-colors ${
                scrolled ? 'text-gold-brand' : 'text-gold-light'
              }`}
            >
              DEVELOPMENT ACTION
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative text-sm font-bold tracking-wide uppercase transition-colors hover:text-gold-brand after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gold-brand after:transition-all after:duration-300 ${
                    isActive ? 'text-gold-brand after:w-full' : 'after:w-0 hover:after:w-full'
                  } ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <CloseIcon className={scrolled ? 'text-gray-700' : 'text-white'} size={24} />
          ) : (
            <MenuIcon className={scrolled ? 'text-gray-700' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.href ? 'page' : undefined}
                className={`text-sm font-bold tracking-wide uppercase transition-colors hover:text-gold-brand ${
                  active === l.href ? 'text-gold-brand' : 'text-gray-700'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function BridgeLogo({ small, scrolled }: { small?: boolean; scrolled?: boolean }) {
  const size = small ? 36 : 80;
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60">
      <path
        d="M5 55 Q50 5 95 55"
        fill="none"
        stroke={scrolled ? '#6B9C1F' : '#fff'}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M18 55 Q50 15 82 55"
        fill="none"
        stroke={scrolled ? '#E8A800' : '#E8A800'}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
