import Image from 'next/image'

const allCardsData = [
  {
    title: 'Canturi',
    subtitle: 'Canturi Website',
    url: 'https://shop.canturi.com',
  },
  {
    title: 'TanAndCheek',
    subtitle: 'Tan+Cheek Website',
    url: 'https://tanandcheek.com',
  },
  {
    title: 'Healthy Kids',
    subtitle: 'Healthy Kids Website',
    url: 'https://healthykids.nsw.gov.au',
  },
  {
    title: 'The Constellation Project',
    subtitle: 'The Constellation Project Website',
    url: 'https://theconstellationproject.com.au/',
  },
  {
    title: 'Your Right To Know',
    subtitle: 'Your Right To Know Website',
    url: 'https://yourrighttoknow.com.au',
  },
  {
    title: 'Linde',
    subtitle: 'Linde Material Handling Website',
    url: 'https://lindemh.com.au',
  },
  {
    title: 'My ADHD',
    subtitle: 'My ADHD Website and Mobile App',
    url: 'https://myadhd.app',
  },
  {
    title: 'Live Design',
    subtitle: 'Live Design Website',
    url: 'https://livedesign.com.br',
  },
  {
    title: 'LEAD',
    subtitle: 'Kent Leaderboard',
    url: 'https://lead.kent.edu.au',
  },
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl text-center font-medium mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {allCardsData.map((card, index) => (
          <a
            href={card.url}
            className="w-auto transition transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={card.subtitle}
          >
            <Image
              src={`/images/projects/${card.title
                .toLowerCase()
                .replace(/\s+/g, '')}.png`}
              width="360"
              height="225"
              className="rounded"
              alt={`${card.title} Preview Image`}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
