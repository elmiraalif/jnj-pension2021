import React from "react"
import { useIntl } from "gatsby-plugin-intl"

export default function Header(props) {
  const intl = useIntl()
  return (
    <header className="header">
      <div className="wrapper header-wrapper">
        <div className="site-title">{intl.formatMessage({ id: "title" })}</div>

        <div
          className="open"
          onClick={() => {
            props.onChange()
          }}
          tabIndex="0"
          role="button"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  )
}
