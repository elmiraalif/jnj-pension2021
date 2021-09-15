import React from "react"
import FooterIcon from "../images/footer-icon01.svg"
import Language from "./Language"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
export default function Footer() {
  const intl = useIntl()
  return (
    <footer className="footer">
      <div className="nav-wrapper">
        <img src={FooterIcon} alt="" width="35" />
        <h4>{intl.formatMessage({ id: "footer.h4" })}</h4>
        <p>{intl.formatMessage({ id: "footer.p1" })}</p>
        <p>{intl.formatMessage({ id: "footer.p2" })}</p>
        <Language />
        <div className="logo">
          <img src="/icons/logo.svg" alt="" style={{ width: "127px" }} />
        </div>
      </div>
    </footer>
  )
}
