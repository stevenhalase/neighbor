import React, { Component } from 'react';
import './CardBody.css';


class CardBody extends Component {
  render() {
    return (
      <div className="CardBody">
        <div className="CardBody-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CardBody;
