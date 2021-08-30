import React from "react"

export default function Table({ title, children , color}) {
  return (
    <div className="table">
      <div className="title" style={{background: `${color}`}}>{title}</div>
      <div className="content">{children}</div>
    </div>
  )
}
