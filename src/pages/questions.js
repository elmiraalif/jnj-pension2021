import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Submit from "../components/Submit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExtLink from "../../static/icons/arrow-up-right-thin.svg"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { withPrefix } from "gatsby"

export default function Questions() {
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page9.title" })}</title>
      </Helmet>

      <div id="page09" class="main-content">
        {/* <StaticImage src="../images/headers/banner09.jpg" alt="Banner" /> */}
        <img
          src={withPrefix("/headers/banner09.jpg")}
          alt="Banner"
          class="banner-image"
        />

        <div className="wrapper">
          <h1 className="space-top-x">
            {intl.formatMessage({ id: "page9.title" })}
          </h1>
          {/* <Submit /> */}
          <div className="content-container">
            <div className="col">
              <h3 className="space-x" style={{ lineHeight: "140%" }}>
                <FormattedMessage id="page9.left_col.title" />
              </h3>
              <div className="heading-icon">
                <img
                  src={withPrefix("/icons/mail.png")}
                  alt=""
                  style={{ maxWidth: "20px" }}
                />
                <a href="mailto:fyb@hroffice.com">fyb@hroffice.com</a>
              </div>
              <div className=" space-2x heading-icon">
                <img
                  src={withPrefix("/icons/phone.png")}
                  alt=""
                  style={{ maxWidth: "20px" }}
                />

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
                    <img src={ExtLink} alt="" className="external-link" />
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
