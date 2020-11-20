import style from './projects.module.css'
import Image from 'next/image'

const allCardsData = [
  {
    title: 'Canturi',
    subtitle: 'Canturi Website',
    url: 'https://shop.canturi.com',
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
    <section className="section">
      <h2>My Projects</h2>
      <div className={style.grid}>
        {allCardsData.map((card, index) => (
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
            key={index}
            aria-label={card.subtitle}
          >
            <Image
              src={`/images/projects/${card.title
                .toLowerCase()
                .replace(/\s+/g, '')}.png`}
              width={360}
              height={225}
              alt={`${card.title} Preview Image`}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
