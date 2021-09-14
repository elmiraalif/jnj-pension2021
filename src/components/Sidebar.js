import React, { useState } from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Sidebar() {
  const [nav, showNav] = useState(false)
  const intl = useIntl()
  return (
    <div className="sidebar">
      <Header
        onChange={() => {
          showNav(!nav)
        }}
      />
      <div
        className="sidebar-content"
        style={{
          maxHeight: nav === false ? `0` : `150vh`,
        }}
      >
        <div className="nav">
          <div className="nav-wrapper">
            <Nav />
            <a
              href={intl.formatMessage({ id: "benefit_site" })}
              className="btn btn-red"
            >
              {intl.formatMessage({ id: "header.red_button" })}
            </a>
            <a
              href={intl.formatMessage({ id: "header.href_outline" })}
              target="_blank"
              className="btn btn-outline"
            >
              {intl.formatMessage({ id: "header.outline_button" })}
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
