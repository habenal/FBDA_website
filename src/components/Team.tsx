import Reveal from './Reveal';

const members = [
  {
    name: 'Binyam Kassa',
    title: 'Executive Director',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: [
      'Binyam is an Ethiopian Development Economist and Executive Director of Future Bridge Development Action with over 15 years of experience in agricultural development, climate adaptation, and private-sector growth.',
      'He has worked with organizations including GIZ, World Bank, SNV, and Solidaridad Network, leading programs focused on SME development, financial inclusion, climate-smart agriculture, and value chain integration.',
      'At Future Bridge Development Action, his objective is to bridge development gaps by promoting sustainable agriculture, inclusive economic growth, climate resilience, and institutional capacity building through innovative partnerships and community-centered solutions.',
    ],
  },
  {
    name: 'Daniel Tesfaye',
    title: 'Head of Programs',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: [
      'Daniel is an Ethiopian Project Manager and Leather & Agribusiness Specialist with over 15 years of experience in donor-funded development, SME growth, and sustainable industrial transformation.',
      'He has worked extensively with local and international NGOs, managing large-scale projects focused on leather production, cleaner technologies, compliance systems, workforce development, and private-sector competitiveness across Ethiopia.',
      'Daniel successfully managed a €4.1 million EU and World Bank-funded program that introduced chrome-free tanning technology, supported 46 SMEs, trained more than 1,500 workers, and improved production efficiency and environmental sustainability within the leather sector.',
    ],
  },
  {
    name: 'Kalayu Gebru',
    title: 'Business Development and Partnership Lead',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: [
      'Kalayu is an Ethiopian development professional with over 18 years of experience in sustainable development, textile manufacturing, project management, and industrial engineering. He is also the Co-Founder of Future Bridge Development Action.',
      'He has worked with organizations including H&M Group and UNDP, leading projects focused on sustainable cotton production, MSME development, ESG compliance, export growth, and climate resilience.',
      "Kalayu has managed donor-funded projects worth more than €1.9 million, advised over 30 MSMEs, and led multi-stakeholder initiatives supporting Ethiopia's textile and garment sector competitiveness, sustainability, and workforce development.",
    ],
  },
  {
    name: 'Samuel Abebe',
    title: 'Environmental and Industrial Sectors Lead',
    photo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: [
      'Samuel is an Ethiopian business growth and sustainability consultant with more than 15 years of experience in textile, garment, and industrial development. He is also the Co-Founder of Future Bridge Development Action.',
      'He works with international organizations including JICA, GIZ, and Solidaridad, supporting enterprises through sustainability consulting, compliance systems, cleaner production, and capacity-building programs.',
      "Through his leadership, Samuel has managed projects worth more than €2.75 million and contributed to major industrial development initiatives focused on competitiveness, workers' welfare, ESG standards, and sustainable manufacturing practices in Ethiopia.",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-3 rounded-full" style={{ background: '#6B9C1F' }}>
              <span className="text-white text-xs font-black uppercase tracking-widest">
                Meet The Team
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-4">
            Leadership
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-16" style={{ background: '#E8A800' }} />
          </div>
        </div>

        <div className="space-y-10 md:space-y-14">
          {members.map((m, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden grid md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr] transition-shadow">
                {/* Photo column */}
                <div className="relative bg-gray-100 h-72 sm:h-80 md:h-auto overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24"
                    style={{ background: '#E8A800', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
                  />
                </div>

                {/* Content column */}
                <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wide leading-tight mb-2" style={{ color: '#6B9C1F' }}>
                      {m.name}
                    </h3>
                    <p className="font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-lg inline-block" style={{ background: '#E8A800', color: 'white' }}>
                      {m.title}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {m.bio.map((para, j) => (
                      <p key={j} className="text-gray-700 text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
