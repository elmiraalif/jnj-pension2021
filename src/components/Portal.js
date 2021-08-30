import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Portal() {
  const Arrow = "/icons/right-arrow-red.svg"
  return (
    <div className="portal">
      <div className="title space-2x">
        <a href="https://jnj.hroffice.com/" target="_blank">
          FYB Portal{" "}
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            style={{ marginLeft: "3px" }}
          />
        </a>
      </div>
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>
            Help Me Decide tool —{" "}
            <span className="italic-bold">Coming in November</span>:
          </h4>
          <p>
            Answer a few short questions and get important information that can
            help you meet your savings goals in the most tax effective way.
          </p>
        </div>
      </div>
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>Pension Projection tool:</h4>
          <p>
            See how much DB pension you could earn at different retirement
            dates. You can run three retirement dates simultaneously to compare
            your retirement income at different ages. You can also see how a
            change in salary would impact your retirement income. Easily save or
            print your results to review with your spouse/partner and/or a
            financial advisor.
          </p>
        </div>
      </div>
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>Retirement Income Calculator (RIC):</h4>
          <p>
            Review your estimated retirement income from the program, with the
            option to add in any personal savings you have in accounts like an
            RRSP or TFSA. You can set a retirement income goal and determine
            what your annual income in retirement will be.
          </p>
        </div>
      </div>
      <div className="heading-icon">
        <img src={Arrow} alt="" width="20" />
        <div>
          <h4>Investor Questionnaire:</h4>
          <p>
            Answer questions related to your savings goals and tolerance with
            investment risk to determine the right investment options for you.
          </p>
        </div>
      </div>

      <h3 className="title">A financial advisor</h3>
      <p>
        It can be beneficial to consult a personal financial advisor if you need
        additional support and/or guidance for your big picture retirement
        savings plan. If you don’t yet have a financial advisor, you can find
        one{" "}
        <a href="https://fpcanada.ca/findaplanner" target="_blank">
          here
          <span className="link-icon">
            &nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>
        .
      </p>
    </div>
  )
}
