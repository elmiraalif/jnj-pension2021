import React from "react"
import * as styles from "../styles/timeline.module.scss"
import { useIntl, FormattedMessage } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Timeline() {
  const intl = useIntl()
  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="timeline.september" />:
        </h4>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "timeline.september_p" }),
          }}
        /> */}
        <p>
          Complete{" "}
          <a href="https://www.surveymonkey.com/r/jjpension" target="_blank">
            this survey
            <span className="link-icon">
              &nbsp;
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>{" "}
          <strong>by September 30</strong> to ask your pension questions. We’ll
          do our best to answer your questions during our information sessions
          in October.
        </p>
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="timeline.october" />:
        </h4>
        <p>
          Attend an information session to learn about the new program in detail
          — <a href="#">sign up here</a>!
        </p>
        <p>
          Consider consulting a financial advisor to better understand how the
          Pension & Savings Program fits in with your other savings —{" "}
          <a href="https://fpcanada.ca/findaplanner" target="_blank">
            find an advisor here
            <span className="link-icon">
              &nbsp;
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>{" "}
          if you don’t have one!
        </p>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "timeline.october_p1" }),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "timeline.october_p2" }),
          }}
        /> */}
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="timeline.nov_dec" />:
        </h4>
        <p>
          <FormattedMessage id="timeline.november_p" />
        </p>
        {/* <div className={`${styles.callout} ${styles.gray}`}>
          <p>
            <span>
              <FormattedMessage id="important" />:
            </span>
            <FormattedMessage id="timeline.november_callout1_p" />
          </p>
          <div className={styles.calloutIcon}>
            <img src={Icon} alt="" width="30" />
            <Link to="#">
              <FormattedMessage id="timeline.november_callout_icon" />
            </Link>
          </div>
        </div> */}
        <div className={styles.blue}>
          <h3>
            <FormattedMessage id="timeline.november_callout_title" />
          </h3>
          <p>
            <FormattedMessage id="timeline.november_callout_copy" />
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="timeline.january" />:
        </h4>
        <p>
          <FormattedMessage id="timeline.january_p" />
        </p>
        <p className="callout-pointer">
          <strong>
            <FormattedMessage id="note" />:
          </strong>
          {/* <FormattedMessage id="timeline.january_callout_arrow1" />
           */}{" "}
          All changes are applied prospectively and do not impact any benefits
          already earned prior to January 1, 2022.
        </p>
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="timeline.twice_a_year" />:
        </h4>
        <p>
          <FormattedMessage id="timeline.twice_p" />
        </p>
      </div>
    </div>
  )
}
