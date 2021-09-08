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
import { FormattedMessage } from "gatsby-plugin-intl"

export default function Scenarios() {
  const primary = `#da0025`
  const secondary = `#0800a0`
  const accent = `#db00a6`
  const light = `#dbdbdb`
  const intl = useIntl()
  return (
    <Layout>
      <Helmet>
        <title>{intl.formatMessage({ id: "page5.title" })}</title>
      </Helmet>
      <StaticImage src="../images/banner05.jpg" alt="Banner" />
      <div id="page05">
        <div className="wrapper">
          <h1
            className="space-top-x"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "page5.copy1.title" }),
            }}
          />
          <p className="intro-copy">
            <FormattedMessage id="page5.copy1.p" />
          </p>
        </div>
        <div className="callout-gray space-bottom-2x">
          <div className="wrapper">
            <div className="space-x">
              <FormattedMessage id="page5.buttons.p" />
            </div>
            <div className="boxes space-x">
              <a href="#early" className="box">
                <FormattedMessage id="page5.buttons.left" />
              </a>
              <a href="#mid" className="box">
                <FormattedMessage id="page5.buttons.middle" />
              </a>
              <a href="#retired" className="box">
                <FormattedMessage id="page5.buttons.right" />
              </a>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <h3 className="space-bottom-x profile-title">
            <FormattedMessage id="page5.buttons.left" />
          </h3>
          <div className="profile-container" id="early">
            <Profile
              color={primary}
              src="/profiles/priyanka.jpg"
              name="Priyanka"
              age="24"
              family={intl.formatMessage({ id: "profile.priyanka.family" })}
              housing={intl.formatMessage({ id: "profile.priyanka.housing" })}
              goals={intl.formatMessage({ id: "profile.priyanka.goals" })}
            />
            <Profile
              color={secondary}
              src="/profiles/taylor.jpg"
              name="Taylor"
              age="29"
              family={intl.formatMessage({ id: "profile.taylor.family" })}
              housing={intl.formatMessage({ id: "profile.taylor.housing" })}
              goals={intl.formatMessage({ id: "profile.taylor.goals" })}
            />
            <Profile
              color={accent}
              src="/profiles/hang.jpg"
              name="Hang"
              age="34"
              family={intl.formatMessage({ id: "profile.hang.family" })}
              housing={intl.formatMessage({ id: "profile.hang.housing" })}
              goals={intl.formatMessage({ id: "profile.hang.goals" })}
            />
          </div>
          <Accordion
            border={light}
            title="Priyanka"
            color={primary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              <FormattedMessage id="page5.priyanka.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.priyanka.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.priyanka.box1" />
              </div>
              <h4 className="secondary-color" className="secondary-color">
                <FormattedMessage id="page5.priyanka.title1" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.priyanka.li1.p1" />{" "}
                <a
                  href={intl.formatMessage({ id: "home_buyers_href" })}
                  target="_blank"
                >
                  <FormattedMessage id="home_buyers_1" />{" "}
                  <span className="link-icon">
                    <span style={{ textDecoration: "underline" }}>
                      <FormattedMessage id="home_buyers_2" />
                    </span>
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>{" "}
                <FormattedMessage id="page5.priyanka.li1.p2" />
              </li>
              <li>
                <FormattedMessage id="page5.priyanka.li2" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.priyanka.box2" />
              </div>
              <h4 className="secondary-color" className="secondary-color">
                <FormattedMessage id="page5.priyanka.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.priyanka.li3" />
              </li>
              <li>
                <FormattedMessage id="page5.priyanka.li4" />
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">
                  <FormattedMessage id="note" />
                </span>{" "}
                <FormattedMessage id="page5.priyanka.note" />
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
              <FormattedMessage id="page5.taylor.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.taylor.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.taylor.box" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.taylor.title" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.taylor.li1" />
              </li>
              <li>
                <FormattedMessage id="page5.taylor.li2" />
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
              <FormattedMessage id="page5.hang.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.hang.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.hang.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.hang.title1" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.hang.li1" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.hang.box2" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.hang.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.hang.li3" />
              </li>
              <li>
                <FormattedMessage id="page5.hang.li4" />
              </li>
            </ul>
            <div className="callout-pointer">
              <p className="bold">
                <FormattedMessage id="page5.hang.note.bold" />
              </p>
              <br />
              <p>
                <FormattedMessage id="page5.hang.note.p" />
              </p>
            </div>
            <div className="space-2x"></div>
          </Accordion>
          <div className="space-2x"></div>
          <h3 className="space-top-2x space-bottom-x profile-title">
            <FormattedMessage id="page5.buttons.middle" />
          </h3>
          <div className="profile-container" id="mid">
            <Profile
              color={primary}
              src="/profiles/amir.jpg"
              name="Amir"
              age="38"
              family={intl.formatMessage({ id: "profile.amir.family" })}
              housing={intl.formatMessage({ id: "profile.amir.housing" })}
              goals={intl.formatMessage({ id: "profile.amir.goals" })}
            />
            <Profile
              color={secondary}
              src="/profiles/tony.jpg"
              name="Tony"
              age="40"
              family={intl.formatMessage({ id: "profile.tony.family" })}
              housing={intl.formatMessage({ id: "profile.tony.housing" })}
              goals={intl.formatMessage({ id: "profile.tony.goals" })}
            />
            <Profile
              color={accent}
              src="/profiles/allison.jpg"
              name="Allison"
              age="45"
              family={intl.formatMessage({ id: "profile.allison.family" })}
              housing={intl.formatMessage({ id: "profile.allison.housing" })}
              goals={intl.formatMessage({ id: "profile.allison.goals" })}
            />
          </div>
          <Accordion
            border={light}
            title="Amir"
            color={primary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              <FormattedMessage id="page5.amir.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.amir.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.amir.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.amir.title1" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.amir.li1" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.amir.box2" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.amir.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.amir.li2" />
              </li>
              <li>
                <FormattedMessage id="page5.amir.li3" />
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">
                  <FormattedMessage id="note" />
                </span>{" "}
                <FormattedMessage id="page5.amir.note" />
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
              <FormattedMessage id="page5.tony.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.tony.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.tony.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.tony.title1" />{" "}
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.tony.li1" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.tony.box2" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.tony.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.tony.li2" />
              </li>
              <li>
                <FormattedMessage id="page5.tony.li3" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.tony.box3" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.tony.title3" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.tony.li4" />
              </li>
              <li>
                <FormattedMessage id="page5.tony.li5" />
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">
                  <FormattedMessage id="note" />
                </span>{" "}
                <FormattedMessage id="page5.tony.note" />
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
              <FormattedMessage id="page5.allison.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.allison.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.allison.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.allison.title1" />{" "}
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.allison.li1" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.allison.box2" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.allison.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.allison.li2" />
              </li>
              <li>
                <FormattedMessage id="page5.allison.li3" />
              </li>
            </ul>
            <div className="space-2x"></div>
          </Accordion>
          <div className="space-2x"></div>
          <h3 className="space-top-2x space-bottom-x profile-title">
            <FormattedMessage id="page5.buttons.right" />
          </h3>
          <div className="profile-container" id="retired">
            <Profile
              color={primary}
              src={"/profiles/sundeep.jpg"}
              name="Sundeep"
              age="51"
              family={intl.formatMessage({ id: "profile.sundeep.family" })}
              housing={intl.formatMessage({ id: "profile.sundeep.housing" })}
              goals={intl.formatMessage({ id: "profile.sundeep.goals" })}
            />
            <Profile
              color={secondary}
              src={"/profiles/aamna.jpg"}
              name="Aamna"
              age="54"
              family={intl.formatMessage({ id: "profile.aamna.family" })}
              housing={intl.formatMessage({ id: "profile.aamna.housing" })}
              goals={intl.formatMessage({ id: "profile.aamna.goals" })}
            />
            <Profile
              color={accent}
              src={"/profiles/scott.jpg"}
              name="Scott"
              age="60"
              family={intl.formatMessage({ id: "profile.scott.family" })}
              housing={intl.formatMessage({ id: "profile.scott.housing" })}
              goals={intl.formatMessage({ id: "profile.scott.goals" })}
            />
          </div>
          <Accordion
            border={light}
            title="Sundeep"
            color={primary}
            icon="/icons/icon_profile.svg"
          >
            <p>
              <FormattedMessage id="page5.sundeep.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.sundeep.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.sundeep.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.sundeep.title1" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.sundeep.li1" />
              </li>
              <li>
                <FormattedMessage id="page5.sundeep.li2" />
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.sundeep.box2" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.sundeep.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.sundeep.li3" />
              </li>
              <li>
                <FormattedMessage id="page5.sundeep.li4" />
              </li>
            </ul>
            <div className="callout-pointer">
              <p>
                <span className="bold">
                  <FormattedMessage id="note" />
                </span>{" "}
                <FormattedMessage id="page5.sundeep.note" />
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
              <FormattedMessage id="page5.aamna.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.aamna.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.aamna.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.aamna.title1" />{" "}
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.aamna.li1" />{" "}
              </li>
            </ul>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.aamna.box2" />{" "}
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.aamna.title2" />
              </h4>
            </div>
            <ul className="space-x">
              <li>
                <FormattedMessage id="page5.aamna.li2" />
              </li>
              <li>
                <FormattedMessage id="page5.aamna.li3" />
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
              <FormattedMessage id="page5.scott.p1" />
            </p>
            <p>
              <FormattedMessage id="page5.scott.p2" />
            </p>
            <div className="heading-icon">
              <div className="box heading">
                <FormattedMessage id="page5.scott.box1" />
              </div>
              <h4 className="secondary-color">
                <FormattedMessage id="page5.scott.title1" />
              </h4>
            </div>
            <ul className="space-x space-bottom-2x">
              <li>
                <FormattedMessage id="page5.scott.li1" />
              </li>
              <li>
                <FormattedMessage id="page5.scott.li2" />
              </li>
            </ul>
          </Accordion>
        </div>
        {/* <div className="callout">
          <div className="wrapper">
            <div>
              <h3>
                <FormattedMessage id="page5.callout1.title" />
              </h3>
              <p>
                <FormattedMessage id="page5.callout1.p1" />{" "}
                <a
                  href={intl.formatMessage({ id: "page5.callout1.href" })}
                  target="_blank"
                  style={{ display: "inline-block" }}
                >
                  <FormattedMessage id="page5.callout1.help" />
                  <span className="link-icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>{" "}
                <FormattedMessage id="page5.callout1.p2" />
              </p>
            </div>
          </div>
        </div> */}
        <div className="info space-top-2x">
          <div className="wrapper">
            <p>
              <FormattedMessage id="page5.callout2.p1" />
              <span className="bold" style={{ display: "inline" }}>
                {" "}
                <FormattedMessage id="page5.callout2.bold" />
              </span>{" "}
              <FormattedMessage id="page5.callout2.p2" />{" "}
              <a
                href={intl.formatMessage({ id: "page5.callout2.href" })}
                target="_blank"
              >
                <FormattedMessage id="page5.callout2.link" />
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
