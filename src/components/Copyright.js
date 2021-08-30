import React from "react"


export default function Copyright() {
  let year = new Date().getFullYear()
  return (
    <div className="copyright">
      <div className="wrapper">© {year} Johnson & Johnson</div>
    </div>
  )
}
