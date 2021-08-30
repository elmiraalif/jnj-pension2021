import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Profile from "../components/Profile"
import Accordion from "../components/Accordion"
import NextPage from "../components/NextPage"
import { useIntl } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Scenarios() {
  const primary = `#da0025`
  const secondary = `#0800a0`
  const accent = `#db00a6`
  const light = `#dbdbdb`
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>Scenarios for savings goals</title>
      </Helmet>
      <StaticImage src="../images/banner05.jpg" alt="Banner" />
      <div id="page05">
        <div className="wrapper">
          <h1 className="space-top-x">
            Scenarios for different <br />
            <span>life stages</span> & <span>savings goals</span>
          </h1>
          <div className="intro-copy">
            <p>
              Let’s look at a few people in different life stages and how they
              made their Pension & Savings Program decisions. Who can you
              relate to?
            </p>
          </div>
        </div>
        <div className="callout-gray space-bottom-2x">
          <div className="wrapper">
            <div className="space-x">Are you...</div>
            <div className="boxes space-x">
              <a href="#early" className="box">
                Early career
              </a>
              <a href="#mid" className="box">
                Mid career
              </a>
              <a href="#retired" className="box">
                Approaching retirement
              </a>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <h3 className="space-bottom-x profile-title">Early career</h3>
          <div className="profile-container" id="early">
            <Profile
              color={primary}
              src={"/profiles/priyanka.jpg"}
              name="Priyanka"
              age="24"
              family="Single"
              housing="Renter"
              goals="Pay down student debt, Travel, Home purchase"
            />
            <Profile
              color={secondary}
              src={"/profiles/taylor.jpg"}
              name="Taylor"
              age="29"
              family="Engaged"
              housing="Renter"
              goals="Retirement with flexibility"
            />
            <Profile
              color={accent}
              src={"/profiles/hang.jpg"}
              name="Hang"
              age="34"
              family="Married"
              housing="Home owner"
              goals="Home renovations, Retirement"
            />
          </div>
          <Accordion
            border={light}
            title="Priyanka"
            color={primary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Priyanka is at the start of her career. She is focused on paying
              down her student debt, but also wants to travel and enjoy new
              experiences. Down the road, she would like to purchase her first
              condo.
            </p>
            <p>To meet these goals, Priyanka decides to:</p>
            <div className="heading-icon">
              <div className="box heading">RRSP</div>
              <h4 className="secondary-color" className="secondary-color">
                Contribute 4% to the RRSP
              </h4>
            </div>
            <ul className="space-x">
              <li>
                She will use the money for the{" "}
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
                in a few years
              </li>
              <li>
                Priyanka will receive a 100% Company match on these
                contributions
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">TFSA</div>
              <h4 className="secondary-color" className="secondary-color">
                Contribute 2% to the TFSA
              </h4>
            </div>
            <ul className="space-x">
              <li>
                She will have flexibility on how and when to use her savings,
                while earning investment income, tax free
              </li>
              <li>
                Priyanka will benefit from much lower investment fees than she
                would from a personal TFSA
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">Note:</span> because she is already
                receiving a 4% Company match on her RRSP contributions, Priyanka
                will not receive any matching contributions to the TFSA.
              </p>
            </div>
            <div className="space-2x"></div>
          </Accordion>
          <Accordion
            border={light}
            title="Taylor"
            color={secondary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Taylor joined Johnson & Johnson two years ago. They are focused on
              saving for retirement but are not yet sure where they will be in
              10 or 20 years from now, so they’re looking for flexibility.
            </p>
            <p>To meet these goals, Taylor decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DC</div>
              <h4 className="secondary-color">Contribute 4% to the DC plan</h4>
            </div>
            <ul className="space-x">
              <li>
                Taylor will have greater flexibility and portability of their
                retirement savings over time
              </li>
              <li>
                They will receive a 100% Company match on these contributions
              </li>
            </ul>
            <div className="space-2x"></div>
          </Accordion>
          <Accordion
            border={light}
            title="Hang"
            color={accent}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Hang has been with Johnson & Johnson for six years. She owns a
              fixer upper and is saving to do renovations, while making sure she
              does not lose sight of retirement savings.
            </p>
            <p>To meet these goals, Hang decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DB</div>
              <h4 className="secondary-color">
                Contribute 2.25% to the optional DB
              </h4>
            </div>
            <ul className="space-x">
              <li>This will boost her monthly retirement income</li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">TFSA</div>
              <h4 className="secondary-color">Contribute 1.75% to the TFSA</h4>
            </div>
            <ul className="space-x">
              <li>
                Hang will save for home renovations while allowing her money to
                earn investment income, tax free
              </li>
              <li>
                She will also maximize Company matching contributions; the
                Company will match her contributions at 50%
              </li>
            </ul>
            <div className="callout-pointer">
              <p className="bold">A little bit more about Hang’s decision</p>
              <br />
              <p>
                At this time, Hang can only spare to save 4% of her earnings.
                Given her short-term savings goals, she decides to put money
                into the TFSA even though TFSA contributions will earn only a
                50% Company match. If she decided to contribute to the DC, RRSP
                or OACs instead, she would have received a 100% Company match.
              </p>
            </div>
            <div className="space-2x"></div>
          </Accordion>
          <div className="space-2x"></div>
          <h3 className="space-top-2x space-bottom-x profile-title">
            Mid career
          </h3>
          <div className="profile-container" id="mid">
            <Profile
              color={primary}
              src={"/profiles/amir.jpg"}
              name="Amir"
              age="38"
              family="Married, 3 kids"
              housing="Home owner"
              goals="Childcare, A bigger home"
            />
            <Profile
              color={secondary}
              src={"/profiles/tony.jpg"}
              name="Tony"
              age="40"
              family="Married, 2 kids"
              housing="Home owner"
              goals="Children’s education,
                Retirement"
            />
            <Profile
              color={accent}
              src={"/profiles/allison.jpg"}
              name="Allison"
              age="45"
              family="2 kids"
              housing="Renter"
              goals="Children’s education,
                Retirement"
            />
          </div>
          <Accordion
            border={light}
            title="Amir"
            color={primary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Amir has been with Johnson & Johnson for four years. His family is
              growing, and he is looking to buy a larger home while balancing
              childcare costs.
            </p>
            <p>To meet these goals, Amir decides to:</p>
            <div className="heading-icon">
              <div className="box heading">RRSP</div>
              <h4 className="secondary-color">Contribute 4% to the RRSP</h4>
            </div>
            <ul className="space-x">
              <li>
                He will save on taxes today and will receive a 100% Company
                match on these contributions
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">TFSA</div>
              <h4 className="secondary-color">Contribute 2% to the TFSA</h4>
            </div>
            <ul className="space-x">
              <li>
                Amir wants to save for a down payment and childcare, while
                allowing his money to earn investment income, tax free
              </li>
              <li>
                Amir will benefit from much lower fees than he would from a
                personal TFSA
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">Note:</span> because he is already
                receiving a 4% Company match on his RRSP contributions, Amir
                will not receive any matching contributions to the TFSA.
              </p>
            </div>
            <div className="space-2x"></div>
          </Accordion>
          <Accordion
            border={light}
            title="Tony"
            color={secondary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Tony joined Johnson & Johnson 11 years ago. He is focused on
              saving for his children’s education and increasing his retirement
              income.
            </p>
            <p>To meet these goals, Tony decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DB</div>
              <h4 className="secondary-color">
                Contribute 2.25% to the optional DB{" "}
              </h4>
            </div>
            <ul className="space-x">
              <li>This will boost his monthly retirement income</li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">DC</div>
              <h4 className="secondary-color">
                Contribute 1.75% to the DC plan
              </h4>
            </div>
            <ul className="space-x">
              <li>
                This gives Tony more flexibility on how and when to withdraw his
                retirement savings
              </li>
              <li>
                He will receive a 100% Company match on these contributions
              </li>
            </ul>
            {/* <div className="callout-pointer">
              <p>
                <span className="bold">Note:</span> because he is already
                receiving a 4% Company match on his RRSP contributions, Amir
                will not receive any matching contributions to the TFSA.
              </p>
            </div> */}
            <div className="heading-icon">
              <div className="box heading">TSFA</div>
              <h4 className="secondary-color">Contribute 4% to the TFSA</h4>
            </div>
            <ul className="space-x">
              <li>
                Tony wants to save for his children’s education, while allowing
                his money to earn investment income, tax free
              </li>
              <li>
                Tony will benefit from much lower fees than he would from a
                personal TFSA
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">Note:</span> because he is already
                receiving the maximum Company match on his DB/DC contributions,
                Tony will not receive any matching contributions to the TFSA.
              </p>
            </div>
            <div className="space-2x"></div>
          </Accordion>
          <Accordion
            border={light}
            title="Allison"
            color={accent}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Allison has been with Johnson & Johnson for 17 years. Since she
              doesn’t own her home, she feels it is even more important to make
              sure she has enough money saved for retirement.
            </p>
            <p>To meet these goals, Allison decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DB</div>
              <h4 className="secondary-color">
                Contribute 2.25% to the optional DB{" "}
              </h4>
            </div>
            <ul className="space-x">
              <li>This will boost her monthly retirement income</li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">DC</div>
              <h4 className="secondary-color">
                Contribute 1.75% to the DC plan
              </h4>
            </div>
            <ul className="space-x">
              <li>
                This gives Allison more flexibility on how and when to withdraw
                her retirement savings
              </li>
              <li>
                She will receive a 100% Company match on these contributions
              </li>
            </ul>
            {/* <div className="callout-pointer">
              <p>
                <span className="bold">Note:</span> because he is already
                receiving a 4% Company match on his RRSP contributions, Amir
                will not receive any matching contributions to the TFSA.
              </p>
            </div> */}
            <div className="space-2x"></div>
          </Accordion>
          <div className="space-2x"></div>
          <h3 className="space-top-2x space-bottom-x profile-title">
            Approaching retirement
          </h3>
          <div className="profile-container" id="retired">
            <Profile
              color={primary}
              src={"/profiles/sundeep.jpg"}
              name="Sundeep"
              age="51"
              family="Married, 3 kids"
              housing="Home owner"
              goals="Retirement, Home renovations"
            />
            <Profile
              color={secondary}
              src={"/profiles/aamna.jpg"}
              name="Aamna"
              age="54"
              family="Married, 2 adult children, 1 grand child"
              housing="Home owner"
              goals="Early retirement, Travel"
            />
            <Profile
              color={accent}
              src={"/profiles/scott.jpg"}
              name="Scott"
              age="60"
              family="1 adult child"
              housing="Home owner"
              goals="Retirement"
            />
          </div>
          <Accordion
            border={light}
            title="Sundeep"
            color={primary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Sundeep is planning to retire in about 14 years. Before retiring,
              he wants to save enough to repair the roof and windows of his
              home.
            </p>
            <p>To meet these goals, Sundeep decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DC</div>
              <h4 className="secondary-color">Contribute 4% to the DC plan</h4>
            </div>
            <ul className="space-x">
              <li>
                This will enhance his retirement income and help him save on
                taxes today
              </li>
              <li>
                He will receive a 100% Company match on these contributions
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">TFSA</div>
              <h4 className="secondary-color">Contribute 4% to the TFSA</h4>
            </div>
            <ul className="space-x">
              <li>
                Sundeep will save for home renovations, while allowing his money
                to earn investment income, tax free
              </li>
              <li>
                He will benefit from much lower fees than he would from a
                personal TFSA
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">Note:</span> because he is already
                receiving a 4% Company match on his DC contributions, Sundeep
                will not receive any matching contributions to the TFSA.
              </p>
            </div>
            <div className="space-2x"></div>
          </Accordion>
          <Accordion
            border={light}
            title="Aamna"
            color={secondary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Aamna is planning to retire early, in the next three to four
              years. She is focused on boosting her retirement income and
              minimizing a reduction to her pension.
            </p>
            <p>To meet these goals, Aamna decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DB</div>
              <h4 className="secondary-color">
                Contribute 2.25% to the optional DB{" "}
              </h4>
            </div>
            <ul className="space-x">
              <li>This will boost her monthly retirement income</li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">OACs</div>
              <h4 className="secondary-color">Contribute 1.75% to the OACs</h4>
            </div>
            <ul className="space-x">
              <li>
                She can purchase additional benefits at retirement, such as
                minimizing her early retirement reduction
              </li>
              <li>
                She will receive a 100% Company match on these contributions
                (paid into her Non-registered account)
              </li>
            </ul>
            <div className="space-2x"></div>
          </Accordion>
          <Accordion
            border={light}
            title="Scott"
            color={accent}
            icon="/icons/icon_profile.svg"
          >
            <p>
              Scott is planning to retire within five years. He is savvy with
              the investment market and enjoys taking a hands-on approach to his
              retirement savings.
            </p>
            <p>To increase his retirement savings, Scott decides to:</p>
            <div className="heading-icon">
              <div className="box heading">DC</div>
              <h4 className="secondary-color">Contribute 4% to the DC plan</h4>
            </div>
            <ul className="space-x space-bottom-2x">
              <li>
                This gives Scott flexibility on how and when to withdraw his
                retirement savings and how to invest the money
              </li>
              <li>
                He will receive a 100% Company match on these contributions
              </li>
            </ul>
          </Accordion>
        </div>
        <div className="callout space-top-2x">
          <div className="wrapper">
            <div>
              <h3>Help Me Decide tool</h3>
              <p>
                When you enrol in the Pension & Savings Program, you can use the{" "}
                <a href="https://jnj.hroffice.com" target="_blank">
                  Help Me Decide tool
                  <span className="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>{" "}
                to help you choose the right options for you. Keep in mind that
                the tool will always look to maximize the Company matching
                contributions and tax savings for you. However, your needs and
                savings goals may differ from the tool’s recommendations,
                especially if you’re saving for the short term.
              </p>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="wrapper">
            <p>
              The scenarios shown here are for illustrative purposes only, and
              your personal situation may differ. CRA limits how much you can
              contribute each year to tax-deferred savings options.
              <span className="bold" style={{ display: "inline" }}>
                {" "}
                It is your responsibility to ensure you don’t exceed your limit
              </span>{" "}
              — and remember that Johnson & Johnson matching contributions are
              also deducted from your personal limit. Find the current limits{" "}
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
        <div className="wrapper">
          <NextPage
            title={intl.formatMessage({ id: "nav.item6" })}
            url="/enrol"
          />
        </div>
      </div>
    </Layout>
  )
}
