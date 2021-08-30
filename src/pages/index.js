import React from "react"
import "../styles/global.scss"
import { Link } from "gatsby"
import {
  home,
  header,
  wrapper,
  content,
  content_body,
  buttons,
  btn,
  content_image,
} from "../styles/index.module.scss"
import Logo from "../images/logo.svg"
import Language from "../components/LandingLanguage"


export default function Home() {
  return (
    <div className={home}>
      <div className={`${header} ${wrapper}`}>
        <img src={Logo} alt="Logo" />
      </div>
      <main className={content}>
        <div className={`${content_body} ${wrapper}`}>
          <h1>Supporting you in the moments that matter</h1>
          <div className={buttons}>
            <Link to="/whats-changing" className={btn}>
              Explore the Pension & Savings Program
            </Link>
            <Link to="http://jnjbenefitsguide.ca/" className={btn}>
              Explore the Benefits Plan
            </Link>
          </div>
          <Language />
        </div>
        <div className={content_image}></div>
      </main>
    </div>
  )
}
