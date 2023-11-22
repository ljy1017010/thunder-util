简体中文 | [English](../README.md)

# thunder-util

用于快速开发的 javascript 工具库，包括：对数字进行千分符格式化、节流函数、密码和邮箱格式的有效性验证等功能

## 安装

```
npm i thunder-util
```

## 示例

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
// 用于验证中国大陆的电话号码格式是否正确
const isValid = validateChinaPhone(phoneNum) // => true or false
```

- downloadFile(file, fileName)

```
// download file in browser, can only be used in browser.
downloadFile(file, fileName)
```

## 兼容性

用原生 Javascript 编写, 因此可以在所有现代浏览器和 Node.js >=8 中使用。
