import React from "react"

export default function Copyright() {
  let year = new Date().getFullYear()
  return (
    <div className="copyright">
      <div className="wrapper" style={{ paddingLeft: "1em" }}>
        © {year} – {year + 1} Johnson & Johnson
      </div>
    </div>
  )
}
