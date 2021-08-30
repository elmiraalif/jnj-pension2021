import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Table from "../components/Table"
import NextPage from "../components/NextPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Page03() {
  const intl = useIntl()
  const primary = `#da0025`
  const secondary = `#0800a0`
  const accent = `#cc0299`
  return (
    <Layout>
      <Helmet>
        <title>Contributions</title>
      </Helmet>
      <StaticImage src="../images/banner03.jpg" alt="Banner" />
      <div id="page03">
        <div className="wrapper">
          <h1 className="space-x">
            <FormattedMessage id="nav.item3" />
          </h1>

          <div className="heading-icon space-2x">
            <img src={"/icons/one-red.svg"} alt="One" width="30" />
            <h3>DB</h3>
          </div>
          <Table title="Core DB" color={secondary}>
            <div className="subtitle">
              <img src={"/icons/icon_dollar.svg"} alt="" width="35" />
              <h4>
                Your <br /> Contribution
              </h4>
            </div>
            <div className="subtitle">
              <img src={"/icons/icon_pig.svg"} alt="" width="35" />
              <h4>
                Johnson & Johnson <br /> Contribution
              </h4>
            </div>

            <div className="cell">N/A</div>

            <div className="cell">
              Johnson & Johnson contributions are determined based on an
              actuarial valuation
            </div>
          </Table>
          <Table title="Optional DB" color={primary}>
            <div className="cell">2.25% of earnings</div>
            <div className="cell">
              Johnson & Johnson contributions are determined based on an
              actuarial valuation
            </div>
          </Table>
          <div className="divider"></div>
          <div className="heading-icon space-2x">
            <img src={"/icons/two-red.svg"} alt="Two" width="30" />
            <h3>Non-DB (Optional)</h3>
          </div>
          <Table title="DC" color={accent}>
            <div className="subtitle">
              <img src={"/icons/icon_dollar.svg"} alt="" width="35" />
              <h4>
                Your <br /> Contributions
              </h4>
            </div>
            <div className="subtitle">
              <img src={"/icons/icon_pig.svg"} alt="" width="35" />
              <h4>
                Johnson & Johnson <br /> Contributions
              </h4>
            </div>
            <div className="cell list">
              <ul>
                <li>Up to 1.75% if you participate in the Optional DB</li>
                <li>
                  Up to 4% if you do <span>not </span> participate in the
                  Optional DB
                </li>
              </ul>
            </div>
            <div className="cell list">
              <p className="match">
                <span>100% match:</span>
              </p>
              <ul>
                <li>
                  Up to <span>1.75%</span> if you participate in the Optional DB
                </li>
                <li>
                  Up to <span>4%</span> if you do <span> not</span> participate
                  in the Optional DB
                </li>
              </ul>
            </div>
          </Table>
          <Table title="RRSP, OAC" color={accent}>
            <div className="cell top">
              You can contribute as much as you wish, up to the{" "}
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html"
                target="_blank"
              >
                CRA maximum
                <span className="link-icon">
                  &nbsp;
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>{" "}
              (note that Johnson & Johnson contributions to your RRSP reduce the
              RRSP room you will have available)
            </div>
            <div className="cell list">
              <p className="match">
                <span>100% match:</span>
              </p>
              <ul>
                <li>
                  Up to <span>1.75%</span> if you participate in the Optional DB
                </li>
                <li>
                  Up to <span>4%</span> if you do <span>not</span> participate
                  in the Optional DB
                </li>
              </ul>
              <div className="callout-pointer">
                <span>Note:</span> OAC matching contributions are paid into the
                Non-registered plan, but you can redirect them to your RRSP or
                TFSA
              </div>
              <div className="space-bottom-x"></div>
            </div>
          </Table>
          <Table title="TFSA, Non-registered" color={accent}>
            <div className="cell top">
              You can contribute as much as you wish, up to the{" "}
              <a
                href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html"
                target="_blank"
              >
                CRA maximum
                <span className="link-icon">
                  &nbsp;
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>{" "}
              (note that Johnson & Johnson contributions reduce the room you
              will have available for TFSA; no limit for Non-registered)
            </div>
            <div className="cell list">
              <p className="match">
                <span>50% match:</span>
              </p>
              <ul>
                <li>
                  Up to <span>1.75%</span> if you participate in the Optional DB
                  (max. 0.875% match)
                </li>
                <li>
                  Up to <span>4%</span> if you do <span>not</span> participate
                  in the Optional DB (max. 2% match)
                </li>
              </ul>
            </div>
          </Table>
          <span
            style={{ fontSize: ".7rem", marginTop: "1em", display: "block" }}
          >
            *FAE: Final average earnings
          </span>
        </div>
        <div className="space-2x"></div>
        <div className="callout-gray">
          <div className="wrapper">
            <h3 className="space-top-x">Mixing and matching contributions</h3>
            <p>
              The Company matches your contributions to the Non-DB options up to
              1.75% if Optional DB is selected, or up to 4% if Optional DB is
              not selected. You can also choose to contribute{" "}
              <em className="bold">more</em> to meet your savings goals.
            </p>
            <p>
              <span className="bold">Example</span>: you could contribute 4% to
              the RRSP, and an additional 4% to the TFSA. The Company will match
              your 4% RRSP contribution at 100%. There will be no Company match
              on your TFSA contributions, but you’ll benefit from additional
              savings and low investment management fees. The choice is yours!
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="wrapper">
            <img src={"/icons/icon_info.svg"} alt="" width="30" />
            <div>
              <h3>
                Why is the maximum Company match different for each optional
                component?
              </h3>
              <p>
                The aggregate maximum amount that a member can have matched by
                Johnson & Johnson for Non-DB options is either 1.75% if Optional
                DB is selected or 4% if Optional DB is not selected. How much
                Johnson & Johnson matches also depends on your selection of
                Non-DB options (i.e., DC, RRSP, OAC, TFSA or Non-registered) —
                as shown in the table above. The Company match is higher for DC,
                RRSP and OAC since the Company wants to encourage you to save
                for the long-term.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper" style={{ paddingTop: 0 }}>
          <NextPage
            title={intl.formatMessage({ id: "nav.item4" })}
            url="/choose-right-options"
          />
        </div>
      </div>
    </Layout>
  )
}
