/**
 * 千分位 thousands 格式化
 * @param {integer: Integer}, 比如：1234
 * @returns String
 */

export function formatThousandSeparator(integer) {
  const reg = /(\d)(?=(?:\d{3})+$)/g

  return integer.toString().replace(reg, '$1,')
}

/**
 * 千分位thousands，用于格式化decimal
 * @param {num: number} , 比如：1234.56
 * @returns String
 */
export function formatAllThousandSeparator(num) {
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
 * 节流
 * @param {
 *  func: Function,
 *  wait: Number
 * }
 * @returns void
 */
export const throttle = (func, wait) => {
  clearTimeout(func.tId)

  func.tId = setTimeout(() => {
    func()
  }, wait)
}
