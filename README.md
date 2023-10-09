English | [简体中文](./docs/README.zh.md)

# thunder-util

A javascript library for rapid development, including password and email address verification, decimal formatting of numbers, and more

## Installation

```
npm i thunder-util
```

## Examples

- formatAllThousandSeparator(number)

```
import { formatAllThousandSeparator } from 'thunder-util'

const num = 100010.02
formatAllThousandSeparator(num) // => 100,010.02
```

- throttle(func, millisecond)

```
function expensiveTask() {...}

const LowcostTask = throttle(expensiveTask, 200)
```

- validateEmail(email)

```
const isValidEmail = validateEmail(email) // => true or false
```

- validatePwd(password)

```
const isValid = validatePwd(password) // => true or false
```

- validateChinaPhone(phoneNum)

```
// Verify that the Chinese mobile phone number format
const isValid = validateChinaPhone(phoneNum) // => true or false
```

## Compatibility

Writen by pure Javascript, so it can work well in all modern browser and Node.js >=8.
