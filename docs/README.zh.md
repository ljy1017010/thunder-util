简体中文 | [English](../README.md)

# thunder-util

用于快速开发的 javascript 工具库，包括：对数字进行千分符格式化、节流函数、密码和邮箱格式的有效性验证等功能

## 安装

```shell
npm i thunder-util
```

## 示例

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
// 用于验证中国大陆的电话号码格式是否正确
const isValid = validateChinaPhone(phoneNum) // => true or false
```

- downloadFile(file, fileName)

```javascript
// 只能在浏览器中使用
// 第一个参数为File或Blob类型
// 第二个参数指定下载后的文件名称
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

## 兼容性

用原生 Javascript 编写, 因此可以在所有现代浏览器和 Node.js >=8 中使用。
