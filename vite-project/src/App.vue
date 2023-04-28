<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import LoadingButton from './page/LoadingButton.vue'
import RowColView from './page/RowColView.vue'
import LayoutVue from './page/LayoutVue.vue'
</script>

<template>
  <div>
  <!-- <RowColView /> -->
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  
  <!-- <LoadingButton /> -->
  <LayoutVue />
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
