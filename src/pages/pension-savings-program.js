import React from "react"
import { Helmet } from "react-helmet"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Page02() {
  const intl = useIntl()
  const secondary = `#0800a0`
  const accent = `#cc0299`
  const Icon = "/icons/component_icon.svg"
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page02.title" })}</title>
      </Helmet>
      <StaticImage src="../images/banner02.jpg" alt="Banner" />
      <div id="page02">
        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page02.h1" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="page02.p1" />
          </p>
          <p>
            <FormattedMessage id="page02.p1_black" />
          </p>
          <div className="space-top-x">&nbsp;</div>
          <iframe
            width="100%"
            height="365"
            src="https://player.vimeo.com/video/386002177?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=dbf0ff0bad"
            title="Our new Pension & Savings Program"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="space-bottom-2x">&nbsp;</div>
          <p>
            The program includes these{" "}
            <span className="bold">key components:</span>
          </p>
          <Accordion
            title={intl.formatMessage({ id: "core_component" })}
            icon={Icon}
            color={secondary}
            border={secondary}
          >
            <div className="acc-box secondary">Core DB</div>
            <p className="space-2x">
              Pays an annual pension for as long as you live — 0.50% of your
              final average earnings (FAE) multiplied by your credited service
              earned. All contributions fully funded by Johnson & Johnson on
              your behalf; you do not make any contributions.
            </p>
          </Accordion>
          <Accordion
            title={intl.formatMessage({ id: "optional_components" })}
            icon={Icon}
            color={secondary}
            border={secondary}
          >
            <div className="acc-box primary">DB Option</div>
            <div className="wrapper-center">
              <Accordion title="Optional DB" icon={Icon} color={accent}>
                <p>
                  Pays an annual pension for as long as you live, on top of the
                  core DB component – 0.70% of your final average earnings (FAE)
                  multiplied by your credited service earned. Contributions are
                  pre-tax (meaning you only pay tax when you start receiving a
                  monthly pension).
                </p>
              </Accordion>
            </div>
            <div className="acc-box accent">Non-DB Options</div>
            <div className="wrapper-center">
              <Accordion
                icon={Icon}
                color={accent}
                border={secondary}
                title="Defined Contribution (DC)"
              >
                <p>
                  When you retire, you will receive an account balance that you
                  can use to boost your retirement income. The account balance
                  is based on contributions and investment earnings. You choose
                  how much to withdraw each year (within set minimum/maximum
                  limits). Contributions are pre-tax (you only pay tax when you
                  withdraw the money).
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Registered Retirement Savings Plan (RRSP)"
                border={secondary}
              >
                <p>
                  You will receive an account balance that you can use to boost
                  your retirement income. The account balance is based on
                  contributions and investment earnings. You can also use the
                  RRSP for the{" "}
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html"
                    target="_blank"
                  >
                    Homebuyers’ Plan
                    <span className="link-icon">
                      &nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                  </a>{" "}
                  and the{" "}
                  <a
                    href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html"
                    target="_blank"
                  >
                    Lifelong Learning Plan
                    <span className="link-icon">
                      &nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                  </a>{" "}
                  before you retire. Contributions are pre-tax (you only pay tax
                  when you withdraw the money).
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Optional Ancillary Contributions (OAC)"
              >
                <p>
                  You can use your OAC account to purchase additional DB
                  benefits (i.e., to increase your monthly pension or improve
                  benefits to your spouse/beneficiary), up to the{" "}
                  <a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html" target="_blank">
                    CRA maximum
                    <span className="link-icon">
                      &nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                  </a>. The unused balance of your OAC account will be paid in cash
                  (less tax deductions). Contributions to your OAC account are
                  pre-tax and they don’t reduce your RRSP contribution room.
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Tax-Free Savings Account (TFSA)"
              >
                <p>
                  You will receive an account balance that is based on
                  contributions and investment earnings. Contributions are
                  after-tax, but your investments can grow tax-free. You can
                  withdraw money from your TFSA whenever you need it.
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Non-registered"
              >
                <p>
                  Contributions are after-tax, and there’s no limit to how much
                  you can contribute. However, you will need to pay tax on any
                  investment earnings (capital gains and dividends). You can
                  withdraw money from your Non-registered account whenever you
                  need it.
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
