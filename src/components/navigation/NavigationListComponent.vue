<script setup>
import { ref } from 'vue';

const sections = ref([
  { name: 'Tepelná čerpadla', link: '#tepelná-čerpadla' },
  { name: 'Klimatizace', link: '#klimatizace' },
  { name: 'O nás', link: '#o-nás' },
  { name: 'Kontakt', link: '#kontakt' },
]);
</script>

<template>
  <ul class="navigation-list">
    <li v-for="section in sections" :key="section.name">
      <a :href="section.link">{{ section.name }}</a>
    </li>
  </ul>
</template>
<style lang="scss">
@use 'index.scss' as *;
</style>
