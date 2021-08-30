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
  return (
    <div className="profile" style={{ background: `${color}` }}>
      <div className="profile-img" style={{backgroundImage: `url(${src})`}}>
      </div>
      {/* <img src={src} alt="Profile" /> */}
      <div className="profile-content">
        <div className="name">{name}</div>
        <div className="feature"><span className="bold">Age:</span> {age}</div>
        <div className="feature"><span className="bold">Family:</span> {family}</div>
        <div className="feature"><span className="bold">Housing:</span> {housing}</div>
        <div className="feature"><span className="bold">Top Savings Goals:</span> {goals}</div>
      </div>
    </div>
  )
}
