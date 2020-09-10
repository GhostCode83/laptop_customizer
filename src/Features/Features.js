import React from 'react';
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import './Features.css';

function Features(props) {

  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      <FeatureOptions
        feature={props.feature}
        updateFeature={props.updateFeature}
        selected={props.selected} />
    </fieldset>
  )

}

export default Features