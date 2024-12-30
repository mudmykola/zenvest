<template>
  <li>
    <a :href="link" class="sidebar-item">{{ name }}</a>
  </li>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.sidebar-item {
  display: block;
  padding: 8px 12px;
  color: #007bff;
  text-decoration: none;
  border-radius: 4px;
}

.sidebar-item:hover {
  background-color: #e9ecef;
}
</style>
