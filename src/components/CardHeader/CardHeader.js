import React, { Component } from 'react';
import './CardHeader.css';


class CardHeader extends Component {
  render() {
    return (
      <div className="CardHeader">
        <div className="CardHeader-title-container">
          <div className="CardHeader-toptitle">{this.props.toptitle}</div>
          <div className="CardHeader-title">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default CardHeader;
