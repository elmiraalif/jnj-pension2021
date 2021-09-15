import React, { useState } from "react"

export default function Accordion({ title, icon, color, bg, border, children }) {
  const [content, showContent] = useState(false)
  return (
    <div className="accordion">
      <div
        className="heading"
        onClick={() => {
          showContent(!content)
        }}
        style={{
          color: `${color}`,

          transition: `border-bottom 0.3s ease`,
          background:`${bg}`
        }}
      >
        <div className="title">
          <img src={icon} alt="" />
          <h3>{title}</h3>
        </div>
        <div className="cross">
          <div
            className="bar"
            style={{
              transform: content === false ? `initial` : `rotate(-45deg)`,
              background: `${color}`,
            }}
          ></div>
          <div
            className="bar"
            style={{
              transform: content === false ? `rotate(90deg)` : `rotate(45deg)`,
              background: `${color}`,
            }}
          ></div>
        </div>
      </div>
      <div
        className="body"
        style={{
          maxHeight: content === false ? `0` : `300vh`,
          borderBottom: content === false && `1px solid ${border}`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
