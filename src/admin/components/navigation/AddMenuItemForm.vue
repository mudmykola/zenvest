<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  newMenuItem: Object,
  addMenuItem: Function,
});
</script>

<template>
  <div class="add-menu-form">
    <h3>Додати пункт меню</h3>
    <div>
      <input v-model="props.newMenuItem.name" placeholder="Назва" />
      <input v-model="props.newMenuItem.link" placeholder="Посилання" />
      <button @click="props.addMenuItem" class="btn-add">Додати</button>
    </div>
  </div>
</template>

<style scoped>
.add-menu-form {
  margin-top: 16px;
}
</style>
