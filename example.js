const derange = require('./src/index')

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const deranged = derange(array)

array.forEach((element, index) => {
  console.log(element, '->', deranged[index])
})
