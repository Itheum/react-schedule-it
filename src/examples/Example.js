'use strict';

import React, { Component } from 'react';
import ScheduleIt from '../main';

import '../css/main.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueW1: {
        "implement": "daily",
        "am": ["7:00"],
        "pm": ["8:00"],
        "minAm": 1,
        "minPm": 1
      },
      valueW1Updated: {},
      valueW2: {
        "implement": "4-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueW2Updated: {},
      valueW3: {
        "implement": "1-2-3-4-5",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueW3Updated: {},
      valueW4: {
        "implement": "6-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueW4Updated: {},
      valueW5: {
        "implement": "daily",
        "am": ["8:00"],
        "pm": ["7:00", "8:00"],
        "minAm": 1,
        "minPm": 1
      },
      valueW5Updated: {},
      valueW6: {
        "implement": "1-2-3-4-5-6-7",
        "am": ["7:00"],
        "pm": ["8:00"],
        "minAm": 1,
        "minPm": 1
      },
      valueW6Updated: {},

      valueF1: {
        "via": "forthnightly",
        "implement": "4-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueF1Updated: {},

      valueF2: {
        "via": "forthnightly",
        "implement": "1-2-3-4-5",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueF2Updated: {},

      valueF3: {
        "via": "forthnightly",
        "implement": "6-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueF3Updated: {},

      valueM1: {
        "via": "monthly",
        "implement": "first",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueM1Updated: {},

      valueM2: {
        "via": "monthly",
        "implement": "last",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueM2Updated: {},

      valueM3: {
        "via": "monthly",
        "implement": "first:1",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueM3Updated: {},

      valueM4: {
        "via": "monthly",
        "implement": "last:5",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueM4Updated: {},

      valueM5: {
        "via": "monthly",
        "implement": "last:1-2-3-4-5-6-7",
        "am": [],
        "pm": ["9:00"],
        "minAm": 0,
        "minPm": 1
      },
      valueM5Updated: {},
      
    };

    this.onValueUpdated = this.onValueUpdated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onValueUpdated(newVal, changeThis) {
    console.log('onValueUpdated');
    console.log(newVal);

    this.setState({
      [changeThis]: newVal
    });
  }

  render() {
    return (
      <div className='example'>
        <div>
          <h2>Weekly</h2>

          <div className='an-eg'>
            <div>Example 1</div>
            <div>Original Input: {JSON.stringify(this.state.valueW1)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueW1Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueW1}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueW1Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 2</div>
            <div>Original Input: {JSON.stringify(this.state.valueW2)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueW2Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueW2}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueW2Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 3</div>
            <div>Original Input: {JSON.stringify(this.state.valueW3)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueW3Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueW3}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueW3Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 4</div>
            <div>Original Input: {JSON.stringify(this.state.valueW4)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueW4Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueW4}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueW4Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 5</div>
            <div>Original Input: {JSON.stringify(this.state.valueW5)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueW5Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueW5}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueW5Updated'))} />
            </div>
          </div> 

          <div className='an-eg'>
            <div>Example 6</div>
            <div>Original Input: {JSON.stringify(this.state.valueW6)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueW6Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueW6}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueW6Updated'))} />
            </div>
          </div>          
        </div>
      
        <div>
          <h2>Forthnightly</h2>

          <div className='an-eg'>
            <div>Example 1</div>
            <div>Original Input: {JSON.stringify(this.state.valueF1)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueF1Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueF1}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueF1Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 2</div>
            <div>Original Input: {JSON.stringify(this.state.valueF2)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueF2Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueF2}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueF2Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 3</div>
            <div>Original Input: {JSON.stringify(this.state.valueF3)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueF3Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueF3}
                supportedOptions={['weekly', 'forthnightly']}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueF3Updated'))} />
            </div>
          </div>

        </div>


        <div>
          <h2>Monthly</h2>
          
          <div className='an-eg'>
            <div>Example 1</div>
            <div>Original Input: {JSON.stringify(this.state.valueM1)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueM1Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueM1}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueM1Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 2</div>
            <div>Original Input: {JSON.stringify(this.state.valueM2)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueM2Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueM2}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueM2Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 3</div>
            <div>Original Input: {JSON.stringify(this.state.valueM3)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueM3Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueM3}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueM3Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 4</div>
            <div>Original Input: {JSON.stringify(this.state.valueM4)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueM4Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueM4}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueM4Updated'))} />
            </div>
          </div>

          <div className='an-eg'>
            <div>Example 5</div>
            <div>Original Input: {JSON.stringify(this.state.valueM5)}</div>
            <div>Updated Input: {JSON.stringify(this.state.valueM5Updated)}</div>
            <div className="widget-holder">
              <ScheduleIt 
                value={this.state.valueM5}
                onValueUpdated={(val) => (this.onValueUpdated(val, 'valueM5Updated'))} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

