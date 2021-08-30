import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"
import { useIntl } from "react-intl"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Leaving() {
  const intl = useIntl()
  const secondary = `#0800a0`
  const accent = `#cc0299`
  const Icon = "/icons/component_icon.svg"
  return (
    <Layout>
      <Helmet>
        <title>What happens when you retire</title>
      </Helmet>
      <div id="page08">
        <StaticImage src="../images/banner08.jpg" alt="banner" />
        <div className="wrapper">
          <h1 className="space-x">
            What happens when{" "}
            <span>
              <br /> you retire
            </span>
          </h1>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "core_component" })}
            icon={Icon}
            color={secondary}
          >
            <div className="acc-box secondary">Core DB</div>
            <p className="space-top-2x space-bottom-x">
              Pays an annual pension for as long as you live — 0.50% of your
              final average earnings (FAE) multiplied by your credited service
              earned.
            </p>
            <div className="callout-pointer">
              <p className="bold">
                Want to see how much your monthly pension could be?
              </p>
              <p>
                Try out the Pension Projection Tool on the{" "}
                <a href="https://jnj.hroffice.com/" target="_blank">
                  FYB Portal
                  <span className="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>
              </p>
            </div>
            <div className="space-x"></div>
          </Accordion>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "optional_components" })}
            icon={Icon}
            color={secondary}
          >
            <div className="acc-box primary">DB Option</div>
            <div className="wrapper-center">
              <Accordion
                border={secondary}
                title="Optional DB"
                icon={Icon}
                color={accent}
              >
                <p>
                  Pays an annual pension for as long as you live, on top of the
                  core DB component — 0.70% of your final average earnings (FAE)
                  multiplied by your credited service earned.
                </p>
                <div className="callout-pointer">
                  <p className="bold">
                    Want to see how much your monthly pension could be?
                  </p>
                  <p>
                    Try out the Pension Projection Tool on the{" "}
                    <a href="https://jnj.hroffice.com/" target="_blank">
                      FYB Portal
                      <span className="link-icon">
                        &nbsp;
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </span>
                    </a>
                  </p>
                </div>
              </Accordion>
            </div>
            <div className="acc-box accent">Non-DB Options</div>
            <div className="wrapper-center">
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Defined Contribution (DC)"
              >
                <p>
                  Your DC account balance is locked-in to provide retirement
                  income. When you retire, you can convert your account balance
                  into a locked-in retirement account (LIRA) to keep your money
                  invested, or into a life income fund (LIF) that you can use to
                  withdraw money. You choose how much to withdraw each year
                  (within set minimum/maximum limits).
                </p>
                <p>
                  Alternatively, you can purchase an annuity with your DC
                  account balance. An annuity pays a monthly pension for as long
                  as you live, similar to the DB option.
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Registered Retirement Savings Plan (RRSP)"
              >
                <p>
                  You will receive an account balance that you can use to boost
                  your retirement income. The account balance is based on
                  contributions and investment earnings. You can withdraw as
                  much or as little as you need. Note that you will need to pay
                  tax on the money you withdraw from your RRSP. You must convert
                  your RRSP into a Registered Retirement Income Fund (RRIF) by
                  age 71.
                </p>
                <p>
                  You can also use the RRSP for the{" "}
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
                    Lifelong Learning
                    <span className="link-icon">
                      &nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                  </a>{" "}
                  Plan before you retire.
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
                  benefits to your spouse or beneficiary), up to the{" "}
                  <a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html" target="_blank">
                    CRA maximum
                    <span className="link-icon">
                      &nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>{" "}
                  </a>
                  . The unused balance of your OAC account will be paid in cash
                  (less tax deductions).
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Tax-Free Savings Account (TFSA)"
              >
                <p>
                  You will receive an account balance that you can use to boost
                  your retirement income. The account balance is based on
                  contributions and investment earnings. You can withdraw as
                  much or as little as you need.
                </p>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Non-registered"
              >
                <p>
                  You will receive an account balance that you can use to boost
                  your retirement income. The account balance is based on
                  contributions and investment earnings. You can withdraw as
                  much or as little as you need.
                </p>
              </Accordion>
            </div>
          </Accordion>
        </div>
        <div className="callout space-2x">
          <div className="wrapper">
            <img src={"/icons/icon_info.svg"} alt="" width="30" />
            <div>
              <h3>Government Benefits</h3>
              <p>
                Government benefits like Canada Pension Plan (CPP), Quebec
                Pension Plan (QPP), and Old Age Security (OAS) are separate from
                the Pension & Savings Program. Due the recent enhancements to
                CPP/QPP, you will likely receive more from CPP/QPP than you
                would have previously.
              </p>
              <p>
                Here’s more information on{" "}
                <a
                  href="https://www.canada.ca/en/services/benefits/publicpensions.html"
                  target="_blank"
                >
                  government benefits
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
          <h2 className="space-bottom-x">
            What happens if you <br /> <span>leave before retirement</span>
          </h2>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "core_component" })}
            icon={Icon}
            color={secondary}
          >
            <div className="acc-box secondary">Core DB</div>
            <div className="bold space-2x">You can either:</div>
            <ul>
              <li>
                Leave your money in the pension plan and draw a pension at age
                55 or later (this is called a deferred pension), or
              </li>
              <li>
                If you are younger than 55, you may transfer the lump-sum value
                of your pension to a locked-in plan (e.g., your next employer’s
                pension plan (if allowed) or a personal locked-in retirement
                account, LIRA).
              </li>
            </ul>
          </Accordion>
          <Accordion
            border={secondary}
            title={intl.formatMessage({ id: "optional_components" })}
            icon={Icon}
            color={secondary}
          >
            <div className="acc-box primary">DB Option</div>
            <div className="wrapper-center">
              <Accordion
                border={secondary}
                title="Optional DB"
                icon={Icon}
                color={accent}
              >
                <div className="bold space-bottom-2x">You can either:</div>
                <ul>
                  <li>
                    Leave your money in the pension plan and draw a pension at
                    age 55 or later (this is called a deferred pension), or
                  </li>
                  <li>
                    If you are younger than 55, you may transfer the lump-sum
                    value of your pension to a locked-in plan (e.g., your next
                    employer’s pension plan (if allowed) or a personal locked-in
                    retirement account, LIRA).
                  </li>
                </ul>
              </Accordion>
            </div>
            <div className="acc-box accent">Non-DB Options</div>
            <div className="wrapper-center">
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Defined Contribution (DC)"
              >
                <p>
                  You will receive the total value of your account (including
                  your own and Johnson & Johnson’s contributions, plus
                  investment returns). <span className="bold"> You can:</span>
                </p>
                <ul>
                  <li>
                    Transfer the money to a locked-in plan (e.g., your next
                    employer’s pension plan (if allowed) or a personal locked-in
                    retirement account, LIRA), or
                  </li>
                  <li>Purchase a deferred annuity.</li>
                </ul>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Registered Retirement Savings Plan (RRSP)"
              >
                <p>
                  You will receive the total value of your account (including
                  your own and Johnson & Johnson’s contributions, plus
                  investment returns). <span className="bold"> You can:</span>
                </p>
                <ul>
                  <li>Transfer the money to a personal RRSP, or</li>
                  <li>Take a cash payment less tax deductions.</li>
                </ul>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Optional Ancillary Contributions (OAC)"
              >
                <ul>
                  <li>
                    If you choose a deferred pension for your DB benefits, your
                    OACs will also stay in the plan until retirement, at which
                    point OACs will be used to improve your DB benefits.
                  </li>
                  <li>
                    If you choose a lump-sum payout for the DB benefits, your
                    OACs will also be paid out.
                  </li>
                </ul>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Tax-Free Savings Account (TFSA)"
              >
                <p>
                  You will receive the total value of your account (including
                  your own and Johnson & Johnson’s contributions, plus
                  investment returns). <span className="bold"> You can:</span>
                </p>
                <ul>
                  <li>Transfer the money to a personal TFSA, or</li>

                  <li className="space-top-x">
                    Take a cash payment without any tax deductions, since
                    contributions were made with after-tax dollars (i.e., tax
                    was already withheld).
                  </li>
                </ul>
              </Accordion>
              <Accordion
                border={secondary}
                icon={Icon}
                color={accent}
                title="Non-registered"
              >
                <p>
                  You will receive the total value of your account (including
                  your own and Johnson & Johnson’s contributions, plus
                  investment returns) as a cash payment without any tax
                  deductions, since contributions were made with after-tax
                  dollars (i.e., tax was already withheld).
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
