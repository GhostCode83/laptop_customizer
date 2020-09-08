import React from 'react';
import slugify from 'slugify';
import store from './../STORE'


class FeatureOptions extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
   Object.keys(store).map((feature) => {
      store[feature].map(item => {//accesses features prop at the feature level and maps over each item. why isn't it picking up the cost as well?  (how) does it know the difference?
        const itemHash = slugify(JSON.stringify(item));  //creates a string with dashes of each item
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.status.selected[feature].name}
              onChange={() => this.props.updateFeature(feature, item)} />
            <label
              htmlFor={itemHash}
              className="feature__label">
              {item.name}
              ({this.props.currency.format(item.cost)})
            </label>
          </div>
        );
      });
    })

    return( 
      null
    )
  }
}

export default FeatureOptions