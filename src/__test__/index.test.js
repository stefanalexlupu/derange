const derange = require('../index')
const utils = require('./utils/utils')

let testArray
let derangement

beforeEach(() => {
  testArray = ['a', 'b', 'c', 'd']
  derangement = derange(testArray)
})

test('Test if an element is not on the initial position', () => {
  for (let i = 0; i < testArray.length; i++) {
    expect(derangement[i]).not.toBe(testArray[i])
  }
})

test('Test if the given test array contains the deranged element', () => {
  for (let i = 0; i < testArray.length; i++) {
    expect(testArray).toEqual(expect.arrayContaining([derangement[i]]))
  }
})

test('Test if an element was not deranged before', () => {
  const derangedElements = []

  derangedElements.push(derangement[0])

  for (let i = 1; i < testArray.length; i++) {
    expect(derangedElements).not.toEqual(
      expect.arrayContaining([derangement[i]])
    )

    derangedElements.push(derangement[i])
  }
})

test('Test if all of the given array elements are deranged', () => {
  let notDerangedElements = [...testArray]

  for (let i = 0; i < testArray.length; i++) {
    notDerangedElements = utils.removeSpecificElementFromArray(
      notDerangedElements,
      derangement[i]
    )
  }

  expect(notDerangedElements.length).toBe(0)
})

test('test deregement of an array with 2 elements', () => {
  const arrayWithTwoElements = ['a', 'b']
  const derangement = derange(arrayWithTwoElements)

  expect(derangement[0]).not.toBe(arrayWithTwoElements[0])
  expect(derangement[1]).not.toBe(arrayWithTwoElements[1])
})

test.skip('When the given array is empty should throw an error', () => {
  const array = []
  const errorMessage = 'At least 2 elements are required'

  expect(() => derange(array)).toThrowError(errorMessage)
})

test.skip('When the given array contains only one element should throw an error', () => {
  const array = ['a']
  const expectedErrorMessage = 'At least 2 elements are required'

  expect(() => derange(array)).toThrowError(expectedErrorMessage)
})

test.skip('When the given array contains duplicates should throw an error', () => {
  const array = ['a', 'b', 'b', 'c', 'd']
  const expectedErrorMessage = 'Array with unique elements is required'

  expect(() => derange(array)).toThrowError(expectedErrorMessage)
})
