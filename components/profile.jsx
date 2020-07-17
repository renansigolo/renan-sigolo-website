const name = 'Renan Sigolo'

export default function Profile() {
  return (
    <div className="section-profile">
      <img src="/images/profile.jpg" className="rounded-full w-32" alt={name} />
      <h1 className="text-5xl">{name}</h1>
      <p className="text-2xl">Software Engineer</p>
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
