import React from "react"

export default function Short({title, summary}) {
  return (<div class="short-summary">    
    <h2>{title}</h2>
    {summary.map(paragraph => <p>{paragraph}</p>)}
</div>)
}