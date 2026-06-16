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
    <section id="objectives" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-4">
            Strategic Objectives
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-16" style={{ background: '#E8A800' }} />
          </div>
        </div>

        <div className="space-y-5">
          {rows.map((row, i) => (
            <div key={i} style={{ background: row.bg }} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              {/* Mobile: stacked */}
              <div className="md:hidden px-6 pt-8 pb-1">
                <h3 className="text-base font-black uppercase tracking-wide text-white mb-3">
                  {row.label}
                </h3>
              </div>
              <div className="md:hidden px-6 pb-8">
                <p className="text-sm leading-relaxed text-white/90">
                  {row.text}
                </p>
              </div>

              {/* Desktop: side-by-side */}
              <div className="hidden md:grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                <div className="px-10 py-10 flex items-center">
                  <h3 className="text-lg font-black uppercase tracking-wide text-white leading-tight">
                    {row.label}
                  </h3>
                </div>
                <div className="px-10 py-10 bg-black/10">
                  <p className="text-base leading-relaxed text-white/95">
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
