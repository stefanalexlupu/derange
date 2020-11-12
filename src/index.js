function getRandomIntBetween (min, max) {
  return Math.trunc(Math.random() * (max - min) + min)
}

function shuffle (array) {
  const a = [...array]
  const length = a.length

  for (let i = 0; i < length; i++) {
    const pos = getRandomIntBetween(0, length)
    const aux = a[i]
    a[i] = a[pos]
    a[pos] = aux
  }

  return a
}

function fill (length) {
  const array = []

  for (let i = 0; i < length; i++) {
    array[i] = i
  }

  return array
}

function displace (array, by) {
  const length = array.length
  const a = []
  array.forEach((i) => {
    a[i] = array[(i + by) % length]
  })

  return a
}

module.exports = function derange (array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument of "derange" function must be of type Array!')
  }
  const length = array.length

  if (!length || length === 1) {
    return []
  }
  const indices = shuffle(fill(length))
  const displaced = displace(indices, 1)
  const derangedArray = []
  for (let i = 0; i < length; i++) {
    derangedArray[indices[i]] = array[displaced[i]]
  }

  return derangedArray
}
