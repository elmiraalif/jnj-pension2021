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
          <FormattedMessage id="home.timeline.september" />:
        </h4>
        <p>
          <FormattedMessage id="home.timeline.september_copy.p1" />{" "}
          <a
            href={intl.formatMessage({
              id: "home.timeline.september_copy.href",
            })}
            target="_blank"
          >
            <FormattedMessage id="home.timeline.september_copy.link" />
            <span className="link-icon">
              &nbsp;
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>{" "}
          <strong>
            <FormattedMessage id="home.timeline.september_copy.bold" />
          </strong>{" "}
          <FormattedMessage id="home.timeline.september_copy.p2" />
        </p>
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="home.timeline.october" />:
        </h4>
        <p>
          <FormattedMessage id="home.timeline.october_copy.p1" />{" "}
          <a href="home.timeline.october_copy.href1" target="_blank">
            <FormattedMessage id="home.timeline.october_copy.link1" />
          </a>
          !
        </p>
        <p>
          <FormattedMessage id="home.timeline.october_copy.p2" />{" "}
          <a
            href={intl.formatMessage({
              id: "home.timeline.october_copy.href2",
            })}
            target="_blank"
          >
            <FormattedMessage id="home.timeline.october_copy.link2" />
            <span className="link-icon">
              &nbsp;
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>{" "}
          <FormattedMessage id="home.timeline.october_copy.p3" />
        </p>
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="home.timeline.nov_dec" />:
        </h4>
        <p>
          <FormattedMessage id="home.timeline.november_copy.p" />
        </p>
        {/* <div className={styles.blue}>
          <h3>
            <FormattedMessage id="home.timeline.callout1.title" />
          </h3>
          <p>
            <FormattedMessage id="home.timeline.callout1.p" />
          </p>
        </div> */}
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="home.timeline.january" />:
        </h4>
        <p>
          <FormattedMessage id="home.timeline.january_copy.p" />
        </p>
        <p className="callout-pointer">
          <strong>
            <FormattedMessage id="note" />
          </strong>{" "}
          <c
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({
                id: "home.timeline.january_copy.callout",
              }),
            }}
          />
        </p>
      </div>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <FormattedMessage id="home.timeline.twice_a_year" />:
        </h4>
        <p>
          <FormattedMessage id="home.timeline.twice_copy" />
        </p>
      </div>
    </div>
  )
}
