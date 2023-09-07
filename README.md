# thunder-util

A lite and daily used javascript library for your prototype development. It's just 1kB, includes three function:

- throttle
- formatThousandSeparator
- formatAllThousandSeparator

## Installation

```
npm i thunder-util
```

## Examples

```
import {formatAllThousandSeparator, throttle} from 'thunder-util'

const num = 100010.02
console.log(formatAllThousandSeparator(num)) // 100,010.02

// task is a function
throttle(task, 100)
```

## Compatibility

Writen by pure Javascript, so it can work well in all modern browser and Node.js >=8.
