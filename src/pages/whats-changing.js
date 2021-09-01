import React from "react"
import { Helmet } from "react-helmet"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Timeline from "../components/Timeline"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>Johnson & Johnson</title>
      </Helmet>
      <StaticImage src="../images/test-banner.jpg" alt="Banner" width="1920" />
      <div id="home">
        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "home.copy1.title" }),
            }}
          />

          <p
            className="intro-copy"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "home.copy1.p" }),
            }}
          />
            
        </div>

        <div className="gray-callout space-top-x">
          <div className="wrapper">
            <p>
              <span><FormattedMessage id="important" /></span>{" "}
              <FormattedMessage id="home.callout1.p1" />{" "}
              <b class="italic-bold">
                {" "}
                <FormattedMessage id="home.callout1.critical" />
              </b>
              <FormattedMessage id="home.callout1.p2" />
            </p>
            <div className="heading-icon space-top-2x space-bottom-x">
              <img src={"/icons/home-icon-check.svg"} alt="" width="30" />
              <Link to="#">
                <FormattedMessage id="home.callout1.calendar" />
              </Link>
            </div>
          </div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <img src={`/icons/icon_info.svg`} alt="" width="30" />
            <div>
              <h3>
                <FormattedMessage id="home.callout2.title" />
              </h3>
              <p>
                <FormattedMessage id="home.callout2.p1" />
              </p>
              <p>
                <a to="https://jnj.hroffice.com/" target="_blank">
                  <FormattedMessage id="fyb_portal" />
                  <span class="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>{" "}
                <FormattedMessage id="home.callout2.p2" />
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2
            className="space-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "home.copy2.title" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="home.copy2.p1" />
          </p>
          <p className="intro-copy">
            <FormattedMessage id="home.copy2.p2" />
          </p>
          <Timeline />

          <NextPage
            title={intl.formatMessage({ id: "nav.item2" })}
            url="/pension-savings-program"
          />
        </div>
      </div>
    </Layout>
  )
}
