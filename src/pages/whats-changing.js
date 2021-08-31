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
          {/* <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "home.h1" }),
            }}
          /> */}
          <h1 className="space-top-x">
            What’s <span>changing</span>
          </h1>
          <p className="intro-copy">
            {/* <FormattedMessage id="home.p1" /> */}
            The Johnson & Johnson Pension & Savings Program is designed to
            support your financial wellness in the moments that matter. On
            January 1, 2022, we are launching a new program that offers more
            flexibility and balances short- and long-term savings goals of our
            employees.
          </p>
        </div>

        {/* Gray callout */}
        <div className="gray-callout space-top-x">
          <div className="wrapper">
            <p>
              <span>
                <FormattedMessage id="important" />:
              </span>
              {/* <FormattedMessage id="timeline.november_callout1_p" /> */}{" "}
              Enrolling in the new program is{" "}
              <b class="italic-bold">critical</b>; your current selections will
              not roll over to the new program. Optional components are only
              available if you enrol during the enrolment period. If you don’t
              enrol, you will also miss out on Johnson & Johnson matching
              contributions and/or additional pension benefits earned.
            </p>
            <div className="heading-icon space-top-2x space-bottom-x">
              <img src={"/icons/home-icon-check.svg"} alt="" width="30" />
              <Link to="#">
                <FormattedMessage id="timeline.november_callout_icon" />
              </Link>
            </div>
          </div>
        </div>
        {/* Gray callout */}
        <div className="callout">
          <div className="wrapper">
            <img src={`/icons/icon_info.svg`} alt="" width="30" />
            <div>
              <h3>
                <FormattedMessage id="home.callout_h3" />
              </h3>
              <p>
                <FormattedMessage id="home.callout_p1" />
              </p>
              <p>
                <a to="https://jnj.hroffice.com/" target="_blank">
                  <FormattedMessage id="fyi_portal" />
                  <span class="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>{" "}
                <FormattedMessage id="home.callout_p2" />
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2
            className="space-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "home.h2" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="home.section2_p1" />
          </p>
          <p className="intro-copy">
            <FormattedMessage id="home.section2_p2" />
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
