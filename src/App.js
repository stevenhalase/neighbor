import React, { Component } from 'react';
import './App.css';

import Fab from './components/Fab/Fab';
import Card from './components/Card/Card';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleVolunteerOnClick = this.handleVolunteerOnClick.bind(this);
    this.handleHostOnClick = this.handleHostOnClick.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Card title="How To Garden" toptitle="Steven Halase">
          <div>
            <Badge text="Outdoors" bgcolor="#2ecc71"/>
            <Badge text="How-To" bgcolor="#f1c40f"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button text="Volunteer" outline={false} bgcolor="#e67e22" onclick={this.handleVolunteerOnClick} />
            <Button text="Host" outline={true} bgcolor="#3498db" onclick={this.handleHostOnClick} />
          </div>
        </Card>
        <Fab icon="ios-add" icolor="#fff" bgcolor="#ffc636" position="bottom-right" />
      </div>
    );
  }
  handleVolunteerOnClick(ev) {
    console.log('clicked');
  }
  handleHostOnClick(ev) {
    console.log('clicked');
  }
}

export default App;
