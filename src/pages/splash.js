import React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Nextpage from "../components/NextPage"
import { useIntl } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"

export default function Splash() {
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page10.title" })}</title>
      </Helmet>
      <div id="page10" class="main-content">
        {/* <StaticImage src="../images/headers/banner06.jpg" alt="Banner" /> */}
        <img src="/headers/banner10.jpg" alt="Banner" class="banner-image" />

        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page10.copy1.title" }),
            }}
          />
          <h4
            className="space-top-x space-bottom-2x subtitle"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page10.copy1.subtitle" }),
            }}
          />

          <p className="intro-copy">
            <FormattedMessage id="page10.copy1.p1" />
          </p>
          <p className="intro-copy">
            <FormattedMessage id="page10.copy1.p2" />
          </p>
          <h3
            className="space-x title"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page10.h3_1" }),
            }}
          />

          <div className="icon-group divider-bottom">
            <img className="icon" src="/icons/icon_48x48_get_more_money.png" />
            <div className="icon-group-copy">
              <h5>
                <FormattedMessage id="page10.icon-group.item1.h5" />
              </h5>
              <p>
                <FormattedMessage id="page10.icon-group.item1.p" />
              </p>
            </div>
          </div>

          <div className="icon-group">
            <img className="icon" src="/icons/icon_48x48_focus.png" />
            <div className="icon-group-copy">
              <h5>
                <FormattedMessage id="page10.icon-group.item2.h5" />
              </h5>
              <p>
                <FormattedMessage id="page10.icon-group.item2.p1" />
              </p>
              <p>
                <FormattedMessage id="page10.icon-group.item2.p2" />
              </p>
            </div>
          </div>
          <div className="video-wrapper space-2x">
            <iframe
              width="100%"
              height="100%"
              src={intl.formatMessage({ id: "page2.video.src" })}
              title={intl.formatMessage({ id: "page2.video.title" })}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="icon-group divider-top">
            <img className="icon" src="/icons/investment_icon.svg" />
            <div className="icon-group-copy">
              <h5>
                <FormattedMessage id="page10.icon-group.item3.h5" />
              </h5>
              <p>
                <FormattedMessage id="page10.icon-group.item3.p" />
              </p>
            </div>
          </div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <div className="heading-icon">
              <img
                src={"/icons/icon_info.svg"}
                alt=""
                style={{ maxWidth: "30px" }}
              />
            </div>
            <div>
              <h4>
                <FormattedMessage id="page10.callout.title" />
              </h4>
              <p className="intro-copy">
                <FormattedMessage id="page10.callout.p" />
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="space-2x"></div>

          <h3
            className="space-x title"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page10.h3_2" }),
            }}
          />
          <div className="icon-box space-top-x">
            <div className="icon-box-item">
              <img src="/icons/icon-list.svg" style={{ maxWidth: "34px" }} />
              <span className="space-x bold">
                <FormattedMessage id="page10.icon-box.item1.span" />
              </span>
              <a
                href={intl.formatMessage({ id: "page10.icon-box.item1.link" })}
                target="_blank"
              >
                Learn more
                <span className="link-icon">
                  &nbsp;
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>
            </div>
            <div className="icon-box-item">
              <img
                src="/icons/icon-profile-thin.svg"
                style={{ maxWidth: "44px" }}
              />
              <span className="space-x bold">
                <FormattedMessage id="page10.icon-box.item2.span" />
              </span>
              <a
                href={intl.formatMessage({ id: "page10.icon-box.item2.link" })}
                target="_blank"
              >
                Learn more
                <span className="link-icon">
                  &nbsp;
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>
            </div>
            <div className="icon-box-item">
              <img src="/icons/icon-play.png" style={{ maxWidth: "44px" }} />
              <span className="space-top-x bold">
                <FormattedMessage id="page10.icon-box.item3.span" />
              </span>
              <p>
                <FormattedMessage id="page10.icon-box.item3.p" />
              </p>
              <a href="https://jnj.hroffice.com/" target="_blank">
                Learn more
                <span className="link-icon">
                  &nbsp;
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>
            </div>
          </div>
          <Nextpage
            title={intl.formatMessage({ id: "nav.item9" })}
            url="/questions"
          />
        </div>
      </div>
    </Layout>
  )
}
