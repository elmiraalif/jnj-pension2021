import React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Nextpage from "../components/NextPage"
import { useIntl } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "gatsby-plugin-intl"

export default function Enrol() {
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page6.title" })}</title>
      </Helmet>
      <StaticImage src="../images/banner06.jpg" alt="Banner" />
      <div id="page06">
        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page6.copy1.title" }),
            }}
          />
          <h4 className="space-top-x space-bottom-2x">
            <FormattedMessage id="page6.copy1.subtitle" />
          </h4>
          <p>
            <FormattedMessage id="page6.copy1.p1" />{" "}
            <a href="https://jnj.hroffice.com/" target="_blank">
              <FormattedMessage id="fyb_portal" />
              <span className="link-icon">
                &nbsp;
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </a>
            .
          </p>
          <p className="bold">
            <FormattedMessage id="page6.copy1.bold" />
          </p>
          <div className="box box-primary space-x">
            <div className="heading-icon-top">
              <img src="/icons/one-white.svg" alt="One" width="30" />
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page6.copy1.item1" }),
                }}
              />
            </div>
          </div>
          <div className="box box-accent space-x">
            <div className="heading-icon-top">
              <img src="/icons/two-white.svg" alt="One" width="30" />
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "page6.copy1.item2" }),
                }}
              />
            </div>
          </div>
          <div className="box-content">
            <div className="col">
              <FormattedMessage id="page6.copy1.left" />
            </div>
            <div className="divider"></div>
            <div className="col">
              <FormattedMessage id="page6.copy1.middle" />
            </div>
            <div className="divider"></div>
            <div className="col">
              <FormattedMessage id="page6.copy1.right" />
            </div>
          </div>
          <div className="space-2x"></div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <div className="heading-icon">
              <img src={"/icons/icon_info.svg"} alt="" width="30" />
            </div>
            <div>
              <h3>
                <FormattedMessage id="page6.callout1.title" />
              </h3>
              <p className="intro-copy">
                <FormattedMessage id="page6.callout1.p" />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="wrapper">
          <h2 className="space-x">
            <FormattedMessage id="page6.copy2.title" />
          </h2>
          <StaticImage
            src="../images/enrol-01.jpg"
            alt="Enrol instructions video"
            placeholder="none"
          />
          <h4 className="space-top-2x">
            <FormattedMessage id="page6.copy2.help" />
          </h4>
          <p>
            <FormattedMessage id="page6.copy2.p1" />{" "}
            <a href="https://jnj.hroffice.com/">
              <FormattedMessage id="fyb_portal" />
              <span className="link-icon">
                &nbsp;
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </a>{" "}
            <FormattedMessage id="page6.copy2.p2" />
          </p>
        </div>
        <div className="callout">
          <div className="wrapper">
            <div className="heading-icon-top tip">
              <div className="icon">
                <img
                  src={intl.formatMessage({ id: "page6.callout2.tip_src" })}
                  alt={intl.formatMessage({ id: "page6.callout2.tip_alt" })}
                  width="100"
                  style={{ margin: "0", verticalAlign: "text-top" }}
                  className="visible"
                />
              </div>
              <p>
                <FormattedMessage id="page6.callout2.p" />
              </p>
            </div>
          </div>
        </div> */}
        <div className="wrapper">
          <div className="space-2x"></div>
          {/* <StaticImage
            src="../images/enrol-01.jpg"
            alt="Enrol instructions video"
            placeholder="none"
          /> */}
          <h2 className="space-top-2x">
            <FormattedMessage id="page6.copy3.title" />
          </h2>
          <p>
            <FormattedMessage id="page6.copy3.p" />
          </p>
          <Nextpage
            title={intl.formatMessage({ id: "nav.item7" })}
            url="/managing"
          />
        </div>
      </div>
    </Layout>
  )
}
