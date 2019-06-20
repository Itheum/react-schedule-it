'use strict';

import React, { Component } from 'react';
import ScheduleIt from '../main';

import '../css/main.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        "implement": "daily",
        "am": ["7:00"],
        "pm": ["8:00"],
        "minAm": 1,
        "minPm": 1
      }
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className='example'>
        <div className='example-holder'>
          <ScheduleIt value={this.state.value} />
        </div>
      </div>
    )
  }
}
