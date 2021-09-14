import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Submit from "../components/Submit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

export default function Questions() {
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page9.title" })}</title>
      </Helmet>

      <div id="page09" class="main-content">
        <StaticImage src="../images/banner09.jpg" alt="Banner" />
        <div className="wrapper">
          <h1 className="space-x">
            {intl.formatMessage({ id: "page9.title" })}
          </h1>
          <Submit />
          <div className="content-container space-2x">
            <div className="col">
              <h3 className="space-x" style={{ lineHeight: "140%" }}>
                <FormattedMessage id="page9.left_col.title" />
              </h3>
              <div className="heading-icon">
                <img src={"/icons/mail.png"} alt="" width="20" />
                <a href="mailto:fyb@hroffice.com">fyb@hroffice.com</a>
              </div>
              <div className=" space-2x heading-icon">
                <img src={"/icons/phone.png"} alt="" width="20" />

                <div
                  className="phone"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page9.left_col.phone" }),
                  }}
                />
              </div>
            </div>
            <div className="col">
              <h3 className="space-x" style={{ lineHeight: "140%" }}>
                <FormattedMessage id="page9.right_col.title" />
              </h3>
              <p>
                <FormattedMessage id="page9.right_col.p1" />
              </p>
              <p>
                <FormattedMessage id="page9.right_col.p2" />{" "}
                <a href="https://jnj.hroffice.com/" target="_blank">
                  <FormattedMessage id="fyb_portal" />
                  <span className="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
