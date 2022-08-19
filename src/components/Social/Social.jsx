import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialData } from "./social-data"
import * as style from "./Social.module.css"

export function SocialMediaItem() {
  return (
    <ul data-test="social-media-list">
      {socialData?.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        </li>
      ))}
    </ul>
  )
}

function SocialList() {
  return (
    <ul data-test="social-media-list">
      {socialData?.map((social, index) => (
        <li key={index}>
          <a
            aria-label={social.title}
            href={social?.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon color="var(--gray-500)" icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Social() {
  return (
    <div className={style.social}>
      <SocialList />
    </div>
  )
}
