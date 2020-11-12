const derange = require('./index')

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
  expect(derangement).toEqual(expect.arrayContaining(testArray))
})

test('Test if the returned array length is equal with the given array length', () => {
  expect(derangement.length).toEqual(testArray.length)
})

test('test deregement of an array with 2 elements', () => {
  const arrayWithTwoElements = ['a', 'b']
  const derangement = derange(arrayWithTwoElements)

  expect(derangement[0]).toBe(arrayWithTwoElements[1])
  expect(derangement[1]).toBe(arrayWithTwoElements[0])
})

test('should throw error if argument is not array', () => {
  ['', 0, { 0: 'a' }, false].forEach((kind) => {
    expect(() => derange(kind)).toThrowError()
  })
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
