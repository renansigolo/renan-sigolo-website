import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialData } from "./social-data"
import * as style from "./Social.module.css"

function SocialList() {
  return (
    <ul data-test="social-media-list">
      {socialData?.map((social, index) => (
        <li key={index}>
          <a href={social?.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon} color="var(--gray-500)" />
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
