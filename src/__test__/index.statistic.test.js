const derange = require('../index')
const utils = require('./utils/utils')

test('statistic test', () => {
  const EMPTY = 0
  const cases = [
    ['David', 'Petra'],
    [
      'Lucas',
      'Keily',
      'Watson',
      'Noah',
      'Ensley',
      'Olivia',
      'Benjamin',
      'Evelyn'
    ]
  ]

  cases.forEach((element) => {
    for (let i = 0; i < 100; i++) {
      const setToDerange = element
      let notDerangedElements = setToDerange
      const derangedElements = []
      const derangedSet = derange(setToDerange)

      for (let i = 0; i < setToDerange.length; i++) {
        expect(derangedSet[i]).not.toBe(setToDerange[i])
        expect(setToDerange).toEqual(expect.arrayContaining([derangedSet[i]]))

        if (i !== 0) {
          expect(derangedElements).not.toEqual(
            expect.arrayContaining([derangedSet[i]])
          )
        }

        derangedElements.push(derangedSet[i])
        notDerangedElements = utils.removeSpecificElementFromArray(
          notDerangedElements,
          derangedSet[i]
        )
      }

      expect(notDerangedElements.length).toBe(EMPTY)
    }
  })
})
