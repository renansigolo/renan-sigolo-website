import { projectsData } from "./projects-data"
import * as style from "./Projects.module.css"

export default function Projects() {
  const encodeImage = (imageUrl) => {
    return imageUrl.toLowerCase().replace(/\s+/g, "")
  }

  return (
    <section data-test="projects-section" id="projects-section">
      <h2 className={style.heading}>My Projects</h2>
      <div className={style.grid} role="list">
        {projectsData.map((item, index) => (
          <a
            key={index}
            aria-label={item.subtitle}
            className={style.card}
            href={`https://${item.url}`}
            rel="noopener noreferrer"
            role="listitem"
            target="_blank"
          >
            <img
              alt={`${item.title} Preview Image`}
              className={style.card_image}
              height={225}
              loading={index > 1 ? "lazy" : "eager"}
              src={`/images/projects/${encodeImage(item.title)}.webp`}
              width={360}
            />
            <div className={style.card_overlay}>
              <p className={style.card_title}>
                <span>{item.title}</span>
                <br />
                {item.url}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
