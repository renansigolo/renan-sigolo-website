import Image from 'next/image'
import style from '../styles/profile.module.css'

const name = 'Renan Sigolo'

export default function Profile() {
  return (
    <div className={style.section} data-cy="section-profile">
      <Image
        src="/images/profile.webp"
        className={style.avatar}
        width={128}
        height={128}
        alt={name}
      />
      <h1 className={style.title}>{name}</h1>
      <p className="text-xl font-light">Software Engineer</p>
    </div>
  )
}
