<template>
  <li>
    <h3>{{ title }}</h3>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h3 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #343a40;
}
</style>
