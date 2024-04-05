import React from "react"
import { withPrefix } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Table from "../components/Table"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExtLink from "../../static/icons/arrow-up-right-thin.svg"

export default function Page03() {
  const intl = useIntl()
  const primary = `#eb1700`
  const secondary = `#5e5047`
  const accent = `#eb1700`
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page3.title" })}</title>
      </Helmet>
      <div id="page03" class="main-content">
        {/* <StaticImage src="../images/headers/banner03.jpg" alt="Banner" /> */}
        <img
          src={withPrefix("/headers/banner03.jpg")}
          alt="Banner"
          class="banner-image"
        />

        <div className="wrapper">
          <h1 className="space-x">
            <FormattedMessage id="nav.item3" />
          </h1>

          <div className="heading-icon space-2x">
            <img
              src={withPrefix("/icons/one-red.svg")}
              alt="One"
              style={{ maxWidth: "30px" }}
            />
            <h3>
              <FormattedMessage id="page3.db" />
            </h3>
          </div>
          <Table
            title={intl.formatMessage({ id: "core_db" })}
            color={secondary}
          >
            <div className="subtitle">
              <img
                src={withPrefix("/icons/icon_dollar.svg")}
                alt=""
                style={{ maxWidth: "35px" }}
              />
              <h4
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page3.your_contribution" }),
                }}
              />
            </div>
            <div className="subtitle">
              <img
                src={withPrefix("/icons/icon_pig.svg")}
                alt=""
                style={{ maxWidth: "35px" }}
              />
              <h4
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page3.jj_contribution" }),
                }}
              />
            </div>

            <div className="cell">
              <FormattedMessage id="page3.core_db.left" />
            </div>

            <div className="cell">
              <FormattedMessage id="page3.core_db.right" />
            </div>
          </Table>
          <Table
            title={intl.formatMessage({ id: "optional_db" })}
            color={secondary}
          >
            <div className="cell">
              <FormattedMessage id="page3.optional_db.left" />
            </div>
            <div className="cell">
              <FormattedMessage id="page3.optional_db.right" />
            </div>
          </Table>
          <div className="divider"></div>
          <div className="heading-icon space-2x">
            <img
              src={withPrefix("/icons/two-red.svg")}
              alt="Two"
              style={{ maxWidth: "30px" }}
            />
            <h3>
              <FormattedMessage id="page3.non_db" />
            </h3>
          </div>
          <Table
            title={intl.formatMessage({ id: "page3.dc.dc" })}
            color={accent}
          >
            <div className="subtitle">
              <img
                src={withPrefix("/icons/icon_dollar.svg")}
                alt=""
                style={{ maxWidth: "35px" }}
              />
              <h4
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page3.your_contribution" }),
                }}
              />
            </div>
            <div className="subtitle">
              <img
                src={withPrefix("/icons/icon_pig.svg")}
                alt=""
                style={{ maxWidth: "35px" }}
              />
              <h4
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page3.jj_contribution" }),
                }}
              />
            </div>
            <div className="cell list">
              <ul>
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.dc.left1" }),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.dc.left2" }),
                  }}
                />
              </ul>
            </div>
            <div className="cell list">
              <p className="match">
                <span>
                  <FormattedMessage id="page3.match_100" />
                </span>
              </p>
              <ul>
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.dc.right1" }),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.dc.right2" }),
                  }}
                />
              </ul>
            </div>
          </Table>
          <Table
            title={intl.formatMessage({ id: "page3.rrsp.rrsp" })}
            color={accent}
          >
            <div className="cell top">
              <FormattedMessage id="page3.rrsp.left1" />{" "}
              <a
                href={intl.formatMessage({ id: "cra_maximum_href" })}
                target="_blank"
              >
                <FormattedMessage id="cra_maximum" />
                <span className="link-icon">
                  &nbsp;
                  <img src={ExtLink} alt="" className="external-link" />
                </span>
              </a>{" "}
              <FormattedMessage id="page3.rrsp.left2" />
            </div>
            <div className="cell list">
              <p className="match">
                <span>
                  <FormattedMessage id="page3.match_100" />
                </span>
              </p>
              <ul>
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.rrsp.right1" }),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.rrsp.right2" }),
                  }}
                />
              </ul>
              <div className="callout-pointer">
                <span>
                  <FormattedMessage id="note" />
                </span>{" "}
                <FormattedMessage id="page3.rrsp.callout" />
              </div>
              <div className="space-bottom-x"></div>
            </div>
          </Table>
          <Table
            title={intl.formatMessage({ id: "page3.tfsa.tfsa" })}
            color={accent}
          >
            <div className="cell top">
              <FormattedMessage id="page3.tfsa.left1" />{" "}
              <a
                href={intl.formatMessage({ id: "cra_maximum_href" })}
                target="_blank"
              >
                <FormattedMessage id="cra_maximum" />

                <span className="link-icon">
                  &nbsp;
                  <img src={ExtLink} alt="" className="external-link" />
                </span>
              </a>{" "}
              <FormattedMessage id="page3.tfsa.left2" />
            </div>
            <div className="cell list">
              <p className="match">
                <span>
                  <FormattedMessage id="page3.match_50" />
                </span>
              </p>
              <ul>
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.tfsa.right1" }),
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page3.tfsa.right2" }),
                  }}
                />
              </ul>
            </div>
          </Table>
          <span
            style={{ fontSize: ".7rem", marginTop: "1em", display: "block" }}
          >
            <FormattedMessage id="page3.sub" />
          </span>
        </div>
        <div className="space-2x"></div>
        <div className="callout-gray">
          <div className="wrapper">
            <h3 className="space-top-x">
              <FormattedMessage id="page3.callout1.title" />
            </h3>
            <p>
              <FormattedMessage id="page3.callout1.p1" />{" "}
              <em className="bold">
                <FormattedMessage id="page3.callout1.bold" />
              </em>{" "}
              <FormattedMessage id="page3.callout1.p2" />
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "page3.callout1.p3" }),
              }}
            />
          </div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <img
              src={withPrefix("/icons/icon_info.svg")}
              alt=""
              style={{ maxWidth: "30px" }}
            />
            <div>
              <h3>
                <FormattedMessage id="page3.callout2.title" />
              </h3>
              <p>
                <FormattedMessage id="page3.callout2.p" />
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper" style={{ paddingTop: 0 }}>
          <NextPage
            title={intl.formatMessage({ id: "nav.item4" })}
            url="/choose-right-options"
          />
        </div>
      </div>
    </Layout>
  )
}
