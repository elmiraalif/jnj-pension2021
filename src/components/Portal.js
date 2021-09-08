import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

export default function Portal() {
  const Arrow = "/icons/right-arrow-red.svg"
  const intl = useIntl()
  return (
    <div className="portal">
      <div className="title space-2x">
        <a href="https://jnj.hroffice.com/" target="_blank">
          <FormattedMessage id="fyb_portal" />{" "}
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            style={{ marginLeft: "3px" }}
          />
        </a>
      </div>
      {/* <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "portal.item1.title" }),
            }}
          />
          <p>
            <FormattedMessage id="portal.item1.p" />
          </p>
        </div>
      </div> */}
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>
            <FormattedMessage id="portal.item2.title" />
          </h4>
          <p>
            <FormattedMessage id="portal.item2.p" />
          </p>
        </div>
      </div>
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>
            <FormattedMessage id="portal.item3.title" />
          </h4>
          <p>
            <FormattedMessage id="portal.item3.p" />
          </p>
        </div>
      </div>
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>
            <FormattedMessage id="portal.item4.title" />
          </h4>
          <p>
            <FormattedMessage id="portal.item4.p" />
          </p>
        </div>
      </div>

      <h3 className="title">
        <FormattedMessage id="portal.copy.title" />
      </h3>
      <p>
        <FormattedMessage id="portal.copy.p" />{" "}
        <a
          href={intl.formatMessage({ id: "portal.copy.href" })}
          target="_blank"
        >
          <FormattedMessage id="portal.copy.link" />
          <span className="link-icon">
            &nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>
        .
      </p>
    </div>
  )
}
