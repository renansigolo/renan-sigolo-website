import Head from 'next/head'
import style from './layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const name = 'Renan Sigolo'
export const siteTitle = 'Renan Sigolo Website'

export function SocialMedia() {
  const allSocialMediaData = [
    {
      icon: faTwitter,
      title: 'Twitter',
      url: 'https://twitter.com/renan_sigolo',
    },
    {
      icon: faGithub,
      title: 'GitHub',
      url: 'https://github.com/renansigolo',
    },
    {
      icon: faLinkedinIn,
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/renansigolo',
    },
    {
      icon: faInstagram,
      title: 'Instagram',
      url: 'https://instagram.com/renan_sigolo',
    },
    {
      icon: faFacebook,
      title: 'Facebook',
      url: 'https://facebook.com/renansigoloferreira',
    },
  ]
  return (
    <ul>
      {allSocialMediaData.map((social, index) => (
        <li key={index}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon} size="lg" listItem />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
        />
      </Head>

      {/* <header className={style.header}>Header</header> */}

      <main className={style.main}>{children}</main>

      <footer className={style.social}>
        <SocialMedia></SocialMedia>
      </footer>
    </div>
  )
}
