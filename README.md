# Millit
This utility allow convert strings to milliseconds. You can use even compost times.

## Examples
```js
millit('10 days') // 864000000
millit('10d') // 864000000
millit('5h') // 18000000
millit('12 hrs') // 43200000
millit('2.5hours') // 9000000
millit('1min 10s') // 70000
millit('10d 5seconds') // 864005000
millit('1year 45days') // 35445600000
millit("45days 1year") // 35445600000 - sames as before, order doesn't matter
millit('100h 12m') // 360720000
millit('1 days') // 86400000
millit('20') // 20
millit('-200h') // -720000000
```

## Installation
Install it with you favorite package manager:
```sh
npm install millit
OR
yarn add millit
```
Usage:

If you are using plain javascript:
```js
const millit = require("millit")

millit("10d")
```

if you are using typescript:
```ts
import millit from "millit"

millit("10d")
```

## Features
The fact that the order doesn't matter empowers you to dynammically sum up different dates whitout be afraid of date inconsistencies. Example:
```js
let myDateStr = "10d"
let sum10m = true

if(sum10m) {
  myDateStr += "10m"
  console.log(millit(myDateStr)) //864600000
} else {
  myDateStr += "1y"
  console.log(millit(myDateStr)) // 32421600000
}
```
**hint**: Try to change sum10m to `false`

**disclaimer**: When dynammically summing milliseconds along with other time units as above, always include the "ms" prefix. For example, "10d 10ms 20m" works as expected, while omitting the "ms" prefix in expressions like "10d 10 20m" will result in a silent error (NaN).

## How it compares with MS
```js
const tenDays = ms("10d")
const tenSecs = ms("10s")
const withMs = tenDays + tenSecs

const withMillit = millit("10d 10s")
console.log(withMs === withMillit) // true

console.log(ms(withMs)) // 10d
console.log(millit(withMillit)) // 10d
```

**hint**: This package is written intended to be fully compatible with the results that `ms` would give.

## Performance
This package is just a convenience for small projects. It is not intended to be a substitute for "ms" as this package uses simple for loops to search through strings. It's not as powerful as "ms" which uses regex search, known to be faster for larger inputs.

## Contribution
Contributions are welcome! If you want to contribute with this project, follow the steps:

1. Fork this repository
2. Create a branch: `git checkout -b my-contribution`
3. Do your changes and commit it: `git commit -m "fix: fix XYZ"`
4. Send your changes to the remote repository: `git push origin my-contribution`
5. Open a pull request in the original repository

Thanks in advance!