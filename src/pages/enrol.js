import React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Nextpage from "../components/NextPage"
import { useIntl } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Enrol() {
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>How to enrol</title>
      </Helmet>
      <StaticImage src="../images/banner06.jpg" alt="Banner" />
      <div id="page06">
        <div className="wrapper">
          <h1 className="space-top-x">
            How to <span>enrol</span>
          </h1>
          <h4 className="space-top-x space-bottom-2x">First enrolment</h4>
          <p>
            Once you become eligible, you will receive an email with a link to
            the enrolment tool on the{" "}
            <a href="https://jnj.hroffice.com/" target="_blank">
              FYB Portal
              <span className="link-icon">
                &nbsp;
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </a>
            .
          </p>
          <p className="bold">
            You will make the following decisions when you enrol:
          </p>
          <div className="box box-primary space-x">
            <div className="heading-icon-top">
              <img src="/icons/one-white.svg" alt="One" width="30" />
              <p>
                Will you participate in the{" "}
                <span className="bold">Optional DB</span> component?
              </p>
            </div>
          </div>
          <div className="box box-accent space-x">
            <div className="heading-icon-top">
              <img src="/icons/two-white.svg" alt="One" width="30" />
              <p>
                Will you participate in the{" "}
                <span className="bold">Non-DB </span> components?
              </p>
            </div>
          </div>
          <div className="box-content">
            <div className="col">
              Which ones (DC, RRSP, OAC, TFSA, Non-registered)?
            </div>
            <div className="divider"></div>
            <div className="col">
              How much will you contribute to each option?
            </div>
            <div className="divider"></div>
            <div className="col">How will you invest your Non-DB accounts?</div>
          </div>
          <div className="space-2x"></div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <div className="heading-icon">
              <img src={"/icons/icon_info.svg"} alt="" width="30" />
            </div>
            <div>
              <h3>What happens if you don’t enrol?</h3>
              <p className="intro-copy">
                Enrolling in the program is critical. Optional components are
                only available if you enrol during the enrolment period. If you
                don’t enrol, you will also miss out on Johnson & Johnson
                matching contributions and/or additional pension benefits
                earned.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2 className="space-x">Here’s how you enrol:</h2>
          <StaticImage
            src="../images/enrol-01.jpg"
            alt="Enrol instructions video"
            placeholder="none"
          />
          <h4 className="space-top-2x">Help Me Decide tool</h4>
          <p>
            You will also find a Help Me Decide tool on the{" "}
            <a href="https://jnj.hroffice.com/">
              FYB Portal
              <span className="link-icon">
                &nbsp;
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </a>{" "}
            when you enrol. You answer a few short questions, and the tool can
            help you choose the most tax-effective savings options for your
            personal circumstances.
          </p>
        </div>
        <div className="callout">
          <div className="wrapper">
            <div className="heading-icon-top tip">
              <div className="icon">Tip!</div>
              <p>
                If you want to select the options that were recommended to you
                in the Help Me Decide tool, you will need to enter them into the
                enrolment tool — this does not happen automatically!
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="space-2x"></div>
          <StaticImage
            src="../images/enrol-01.jpg"
            alt="Enrol instructions video"
            placeholder="none"
          />
          <h2 className="space-top-2x">Making changes</h2>
          <p>
            The Pension & Savings Program is designed to move with you as your
            savings goals evolve over time. That’s why you have the opportunity
            to join or change your participation in the optional DB and DC plans
            twice a year (in January and July). You can modify your investment
            allocations and contributions to the RRSP, OAC, TFSA and
            Non-registered at any time.
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
