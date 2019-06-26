import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Promise from 'promise';

export default class ScheduleIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      core: {
        via: null,
        implement: null,
      },
      working: {
        via: null,
        dailyTabGroups: null,
        dailyDays: [],
        disableDailyDays: false
      }
    };

    this.renderTabContent = this.renderTabContent.bind(this);
    this.onSwitchTab = this.onSwitchTab.bind(this);
    this.onSwitchDailyTabGroups = this.onSwitchDailyTabGroups.bind(this);
    this.onSwitchDailyDays = this.onSwitchDailyDays.bind(this);
  }

  componentDidMount() {
    const {value} = this.props;
    const originalCoreValue = {...value};
    const originalWorkingValue = {...this.state.working};

    switch (originalCoreValue.implement) {
      case 'daily':
      case '1-2-3-4-5-6-7':
        originalWorkingValue.via = 'weekly';
        originalWorkingValue.dailyTabGroups = 'daily';
        originalWorkingValue.dailyDays = ['1','2','3','4','5','6','7'];
        originalWorkingValue.disableDailyDays = true;
        break;

      case '6-7':
        originalWorkingValue.via = 'weekly';
        originalWorkingValue.dailyTabGroups = 'weekends';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
        originalWorkingValue.disableDailyDays = true;
        break;

      case '1-2-3-4-5':
        originalWorkingValue.via = 'weekly';
        originalWorkingValue.dailyTabGroups = 'weekdays';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
        originalWorkingValue.disableDailyDays = true;
        break;

      default:
        originalWorkingValue.via = 'weekly';
        originalWorkingValue.dailyTabGroups = 'custom';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
        originalWorkingValue.disableDailyDays = false;
        break;
    }

    this.setState({
      core: originalCoreValue,
      working: originalWorkingValue
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    console.log(prevState);
    console.log(this.state);

    this.props.onValueUpdated(this.state);
  }

  renderTabContent() {
    switch(this.state.working.via) {
      case 'weekly':
        return <div>
          <div className="tab-groups">
            <div className={this.state.working.dailyTabGroups === 'daily' ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups('daily'))}>Daily</div>
            <div className={this.state.working.dailyTabGroups === 'weekdays' ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups('weekdays'))}>Weekdays</div>
            <div className={this.state.working.dailyTabGroups === 'weekends' ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups('weekends'))}>Weekends</div>
            <div className={this.state.working.dailyTabGroups === 'custom' ? "sel" : null} onClick={() => (this.onSwitchDailyTabGroups('custom'))}>Custom Days</div>
          </div>

          <div className="days" className={this.state.working.disableDailyDays ? 'days disable' : 'days'}>
            <div className={this.state.working.dailyDays.indexOf('1') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(0))}>Mon</div>
            <div className={this.state.working.dailyDays.indexOf('2') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(1))}>Tue</div>
            <div className={this.state.working.dailyDays.indexOf('3') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(2))}>Wed</div>
            <div className={this.state.working.dailyDays.indexOf('4') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(3))}>Thu</div>
            <div className={this.state.working.dailyDays.indexOf('5') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(4))}>Fri</div>
            <div className={this.state.working.dailyDays.indexOf('6') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(5))}>Sat</div>
            <div className={this.state.working.dailyDays.indexOf('7') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays(6))}>Sun</div>
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

      case 'forthnightly':
        return <div>Case 1</div>
        break;

      case 'monthly':
        return <div>Case 2</div>
        break;
    }
  }

  onSwitchTab(implement) {
    this.setState({
      implement
    });
  }

  onSwitchDailyTabGroups(dailyTabGroups) {
    this.setState({
      working: {
        dailyTabGroups
      }
    });
  }

  onSwitchDailyDays(dailyDays) {
    this.setState({
      dailyDays
    });
  }

  render() {
    return (
      <div className="schedule-it">
        <div className="schedule-tabs">
          <div className={this.state.working.via === 'daily' ? "sel" : null} onClick={() => (this.onSwitchTab('daily'))}>Weekly</div>
          <div className={this.state.working.via === 'forthnightly' ? "sel" : null}  onClick={() => (this.onSwitchTab('forthnightly'))}>Forthnightly</div>
          <div className={this.state.working.via=== 'monthly' ? "sel" : null}  onClick={() => (this.onSwitchTab('monthly'))}>Monthly</div>
        </div>

        <div className="schedule-body">
          {this.renderTabContent()}
        </div>
      </div>
    );
  }
}
