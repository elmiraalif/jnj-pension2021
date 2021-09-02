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
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"


export default function Home() {
  const intl = useIntl()
  return (
    <>
      <Helmet>
        <title>Johnson & Johnson </title>
      </Helmet>
      <div className={home}>
        <div className={`${header} ${wrapper}`}>
          <img src={Logo} alt="Logo" />
        </div>
        <main className={content}>
          <div className={`${content_body} ${wrapper}`}>
            <h1>{intl.formatMessage({ id: "index.title" })}</h1>
            <div className={buttons}>
              <Link to="/whats-changing" className={btn}>
                {intl.formatMessage({ id: "index.btn_pension" })}
              </Link>
              <a href="http://jnjbenefitsguide.ca/" className={btn}>
                {intl.formatMessage({ id: "index.btn_benefit" })}
              </a>
            </div>
            <Language />
          </div>
          <div className={content_image}></div>
        </main>
      </div>
    </>
  )
}
