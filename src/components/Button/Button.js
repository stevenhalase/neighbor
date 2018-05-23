import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  render() {
    let buttonStyle = {
      backgroundColor: this.props.outline ? 'none' : this.props.bgcolor || '#aaa',
      color: this.props.outline ? this.props.bgcolor || '#aaa' : this.props.color || '#fff',
      border: this.props.outline ? `1px solid ${this.props.bgcolor || '#aaa'}` : 'none'
    }

    let buttonHoverStyle = {
      backgroundColor: this.props.outline ? 'none' : 'rgba(0,0,0,0.1)',
      border: this.props.outline ? `1px solid rgba(0,0,0,0.1)` : 'none'
    }

    return (
      <div className="Button" style={buttonStyle} onClick={this.handleOnClick}>
        {this.props.text}
        <div className="Button-hover" style={buttonHoverStyle}></div>
      </div>
    );
  }
  handleOnClick(ev) {
    this.props.onclick(ev);
  }
}

export default Button;
