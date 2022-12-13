/**
 * 千分位 thousands 格式化
 * @param {
 *  integer: Integer
 * }
 * @returns String
 */

export function formatThousandSeparator(integer) {
  const width = 1000
  const results = []
  let currItem = integer

  while (currItem > 0) {
    results.push(currItem % width)

    currItem = parseInt((currItem / width).toString())
  }

  return results.reverse().join(',')
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
