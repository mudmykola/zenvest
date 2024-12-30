<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  menuItems: Array,
  editingIndex: Number,
  editingItem: Object,
  startEditing: Function,
  saveEdit: Function,
  cancelEdit: Function,
  deleteMenuItem: Function,
});
</script>

<template>
  <ul class="menu-list">
    <li
      v-for="(item, index) in props.menuItems"
      :key="item.id"
      class="menu-item"
    >
      <div v-if="props.editingIndex !== index">
        <div class="item-content">
          <span>
            <strong>{{ item.name }}</strong
            >: <a :href="item.link">{{ item.link }}</a>
          </span>
          <div>
            <button @click="props.startEditing(index)" class="btn-edit">
              Редагувати
            </button>
            <button
              @click="props.deleteMenuItem(item.id, index)"
              class="btn-delete"
            >
              Видалити
            </button>
          </div>
        </div>
      </div>
      <div v-else class="edit-form">
        <input v-model="props.editingItem.name" placeholder="Назва" />
        <input v-model="props.editingItem.link" placeholder="Посилання" />
        <button @click="props.saveEdit" class="btn-save">Зберегти</button>
        <button @click="props.cancelEdit" class="btn-cancel">Скасувати</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  background-color: #f9fafb;
  margin-bottom: 12px;
}
.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
