import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExtLink from "../../static/icons/arrow-up-right-thin.svg"

export default function Page02() {
  const intl = useIntl()
  const primary = `#eb1700`
  const accent = `#eb1700`
  const border = `#d6d1cb`
  const Icon = "../icons/component_icon.svg"
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page2.title" })}</title>
      </Helmet>
      <div className="main-content"></div>
      <div id="page02" class="main-content">
        {/* <StaticImage src="../images/headers/banner02.jpg" alt="Banner" /> */}
        <img
          src={withPrefix("../headers/banner02.jpg")}
          alt="Banner"
          class="banner-image"
        />

        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page2.copy1.title" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="page2.copy1.p1" />
          </p>
          <p>
            <FormattedMessage id="page2.copy1.p2" />
          </p>
          <div className="space-top-x">&nbsp;</div>
          <iframe
            width="100%"
            height="365"
            src={intl.formatMessage({ id: "page2.video.src" })}
            title={intl.formatMessage({ id: "page2.video.title" })}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="space-bottom-2x">&nbsp;</div>
          <p>
            <FormattedMessage id="page2.copy2.p" />{" "}
            <span className="bold">
              <FormattedMessage id="page2.copy2.bold" />
            </span>
          </p>
          <Accordion
            title={intl.formatMessage({ id: "core_component" })}
            icon={Icon}
            color={primary}
            border={border}
          >
            <div className="acc-box secondary">
              <FormattedMessage id="core_db" />
            </div>
            <p className="space-2x">
              <FormattedMessage id="page2.accordion1" />
            </p>
          </Accordion>
          <Accordion
            title={intl.formatMessage({ id: "optional_components" })}
            icon={Icon}
            color={primary}
            border={border}
          >
            <div className="acc-box primary">
              <FormattedMessage id="db_option" />
            </div>
            <div className="wrapper-center">
              <Accordion
                title={intl.formatMessage({ id: "optional_db" })}
                icon={Icon}
                color={primary}
              >
                <p>
                  <FormattedMessage id="page2.accordion2" />
                </p>
              </Accordion>
            </div>
            <div className="acc-box accent">
              <FormattedMessage id="non_db_options" />
            </div>
            <div className="wrapper-center">
              <Accordion
                icon={Icon}
                color={accent}
                border={border}
                title={intl.formatMessage({ id: "dc" })}
              >
                <p>
                  <FormattedMessage id="page2.accordion3" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={accent}
                title={intl.formatMessage({ id: "rrsp" })}
                border={border}
              >
                <p>
                  <FormattedMessage id="page2.accordion4.p1" />{" "}
                  <a
                    href={intl.formatMessage({ id: "home_buyers_href" })}
                    target="_blank"
                  >
                    <FormattedMessage id="home_buyers_1" />{" "}
                    <span className="link-icon">
                      <span style={{ textDecoration: "underline" }}>
                        <FormattedMessage id="home_buyers_2" />
                      </span>
                      &nbsp;
                      <img src={ExtLink} alt="" className="external-link" />
                    </span>
                  </a>
                  <FormattedMessage id="page2.accordion4.p2" />{" "}
                  <a
                    href={intl.formatMessage({ id: "lifelong_learning_href" })}
                    target="_blank"
                  >
                    <FormattedMessage id="lifelong_learning_1" />{" "}
                    <span className="link-icon">
                      <span style={{ textDecoration: "underline" }}>
                        <FormattedMessage id="lifelong_learning_2" />
                      </span>
                      &nbsp;
                      <img src={ExtLink} alt="" className="external-link" />
                    </span>
                  </a>
                  <FormattedMessage id="page2.accordion4.p3" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={accent}
                title={intl.formatMessage({ id: "oac" })}
              >
                <p>
                  <FormattedMessage id="page2.accordion5.p1" />{" "}
                  <a
                    href={intl.formatMessage({ id: "cra_maximum_href" })}
                    target="_blank"
                  >
                    <FormattedMessage id="cra_maximum" />
                    <span className="link-icon">
                      &nbsp;
                      <img src={ExtLink} alt="" className="external-link" />
                    </span>
                  </a>
                  <FormattedMessage id="page2.accordion5.p2" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={accent}
                title={intl.formatMessage({ id: "tfsa" })}
              >
                <p>
                  <FormattedMessage id="page2.accordion6" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={accent}
                title={intl.formatMessage({ id: "non_registered" })}
              >
                <p>
                  <FormattedMessage id="page2.accordion7" />
                </p>
              </Accordion>
            </div>
          </Accordion>
          <NextPage
            title={intl.formatMessage({ id: "nav.item3" })}
            url="/contributions"
          />
        </div>
      </div>
    </Layout>
  )
}
