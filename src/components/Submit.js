import React from "react"
import * as styles from "../styles/submit.module.scss"

export default function Submit() {
  return (
    <div className={styles.submit}>
      <div className={styles.heading}>
        <img src={"/icons/question_info.svg"} alt="" width="30" />
        <p>
          Submit a question about our new Pension & Savings Program by{" "}
          <span className="bold">September 30</span>. We will answer your
          questions during the information sessions in October.
        </p>
      </div>
      <a href="https://www.surveymonkey.com/r/jjpension" target="_blank" className={styles.btn}>
        Submit a question
      </a>
    </div>
  )
}
