import React, { Component } from 'react';
import './Card.css';

import CardHeader from './../CardHeader/CardHeader';
import CardBody from './../CardBody/CardBody';
import CardFooter from './../CardFooter/CardFooter';


class Card extends Component {
  render() {
    return (
      <div className="Card">
        <CardHeader toptitle={this.props.toptitle} title={this.props.title}/>
        <CardBody>
          {this.props.children}
        </CardBody>
        <CardFooter />
      </div>
    );
  }
}

export default Card;
