const rows = [
  {
    label: 'General Objectives',
    text: 'Promote inclusive and sustainable development by strengthening climate resilience, improving food security, conserving natural resources, reducing environmental waste, and encouraging peaceful community engagement.',
    bg: '#6B9C1F',
  },
  {
    label: 'Our Targets',
    text: 'Support smallholder farmers, MSMEs, women, youth, and persons with disabilities by creating opportunities for economic growth, capacity building, financial inclusion, and sustainable livelihoods.',
    bg: '#E8A800',
  },
  {
    label: 'Priority Beneficiaries',
    text: 'Focus on climate-vulnerable communities, underserved rural populations, women- and youth-led enterprises, and value chain actors within sectors such as agriculture, livestock, leather, coffee, and cotton.',
    bg: '#6B9C1F',
  },
  {
    label: 'Secondary Stakeholders',
    text: 'Work closely with government institutions, private-sector actors, cooperatives, financial institutions, research organizations, and development partners to strengthen sustainable and inclusive development efforts.',
    bg: '#E8A800',
  },
];

export default function StrategicObjectives() {
  return (
    <section id="objectives" className="bg-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase text-center tracking-tight mb-10 md:mb-14">
          Strategic Objectives
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          {rows.map((row, i) => (
            <div key={i} style={{ background: row.bg }}>
              {/* Mobile: stacked */}
              <div className="md:hidden px-6 pt-6 pb-1">
                <h3 className="text-base font-black uppercase tracking-wide text-white">
                  {row.label}
                </h3>
              </div>
              <div className="md:hidden px-6 pb-6">
                <p className="text-sm leading-relaxed text-white/90 mt-2">
                  {row.text}
                </p>
              </div>

              {/* Desktop: side-by-side */}
              <div className="hidden md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                <div className="px-8 py-8 flex items-center border-r border-white/20">
                  <h3 className="text-lg font-black uppercase tracking-wide text-white">
                    {row.label}
                  </h3>
                </div>
                <div className="px-8 py-8">
                  <p className="text-base leading-relaxed text-justify text-white/90">
                    {row.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
