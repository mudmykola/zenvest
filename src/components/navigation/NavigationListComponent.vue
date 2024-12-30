<script setup>
import { ref, onMounted } from 'vue';
import { fetchMenuItems } from '@/services/firebase-navigation';

const menuItems = ref([]);

onMounted(async () => {
  menuItems.value = await fetchMenuItems();
});
</script>

<template>
  <ul class="navigation-list">
    <li v-for="item in menuItems" :key="item.id">
      <a :href="item.link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<style lang="scss">
@use 'index.scss' as *;
</style>
