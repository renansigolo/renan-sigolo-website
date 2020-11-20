const name = 'Renan Sigolo'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="section-profile">
      <Image
        src="/images/profile.jpg"
        className="rounded-full w-32"
        width={128}
        height={128}
        alt={name}
      />
      <h1 className="text-5xl my-2">{name}</h1>
      <p className="text-2xl font-light">Software Engineer</p>
      <style jsx>{`
        .section-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
        }
      `}</style>
    </div>
  )
}
