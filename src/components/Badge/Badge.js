import React, { Component } from 'react';
import './Badge.css';


class Badge extends Component {
  render() {
    let badgeStyle = {
      backgroundColor: this.props.bgcolor || '#aaa',
      color: this.props.color || '#fff'
    }
    return (
      <div className="Badge" style={badgeStyle}>
        {this.props.text}
      </div>
    );
  }
}

export default Badge;
