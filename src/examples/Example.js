'use strict';

import React, { Component } from 'react';
import ScheduleIt from '../main';

import '../css/main.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: {
        "implement": "daily",
        "am": ["7:00"],
        "pm": ["8:00"],
        "minAm": 1,
        "minPm": 1
      },
      valueAUpdated: null
    };

    this.onValueUpdated = this.onValueUpdated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onValueUpdated(newVal) {
    console.log('onValueUpdated');
    console.log(newVal);

    // this.setState({
    //   valueAUpdated: newVal
    // });
  }

  render() {
    return (
      <div className='example'>
        <div className='example-holder'>
          <div>
            <div>Example 1</div>
            <div>Original Input: {JSON.stringify(this.state.valueA)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueAUpdated)}</div>
            <div>
                Edit Value
                <ScheduleIt 
                  value={this.state.valueA}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

