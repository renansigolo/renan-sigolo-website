import Image from "next/image";
import { useState } from "react";
import { projectsData } from "./projects-data.ts";
import style from "./Projects.module.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(-1);

  return (
    <section data-test="projects-section" id="projects-section">
      <h2 className="text-3xl text-center font-medium mb-8">My Projects</h2>
      <div
        role="list"
        className="group grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center"
      >
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
              src={`/images/projects/${item.title
                .toLowerCase()
                .replace(/\s+/g, "")}.webp`}
              width={360}
              height={225}
              className="rounded"
              alt={`${item.title} Preview Image`}
            />
            <div
              className={`${
                index === activeProject ? "" : "hidden"
              } bg-gray-900 bg-opacity-70 absolute top-0 left-0 w-full h-full rounded `}
            >
              <p className="absolute bottom-4 left-4 text-gray-200">
                <span className="font-bold">{item.title}</span>
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
