import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import RightArrow from "../../static/icons/right-arrow-red.svg"


export default function Nextpage({title, url}) {
    return (
      <div className="next-link">
        <Link to={url}>
          <div className="next-link-container">
            <h3>
            {title}
            </h3>
            <img src={RightArrow} alt="Next" width="30" />
          </div>
        </Link>
      </div>
    )
}
