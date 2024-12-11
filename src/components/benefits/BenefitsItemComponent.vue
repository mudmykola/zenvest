<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="benefits-item">
    <ul>
      <li v-for="item in items" :key="item.id">
        <component :is="item.icon" class="icon" />
        <h2>{{ item.title }}</h2>
        <p v-html="item.description"></p>
      </li>
    </ul>
  </div>
</template>
