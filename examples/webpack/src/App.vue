<template>
  <div class="app">
    <ul class="set">
      <li v-for="item in initialSet" :key="item" class="set__item">{{ item }}</li>
    </ul>
    <button
      class="derange-btn"
      @click="() => { derangedSet = derange(initialSet) }"
    >
      DERANGE!
    </button>
    <ul class="set">
      <li v-for="item in derangedSet" :key="item" class="set__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import derange from '../../../';
const set = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
export default {
  data: () => {
    return {
      initialSet: set,
      derangedSet: derange(set),
      derange,
    }
  },
}
</script>

<style>

</style>
