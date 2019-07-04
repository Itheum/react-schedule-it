import React from 'react';

export default class ScheduleIt extends React.Component {
  state = {
    mode: 0,
    commitedWorkingState: {},
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
      minAMCount: '',
      minPMCount: '',
      disableDailyDays: false,
      allowCommit: true
    }
  };

  componentDidMount() {
    const {value} = this.props;
    const originalCoreValue = {...value};
    const originalWorkingValue = {...this.state.working};

    // for weekly 'via' will be undefined
    if (!originalCoreValue.via) {
      originalWorkingValue.via = 'weekly';
    } else {
      originalWorkingValue.via = originalCoreValue.via;
    }

    switch (originalCoreValue.implement) {
      case 'daily':
      case '1-2-3-4-5-6-7':
        originalWorkingValue.dailyTabGroups = 'daily';
        originalWorkingValue.dailyDays = ['1','2','3','4','5','6','7'];
        originalWorkingValue.disableDailyDays = true;
        break;

      case '6-7':
        originalWorkingValue.dailyTabGroups = 'weekends';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
        originalWorkingValue.disableDailyDays = true;
        break;

      case '1-2-3-4-5':
        originalWorkingValue.dailyTabGroups = 'weekdays';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
        originalWorkingValue.disableDailyDays = true;
        break;

      case 'first': // monthly
        originalWorkingValue.dailyTabGroups = 'monthlyFirstDay';
        originalWorkingValue.disableDailyDays = true;
        break;

      case 'last': // monthly
        originalWorkingValue.dailyTabGroups = 'monthlyLastDay';
        originalWorkingValue.disableDailyDays = true;
        break;

      default:
        originalWorkingValue.dailyTabGroups = 'custom';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
        originalWorkingValue.disableDailyDays = false;
        break;
    }

    // S: other monthly implement rules
    if (originalCoreValue.implement.indexOf('first:') > -1) {
      originalWorkingValue.dailyTabGroups = 'monthlyLastDaySpecificFirstDays';
      originalWorkingValue.dailyDays = originalCoreValue.implement.split(':')[1].split('-');
    }

    if (originalCoreValue.implement.indexOf('last:') > -1) {
      originalWorkingValue.dailyTabGroups = 'monthlyLastDaySpecificLastDays';
      originalWorkingValue.dailyDays = originalCoreValue.implement.split(':')[1].split('-');
    }
    // E: other monthly implement rules

    // track the hours always
    originalWorkingValue.dailyHoursAM = (originalCoreValue.am) ? originalCoreValue.am : [];
    originalWorkingValue.dailyHoursPM = (originalCoreValue.pm) ? originalCoreValue.pm : [];

    // track min am and pm
    originalWorkingValue.minAMCount = originalCoreValue.minAm;
    originalWorkingValue.minPMCount = originalCoreValue.minPm;

    this.setState({
      core: originalCoreValue,
      working: originalWorkingValue,
      commitedWorkingState: {...originalWorkingValue}
    });
  }

  renderMinCount = val => {
    if (!val) {
      return <div>0</div>;
    }

    return <div>{val}</div>;
  }

  renderTabContent = () => {
    return <div>
      <div className="tab-groups">
      {
        (this.state.working.via !== 'monthly')
          ? <div>
              <div className={this.state.working.dailyTabGroups === 'daily' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('daily'))}>Daily</div>
              <div className={this.state.working.dailyTabGroups === 'weekdays' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('weekdays'))}>Weekdays</div>
              <div className={this.state.working.dailyTabGroups === 'weekends' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('weekends'))}>Weekends</div>
              <div className={this.state.working.dailyTabGroups === 'custom' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('custom'))}>Custom Days</div>
            </div>
          : <div>
              <div className={this.state.working.dailyTabGroups === 'monthlyFirstDay' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('monthlyFirstDay'))}>First Day</div>
              <div className={this.state.working.dailyTabGroups === 'monthlyLastDay' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('monthlyLastDay'))}>Last Day</div>
              <div className={this.state.working.dailyTabGroups === 'monthlyLastDaySpecificFirstDays' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('monthlyLastDaySpecificFirstDays'))}>
                Specific First Day/s</div>
              <div className={this.state.working.dailyTabGroups === 'monthlyLastDaySpecificLastDays' ? 'sel color3' : null} onClick={() => (this.onSwitchDailyTabGroups('monthlyLastDaySpecificLastDays'))}>
                Specific Last Day/s</div>
            </div>
      }
      </div>

      <div className="days" className={this.state.working.disableDailyDays ? 'days disable' : 'days'}>
        <div className={this.state.working.dailyDays.indexOf('1') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('1'))}>Mon</div>
        <div className={this.state.working.dailyDays.indexOf('2') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('2'))}>Tue</div>
        <div className={this.state.working.dailyDays.indexOf('3') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('3'))}>Wed</div>
        <div className={this.state.working.dailyDays.indexOf('4') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('4'))}>Thu</div>
        <div className={this.state.working.dailyDays.indexOf('5') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('5'))}>Fri</div>
        <div className={this.state.working.dailyDays.indexOf('6') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('6'))}>Sat</div>
        <div className={this.state.working.dailyDays.indexOf('7') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchDailyDays('7'))}>Sun</div>
      </div>

      <div className="am color2">
        <div className="am-hours">
          <div>AM</div>
          <div className={this.state.working.dailyHoursAM.indexOf('12:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('12:00', 'am'))}>12</div>
          <div className={this.state.working.dailyHoursAM.indexOf('1:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('1:00', 'am'))}>1</div>
          <div className={this.state.working.dailyHoursAM.indexOf('2:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('2:00', 'am'))}>2</div>
          <div className={this.state.working.dailyHoursAM.indexOf('3:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('3:00', 'am'))}>3</div>
          <div className={this.state.working.dailyHoursAM.indexOf('4:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('4:00', 'am'))}>4</div>
          <div className={this.state.working.dailyHoursAM.indexOf('5:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('5:00', 'am'))}>5</div>
          <div className={this.state.working.dailyHoursAM.indexOf('6:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('6:00', 'am'))}>6</div>
          <div className={this.state.working.dailyHoursAM.indexOf('7:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('7:00', 'am'))}>7</div>
          <div className={this.state.working.dailyHoursAM.indexOf('8:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('8:00', 'am'))}>8</div>
          <div className={this.state.working.dailyHoursAM.indexOf('9:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('9:00', 'am'))}>9</div>
          <div className={this.state.working.dailyHoursAM.indexOf('10:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('10:00', 'am'))}>10</div>
          <div className={this.state.working.dailyHoursAM.indexOf('11:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('11:00', 'am'))}>11</div>
        </div>
        {!this.props.enforeTimeMins && <div className="am-min">
          <div>Min AM</div>
          <div className="am-down" onClick={() => (this.updateMin(0, 'am'))}>[-]</div>
          <div>{this.renderMinCount(this.state.working.minAMCount)}</div>
          <div className="am-up" onClick={() => (this.updateMin(1, 'am'))}>[+]</div>
        </div>}
      </div>

      <div className="pm color2">
        <div className="pm-hours">
          <div>PM</div>
          <div className={this.state.working.dailyHoursPM.indexOf('12:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('12:00', 'pm'))}>12</div>
          <div className={this.state.working.dailyHoursPM.indexOf('1:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('1:00', 'pm'))}>1</div>
          <div className={this.state.working.dailyHoursPM.indexOf('2:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('2:00', 'pm'))}>2</div>
          <div className={this.state.working.dailyHoursPM.indexOf('3:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('3:00', 'pm'))}>3</div>
          <div className={this.state.working.dailyHoursPM.indexOf('4:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('4:00', 'pm'))}>4</div>
          <div className={this.state.working.dailyHoursPM.indexOf('5:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('5:00', 'pm'))}>5</div>
          <div className={this.state.working.dailyHoursPM.indexOf('6:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('6:00', 'pm'))}>6</div>
          <div className={this.state.working.dailyHoursPM.indexOf('7:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('7:00', 'pm'))}>7</div>
          <div className={this.state.working.dailyHoursPM.indexOf('8:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('8:00', 'pm'))}>8</div>
          <div className={this.state.working.dailyHoursPM.indexOf('9:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('9:00', 'pm'))}>9</div>
          <div className={this.state.working.dailyHoursPM.indexOf('10:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('10:00', 'pm'))}>10</div>
          <div className={this.state.working.dailyHoursPM.indexOf('11:00') > -1 ? 'sel color3' : null} onClick={() => (this.onSwitchHours('11:00', 'pm'))}>11</div>
        </div>
        {!this.props.enforeTimeMins && <div className="pm-min">
          <div>Min PM</div>
          <div className="pm-down" onClick={() => (this.updateMin(0, 'pm'))}>[-]</div>
          <div>{this.renderMinCount(this.state.working.minPMCount)}</div>
          <div className="pm-up" onClick={() => (this.updateMin(1, 'pm'))}>[+]</div>
        </div>}
      </div>
    </div>;
  }

  onSwitchTab = implement => {
    if (this.props.enforeOnlyTimeUpdate) {
      // not allows to update, only time update allowed
      return;
    }

    let allowCo = false;

    if (!this.props.supportedOptions || this.props.supportedOptions.indexOf(implement) > -1) {
      allowCo = true;
    }

    this.setState({
      working: {
        ...this.state.working,
        via: implement,
        allowCommit: allowCo
      }
    });
  }

  onSwitchDailyTabGroups = dailyTabGroup => {
    if (this.props.enforeOnlyTimeUpdate) {
      // not allows to update, only time update allowed
      return;
    }

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
        dailyDaysNew = ['1']; // start with 1 item ie mon
        disableDailyDaysNew = false;
        break;

      case 'monthlyFirstDay': // monthly
        dailyTabGroupsNew = 'monthlyFirstDay';
        dailyDaysNew = [];
        disableDailyDaysNew = true;
        break;

      case 'monthlyLastDay': // monthly
        dailyTabGroupsNew = 'monthlyLastDay';
        dailyDaysNew = [];
        disableDailyDaysNew = true;
        break;

      case 'monthlyLastDaySpecificFirstDays': // monthly
        dailyTabGroupsNew = 'monthlyLastDaySpecificFirstDays';
        dailyDaysNew = [];
        disableDailyDaysNew = false;
        break;

      case 'monthlyLastDaySpecificLastDays': // monthly
        dailyTabGroupsNew = 'monthlyLastDaySpecificLastDays';
        dailyDaysNew = [];
        disableDailyDaysNew = false;
        break;

      default:
        break;
    }

    this.setState({
      working: {
        ...this.state.working,
        dailyTabGroups: dailyTabGroupsNew,
        dailyDays: dailyDaysNew,
        disableDailyDays: disableDailyDaysNew
      }
    });
  }

  onSwitchDailyDays = day => {
    if (this.props.enforeOnlyTimeUpdate) {
      // not allows to update, only time update allowed
      return;
    }

    const dailyDaysNew = [...this.state.working.dailyDays];

    if (dailyDaysNew.indexOf(day) === -1) {
      dailyDaysNew.push(day);
    } else {
      // dont allow to completly empty the array
      if (dailyDaysNew.length > 1) {
        dailyDaysNew.splice(dailyDaysNew.indexOf(day), 1);
      }
    }

    dailyDaysNew.sort();

    this.setState({
      working: {
        ...this.state.working,
        dailyDays: dailyDaysNew
      }
    });
  }

  onSwitchHours = (hour, block) => {
    const dailyHoursNew = (block === 'am') ? [...this.state.working.dailyHoursAM] : [...this.state.working.dailyHoursPM];
    const workingNew = {...this.state.working};

    if (dailyHoursNew.indexOf(hour) === -1) {
      dailyHoursNew.push(hour);

      // remove 0 paddings
      if (dailyHoursNew.indexOf('0') > -1) {
        dailyHoursNew.splice(dailyHoursNew.indexOf('0') , 1);
      }
    } else {
      // if we are asked to enforeTimeMins then prevent removing values withount honouring mins config
      if (this.props.enforeTimeMins) {
        if (block === 'am') { // enforce am mins
          if (dailyHoursNew.length === this.state.working.minAMCount) {
            return;
          }
        } else { // enforce pm mins
          if (dailyHoursNew.length === this.state.working.minPMCount) {
            return;
          }
        }
      }

      // or we remove existing item
      dailyHoursNew.splice(dailyHoursNew.indexOf(hour), 1);
    }

    dailyHoursNew.sort((a,b) => parseInt(a.replace(/:/, ''), 10) - parseInt(b.replace(/:/, ''), 10));

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

  updateMin = (direction, block) => {
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
        minCountNew = this.state.working.dailyHoursAM.length;
      }

      this.setState({
        working: {
          ...this.state.working,
          minAMCount: minCountNew
        }
      });
    } else {
      if (minCountNew > this.state.working.dailyHoursPM.length) {
        minCountNew = this.state.working.dailyHoursPM.length;
      }

      this.setState({
        working: {
          ...this.state.working,
          minPMCount: minCountNew
        }
      });
    }
  }

  onEdit = close => {
    const toUpdate = {
      mode: close
    };

    if (close === 0) { // they are closing the editor so reset the working to mount working state
      toUpdate.working = {...this.state.commitedWorkingState};
    }

    this.setState(toUpdate);
  }

  onDone = () => {
    // update implement
    let toStringFormat = this.state.working.dailyDays.join('-');

    if (toStringFormat === '1-2-3-4-5-6-7') {
      toStringFormat = 'daily';
    }

    // monthly ;
    if (this.state.working.dailyTabGroups === 'monthlyLastDaySpecificFirstDays') {
      toStringFormat = `first: ${toStringFormat}`;
    } else if (this.state.working.dailyTabGroups === 'monthlyLastDaySpecificLastDays') {
      toStringFormat = `last: ${toStringFormat}`;
    } else if (this.state.working.dailyTabGroups === 'monthlyFirstDay') {
      toStringFormat = 'first';
    } else if (this.state.working.dailyTabGroups === 'monthlyLastDay') {
      toStringFormat = 'last';
    }

    // update the core
    const newCore = {...this.state.core};
    newCore.implement = toStringFormat;
    newCore.am = this.state.working.dailyHoursAM; // update am
    newCore.pm = this.state.working.dailyHoursPM; // update pm
    newCore.minAm = this.state.working.minAMCount; // update minAm
    newCore.minPm = this.state.working.minPMCount; // update minPm

    this.setState({
      mode: 0,
      core: newCore,
      commitedWorkingState: {...this.state.working}
    }, () => {
      this.props.onValueUpdated(newCore);
    });
  }

  coreAsFriendlyText = () => {
    if (!this.state.core.implement) {
      return '';
    }

    let str = 'Request ';

    // via
    if (this.state.core.via === 'forthnightly') {
      str += 'Forthnightly ';
    } else if (this.state.core.via === 'monthly') {
      str += 'Monthly ';
    }

    const imlSrt = this.state.core.implement;

    switch (imlSrt) {
      case 'daily':
      case '1-2-3-4-5-6-7':
        str += 'Daily ';
        break;

      case '6-7':
        str += 'on Weekends ';
        break;

      case '1-2-3-4-5':
        str += 'on Weekdays ';
        break;

      default:
        str += 'on ';

        // S: monthly
        if (imlSrt.indexOf('first:daily') > -1) {
          str += 'the first week';
        } else if (imlSrt.indexOf('last:daily') > -1) {
          str += 'the last week ';
        } else if (imlSrt.indexOf('first:') > -1) {
          str += 'the first ';
        } else if (imlSrt.indexOf('last:') > -1) {
          str += 'the last ';
        } else if (imlSrt.indexOf('first') > -1) {
          str += 'the very first day ';
        } else if (imlSrt.indexOf('last') > -1) {
          str += 'the very last day ';
        }
        // E: monthly

        if (imlSrt.indexOf('1') > -1) {
          str += 'Mon ';
        }

        if (imlSrt.indexOf('2') > -1) {
          str += 'Tue ';
        }

        if (imlSrt.indexOf('3') > -1) {
          str += 'Wed ';
        }

        if (imlSrt.indexOf('4') > -1) {
          str += 'Thu ';
        }

        if (imlSrt.indexOf('5') > -1) {
          str += 'Fri ';
        }

        if (imlSrt.indexOf('6') > -1) {
          str += 'Sat ';
        }

        if (imlSrt.indexOf('7') > -1) {
          str += 'Sun ';
        }

        break;
    }

    // am/pm to string and mins
    if ((this.state.core.am && this.state.core.am.length > 0 && this.state.core.am[0] !== '0') || (this.state.core.pm && this.state.core.pm.length > 0 && this.state.core.pm[0] !== '0')) {
      str += 'at ';
    }

    if (this.state.core.am && this.state.core.am.length > 0 && this.state.core.am[0] !== '0') {
      str += `AM ${this.state.core.am.join(', ')} `;

      if (this.state.core.minAm > 0) {
        str += `(min ${this.state.core.minAm}) `;
      }
    }

    if (this.state.core.pm && this.state.core.pm.length > 0 && this.state.core.pm[0] !== '0') {
      if (str.indexOf('AM') > -1) {
        str += 'and ';
      }

      str += `PM ${this.state.core.pm.join(', ')} `;

      if (this.state.core.minPm > 0) {
        str += `(min ${this.state.core.minPm}) `;
      }
    }

    return str;
  }

  render() {
    return <div className="schedule-it color1">
      {(this.state.mode === 0 || this.props.alwaysLabel) && <div className="label">
        {this.coreAsFriendlyText()}
        {this.state.mode === 0 && <div className='actionBtn' onClick={this.onEdit.bind(this, 1)}>Edit</div>}
      </div>}

      {this.state.mode === 1 && <div className="tool">
          <div className="schedule-tabs color2">
            <div className={this.state.working.via === 'weekly' ? 'sel color3' : null} onClick={() => (this.onSwitchTab('weekly'))}>Weekly</div>
            <div className={this.state.working.via === 'forthnightly' ? 'sel color3' : null} onClick={() => (this.onSwitchTab('forthnightly'))}>Forthnightly</div>
            <div className={this.state.working.via === 'monthly' ? 'sel color3' : null} onClick={() => (this.onSwitchTab('monthly'))}>Monthly</div>
          </div>

          <div className="schedule-body color4">
            {this.renderTabContent()}
          </div>

          <div className="footer">
            <div className='actionBtn secondary' onClick={this.onEdit.bind(this, 0)}>Close</div>
            {this.state.working.allowCommit && <div className='actionBtn' onClick={this.onDone}>Done</div>}
          </div>
        </div>}
    </div>;
  }
}
