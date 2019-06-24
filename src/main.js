import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Promise from 'promise';

export default class ScheduleIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0,
      dailyTabGroups: 0,
      dailyDays: 0
    };

    this.renderTabContent = this.renderTabContent.bind(this);
    this.onSwitchTab = this.onSwitchTab.bind(this);
    this.onSwitchDailyTabGroups = this.onSwitchDailyTabGroups.bind(this);
    this.onSwitchDailyDays = this.onSwitchDailyDays.bind(this);
  }

  renderTabContent() {
    switch(this.state.tab) {
      case 0:
        return <div>
          <div className="tab-groups">
            <div className={this.state.dailyTabGroups === 0 ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups(0))}>Daily</div>
            <div className={this.state.dailyTabGroups === 1 ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups(1))}>Weekdays</div>
            <div className={this.state.dailyTabGroups === 2 ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups(2))}>Weekends</div>
            <div className={this.state.dailyTabGroups === 3 ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups(3))}>Custom Days</div>
          </div>

          <div className="days">
            <div className={this.state.dailyDays === 0 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(0))}>Mon</div>
            <div className={this.state.dailyDays === 1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(1))}>Tue</div>
            <div className={this.state.dailyDays === 2 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(2))}>Wed</div>
            <div className={this.state.dailyDays === 3 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(3))}>Thu</div>
            <div className={this.state.dailyDays === 4 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(4))}>Fri</div>
            <div className={this.state.dailyDays === 5 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(5))}>Sat</div>
            <div className={this.state.dailyDays === 6 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(6))}>Sun</div>
          </div>

          <div className="am">
            <div className="am-hours">
              <div>AM</div>
              <div>12</div>
              <div className="sel">1</div>
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
              <div className="am-down">[-]</div>
              <div>0</div>
              <div className="am-up">[+]</div>
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
              <div className="sel">7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
            </div>
            <div className="pm-min">
              <div>Min PM</div>
              <div className="pm-down">[-]</div>
              <div>0</div>
              <div className="pm-up">[+]</div>
            </div>
          </div>
        </div>;
        
        break;

      case 1:
        return <div>Case 1</div>
        break;

      case 2:
        return <div>Case 2</div>
        break;
    }
  }

  onSwitchTab(tab) {
    this.setState({
      tab
    });
  }

  onSwitchDailyTabGroups(dailyTabGroups) {
    this.setState({
      dailyTabGroups
    });
  }

  onSwitchDailyDays(dailyDays) {
    this.setState({
      dailyDays
    });
  }

  render() {
    const { props } = this;
    console.log(props.value);

    return (
      <div className="schedule-it">
        <div className="schedule-tabs">
          <div className={this.state.tab === 0 ? "sel" : null} onClick={() => (this.onSwitchTab(0))}>Weekly</div>
          <div className={this.state.tab === 1 ? "sel" : null}  onClick={() => (this.onSwitchTab(1))}>Forthnightly</div>
          <div className={this.state.tab === 2 ? "sel" : null}  onClick={() => (this.onSwitchTab(2))}>Monthly</div>
        </div>

        <div className="schedule-body">
          {this.renderTabContent()}
        </div>
      </div>
    );
  }
}
