<template>
  <div class="app">
    <div class="container">
      <ul class="set">
        <li v-for="item in initialSet" :key="item" class="set__item">{{ item }}</li>
      </ul>
    </div>
    <div class="container">
      <ul class="set">
        <li v-for="item in derangedSet" :key="item" class="set__item">{{ item }}</li>
      </ul>
    </div>
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
    }
  },
}
</script>

<style>

</style>
