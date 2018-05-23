import React, { Component } from 'react';
import './Fab.css';

import Ionicon from 'react-ionicons'

class Fab extends Component {
  render() {
    let fabStyle = {
      backgroundColor: this.props.bgcolor || '#aaa'
    }

    if (this.props.position) {
      this.setPosition(fabStyle);
    }
    return (
      <div className="Fab" style={fabStyle}>
        <Ionicon icon={this.props.icon} fontSize="35px" color={this.props.icolor || '#fff'}/>
        <div className="Fab-hover"></div>
      </div>
    );
  }
  setPosition(style) {
    switch(this.props.position) {
      case 'top-left':
        style.top = '15px';
        style.left = '15px';
        style.right = 'auto';
        style.bottom = 'auto';
        break;
      case 'top':
        style.top = '15px';
        style.left = '50%';
        style.right = 'auto';
        style.bottom = 'auto';
        style.transform = 'translateX(-50%)';
        break;
      case 'top-right':
        style.top = '15px';
        style.left = 'auto';
        style.right = '15px';
        style.bottom = 'auto';
        break;
      case 'bottom-left':
        style.top = 'auto';
        style.left = '15px';
        style.right = 'auto';
        style.bottom = '15px';
        break;
      case 'bottom':
        style.top = 'auto';
        style.left = '50%';
        style.right = 'auto';
        style.bottom = '15px';
        style.transform = 'translateX(-50%)';
        break;
      case 'bottom-right':
        style.top = 'auto';
        style.left = 'auto';
        style.right = '15px';
        style.bottom = '15px';
        break;
      case 'left':
        style.top = '50%';
        style.left = '15px';
        style.right = 'auto';
        style.bottom = 'auto';
        style.transform = 'translateY(-50%)';
        break;
      case 'right':
        style.top = '50%';
        style.left = 'auto';
        style.right = '15px';
        style.bottom = 'auto';
        style.transform = 'translateY(-50%)';
        break;
    }
  }
}

export default Fab;
