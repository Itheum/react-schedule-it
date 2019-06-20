import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Promise from 'promise';

export default class ScheduleIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0
    };
  }

  render() {
    const { props } = this;
    console.log(props.value);

    return (
      <div className="schedule-it">
        <div className="schedule-tabs">
          <div>Weekly</div>
          <div>Forthnightly</div>
          <div>Monthly</div>
        </div>

        <div className="schedule-body">
          <div className="tab-groups">
            <div>Daily</div>
            <div>Weekdays</div>
            <div>Weekends</div>
            <div>Custom Days</div>
          </div>

          <div className="days">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>

          <div className="am">
            <div className="am-hours">
              <div>AM</div>
              <div>12</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
            </div>
            <div className="am-min">
              <div>Min AM</div>
              <div>[-]</div>
              <div>0</div>
              <div>[+]</div>
            </div>
          </div>

          <div className="pm">
            <div className="pm-hours">
              <div>PM</div>
              <div>12</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
            </div>
            <div className="pm-min">
              <div>Min PM</div>
              <div>[-]</div>
              <div>0</div>
              <div>[+]</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
