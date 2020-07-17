const name = 'Renan Sigolo'

export default function Profile() {
  return (
    <>
      <img
        src="/images/profile.jpg"
        className="headerHomeImage borderCircle"
        alt={name}
      />
      <h1 className="text-5xl">{name}</h1>
      <p className="description">
        A Brazilian Software Engineer based in Sydney
      </p>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        .headerHomeImage {
          width: 8rem;
          height: 8rem;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .borderCircle {
          border-radius: 9999px;
        }
      `}</style>
    </>
  )
}
