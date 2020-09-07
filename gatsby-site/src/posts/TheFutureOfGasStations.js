import React from "react"

import Short from "../components/short"

const title = "The Future of Gas Stations"
const summary = ["Gas stations are everywhere, but since the 90s they have been in a steady decline. This research looks at what will happen to these ubiqutous spaces.","Paragraph 2"]



export default function TheFutureOfGasStations({size}) {
  return ( 
      <div class="container">
        <Short title={title} summary={summary} />
      </div>)
}