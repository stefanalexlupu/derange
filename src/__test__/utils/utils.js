const utils = {
  removeSpecificElementFromArray: (array, element) => {
    const outputArray = []
    let foundCount = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element && foundCount === 0) {
        foundCount++
      } else {
        outputArray.push(array[i])
      }
    }
    return outputArray
  }
}

module.exports = utils
