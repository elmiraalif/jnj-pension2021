import React from "react"
import { Link } from "gatsby-plugin-intl"
// import RightArrow from "../../static/icons/right-arrow-red.svg"
import RightArrow from "../../static/icons/arrow-right-light.svg"

export default function Nextpage({ title, url }) {
  return (
    <div className="next-link">
      <Link to={url}>
        <div className="next-link-container">
          <h3>{title}</h3>
          <div className="next-link-icon-wrapper">
            <img src={RightArrow} alt="Next" width="20" />
          </div>
        </div>
      </Link>
    </div>
  )
}
