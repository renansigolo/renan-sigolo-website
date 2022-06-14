import React from "react"
import { projectsData } from "./projects-data"
import * as style from "./Projects.module.css"

export default function Projects() {
  const [activeProject, setActiveProject] = React.useState(-1)

  React.useEffect(() => {
    console.log("🚀 ~ Projects ~ activeProject", activeProject)
    console.log("🚀 ~ Projects ~ useEffect")
  }, [activeProject])

  const encodeImage = (imageUrl) => {
    return imageUrl.toLowerCase().replace(/\s+/g, "")
  }

  return (
    <section data-test="projects-section" id="projects-section">
      <h2 className={style.heading}>My Projects</h2>
      <div role="list" className={style.grid}>
        {projectsData.map((item, index) => (
          <a
            href={`https://${item.url}`}
            className={style.card}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={item.subtitle}
            onMouseOver={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(-1)}
          >
            <img
              onMouseOver={() => setActiveProject(index)}
              src={`/images/projects/${encodeImage(item.title)}.webp`}
              className={style.image}
              alt={`${item.title} Preview Image`}
            />
            <div
              style={{ display: activeProject === index ? "block" : "none" }}
              className={style.card_overlay}
            >
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
