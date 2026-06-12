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
    <section id="team" className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <div className="px-5 py-2.5 rounded-lg" style={{ background: '#6B9C1F' }}>
            <span className="text-white text-sm font-bold uppercase tracking-widest">
              Meet The Team
            </span>
          </div>
        </div>

        <div className="space-y-10 md:space-y-14">
          {members.map((m, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
                {/* Photo column */}
                <div className="relative bg-gray-100 h-64 sm:h-72 md:h-auto">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20"
                    style={{ background: '#E8A800', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
                  />
                </div>

                {/* Content column */}
                <div className="p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide" style={{ color: '#6B9C1F' }}>
                    {m.name}
                  </h3>
                  <p className="font-semibold text-xs sm:text-sm uppercase tracking-widest mt-1 mb-5" style={{ color: '#E8A800' }}>
                    {m.title}
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {m.bio.map((para, j) => (
                      <p key={j} className="text-gray-600 text-sm leading-relaxed md:text-justify">
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
