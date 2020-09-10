
import React from 'react';
import Features from './../Features/Features.js'
import './../App.css'
import store from './../STORE'

function Main( props ) {

  const features = Object.keys(store).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <Features
        featureHash={featureHash}
        feature={feature}
        selected={props.selected}
        updateFeature={props.updateFeature}
        key={idx} />
    )
  })

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )

}


export default Main;