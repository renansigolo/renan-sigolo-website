import Image from 'next/image'

const allCardsData = [
  {
    title: 'Healthy Bones Australia',
    subtitle: 'Healthy Bones Australia Website',
    url: 'healthybonesaustralia.org.au/',
  },
  {
    title: 'Healthy Kids',
    subtitle: 'Healthy Kids Website',
    url: 'healthykids.nsw.gov.au',
  },
  {
    title: 'The Constellation Project',
    subtitle: 'The Constellation Project Website',
    url: 'theconstellationproject.com.au/',
  },
  {
    title: 'Your Right To Know',
    subtitle: 'Your Right To Know Website',
    url: 'yourrighttoknow.com.au',
  },
  {
    title: 'Canturi',
    subtitle: 'Canturi Website',
    url: 'shop.canturi.com',
  },
  {
    title: 'TanAndCheek',
    subtitle: 'Tan+Cheek Website',
    url: 'tanandcheek.com',
  },
  {
    title: 'Linde',
    subtitle: 'Linde Material Handling Website',
    url: 'lindemh.com.au',
  },
  {
    title: 'My ADHD',
    subtitle: 'My ADHD Website and Mobile App',
    url: 'myadhd.app',
  },
  {
    title: 'Live Design',
    subtitle: 'Live Design Website',
    url: 'livedesign.com.br',
  },
  {
    title: 'LEAD',
    subtitle: 'Kent Leaderboard',
    url: 'lead.kent.edu.au',
  },
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl text-center font-medium mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {allCardsData.map((card, index) => (
          <a
            href={`https://${card.url}`}
            className="w-auto transition transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={card.subtitle}
          >
            <Image
              src={`/images/projects/${card.title
                .toLowerCase()
                .replace(/\s+/g, '')}.webp`}
              width={360}
              height={225}
              className="rounded"
              alt={`${card.title} Preview Image`}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
