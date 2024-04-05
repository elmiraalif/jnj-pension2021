import { StaticImage } from "gatsby-plugin-image"
import { withPrefix } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { useIntl } from "react-intl"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExtLink from "../../static/icons/arrow-up-right-thin.svg"
import ExtLinkWhite from "../../static/icons/arrow-up-right-thin-white.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

export default function Leaving() {
  const intl = useIntl()
  const primary = `#eb1700`
  const border = `#d6d1cb`
  const accent = `#cc0299`
  const Icon = withPrefix("/icons/component_icon.svg")
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page8.title" })}</title>
      </Helmet>
      <div id="page08" class="main-content">
        {/* <StaticImage src="../images/headers/banner08.jpg" alt="banner" /> */}
        <img
          src={withPrefix("/headers/banner08.jpg")}
          alt="Banner"
          class="banner-image"
        />

        <div className="wrapper">
          <h1
            className="space-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page8.copy1.title" }),
            }}
          />
          <Accordion
            border={border}
            title={intl.formatMessage({ id: "core_component" })}
            icon={Icon}
            color={primary}
          >
            <div className="acc-box secondary">
              {intl.formatMessage({ id: "core_db" })}
            </div>
            <p className="space-top-2x space-bottom-x">
              <FormattedMessage id="page8.accordion1.p" />
            </p>
            <div className="callout-pointer">
              <p className="bold">
                <FormattedMessage id="page8.accordion1.bold" />
              </p>
              <p>
                <FormattedMessage id="page8.accordion1.note" />{" "}
                <a href="https://jnj.hroffice.com/" target="_blank">
                  <FormattedMessage id="fyb_portal" />
                  <span className="link-icon">
                    &nbsp;
                    <img src={ExtLink} alt="" className="external-link" />
                  </span>
                </a>
              </p>
            </div>
            <div className="space-x"></div>
          </Accordion>
          <Accordion
            border={border}
            title={intl.formatMessage({ id: "optional_components" })}
            icon={Icon}
            color={primary}
          >
            <div className="acc-box primary">
              {intl.formatMessage({ id: "db_option" })}
            </div>
            <div className="wrapper-center">
              <Accordion
                border={border}
                title={intl.formatMessage({ id: "optional_db" })}
                icon={Icon}
                color={primary}
              >
                <p>
                  <FormattedMessage id="page8.accordion2.acc1.p" />
                </p>
                <div className="callout-pointer">
                  <p className="bold">
                    <FormattedMessage id="page8.accordion2.acc1.bold" />
                  </p>
                  <p>
                    <FormattedMessage id="page8.accordion2.acc1.note" />{" "}
                    <a href="https://jnj.hroffice.com/" target="_blank">
                      <FormattedMessage id="fyb_portal" />
                      <span className="link-icon">
                        &nbsp;
                        <img src={ExtLink} alt="" className="external-link" />
                      </span>
                    </a>
                  </p>
                </div>
              </Accordion>
            </div>
            <div className="acc-box accent">
              {intl.formatMessage({ id: "non_db_options" })}
            </div>
            <div className="wrapper-center">
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "dc" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion2.acc2.p1" />
                </p>
                <p>
                  <FormattedMessage id="page8.accordion2.acc2.p2" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "rrsp" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion2.acc3.p1" />
                </p>
                <p>
                  <FormattedMessage id="page8.accordion2.acc3.p2" />{" "}
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
                  </a>{" "}
                  <FormattedMessage id="page8.accordion2.acc3.and" />{" "}
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
                  <FormattedMessage id="page8.accordion2.acc3.p3" />{" "}
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "oac" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion2.acc4.p1" />{" "}
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
                  . <FormattedMessage id="page8.accordion2.acc4.p2" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "tfsa" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion2.acc5.p" />
                </p>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "non_registered" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion2.acc6.p" />
                </p>
              </Accordion>
            </div>
          </Accordion>
        </div>
        <div className="callout space-2x">
          <div className="wrapper">
            <img src={withPrefix("/icons/icon_info.svg")} alt="" width="30" />
            <div>
              <h3>
                <FormattedMessage id="page8.callout.title" />
              </h3>
              <p>
                <FormattedMessage id="page8.callout.p1" />
              </p>
              <p>
                <FormattedMessage id="page8.callout.p2" />{" "}
                <a
                  href={intl.formatMessage({ id: "page8.callout.href" })}
                  target="_blank"
                >
                  <FormattedMessage id="page8.callout.link" />
                  <span className="link-icon">
                    &nbsp;
                    <img src={ExtLinkWhite} alt="" className="external-link" />
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2
            className="space-bottom-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page8.copy2.title" }),
            }}
          />
          <Accordion
            border={border}
            title={intl.formatMessage({ id: "core_component" })}
            icon={Icon}
            color={primary}
          >
            <div className="acc-box secondary">
              {intl.formatMessage({ id: "core_db" })}
            </div>
            <div className="bold space-2x">
              <FormattedMessage id="page8.copy2.either" />
            </div>
            <ul>
              <li>
                <FormattedMessage id="page8.accordion3.li1" />
              </li>
              <li>
                <FormattedMessage id="page8.accordion3.li2" />
              </li>
            </ul>
          </Accordion>
          <Accordion
            border={border}
            title={intl.formatMessage({ id: "optional_components" })}
            icon={Icon}
            color={primary}
          >
            <div className="acc-box primary">
              {intl.formatMessage({ id: "db_option" })}
            </div>
            <div className="wrapper-center">
              <Accordion
                border={border}
                title={intl.formatMessage({ id: "optional_db" })}
                icon={Icon}
                color={primary}
              >
                <div className="bold space-bottom-2x">
                  <FormattedMessage id="page8.copy2.either" />
                </div>
                <ul>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc1.li1" />
                  </li>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc1.li2" />
                  </li>
                </ul>
              </Accordion>
            </div>
            <div className="acc-box accent">
              {intl.formatMessage({ id: "non_db_options" })}
            </div>
            <div className="wrapper-center">
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "dc" })}
              >
                {/* <p>
                  <FormattedMessage id="page8.accordion4.acc2.p" />{" "}
                  <span className="bold">
                    <FormattedMessage id="page8.copy2.you_can" />
                  </span>
                </p> */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: "page8.accordion4.acc2.p",
                    }),
                  }}
                />
                <ul>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc2.li1" />
                  </li>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc2.li2" />
                  </li>
                </ul>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "rrsp" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion4.acc3.p1" />{" "}
                  <span className="bold">
                    <FormattedMessage id="page8.copy2.you_can" />
                  </span>
                </p>
                <ul>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc3.li1" />
                  </li>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc3.li2" />
                  </li>
                </ul>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "oac" })}
              >
                <ul>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc4.li1" />
                  </li>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc4.li2" />
                  </li>
                </ul>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "tfsa" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion4.acc5.p" />{" "}
                  <span className="bold">
                    <FormattedMessage id="page8.copy2.you_can" />
                  </span>
                </p>
                <ul>
                  <li>
                    <FormattedMessage id="page8.accordion4.acc5.li1" />
                  </li>

                  <li className="space-top-x">
                    <FormattedMessage id="page8.accordion4.acc5.li2" />
                  </li>
                </ul>
              </Accordion>
              <Accordion
                border={border}
                icon={Icon}
                color={primary}
                title={intl.formatMessage({ id: "non_registered" })}
              >
                <p>
                  <FormattedMessage id="page8.accordion4.acc6.p" />
                </p>
              </Accordion>
            </div>
          </Accordion>
          <NextPage
            title={intl.formatMessage({ id: "nav.item9" })}
            url="/questions"
          />
        </div>
      </div>
    </Layout>
  )
}
