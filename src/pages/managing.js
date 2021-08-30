import React from "react"
import { Helmet } from "react-helmet"
import { useIntl } from "react-intl"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import Portal from "../components/Portal"
import Nextpage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby-plugin-intl"

export default function Managing() {
  const intl = useIntl()
  const primary = `#da0025`
  const accent = `#db00a6`
  return (
    <Layout>
      <Helmet>
        <title>Managing your savings</title>
      </Helmet>
      <StaticImage src="../images/banner07.jpg" alt="Banner" />
      <div id="page07">
        <div className="wrapper">
          <h1 className="space-top-x">
            <span>Managing </span>your savings{" "}
            <span>
              {" "}
              <br />
              over time
            </span>
          </h1>
          <p className="intro-copy space-bottom-2x">
            It is your responsibility to monitor and manage your savings over
            time, and make changes, if needed. The decisions you need to make
            depend on whether you are managing the DB or Non-DB options.
          </p>
          <Accordion title="Optional DB" color="#fff" bg={primary}>
            <p className="space-2x">
              The Optional DB is more hands-off, since Johnson & Johnson makes
              all investment decisions, and you contribute a set percentage. The
              only decision you make is whether to participate or not — the rest
              is taken care of.
            </p>
          </Accordion>
          <div className="space-x"></div>
          <Accordion title="Non-DB Options" color="#fff" bg={accent}>
            <p>
              You have more decisions to make when it comes to your Non-DB
              options. You choose which options to participate in, how much to
              contribute, and how to invest your accounts. Since your final
              account balances will depend on investment earnings, it is
              important to monitor your savings regularly and make adjustments,
              if needed.
            </p>
            <div className="wrapper-center">
              <Accordion
                title="Options"
                color={accent}
                icon={"/icons/component_icon.svg"}
              >
                <p>
                  You can choose from different Non-DB options: DC, RRSP, OAC,
                  TFSA and Non-registered. Each plan comes with different
                  features and benefits. You can change the options you
                  participate in as your needs change — for example, you might
                  be more focused on shorter-term savings options early on in
                  your career, and more focused on saving for retirement later
                  on.
                </p>
                <p>
                  For a comparison of the plans,{" "}
                  <Link to="/choose-right-options">click here</Link>.
                </p>
              </Accordion>
              <Accordion
                title="Contributions"
                color={accent}
                icon={"/icons/contribution_icon.svg"}
              >
                <p>
                  You choose how much to contribute to the Non-DB options, and
                  you can change your contributions as your financial situation
                  changes.
                </p>
                <div className="space-2x">
                  <div className="box">
                    When deciding how much to contribute, remember that:
                  </div>
                  <div className="wrapper-center border-box">
                    <p>
                      Johnson & Johnson matching contributions are tied to your
                      contributions, up to a maximum: this means that the more
                      you contribute, the more Johnson & Johnson also
                      contributes (up to a maximum). Make sure to take full
                      advantage of matching contributions — it’s like free
                      money!
                    </p>
                    <div className="space-2x"></div>
                    <div className="callout-pointer">
                      <div className="bold">Note:</div> CRA sets maximums on how
                      much you can contribute to tax-deferred options (DC, RRSP,
                      OAC, TFSA) —{" "}
                      <span className="bold">
                        it is your responsibility to ensure you don’t exceed{" "}
                        <a
                          href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html"
                          target="_blank"
                          className="bold"
                        >
                          CRA limits
                          <span style={{ display: "inline-block" }}>
                            &nbsp;
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </span>
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion
                title="Investment decisions"
                color={accent}
                icon={"/icons/investment_icon.svg"}
              >
                <p>
                  You decide how to invest your Non-DB accounts. Investment
                  options include:
                </p>
                <div className="heading-icon-top">
                  <img src="/icons/one_pink.svg" alt="One" width="25" />
                  <p>
                    <div className="bold">Equity and fixed income funds</div>{" "}
                    for those who wish to build their own portfolio and more
                    actively manage their investments.
                  </p>
                </div>
                <div className="heading-icon-top">
                  <img src="/icons/two_pink.svg" alt="Two" width="25" />
                  <p>
                    <span className="bold"> A balanced fund</span> that is
                    designed to include both Equities (Canadian and global) and
                    Fixed Income components.
                  </p>
                </div>
                <p>
                  See a full list of investment options on the{" "}
                  <a href="https://jnj.hroffice.com/" target="_blank">
                    FYB Portal
                    <span className="link-icon">
                      &nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                  </a>{" "}
                  &gt; Pension & Savings &gt; Manage Investments &gt; Change
                  Investments
                </p>
                <div className="divider"></div>
              </Accordion>
            </div>
          </Accordion>
          <h2 className="space-top-x">Retirement planning tools</h2>
          <p>
            There are many tools available to you to help you make the most of
            the Pension & Savings Program — be sure to take advantage of them to
            maximize your savings!
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
