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

**tip**: This package is written intended to be fully compatible with the results that `ms` would give.

## How it compares with MS
```js
const withMs = ms("10d") + ms("10s")
const withMillit = millit("10d 10s")
console.log(withMs === withMillit) // true

console.log(ms(withMs)) // 10d
console.log(millit(withMillit)) // 10d
```

