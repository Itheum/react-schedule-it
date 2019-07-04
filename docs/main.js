"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScheduleIt =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScheduleIt, _React$Component);

  function ScheduleIt() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScheduleIt);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScheduleIt)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
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
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMinCount", function (val) {
      if (!val) {
        return _react.default.createElement("div", null, "0");
      }

      return _react.default.createElement("div", null, val);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTabContent", function () {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "tab-groups"
      }, _this.state.working.via !== 'monthly' ? _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'daily' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('daily');
        }
      }, "Daily"), _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'weekdays' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('weekdays');
        }
      }, "Weekdays"), _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'weekends' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('weekends');
        }
      }, "Weekends"), _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'custom' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('custom');
        }
      }, "Custom Days")) : _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'monthlyFirstDay' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('monthlyFirstDay');
        }
      }, "First Day"), _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'monthlyLastDay' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('monthlyLastDay');
        }
      }, "Last Day"), _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'monthlyLastDaySpecificFirstDays' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('monthlyLastDaySpecificFirstDays');
        }
      }, "Specific First Day/s"), _react.default.createElement("div", {
        className: _this.state.working.dailyTabGroups === 'monthlyLastDaySpecificLastDays' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyTabGroups('monthlyLastDaySpecificLastDays');
        }
      }, "Specific Last Day/s"))), _react.default.createElement("div", _defineProperty({
        className: "days"
      }, "className", _this.state.working.disableDailyDays ? 'days disable' : 'days'), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('1') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('1');
        }
      }, "Mon"), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('2') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('2');
        }
      }, "Tue"), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('3') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('3');
        }
      }, "Wed"), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('4') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('4');
        }
      }, "Thu"), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('5') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('5');
        }
      }, "Fri"), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('6') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('6');
        }
      }, "Sat"), _react.default.createElement("div", {
        className: _this.state.working.dailyDays.indexOf('7') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchDailyDays('7');
        }
      }, "Sun")), _react.default.createElement("div", {
        className: "am color2"
      }, _react.default.createElement("div", {
        className: "am-hours"
      }, _react.default.createElement("div", null, "AM"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('12:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('12:00', 'am');
        }
      }, "12"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('1:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('1:00', 'am');
        }
      }, "1"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('2:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('2:00', 'am');
        }
      }, "2"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('3:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('3:00', 'am');
        }
      }, "3"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('4:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('4:00', 'am');
        }
      }, "4"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('5:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('5:00', 'am');
        }
      }, "5"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('6:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('6:00', 'am');
        }
      }, "6"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('7:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('7:00', 'am');
        }
      }, "7"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('8:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('8:00', 'am');
        }
      }, "8"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('9:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('9:00', 'am');
        }
      }, "9"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('10:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('10:00', 'am');
        }
      }, "10"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursAM.indexOf('11:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('11:00', 'am');
        }
      }, "11")), !_this.props.enforeTimeMins && _react.default.createElement("div", {
        className: "am-min"
      }, _react.default.createElement("div", null, "Min AM"), _react.default.createElement("div", {
        className: "am-down",
        onClick: function onClick() {
          return _this.updateMin(0, 'am');
        }
      }, "[-]"), _react.default.createElement("div", null, _this.renderMinCount(_this.state.working.minAMCount)), _react.default.createElement("div", {
        className: "am-up",
        onClick: function onClick() {
          return _this.updateMin(1, 'am');
        }
      }, "[+]"))), _react.default.createElement("div", {
        className: "pm color2"
      }, _react.default.createElement("div", {
        className: "pm-hours"
      }, _react.default.createElement("div", null, "PM"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('12:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('12:00', 'pm');
        }
      }, "12"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('1:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('1:00', 'pm');
        }
      }, "1"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('2:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('2:00', 'pm');
        }
      }, "2"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('3:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('3:00', 'pm');
        }
      }, "3"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('4:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('4:00', 'pm');
        }
      }, "4"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('5:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('5:00', 'pm');
        }
      }, "5"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('6:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('6:00', 'pm');
        }
      }, "6"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('7:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('7:00', 'pm');
        }
      }, "7"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('8:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('8:00', 'pm');
        }
      }, "8"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('9:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('9:00', 'pm');
        }
      }, "9"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('10:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('10:00', 'pm');
        }
      }, "10"), _react.default.createElement("div", {
        className: _this.state.working.dailyHoursPM.indexOf('11:00') > -1 ? 'sel color3' : null,
        onClick: function onClick() {
          return _this.onSwitchHours('11:00', 'pm');
        }
      }, "11")), !_this.props.enforeTimeMins && _react.default.createElement("div", {
        className: "pm-min"
      }, _react.default.createElement("div", null, "Min PM"), _react.default.createElement("div", {
        className: "pm-down",
        onClick: function onClick() {
          return _this.updateMin(0, 'pm');
        }
      }, "[-]"), _react.default.createElement("div", null, _this.renderMinCount(_this.state.working.minPMCount)), _react.default.createElement("div", {
        className: "pm-up",
        onClick: function onClick() {
          return _this.updateMin(1, 'pm');
        }
      }, "[+]"))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSwitchTab", function (implement) {
      if (_this.props.enforeOnlyTimeUpdate) {
        // not allows to update, only time update allowed
        return;
      }

      var allowCo = false;

      if (!_this.props.supportedOptions || _this.props.supportedOptions.indexOf(implement) > -1) {
        allowCo = true;
      }

      _this.setState({
        working: _objectSpread({}, _this.state.working, {
          via: implement,
          allowCommit: allowCo
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSwitchDailyTabGroups", function (dailyTabGroup) {
      if (_this.props.enforeOnlyTimeUpdate) {
        // not allows to update, only time update allowed
        return;
      }

      var dailyTabGroupsNew;
      var dailyDaysNew;
      var disableDailyDaysNew;

      switch (dailyTabGroup) {
        case 'daily':
          dailyTabGroupsNew = 'daily';
          dailyDaysNew = ['1', '2', '3', '4', '5', '6', '7'];
          disableDailyDaysNew = true;
          break;

        case 'weekdays':
          dailyTabGroupsNew = 'weekdays';
          dailyDaysNew = ['1', '2', '3', '4', '5'];
          disableDailyDaysNew = true;
          break;

        case 'weekends':
          dailyTabGroupsNew = 'weekends';
          dailyDaysNew = ['6', '7'];
          disableDailyDaysNew = true;
          break;

        case 'custom':
          dailyTabGroupsNew = 'custom';
          dailyDaysNew = ['1']; // start with 1 item ie mon

          disableDailyDaysNew = false;
          break;

        case 'monthlyFirstDay':
          // monthly
          dailyTabGroupsNew = 'monthlyFirstDay';
          dailyDaysNew = [];
          disableDailyDaysNew = true;
          break;

        case 'monthlyLastDay':
          // monthly
          dailyTabGroupsNew = 'monthlyLastDay';
          dailyDaysNew = [];
          disableDailyDaysNew = true;
          break;

        case 'monthlyLastDaySpecificFirstDays':
          // monthly
          dailyTabGroupsNew = 'monthlyLastDaySpecificFirstDays';
          dailyDaysNew = [];
          disableDailyDaysNew = false;
          break;

        case 'monthlyLastDaySpecificLastDays':
          // monthly
          dailyTabGroupsNew = 'monthlyLastDaySpecificLastDays';
          dailyDaysNew = [];
          disableDailyDaysNew = false;
          break;

        default:
          break;
      }

      _this.setState({
        working: _objectSpread({}, _this.state.working, {
          dailyTabGroups: dailyTabGroupsNew,
          dailyDays: dailyDaysNew,
          disableDailyDays: disableDailyDaysNew
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSwitchDailyDays", function (day) {
      if (_this.props.enforeOnlyTimeUpdate) {
        // not allows to update, only time update allowed
        return;
      }

      var dailyDaysNew = _toConsumableArray(_this.state.working.dailyDays);

      if (dailyDaysNew.indexOf(day) === -1) {
        dailyDaysNew.push(day);
      } else {
        // dont allow to completly empty the array
        if (dailyDaysNew.length > 1) {
          dailyDaysNew.splice(dailyDaysNew.indexOf(day), 1);
        }
      }

      dailyDaysNew.sort();

      _this.setState({
        working: _objectSpread({}, _this.state.working, {
          dailyDays: dailyDaysNew
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSwitchHours", function (hour, block) {
      var dailyHoursNew = block === 'am' ? _toConsumableArray(_this.state.working.dailyHoursAM) : _toConsumableArray(_this.state.working.dailyHoursPM);

      var workingNew = _objectSpread({}, _this.state.working);

      if (dailyHoursNew.indexOf(hour) === -1) {
        dailyHoursNew.push(hour); // remove 0 paddings

        if (dailyHoursNew.indexOf('0') > -1) {
          dailyHoursNew.splice(dailyHoursNew.indexOf('0'), 1);
        }
      } else {
        // if we are asked to enforeTimeMins then prevent removing values withount honouring mins config
        if (_this.props.enforeTimeMins) {
          if (block === 'am') {
            // enforce am mins
            if (dailyHoursNew.length === _this.state.working.minAMCount) {
              return;
            }
          } else {
            // enforce pm mins
            if (dailyHoursNew.length === _this.state.working.minPMCount) {
              return;
            }
          }
        } // or we remove existing item


        dailyHoursNew.splice(dailyHoursNew.indexOf(hour), 1);
      }

      dailyHoursNew.sort(function (a, b) {
        return parseInt(a.replace(/:/, ''), 10) - parseInt(b.replace(/:/, ''), 10);
      });

      if (block === 'am') {
        // reset min counts as well if needed
        if (_this.state.working.minAMCount > dailyHoursNew.length) {
          workingNew.minAMCount = dailyHoursNew.length;
        }

        workingNew.dailyHoursAM = dailyHoursNew;
      } else {
        // reset min counts as well if needed
        if (_this.state.working.minPMCount > dailyHoursNew.length) {
          workingNew.minPMCount = dailyHoursNew.length;
        }

        workingNew.dailyHoursPM = dailyHoursNew;
      }

      _this.setState({
        working: workingNew
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateMin", function (direction, block) {
      var minCountNew = block === 'am' ? _this.state.working.minAMCount : _this.state.working.minPMCount;

      if (direction) {
        minCountNew++;
      } else {
        minCountNew--;
      }

      if (minCountNew < 0) {
        minCountNew = 0;
      }

      if (block === 'am') {
        if (minCountNew > _this.state.working.dailyHoursAM.length) {
          minCountNew = _this.state.working.dailyHoursAM.length;
        }

        _this.setState({
          working: _objectSpread({}, _this.state.working, {
            minAMCount: minCountNew
          })
        });
      } else {
        if (minCountNew > _this.state.working.dailyHoursPM.length) {
          minCountNew = _this.state.working.dailyHoursPM.length;
        }

        _this.setState({
          working: _objectSpread({}, _this.state.working, {
            minPMCount: minCountNew
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEdit", function (close) {
      var toUpdate = {
        mode: close
      };

      if (close === 0) {
        // they are closing the editor so reset the working to mount working state
        toUpdate.working = _objectSpread({}, _this.state.commitedWorkingState);
      }

      _this.setState(toUpdate);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDone", function () {
      // update implement
      var toStringFormat = _this.state.working.dailyDays.join('-');

      if (toStringFormat === '1-2-3-4-5-6-7') {
        toStringFormat = 'daily';
      } // monthly ;


      if (_this.state.working.dailyTabGroups === 'monthlyLastDaySpecificFirstDays') {
        toStringFormat = "first: ".concat(toStringFormat);
      } else if (_this.state.working.dailyTabGroups === 'monthlyLastDaySpecificLastDays') {
        toStringFormat = "last: ".concat(toStringFormat);
      } else if (_this.state.working.dailyTabGroups === 'monthlyFirstDay') {
        toStringFormat = 'first';
      } else if (_this.state.working.dailyTabGroups === 'monthlyLastDay') {
        toStringFormat = 'last';
      } // update the core


      var newCore = _objectSpread({}, _this.state.core);

      newCore.implement = toStringFormat;
      newCore.am = _this.state.working.dailyHoursAM; // update am

      newCore.pm = _this.state.working.dailyHoursPM; // update pm

      newCore.minAm = _this.state.working.minAMCount; // update minAm

      newCore.minPm = _this.state.working.minPMCount; // update minPm

      _this.setState({
        mode: 0,
        core: newCore,
        commitedWorkingState: _objectSpread({}, _this.state.working)
      }, function () {
        _this.props.onValueUpdated(newCore);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "coreAsFriendlyText", function () {
      if (!_this.state.core.implement) {
        return '';
      }

      var str = 'Request '; // via

      if (_this.state.core.via === 'forthnightly') {
        str += 'Forthnightly ';
      } else if (_this.state.core.via === 'monthly') {
        str += 'Monthly ';
      }

      var imlSrt = _this.state.core.implement;

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
          str += 'on '; // S: monthly

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
          } // E: monthly


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
      } // am/pm to string and mins


      if (_this.state.core.am && _this.state.core.am.length > 0 && _this.state.core.am[0] !== '0' || _this.state.core.pm && _this.state.core.pm.length > 0 && _this.state.core.pm[0] !== '0') {
        str += 'at ';
      }

      if (_this.state.core.am && _this.state.core.am.length > 0 && _this.state.core.am[0] !== '0') {
        str += "AM ".concat(_this.state.core.am.join(', '), " ");

        if (_this.state.core.minAm > 0) {
          str += "(min ".concat(_this.state.core.minAm, ") ");
        }
      }

      if (_this.state.core.pm && _this.state.core.pm.length > 0 && _this.state.core.pm[0] !== '0') {
        if (str.indexOf('AM') > -1) {
          str += 'and ';
        }

        str += "PM ".concat(_this.state.core.pm.join(', '), " ");

        if (_this.state.core.minPm > 0) {
          str += "(min ".concat(_this.state.core.minPm, ") ");
        }
      }

      return str;
    });

    return _this;
  }

  _createClass(ScheduleIt, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;

      var originalCoreValue = _objectSpread({}, value);

      var originalWorkingValue = _objectSpread({}, this.state.working); // for weekly 'via' will be undefined


      if (!originalCoreValue.via) {
        originalWorkingValue.via = 'weekly';
      } else {
        originalWorkingValue.via = originalCoreValue.via;
      }

      switch (originalCoreValue.implement) {
        case 'daily':
        case '1-2-3-4-5-6-7':
          originalWorkingValue.dailyTabGroups = 'daily';
          originalWorkingValue.dailyDays = ['1', '2', '3', '4', '5', '6', '7'];
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

        case 'first':
          // monthly
          originalWorkingValue.dailyTabGroups = 'monthlyFirstDay';
          originalWorkingValue.disableDailyDays = true;
          break;

        case 'last':
          // monthly
          originalWorkingValue.dailyTabGroups = 'monthlyLastDay';
          originalWorkingValue.disableDailyDays = true;
          break;

        default:
          originalWorkingValue.dailyTabGroups = 'custom';
          originalWorkingValue.dailyDays = originalCoreValue.implement.split('-');
          originalWorkingValue.disableDailyDays = false;
          break;
      } // S: other monthly implement rules


      if (originalCoreValue.implement.indexOf('first:') > -1) {
        originalWorkingValue.dailyTabGroups = 'monthlyLastDaySpecificFirstDays';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split(':')[1].split('-');
      }

      if (originalCoreValue.implement.indexOf('last:') > -1) {
        originalWorkingValue.dailyTabGroups = 'monthlyLastDaySpecificLastDays';
        originalWorkingValue.dailyDays = originalCoreValue.implement.split(':')[1].split('-');
      } // E: other monthly implement rules
      // track the hours always


      originalWorkingValue.dailyHoursAM = originalCoreValue.am ? originalCoreValue.am : [];
      originalWorkingValue.dailyHoursPM = originalCoreValue.pm ? originalCoreValue.pm : []; // track min am and pm

      originalWorkingValue.minAMCount = originalCoreValue.minAm;
      originalWorkingValue.minPMCount = originalCoreValue.minPm;
      this.setState({
        core: originalCoreValue,
        working: originalWorkingValue,
        commitedWorkingState: _objectSpread({}, originalWorkingValue)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "schedule-it color1"
      }, (this.state.mode === 0 || this.props.alwaysLabel) && _react.default.createElement("div", {
        className: "label"
      }, this.coreAsFriendlyText(), this.state.mode === 0 && _react.default.createElement("div", {
        className: "actionBtn",
        onClick: this.onEdit.bind(this, 1)
      }, "Edit")), this.state.mode === 1 && _react.default.createElement("div", {
        className: "tool"
      }, _react.default.createElement("div", {
        className: "schedule-tabs color2"
      }, _react.default.createElement("div", {
        className: this.state.working.via === 'weekly' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this2.onSwitchTab('weekly');
        }
      }, "Weekly"), _react.default.createElement("div", {
        className: this.state.working.via === 'forthnightly' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this2.onSwitchTab('forthnightly');
        }
      }, "Forthnightly"), _react.default.createElement("div", {
        className: this.state.working.via === 'monthly' ? 'sel color3' : null,
        onClick: function onClick() {
          return _this2.onSwitchTab('monthly');
        }
      }, "Monthly")), _react.default.createElement("div", {
        className: "schedule-body color4"
      }, this.renderTabContent()), _react.default.createElement("div", {
        className: "footer"
      }, _react.default.createElement("div", {
        className: "actionBtn secondary",
        onClick: this.onEdit.bind(this, 0)
      }, "Close"), this.state.working.allowCommit && _react.default.createElement("div", {
        className: "actionBtn",
        onClick: this.onDone
      }, "Done"))));
    }
  }]);

  return ScheduleIt;
}(_react.default.Component);

exports.default = ScheduleIt;