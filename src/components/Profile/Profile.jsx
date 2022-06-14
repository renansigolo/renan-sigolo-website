import * as style from "./Profile.module.css"

export default function Profile() {
  return (
    <div className={style.section} data-test="section-profile">
      <img
        src="/images/profile.jpg"
        className={style.avatar}
        width={128}
        height={128}
        alt="Renan Sigolo profile picture"
      />
      <h1 className={style.title}>Renan Sigolo</h1>
      <p className={style.subtitle}>Software Engineer</p>
    </div>
  )
}
