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
import ReactGA from 'react-ga'

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
  ReactGA.initialize('UA-82193310-2')

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content={siteTitle} />
        <meta name="theme-color" content="#ff7496" />
        <meta name="apple-mobile-web-app-title" content="Renan Sigolo" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>

      {/* <header className={style.header}>Header</header> */}

      <main className={style.main}>{children}</main>

      <footer className={style.social}>
        <SocialMedia></SocialMedia>
      </footer>
    </div>
  )
}
