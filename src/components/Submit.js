import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import * as styles from "../styles/submit.module.scss"

export default function Submit() {
  const intl = useIntl()
  return (
    <div className={styles.submit}>
      <div className={styles.heading}>
        <img src={"/icons/question_info.svg"} alt=""/>
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "page9.callout.p" }),
          }}
        />
      </div>
      <a
        href="https://www.surveymonkey.com/r/jjpension"
        target="_blank"
        className={styles.btn}
      >
        {intl.formatMessage({ id: "page9.callout.btn" })}
      </a>
    </div>
  )
}
