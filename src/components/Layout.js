import React from "react"
import "../styles/global.scss"
import Sidebar from "./Sidebar"
import Copyright from "./Copyright"


export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Copyright />
    </>
  )
}
