(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.AnimalApi = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = derange;

  function getRandomIntBetween(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  function shuffle(array) {
    const a = [...array];
    const length = a.length;

    for (let i = 0; i < length; i++) {
      const pos = getRandomIntBetween(0, length);
      const aux = a[i];
      a[i] = a[pos];
      a[pos] = aux;
    }

    return a;
  }

  function fill(length) {
    const array = [];

    for (let i = 0; i < length; i++) {
      array[i] = i;
    }

    return array;
  }

  function displace(array, by) {
    const length = array.length;
    const a = [];
    array.forEach(i => {
      a[i] = array[(i + by) % length];
    });
    return a;
  }

  function checkArg(array) {
    if (!Array.isArray(array)) {
      throw new Error('Argument of "derange" function must be of type Array!');
    }

    if (array.length < 2) {
      throw new Error('Sets with les than two items have cannot be deranged!');
    }
  }

  function derange(array) {
    checkArg(array);
    const length = array.length;

    if (!length || length === 1) {
      return [];
    }

    const indices = shuffle(fill(length));
    const displaced = displace(indices, 1);
    const derangedArray = [];

    for (let i = 0; i < length; i++) {
      derangedArray[indices[i]] = array[displaced[i]];
    }

    return derangedArray;
  }
});