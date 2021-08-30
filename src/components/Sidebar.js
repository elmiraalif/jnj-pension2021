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
            <Link to="#" className="btn btn-red">
              {intl.formatMessage({ id: "header.red_button" })}
            </Link>
            <Link
              to="https://www.surveymonkey.com/r/jjpension"
              target="_blank"
              className="btn btn-outline"
            >
              {intl.formatMessage({ id: "header.outline_button" })}
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
