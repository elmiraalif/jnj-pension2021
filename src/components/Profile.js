import { useIntl } from "gatsby-plugin-intl"
import React from "react"

export default function Profile({
  color,
  src,
  name,
  age,
  family,
  housing,
  goals,
}) {
  const intl = useIntl()
  return (
    <div className="profile" style={{ background: `${color}` }}>
      <div
        className="profile-img"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      {/* <img src={src} alt="Profile" /> */}
      <div className="profile-content">
        <div className="name">{name}</div>
        <div className="feature">
          <span className="bold">
            {intl.formatMessage({ id: "profile.age" })}
          </span>{" "}
          {age} {intl.formatMessage({ id: "profile.ans" })}
        </div>
        <div className="feature">
          <span className="bold">
            {intl.formatMessage({ id: "profile.family" })}
          </span>{" "}
          {family}
        </div>
        <div className="feature">
          <span className="bold">
            {intl.formatMessage({ id: "profile.housing" })}
          </span>{" "}
          {housing}
        </div>
        <div className="feature">
          <span className="bold">
            {intl.formatMessage({ id: "profile.goals" })}
          </span>{" "}
          <br />
          {goals}
        </div>
      </div>
    </div>
  )
}
