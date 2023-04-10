import { formatAllThousandSeparator } from './index.js'

const num1 = 123456789.2333
console.log(formatAllThousandSeparator(num1))

const num2 = 123456789
console.log(formatAllThousandSeparator(num2))

const num3 = 100010.02
console.log(formatAllThousandSeparator(num3))
