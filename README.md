# Derange

Generate a random derangement of a set.

> In combinatorial mathematics, a derangement is a permutation of the elements
of a set, such that no element appears in its original position. In other words,
a derangement is a permutation that has no fixed points. ([Wikipedia](https://en.wikipedia.org/wiki/Derangement))

## Usage

*For examples of usage see the provided example.js file.*

```
const derange = require('derange')

const derangedSet = derange([ /* your set here */ ])
```

### Note

Since there is no possible derangement for empty sets and sets with a single
element, the function will throw an error if such an input is provided.
