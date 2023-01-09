/**
 * 千分位 thousands 格式化
 * @param {
 *  integer: Integer
 * }
 * @returns String
 */

export function formatThousandSeparator(integer) {
  const reg = /(\d)(?=(?:\d{3})+$)/g

  return integer.toString().replace(reg, '$1,')
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
