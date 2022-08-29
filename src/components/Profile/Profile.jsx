import * as style from "./Profile.module.css"

export default function Profile() {
  return (
    <section className={style.section} data-test="section-profile">
      <img
        alt="Renan Sigolo Profile"
        className={style.avatar}
        height={128}
        loading="eager"
        src="/images/profile-512.webp"
        width={128}
      />
      <h1 className={style.title}>Renan Sigolo</h1>
      <p className={style.subtitle}>Software Engineer</p>
    </section>
  )
}
