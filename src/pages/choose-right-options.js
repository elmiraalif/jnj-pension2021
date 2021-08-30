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

export default function Page04() {
  const secondary = "#0800a0"
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>Choosing the right options</title>
      </Helmet>
      <StaticImage
        placeholder="none"
        src="../images/banner04.jpg"
        alt="Banner"
      />
      <div id="page04">
        <div className="wrapper">
          <h1 className="space-top-x">
            How to <span>choose</span> between <span>options</span>
          </h1>
          <p className="intro-copy">
            We have created a program that fits various needs and savings goals
            — and you get to decide which components will best allow you to meet
            your goals.
          </p>
          <p class="bold">There are two main decisions you need to make:</p>
          <div className="heading-icon-top">
            <img src={"/icons/one-red.svg"} alt="One" width="30" />
            <p>
              Will you participate in the Optional DB, Non-DB components, or
              both?
            </p>
          </div>
          <div className="components wrapper-center">
            {/* <StaticImage
              placeholder="none"
              src="../images/red_pink_boxes.png"
              width={250}
              placeholder="none"
            /> */}
            <img src="/icons/boxes.png" alt="" width="220" />
          </div>
          <div className="heading-icon-top">
            <img src={"/icons/two-red.svg"} alt="two" width="30" />
            <p>
              If you choose Non-DB components, which ones? Each option (DC,
              RRSP, OAC, TFSA and Non-registered) comes with different features
              and benefits.
            </p>
          </div>
          <p class="bold space-x">
            To help you make the first decision, watch this video!
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
                The Pension & Savings Program supports you as you move forward
                in life to make sure your selections continue to meet your goals
                over time. You can can join or change your participation in the
                optional DB and DC plans twice a year (in January and July). You
                can modify your investment allocations and contributions to the
                RRSP, OAC, TFSA and Non-registered at any time.
              </p>
              <p>
                <div className="bold">Note:</div> All changes are applied
                prospectively and do not impact any benefits already earned.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2 className="space-top-x">
            Choosing between
            <span>
              <br /> optional components
            </span>
          </h2>
          <p className="intro-copy">
            Choosing your pension and savings options is a personal decision,
            but there are some common considerations for each option.
          </p>
          <Accordion
            border={secondary}
            title="Are you saving for the short term or the long term?"
            icon="../icons/one_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>DB, DC and OAC can only be used for retirement income.</li>
                <li>
                  RRSP, TFSA and Non-registered provide more flexibility and can
                  be used for long-term savings or in the shorter term, such as
                  saving for a house, a car, or paying down student debt.
                </li>
              </ul>
              <div className="space-2x">
                {/* <StaticImage
                  placeholder="none"
                  src="../images/optional_item01.png"
                /> */}
                {/* <StaticImage
                  placeholder="none"
                  src="../images/test.webp"
                /> */}
                <img src={"/icons/option1.gif"} alt="Option 1" width="100%" />
              </div>
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title="Do you value a predictable pension?"
            icon="../icons/two_pink.svg"
            color={secondary}
            svg="none"
          >
            <ul>
              <li>
                DB (Core and Optional) provides you with a predictable pension
                that will be paid to you in equal installments each month once
                you retire for the rest of your life.
              </li>
              <li>
                The Non-DB options are less predictable, since your final
                account balance will depend on the level of contributions and
                their investment performance.
              </li>
            </ul>
            <div className="space-2x">
              {/* <StaticImage
                placeholder="none"
                src="../images/optional_item02.png"
                placeholder="none"
              /> */}
              <img src={"/icons/option2.gif"} alt="Option 2" width="100%" />
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title="Do you want flexibility with how and when to use your savings?"
            icon="../icons/three_pink.svg"
            color={secondary}
          >
            <ul>
              <li>
                DB is the least flexible option, since contributions and the
                monthly pension you will receive in retirement are set — you
                can’t change them.
              </li>
              <li>
                DC is a bit more flexible, as you get to decide how much to
                withdraw each year at retirement (based on minimum and maximum
                limits), while OACs let you choose how to enhance your DB
                pension.
              </li>
              <li>
                TFSA and Non-registered are the most flexible, since there are
                no rules around withdrawals: you can use the money as you need
                it, whenever you need it.
              </li>
              <li>
                RRSP falls in the middle — the main purpose is to provide
                retirement income, but you can also withdraw money from your
                RRSP, tax-free (up to $35,000), for the{" "}
                <a
                  href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html"
                  target="_blank"
                >
                  Home Buyers’ Plan
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
                </a>
                . If you withdraw money from your RRSP for any other purpose,
                you will need to pay tax on the withdrawal.
              </li>
            </ul>
            <div className="space-2x">
              {/* <StaticImage
                placeholder="none"
                src="../images/optional_item03.png"
                placeholder="none"
              /> */}
              <img src={"/icons/option3.gif"} alt="Option 3" width="100%" />
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title="How comfortable are you with making investment decisions?"
            icon="../icons/four_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  If you’re comfortable with making investment decisions and
                  taking on investment risk, the Non-DB options give you the
                  freedom to decide how to invest your contributions (and the
                  potential to earn higher returns).
                </li>
                <li>
                  If investing is out of your comfort zone, DB provides you with
                  a monthly pension benefit that is not affected by market
                  performance.
                </li>
              </ul>
              <div className="space-2x">
                {/* <StaticImage
                  placeholder="none"
                  src="../images/optional_item04.png"
                /> */}
                <img src={"/icons/option4.gif"} alt="Option 4" width="100%" />
              </div>
            </div>
          </Accordion>

          <Accordion
            border={secondary}
            title="Do you want a hands-on or a hands-off approach?"
            icon="../icons/five_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  The Non-DB options are more hands-on: you make the investment
                  decisions based on your risk tolerance and retirement goals.
                  You also get to decide the level of retirement income you
                  withdraw based on your needs — not on a formula. <br />
                  <div className="space-x">
                    <span className="bold">Note</span>: you may be required to
                    withdraw a minimum amount each year based on current
                    regulations after you reach the age of 71.
                  </div>
                </li>
                <li>
                  DB offers you a hands-off option. Johnson & Johnson manages
                  and delivers your pension at retirement in equal monthly
                  payments, based on a set formula; you don’t need to do
                  anything.
                </li>
              </ul>
              <div className="space-2x">
                {/* <StaticImage
                  placeholder="none"
                  src="../images/optional_item05.png"
                /> */}
                <img src={"/icons/option5.gif"} alt="Option 5" width="100%" />
              </div>
            </div>
          </Accordion>
          <Accordion
            border={secondary}
            title="Are you looking to maximize tax savings today?"
            icon="../icons/six_pink.svg"
            color={secondary}
          >
            <div>
              <ul>
                <li>
                  Contributions to DB, DC, OAC and RRSP are all made pre-tax —
                  meaning you only pay tax on the amount you will receive or
                  withdraw from these plans later on.
                </li>
                <li>
                  Contributions to the TFSA are made with after-tax dollars, but
                  your savings get to grow tax-free, so you don’t need to pay
                  tax on any investment earnings (capital gains and dividends).
                </li>
                <li>
                  Non-registered is the least tax-effective option, since
                  contributions are made after-tax, and you also need to pay tax
                  on any investment earnings.
                </li>
              </ul>
              <div className="space-2x">
                {/* <StaticImage
                  placeholder="none"
                  src="../images/optional_item06.png"
                /> */}
                <img src={"/icons/option6.gif"} alt="Option 6" width="100%" />
              </div>
            </div>
          </Accordion>
        </div>
        <div className="callout space-x">
          <div className="wrapper">
            <img src={"/icons/icon_info.svg"} alt="" width="35" />
            <div>
              <p>
                Canada Revenue Agency (CRA) limits how much you can contribute
                each year to tax-deferred savings options.{" "}
                <span>
                  It is your responsibility to ensure you don’t exceed your
                  limit
                </span>{" "}
                — and remember that Johnson & Johnson matching contributions are
                also deducted from your personal limit.
              </p>
              <p>
                Find the current limits{" "}
                <a
                  href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html"
                  target="_blank"
                >
                  here
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
            Additional tools and resources to help you choose
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
