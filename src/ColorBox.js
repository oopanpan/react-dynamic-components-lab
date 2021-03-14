import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity - 0.1
    return ( newOpacity <= 0.1 ? null :
      <div className="color-box" style={{opacity: 1 /*replace null with the value*/}}>
        <ColorBox opacity={newOpacity}/>
      </div>
    )
  }

}

