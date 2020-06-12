import React from "react"
import { Helmet } from "react-helmet"
import "../style.css"

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#FE5000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Work Walks</title>
      </Helmet>
      <img style={{ width: "70vw" }} src="images/esitlused-2020.gif"></img>
    </div>
  )
}
