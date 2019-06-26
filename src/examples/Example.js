'use strict';

import React, { Component } from 'react';
import ScheduleIt from '../main';

import '../css/main.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: {
        "implement": "daily",
        "am": ["7:00"],
        "pm": ["8:00"],
        "minAm": 1,
        "minPm": 1
      },
      value1Updated: null,
      value2: {
        "implement": "4-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      value2Updated: null,
      value3: {
        "implement": "1-2-3-4-5",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      value3Updated: null,
      value4: {
        "implement": "6-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      value4Updated: null,
      value5: {
        "implement": "daily",
        "am": ["8:00"],
        "pm": ["7:00", "8:00"],
        "minAm": 1,
        "minPm": 1
      },
      value5Updated: null,
      value6: {
        "implement": "1-2-3-4-5-6-7",
        "am": ["7:00"],
        "pm": ["8:00"],
        "minAm": 1,
        "minPm": 1
      },
      value6Updated: null,
    };

    this.onValueUpdated = this.onValueUpdated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onValueUpdated(newVal) {
    console.log('onValueUpdated');
    console.log(newVal);

    // this.setState({
    //   value1Updated: newVal
    // });
  }

  render() {
    return (
      <div className='example'>
        <div>
          <div className='an-eg'>
            <div>Example 1</div>
            <div>Original Input: {JSON.stringify(this.state.value1)}</div>
            <div>Updated Input: {JSON.stringify(this.state.value1Updated)}</div>
            <div className="widget-holder">
                Edit Value
                <ScheduleIt 
                  value={this.state.value1}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 2</div>
            <div>Original Input: {JSON.stringify(this.state.value2)}</div>
            <div>Updated Input: {JSON.stringify(this.state.value2Updated)}</div>
            <div className="widget-holder">
                Edit Value
                <ScheduleIt 
                  value={this.state.value2}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 3</div>
            <div>Original Input: {JSON.stringify(this.state.value3)}</div>
            <div>Updated Input: {JSON.stringify(this.state.value3Updated)}</div>
            <div className="widget-holder">
                Edit Value
                <ScheduleIt 
                  value={this.state.value3}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 4</div>
            <div>Original Input: {JSON.stringify(this.state.value4)}</div>
            <div>Updated Input: {JSON.stringify(this.state.value4Updated)}</div>
            <div className="widget-holder">
                Edit Value
                <ScheduleIt 
                  value={this.state.value4}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 5</div>
            <div>Original Input: {JSON.stringify(this.state.value5)}</div>
            <div>Updated Input: {JSON.stringify(this.state.value5Updated)}</div>
            <div className="widget-holder">
                Edit Value
                <ScheduleIt 
                  value={this.state.value5}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div> 

          <div className='an-eg'>
            <div>Example 6</div>
            <div>Original Input: {JSON.stringify(this.state.value6)}</div>
            <div>Updated Input: {JSON.stringify(this.state.value6Updated)}</div>
            <div className="widget-holder">
                Edit Value
                <ScheduleIt 
                  value={this.state.value6}
                  onValueUpdated={this.onValueUpdated} />
            </div>
          </div>          
        </div>
      </div>
    )
  }
}

