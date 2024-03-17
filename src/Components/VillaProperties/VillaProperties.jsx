import React from 'react'
import './VillaProperties.css'
import Items from '../Items/Items'

export default function VillaProperties() {
  return (
    <div className="properties section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Properties</h6>
            <h2>We Provide The Best Property You Like</h2>
          </div>
        </div>
      </div>
      <div className="row">
      <Items/>
    </div>
  </div>
  </div>
  )
}
