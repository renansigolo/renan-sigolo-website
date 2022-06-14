import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Script from "next/script"
import { useEffect } from "react"
import style from "./Layout.module.css"
import { socialMediaData } from "./social-media-data.ts"
const siteTitle = "Renan Sigolo Website"

export function SocialMediaItem() {
  return (
    <ul data-test="social-media-list">
      {socialMediaData.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Layout({ children }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag("js", new Date())
      gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title
      })
    }
  })

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta content={siteTitle} name="description" />
        <meta content="#064e3b" name="theme-color" />
        <meta content="Renan Sigolo" name="apple-mobile-web-app-title" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta content={siteTitle} name="og:title" />
        <meta content="summary_large_image" name="twitter:card" />

        <title>{siteTitle}</title>

        <link href="/favicon.ico" rel="icon" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/apple-icon.png" rel="apple-touch-icon"></link>
      </Head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <main className={style.main}>{children}</main>

      <footer className={style.social}>
        <SocialMediaItem />
      </footer>
    </div>
  )
}
