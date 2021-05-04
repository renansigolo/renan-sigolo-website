const name = 'Renan Sigolo'
import style from './profile.module.css'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className={style.section}>
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
