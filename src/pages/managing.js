import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "react-intl"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import Portal from "../components/Portal"
import Nextpage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExtLink from "../../static/icons/arrow-up-right-thin.svg"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

export default function Managing() {
  const intl = useIntl()
  const primary = `#eb1700`
  const secondary = `#5e5047`
  const white = `white`
  const accent = `#db00a6`
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page7.title" })}</title>
      </Helmet>
      <div id="page07" class="main-content">
        {/* <StaticImage src="../images/headers/banner07.jpg" alt="Banner" /> */}
        <img
          src={withPrefix("/headers/banner07.jpg")}
          alt="Banner"
          class="banner-image"
        />

        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page7.copy1.title" }),
            }}
          />
          <p className="intro-copy space-bottom-2x">
            <FormattedMessage id="page7.copy1.p1" />
          </p>
          <Accordion
            title={intl.formatMessage({ id: "optional_db" })}
            color="#fff"
            border={secondary}
            bg={secondary}
          >
            <p className="space-2x">
              <FormattedMessage id="page7.accordion1.p" />
            </p>
          </Accordion>
          <div className="space-x"></div>
          <Accordion
            title={intl.formatMessage({ id: "non_db_options" })}
            color="#fff"
            bg={primary}
          >
            <p>
              <FormattedMessage id="page7.accordion2.p" />
            </p>
            <div className="wrapper-center">
              <Accordion
                title={intl.formatMessage({
                  id: "page7.accordion2.acc1.title",
                })}
                color={primary}
                icon={withPrefix("/icons/component_icon.svg")}
              >
                <p>
                  <FormattedMessage id="page7.accordion2.acc1.p1" />
                </p>
                <p>
                  <FormattedMessage id="page7.accordion2.acc1.p2" />{" "}
                  <Link to="/choose-right-options">
                    <FormattedMessage id="page7.accordion2.acc1.link" />
                  </Link>
                  .
                </p>
              </Accordion>
              <Accordion
                title={intl.formatMessage({
                  id: "page7.accordion2.acc2.title",
                })}
                color={primary}
                icon={withPrefix("/icons/contribution_icon.svg")}
              >
                <p>
                  <FormattedMessage id="page7.accordion2.acc2.p1" />
                </p>
                <div className="space-2x">
                  <div className="box">
                    <FormattedMessage id="page7.accordion2.acc2.box_title" />
                  </div>
                  <div className="wrapper-center border-box">
                    <p>
                      <FormattedMessage id="page7.accordion2.acc2.box_p" />
                    </p>
                    <div className="space-2x"></div>
                    <div className="callout-pointer">
                      <div className="bold">
                        <FormattedMessage id="note" />
                      </div>{" "}
                      <FormattedMessage id="page7.accordion2.acc2.note" />{" "}
                      <span className="bold">
                        <FormattedMessage id="page7.accordion2.acc2.bold" />{" "}
                        <a
                          href={intl.formatMessage({
                            id: "page7.accordion2.acc2.href",
                          })}
                          target="_blank"
                          className="bold"
                        >
                          <FormattedMessage id="page7.accordion2.acc2.link" />
                          <span style={{ display: "inline-flex" }}>
                            &nbsp;
                            <img
                              src={ExtLink}
                              alt=""
                              className="external-link"
                            />
                          </span>
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion
                title={intl.formatMessage({
                  id: "page7.accordion2.acc3.title",
                })}
                color={primary}
                icon={withPrefix("/icons/investment_icon.svg")}
              >
                <p>
                  <FormattedMessage id="page7.accordion2.acc3.p1" />
                </p>
                <div className="heading-icon-top">
                  <img
                    src={withPrefix("/icons/one_pink.svg")}
                    alt="One"
                    style={{ maxWidth: "25px" }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "page7.accordion2.acc3.item1",
                      }),
                    }}
                  />
                </div>
                <div className="heading-icon-top">
                  <img
                    src={withPrefix("/icons/two_pink.svg")}
                    alt="Two"
                    style={{ maxWidth: "25px" }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "page7.accordion2.acc3.item2",
                      }),
                    }}
                  />
                </div>
                <p>
                  <FormattedMessage id="page7.accordion2.acc3.p2" />{" "}
                  <a href="https://jnj.hroffice.com/" target="_blank">
                    <FormattedMessage id="fyb_portal" />
                    <span className="link-icon">
                      &nbsp;
                      <img src={ExtLink} alt="" className="external-link" />
                    </span>
                  </a>{" "}
                  <FormattedMessage id="page7.accordion2.acc3.path" />
                </p>
                <div className="divider"></div>
              </Accordion>
            </div>
          </Accordion>
          <h2 className="space-top-x">
            <FormattedMessage id="page7.copy2.title" />
          </h2>
          <p>
            <FormattedMessage id="page7.copy2.p" />
          </p>
          <div className="space-x">&nbsp;</div>
          <Portal />
          <Nextpage
            title={intl.formatMessage({ id: "nav.item8" })}
            url="/leaving"
          />
        </div>
      </div>
    </Layout>
  )
}
