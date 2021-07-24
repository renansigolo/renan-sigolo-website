import Image from "next/image";
import { useState } from "react";
import style from "../styles/projects.module.css";

const allCardsData = [
  {
    title: "AE Study",
    subtitle: "Academy of Entrepreneurs Website",
    url: "aestudy.com",
  },
  {
    title: "Healthy Kids",
    subtitle: "Healthy Kids Website",
    url: "healthykids.nsw.gov.au",
  },
  {
    title: "The Constellation Project",
    subtitle: "The Constellation Project Website",
    url: "theconstellationproject.com.au",
  },
  {
    title: "Your Right To Know",
    subtitle: "Your Right To Know Website",
    url: "yourrighttoknow.com.au",
  },
  {
    title: "Canturi",
    subtitle: "Canturi Website",
    url: "shop.canturi.com",
  },
  {
    title: "TanAndCheek",
    subtitle: "Tan+Cheek Website",
    url: "tanandcheek.com",
  },
  {
    title: "Healthy Bones Australia",
    subtitle: "Healthy Bones Australia Website",
    url: "healthybonesaustralia.org.au",
  },
  {
    title: "Linde",
    subtitle: "Linde Material Handling Website",
    url: "lindemh.com.au",
  },
  {
    title: "My ADHD",
    subtitle: "My ADHD Website and Mobile App",
    url: "myadhd.app",
  },
  {
    title: "Live Design",
    subtitle: "Live Design Website",
    url: "livedesign.com.br",
  },
  {
    title: "LEAD",
    subtitle: "Kent Leaderboard",
    url: "lead.kent.edu.au",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(-1);

  return (
    <section data-test="projects-section" id="projects-section">
      <h2 className="text-3xl text-center font-medium mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {allCardsData.map((card, index) => (
          <a
            href={`https://${card.url}`}
            className={style.card}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={card.subtitle}
            onMouseOver={() => {
              setActiveProject(index);
            }}
            onMouseLeave={() => {
              setActiveProject(-1);
            }}
          >
            <Image
              src={`/images/projects/${card.title
                .toLowerCase()
                .replace(/\s+/g, "")}.webp`}
              width={360}
              height={225}
              className="rounded"
              alt={`${card.title} Preview Image`}
            />
            <div
              className={`${
                index === activeProject ? "" : "hidden"
              } bg-gray-900 bg-opacity-70 absolute top-0 left-0 w-full h-full rounded `}
            >
              <p className="absolute bottom-4 left-4 text-gray-200">
                <span className="font-bold">{card.title}</span>
                <br />
                {card.url}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
