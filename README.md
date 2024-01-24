English | [简体中文](./docs/README.zh.md)

# thunder-util

A lightweight and daily-used JavaScript library for your prototype development, including password and email address verification, decimal formatting of numbers, and more

## Installation

```shell
npm i thunder-util
```

## Examples

- formatAllThousandSeparator(number)

```javascript
import { formatAllThousandSeparator } from 'thunder-util'

const num = 100010.02
formatAllThousandSeparator(num) // => 100,010.02
```

- throttle(func, millisecond)

```javascript
function expensiveTask() {...}

const LowcostTask = throttle(expensiveTask, 200)
```

- validateEmail(email)

```javascript
const isValidEmail = validateEmail(email) // => true or false
```

- validatePwd(password)

```javascript
const isValid = validatePwd(password) // => true or false
```

- validateChinaPhone(phoneNum)

```javascript
// Verify that the Chinese mobile phone number format
const isValid = validateChinaPhone(phoneNum) // => true or false
```

- downloadFile(file, fileName)

```javascript
// Only be used in the browser
// The first parameter is File or Blob type
// The second parameter is the name of the download file
fetch('http://localhost:8888/someapi')
  .then(res => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.blob()
  })
  .then(blob => {
    downloadFile(blob, 'my-custom.txt') // you'll get my-custom.txt
  })
```

## Compatibility

Writen by pure Javascript, so it can work well in all modern browser and Node.js >=8.
