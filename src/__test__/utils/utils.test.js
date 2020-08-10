const utils = require('./utils')

test('Expect that the selected element is removed', () => {
  let testArray = ['a', 'b', 'c', 'd']

  const elementToRemove = 'd'
  const arrayInitialSize = testArray.length
  testArray = utils.removeSpecificElementFromArray(testArray, elementToRemove)
  const arraySizeAfterTheElementHasBeenRemoved = testArray.length

  expect(arraySizeAfterTheElementHasBeenRemoved).not.toBe(arrayInitialSize)
  expect(testArray).not.toEqual(expect.arrayContaining([elementToRemove]))
})

test('Remove all elements', () => {
  let testArray = ['a', 'b', 'c', 'd']
  testArray = utils.removeSpecificElementFromArray(testArray, testArray[0])
  testArray = utils.removeSpecificElementFromArray(testArray, testArray[0])
  testArray = utils.removeSpecificElementFromArray(testArray, testArray[0])
  testArray = utils.removeSpecificElementFromArray(testArray, testArray[0])

  expect(testArray.length).toBe(0)
})
