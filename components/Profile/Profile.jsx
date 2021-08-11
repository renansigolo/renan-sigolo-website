import Image from "next/image";
import style from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={style.section} data-test="section-profile">
      <Image
        src="/images/profile.webp"
        className={style.avatar}
        width={128}
        height={128}
        alt="Renan Sigolo profile picture"
      />
      <h1 className={style.title}>Renan Sigolo</h1>
      <p className="text-xl font-light">Software Engineer</p>
    </div>
  );
}
