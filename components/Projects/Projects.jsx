import Image from "next/image";
import { useState } from "react";
import { projectsData } from "./projects-data.ts";
import style from "./Projects.module.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(-1);

  const encodeImage = (imageUrl) => {
    return imageUrl.toLowerCase().replace(/\s+/g, "");
  };

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
            onMouseOver={() => {
              setActiveProject(index);
            }}
            onMouseLeave={() => {
              setActiveProject(-1);
            }}
          >
            <Image
              src={`/images/projects/${encodeImage(item.title)}.webp`}
              width={360}
              height={225}
              className={style.rounded}
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
  );
}
