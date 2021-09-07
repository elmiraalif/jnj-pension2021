import React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import Portal from "../components/Portal"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"

export default function Page04() {
  const secondary = "#0800a0"
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page4.title" })}</title>
      </Helmet>
      <StaticImage
        placeholder="none"
        src="../images/banner04.jpg"
        alt="Banner"
      />
      <div id="page04">
        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page4.copy1.title" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="page4.copy1.p1" />
          </p>
          <p class="bold">
            <FormattedMessage id="page4.copy1.bold1" />
          </p>
          <div className="heading-icon-top">
            <img src={"/icons/one-red.svg"} alt="One" width="30" />
            <p>
              <FormattedMessage id="page4.copy1.item1" />
            </p>
          </div>
          <div className="components wrapper-center">
            <img
              src={intl.formatMessage({ id: "page4.copy1.image" })}
              alt=""
              width="220"
            />
          </div>
          <div className="heading-icon-top">
            <img src={"/icons/two-red.svg"} alt="two" width="30" />
            <p>
              <FormattedMessage id="page4.copy1.item2" />
            </p>
          </div>
          <p class="bold space-x">
            <FormattedMessage id="page4.copy1.bold2" />
          </p>
          <div className="space-2x">
            <StaticImage
              placeholder="none"
              src="../images/db-nondb-video.png"
              width="700"
            />
          </div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <img src={"/icons/icon_info.svg"} alt="" width="35" />
            <div>
              <p>
                <FormattedMessage id="page4.callout1.p1" />
              </p>
              <p>
                <span
                  className="bold"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "note" }),
                  }}
                />{" "}
                <FormattedMessage id="page4.callout1.p2" />
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page4.copy2.title" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="page4.copy2.p1" />
          </p>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "page4.accordion1.title" })}
            icon="../icons/one_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  <FormattedMessage id="page4.accordion1.li1" />
                </li>
                <li>
                  <FormattedMessage id="page4.accordion1.li2" />
                </li>
              </ul>
              <div className="space-2x">
                <img
                  src={intl.formatMessage({ id: "page4.accordion1.image.src" })}
                  alt={intl.formatMessage({ id: "page4.accordion1.image.alt" })}
                  width="100%"
                />
              </div>
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "page4.accordion2.title" })}
            icon="../icons/two_pink.svg"
            color={secondary}
            svg="none"
          >
            <ul>
              <li>
                <FormattedMessage id="page4.accordion2.li1" />
              </li>
              <li>
                <FormattedMessage id="page4.accordion2.li2" />
              </li>
            </ul>
            <div className="space-2x">
              <img
                src={intl.formatMessage({ id: "page4.accordion2.image.src" })}
                alt={intl.formatMessage({ id: "page4.accordion2.image.alt" })}
                width="100%"
              />
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "page4.accordion3.title" })}
            icon="../icons/three_pink.svg"
            color={secondary}
          >
            <ul>
              <li>
                <FormattedMessage id="page4.accordion3.li1" />
              </li>
              <li>
                <FormattedMessage id="page4.accordion3.li2" />
              </li>
              <li>
                <FormattedMessage id="page4.accordion3.li3" />
              </li>
              <li>
                <FormattedMessage id="page4.accordion3.li4.p1" />{" "}
                <a
                  href={intl.formatMessage({ id: "home_buyers_href" })}
                  target="_blank"
                >
                  <FormattedMessage id="home_buyers_1" />
                  <span
                    className="link-icon"
                    style={{ display: "inline-block" }}
                  >
                    <FormattedMessage id="home_buyers_2" />
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>{" "}
                <FormattedMessage id="page4.accordion3.li4.and" />{" "}
                <a
                  href={intl.formatMessage({ id: "lifelong_learning_href" })}
                  target="_blank"
                >
                  <FormattedMessage id="lifelong_learning_1" />

                  <span
                    className="link-icon"
                    style={{ display: "inline-block" }}
                  >
                    <FormattedMessage id="lifelong_learning_2" />
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>
                <FormattedMessage id="page4.accordion3.li4.p2" />
              </li>
            </ul>
            <div className="space-2x">
              <img
                src={intl.formatMessage({ id: "page4.accordion3.image.src" })}
                alt={intl.formatMessage({ id: "page4.accordion3.image.alt" })}
                width="100%"
              />
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "page4.accordion4.title" })}
            icon="../icons/four_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  <FormattedMessage id="page4.accordion4.li1" />
                </li>
                <li>
                  <FormattedMessage id="page4.accordion4.li2" />
                </li>
              </ul>
              <div className="space-2x">
                <img
                  src={intl.formatMessage({ id: "page4.accordion4.image.src" })}
                  alt={intl.formatMessage({ id: "page4.accordion3.image.alt" })}
                  width="100%"
                />
              </div>
            </div>
          </Accordion>

          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "page4.accordion5.title" })}
            icon="../icons/five_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  <FormattedMessage id="page4.accordion5.li1" />
                  <br />
                  <div className="space-x">
                    <span
                      className="bold"
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({ id: "note" }),
                      }}
                    />{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                          id: "page4.accordion5.note",
                        }),
                      }}
                    />
                  </div>
                </li>
                <li>
                  <FormattedMessage id="page4.accordion5.li2" />
                </li>
              </ul>
              <div className="space-2x">
                <img
                  src={intl.formatMessage({ id: "page4.accordion5.image.src" })}
                  alt={intl.formatMessage({ id: "page4.accordion4.image.alt" })}
                  width="100%"
                />
              </div>
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "page4.accordion6.title" })}
            icon="../icons/six_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  <FormattedMessage id="page4.accordion6.li1" />
                </li>
                <li>
                  <FormattedMessage id="page4.accordion6.li2" />
                </li>
                <li>
                  <FormattedMessage id="page4.accordion6.li3" />
                </li>
              </ul>
              <div className="space-2x">
                <img
                  src={intl.formatMessage({ id: "page4.accordion6.image.src" })}
                  alt={intl.formatMessage({ id: "page4.accordion5.image.alt" })}
                  width="100%"
                />
              </div>
            </div>
          </Accordion>
        </div>
        <div className="callout space-x">
          <div className="wrapper">
            <img src={"/icons/icon_info.svg"} alt="" width="35" />
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page4.callout2.p1" }),
                }}
              />
              <p>
                <FormattedMessage id="page4.callout2.p2" />{" "}
                <a
                  href={intl.formatMessage({
                    id: "page4.callout2.href",
                  })}
                  target="_blank"
                >
                  {intl.formatMessage({
                    id: "page4.callout2.link",
                  })}
                  <span className="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <span className="intro-copy bold space-x">
            <FormattedMessage id="page4.copy3.title" />
          </span>
          <Portal />
          <NextPage
            title={intl.formatMessage({ id: "nav.item5" })}
            url="/scenarios"
          />
        </div>
      </div>
    </Layout>
  )
}
