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
        am: null,
        pm: null,
        minAm: null,
        minPm: null
      },
      working: {
        via: null,
        dailyTabGroups: null,
        dailyDays: [],
        dailyHoursAM: [],
        dailyHoursPM: [],
        minAMCount: null,
        minPMCount: null,
        disableDailyDays: false,
        allowCommit: true
      }
    };

    this.renderTabContent = this.renderTabContent.bind(this);
    this.onSwitchTab = this.onSwitchTab.bind(this);
    this.onSwitchDailyTabGroups = this.onSwitchDailyTabGroups.bind(this);
    this.onSwitchDailyDays = this.onSwitchDailyDays.bind(this);
    this.onSwitchHours = this.onSwitchHours.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.onDone = this.onDone.bind(this);
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

    // track the hours always
    originalWorkingValue.dailyHoursAM = originalCoreValue.am;
    originalWorkingValue.dailyHoursPM = originalCoreValue.pm;

    // track min am and pm
    originalWorkingValue.minAMCount = originalCoreValue.minAm;
    originalWorkingValue.minPMCount = originalCoreValue.minPm;

    this.setState({
      core: originalCoreValue,
      working: originalWorkingValue
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');

  //   // console.log(prevState);
  //   // console.log(this.state);

  //   // this.props.onValueUpdated(this.state);
  // }

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
            <div className={this.state.working.dailyDays.indexOf('1') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('1'))}>Mon</div>
            <div className={this.state.working.dailyDays.indexOf('2') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('2'))}>Tue</div>
            <div className={this.state.working.dailyDays.indexOf('3') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('3'))}>Wed</div>
            <div className={this.state.working.dailyDays.indexOf('4') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('4'))}>Thu</div>
            <div className={this.state.working.dailyDays.indexOf('5') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('5'))}>Fri</div>
            <div className={this.state.working.dailyDays.indexOf('6') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('6'))}>Sat</div>
            <div className={this.state.working.dailyDays.indexOf('7') > -1 ? "sel" : null} onClick={() => (this.onSwitchDailyDays('7'))}>Sun</div>
          </div>

          <div className="am">
            <div className="am-hours">
              <div>AM</div>
              <div className={this.state.working.dailyHoursAM.indexOf('12:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('12:00', 'am'))}>12</div>
              <div className={this.state.working.dailyHoursAM.indexOf('1:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('1:00', 'am'))}>1</div>
              <div className={this.state.working.dailyHoursAM.indexOf('2:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('2:00', 'am'))}>2</div>
              <div className={this.state.working.dailyHoursAM.indexOf('3:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('3:00', 'am'))}>3</div>
              <div className={this.state.working.dailyHoursAM.indexOf('4:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('4:00', 'am'))}>4</div>
              <div className={this.state.working.dailyHoursAM.indexOf('5:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('5:00', 'am'))}>5</div>
              <div className={this.state.working.dailyHoursAM.indexOf('6:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('6:00', 'am'))}>6</div>
              <div className={this.state.working.dailyHoursAM.indexOf('7:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('7:00', 'am'))}>7</div>
              <div className={this.state.working.dailyHoursAM.indexOf('8:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('8:00', 'am'))}>8</div>
              <div className={this.state.working.dailyHoursAM.indexOf('9:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('9:00', 'am'))}>9</div>
              <div className={this.state.working.dailyHoursAM.indexOf('10:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('10:00', 'am'))}>10</div>
              <div className={this.state.working.dailyHoursAM.indexOf('11:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('11:00', 'am'))}>11</div>
            </div>
            <div className="am-min">
              <div>Min AM</div>
              <div className="am-down" onClick={() => (this.updateMin(0, 'am'))}>[-]</div>
              <div>{this.state.working.minAMCount}</div>
              <div className="am-up" onClick={() => (this.updateMin(1, 'am'))}>[+]</div>
            </div>
          </div>

          <div className="pm">
            <div className="pm-hours">
              <div>PM</div>
              <div className={this.state.working.dailyHoursPM.indexOf('12:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('12:00', 'pm'))}>12</div>
              <div className={this.state.working.dailyHoursPM.indexOf('1:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('1:00', 'pm'))}>1</div>
              <div className={this.state.working.dailyHoursPM.indexOf('2:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('2:00', 'pm'))}>2</div>
              <div className={this.state.working.dailyHoursPM.indexOf('3:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('3:00', 'pm'))}>3</div>
              <div className={this.state.working.dailyHoursPM.indexOf('4:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('4:00', 'pm'))}>4</div>
              <div className={this.state.working.dailyHoursPM.indexOf('5:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('5:00', 'pm'))}>5</div>
              <div className={this.state.working.dailyHoursPM.indexOf('6:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('6:00', 'pm'))}>6</div>
              <div className={this.state.working.dailyHoursPM.indexOf('7:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('7:00', 'pm'))}>7</div>
              <div className={this.state.working.dailyHoursPM.indexOf('8:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('8:00', 'pm'))}>8</div>
              <div className={this.state.working.dailyHoursPM.indexOf('9:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('9:00', 'pm'))}>9</div>
              <div className={this.state.working.dailyHoursPM.indexOf('10:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('10:00', 'pm'))}>10</div>
              <div className={this.state.working.dailyHoursPM.indexOf('11:00') > -1 ? "sel" : null} onClick={() => (this.onSwitchHours('11:00', 'pm'))}>11</div>
            </div>
            <div className="pm-min">
              <div>Min PM</div>
              <div className="pm-down" onClick={() => (this.updateMin(0, 'pm'))}>[-]</div>
              <div>{this.state.working.minPMCount}</div>
              <div className="pm-up" onClick={() => (this.updateMin(1, 'pm'))}>[+]</div>
            </div>
          </div>
        </div>;
        
        break;

      case 'forthnightly':
        return <div>forthnightly is under construction...</div>
        break;

      case 'monthly':
        return <div>monthly is under construction...</div>
        break;
    }
  }

  onSwitchTab(implement) {
    this.setState({
      working: {
        ...this.state.working,
        via: implement,
        allowCommit: (implement === 'weekly' ? true : false)
      }
    });
  }

  onSwitchDailyTabGroups(dailyTabGroup) {
    let dailyTabGroupsNew;
    let dailyDaysNew;
    let disableDailyDaysNew;

    switch (dailyTabGroup) {
      case 'daily':
        dailyTabGroupsNew = 'daily';
        dailyDaysNew = ['1','2','3','4','5','6','7'];
        disableDailyDaysNew = true;
        break;

      case 'weekdays':
        dailyTabGroupsNew = 'weekdays';
        dailyDaysNew = ['1','2','3','4','5'];
        disableDailyDaysNew = true;
        break;

      case 'weekends':
        dailyTabGroupsNew = 'weekends';
        dailyDaysNew = ['6','7'];
        disableDailyDaysNew = true;
        break;

      case 'custom':
        dailyTabGroupsNew = 'custom';
        dailyDaysNew = [];
        disableDailyDaysNew = false;
        break;
    }

    this.setState({
      working: {
        ...this.state.working,
        dailyTabGroups: dailyTabGroupsNew,
        dailyDays: dailyDaysNew,
        disableDailyDays: disableDailyDaysNew,
      }
    });
  }

  onSwitchDailyDays(day) {
    const dailyDaysNew = [...this.state.working.dailyDays];

    if (dailyDaysNew.indexOf(day) === -1) {
      dailyDaysNew.push(day);
    } else {
      dailyDaysNew.splice(dailyDaysNew.indexOf(day), 1);
    }

    dailyDaysNew.sort();

    this.setState({
      working: {
        ...this.state.working,
        dailyDays: dailyDaysNew
      }
    });
  }

  onSwitchHours(hour, block) {
    const dailyHoursNew = (block === 'am') ? [...this.state.working.dailyHoursAM] : [...this.state.working.dailyHoursPM];
    const workingNew = {...this.state.working,};

    if (dailyHoursNew.indexOf(hour) === -1) {
      dailyHoursNew.push(hour);
    } else {
      dailyHoursNew.splice(dailyHoursNew.indexOf(hour), 1);
    }

    dailyHoursNew.sort((a,b) => parseInt(a.replace(/:/, '')) - parseInt(b.replace(/:/, '')));

    if (block === 'am') {
      // reset min counts as well if needed
      if (this.state.working.minAMCount > dailyHoursNew.length) {
        workingNew.minAMCount = dailyHoursNew.length;
      }

      workingNew.dailyHoursAM = dailyHoursNew;
    } else {
      // reset min counts as well if needed
      if (this.state.working.minPMCount > dailyHoursNew.length) {
        workingNew.minPMCount = dailyHoursNew.length;
      }

      workingNew.dailyHoursPM = dailyHoursNew;
    } 

    this.setState({
      working: workingNew
    });
  }

  updateMin(direction, block) {
    let minCountNew = (block === 'am') ? this.state.working.minAMCount : this.state.working.minPMCount;

    if (direction) {
      minCountNew++;
    } else {
      minCountNew--;
    }

    if (minCountNew < 0) {
      minCountNew = 0;
    }

    if (block === 'am') {
      if (minCountNew > this.state.working.dailyHoursAM.length) {
        minCountNew = this.state.working.dailyHoursAM.length
      }

      this.setState({
        working: {
          ...this.state.working,
          minAMCount: minCountNew
        }
      });
    } else {
      if (minCountNew > this.state.working.dailyHoursPM.length) {
        minCountNew = this.state.working.dailyHoursPM.length
      }

      this.setState({
        working: {
          ...this.state.working,
          minPMCount: minCountNew
        }
      });
    } 
  }

  onDone() {
    // update implement
    let toStringFormat = this.state.working.dailyDays.join('-');

    if (toStringFormat === '1-2-3-4-5-6-7') {
      toStringFormat = 'daily';
    }


    // update the core
    const newCore = {...this.state.core};
    newCore.implement = toStringFormat;
    newCore.am = this.state.working.dailyHoursAM; // update am
    newCore.pm = this.state.working.dailyHoursPM; // update pm
    newCore.minAm = this.state.working.minAMCount; // update minAm
    newCore.minPm = this.state.working.minPMCount; // update minPm

    this.setState({
      core:newCore 
    }, () => {
      this.props.onValueUpdated(newCore);
    });
  }

  render() {
    return (
      <div className="schedule-it">
        <div className="schedule-tabs">
          <div className={this.state.working.via === 'daily' ? "sel" : null} onClick={() => (this.onSwitchTab('weekly'))}>Weekly</div>
          <div className={this.state.working.via === 'forthnightly' ? "sel" : null}  onClick={() => (this.onSwitchTab('forthnightly'))}>Forthnightly</div>
          <div className={this.state.working.via=== 'monthly' ? "sel" : null}  onClick={() => (this.onSwitchTab('monthly'))}>Monthly</div>
        </div>

        <div className="schedule-body">
          {this.renderTabContent()}
        </div>

        <div className="footer">
          {this.state.working.allowCommit && <div onClick={this.onDone}>Done</div>}
        </div>

        <div className="debug">
          {JSON.stringify(this.state.core)}
        </div>
      </div>
    );
  }
}
