import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Submit from "../components/Submit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Questions() {
  return (
    <Layout>
      <Helmet>
        <title>Questions?</title>
      </Helmet>
      <StaticImage src="../images/banner09.jpg" alt="Banner" />
      <div id="page09">
        <div className="wrapper">
          <h1 className="space-x">Questions?</h1>
          <Submit />
          <div className="content-container space-2x">
            <div className="col">
              <h3 className="space-x">Contact the Benefit Help Centre</h3>
              <div className="heading-icon">
                <img src={"/icons/mail.png"} alt="" width="20" />
                <a href="mailto:fyb@hroffice.com">fyb@hroffice.com</a>
              </div>
              <div className=" space-2x heading-icon">
                <img src={"/icons/phone.png"} alt="" width="20" />

                <div className="phone">
                  1-866-769-8521 <br /> Monday to Friday <br /> 8:30 AM to 5 PM
                  ET
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="space-x">Ask AVA</h3>
              <p>
                AVA is a digital assistant that can answer your questions 24/7.
                AVA can help you access information about your benefits
                coverage, your retirement & savings program contributions, and
                account balances.
              </p>
              <p>
                Launch AVA from the{" "}
                <a href="https://jnj.hroffice.com/" target="_blank">
                  FYB Portal
                  <span className="link-icon">
                    &nbsp; 
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
