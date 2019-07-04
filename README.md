# react schedule-it 
is the react scheduling ui component of the Itheum platform

### concept
![react-schedule-it](https://raw.githubusercontent.com/itheum/react-schedule-it/master/concept-eg-new.png)


### dev
- all node source is in src/main.js
- you need to install dependencies first `npm install`
- make any changes and run `npm run build` to transpile the jsx into `dist`
- the transpilation is run as an auto pre-publish task so it should usually be up to date when consumed via npm
- `npm run build-example` builds and packs the example app into the 'docs' folder so it can be accessed via ghpages

### usage of ISO Day of Week
the `implement` in the data model can use `ISO day of week` to describe days . e.g. 1-2-3-4-5-6-7 (ISO Day of Week - where 1 is Monday)] e.g for thursday and sunday it will be 4-7
this works well with libraries like moment.js

## Data Model
- implement: Type - String 
  - Which day do you want to schedule this for?
  - Options:
    - `daily`: happens everyday
    - `1-2-3-4-5-6-7`: ISO Day of Week - 1 is Monday, can be a subset of this string (e.g thursday and sunday it will be 4-7)

- am / pm : Type - Array of Strings
  - Which time of the day do you want to schedule this for? you need to target am and pm seperately
  - Options:
    - `12 hour format time strings` - e.g. "7:00" or "9:15"

- minAm / minPm: Type - Int
  - What is the minimum responses you need
    - Options:
      - `minimum number of responses` - e.g. 1 for minAm means that that at least 1 reading should be given in the AM

## Examples

#### per week based examples

- Eg 1: Schedule task everyday (daily) at 7AM and 8PM. At least 1 AM and 1 PM response is expected.
```
{
  "implement": "daily",
  "am": ["7:00"],
  "pm": ["8:00"],
  "minAm": 1,
  "minPm": 1
}
```
Note: daily is like an alias for 1-2-3-4-5-6-7 so we will support these both

- Eg 2: Schedule task every thursday and sunday at 9PM only. At least 1 PM response is expected.
```
{
  "implement": "4-7",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Eg 3: Schedule task weekdays at 9PM only. At least 1 PM response is expected.
```
{
  "implement": "1-2-3-4-5",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Eg 4: Schedule task weekends at 9PM only. At least 1 PM response is expected.
```
{
  "implement": "6-7",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Eg 5: Schedule task everyday (daily) at 8AM and 7PM and 8PM. At least 1 AM and 1 PM response is expected ideally (user should at least take 1 PM reading even though 2 is recommended).
```
{
  "implement": "daily",
  "am": ["8:00"],
  "pm": ["7:00", "8:00"],
  "minAm": 1,
  "minPm": 1
}
```

- Eg 6: Schedule task everyday (daily) at 7AM and 8PM. At least 1 AM and 1 PM response is expected.
```
{
  "implement": "1-2-3-4-5-6-7",
  "am": ["7:00"],
  "pm": ["8:00"],
  "minAm": 1,
  "minPm": 1
}
```
Note: same as using alias daily for implement (see example 1)

#### forthnightly based examples
- Schedule task every OTHER WEEK (forthnightly) on thursday and sunday at 9PM only. At least 1 PM response is expected.
```
{
  "via": "forthnightly",
  "implement": "4-7",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Schedule task every OTHER WEEK (forthnightly) daily at 9PM only. At least 1 PM response is expected.
```
{
  "via": "forthnightly",
  "implement": "1-2-3-4-5",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Schedule task every OTHER WEEK (forthnightly) on weekends at 9PM only. At least 1 PM response is expected.
```
{
  "via": "forthnightly",
  "implement": "6-7",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

#### monthlyly based examples
- Schedule task on the first day of every MONTH at 9PM only. At least 1 PM response is expected on that day.
```
{
  "via": "monthly",
  "implement": "first",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Schedule task on the last day of every MONTH at 9PM only. At least 1 PM response is expected on that day.
```
{
  "via": "monthly",
  "implement": "last",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Schedule task on the 1st monday of every MONTH at 9PM only. At least 1 PM response is expected on that day.
```
{
  "via": "monthly",
  "implement": "first:1",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Schedule task on the last friday of every MONTH at 9PM only. At least 1 PM response is expected on that day.
```
{
  "via": "monthly",
  "implement": "last:5",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

- Schedule task on the first week of every MONTH at 9PM only. At least 1 PM response is expected on that day.
```
{
  "via": "monthly",
  "implement": "last:1-2-3-4-5-6-7",
  "am": [],
  "pm": ["9:00"],
  "minAm": 0,
  "minPm": 1
}
```

### get started
- run
```
npm install --save react-schedule-it
```
- require into your project via
```
import ScheduleIt from "react-schedule-it";
```
- define the list of all the components* you want to step through. The `name` indicates the title of the UI step and component is what loads.