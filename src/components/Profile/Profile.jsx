import * as style from "./Profile.module.css"

export default function Profile() {
  return (
    <div className={style.section} data-test="section-profile">
      <img
        alt="Renan Sigolo profile picture"
        className={style.avatar}
        height={128}
        loading="eager"
        src="/images/profile.webp"
        width={128}
      />
      <h1 className={style.title}>Renan Sigolo</h1>
      <p className={style.subtitle}>Software Engineer</p>
    </div>
  )
}
