import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {this.props.opacity <= 0.2 ? null : <ColorBox opacity={this.props.opacity - 0.1}/>}
      </div>
    )
  }

}

