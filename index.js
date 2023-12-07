/**
 * 千分位 thousands 格式化(只能是整数)
 * @param {integer: Integer}, 比如：1234
 * @returns String
 */
function formatThousandSeparator(integer) {
  const reg = /(\d)(?=(?:\d{3})+$)/g

  return integer.toString().replace(reg, '$1,')
}

/**
 * 千分位thousands格式化
 * @param {num: number} , 比如：1234.56
 * @returns String
 */
function formatAllThousandSeparator(num) {
  if (num === undefined) return ''

  const numArr = num.toString().split('.')
  const integerPart = Number(numArr[0])
  const decimalPart = numArr[1]

  if (decimalPart === undefined) {
    return formatThousandSeparator(integerPart)
  } else {
    return formatThousandSeparator(integerPart) + '.' + decimalPart
  }
}

/**
 * throttle a function in wait times(ms)
 * @param {
 *  func: Function,
 *  wait: Integer
 * }
 * @returns void
 */
function throttle(func, wait) {
  clearTimeout(func.tId)

  func.tId = setTimeout(() => {
    func()
  }, wait)
}

/**
 * validate email
 * @param {string} email
 * @returns {boolean}
 */
const validateEmail = email => {
  const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+$/

  return emailReg.test(email)
}

/**
 * validate password
 * @param {string} password
 * @returns {boolean}
 */
const validatePwd = password => {
  // 密码必须由8-16位大小写字母，数字以及特殊符号组成
  const passwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#^~`]).{8,16}$/

  return passwdReg.test(password)
}

/**
 * validate phone number
 * @param {string} phoneNumber
 * @returns {boolean}
 */
const validateChinaPhone = phoneNumber => {
  const phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

  return phoneReg.test(phoneNumber)
}

/**
 * download file in browser
 * @param {object} file
 * @returns {string} fileName
 */
const downloadFile = (file, fileName) => {
  const a = document.createElement('a')
  // a.target = '_blank'
  a.download = fileName
  a.href = window.URL.createObjectURL(file)
  a.click()
  // clear
  window.URL.revokeObjectURL(a.href)
  a.remove()
}

export { formatAllThousandSeparator, throttle, validateEmail, validatePwd, validateChinaPhone, downloadFile }
