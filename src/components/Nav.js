import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

export default function Nav() {
  const intl = useIntl()



  return (
    <nav>
      <ul className="menu">
        <li>
          <Link
            to="/"
            activeClassName="active"
          >
            {intl.formatMessage({ id: "nav.item1" })}
          </Link>
        </li>
        <li>
          <Link to="/pension-savings-program" activeClassName="active">
            {intl.formatMessage({ id: "nav.item2" })}
          </Link>
        </li>
        <li>
          <Link to="/contributions" activeClassName="active">
            {intl.formatMessage({ id: "nav.item3" })}
          </Link>
        </li>
        <li>
          <Link to="/choose-right-options" activeClassName="active">
            {intl.formatMessage({ id: "nav.item4" })}
          </Link>
        </li>
        <li>
          <Link to="/scenarios" activeClassName="active">
            {intl.formatMessage({ id: "nav.item5" })}
          </Link>
        </li>
        <li>
          <Link to="/enrol" activeClassName="active">
            {intl.formatMessage({ id: "nav.item6" })}
          </Link>
        </li>
        <li>
          <Link to="/managing" activeClassName="active">
            {intl.formatMessage({ id: "nav.item7" })}
          </Link>
        </li>
        <li>
          <Link to="/leaving" activeClassName="active">
            {intl.formatMessage({ id: "nav.item8" })}
          </Link>
        </li>
        <li>
          <Link to="/questions" activeClassName="active">
            {intl.formatMessage({ id: "nav.item9" })}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
