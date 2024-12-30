<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: Object,
  index: Number,
  editingIndex: Number,
  startEditing: Function,
  deleteMenuItem: Function,
  saveEdit: Function,
  cancelEdit: Function,
  editingItem: Object,
});

const isEditing = ref(false);
</script>

<template>
  <li :key="item.id" class="menu-item">
    <div v-if="editingIndex !== index">
      <div class="item-content">
        <span>
          <strong>{{ item.name }}</strong>
          : <a :href="item.link">{{ item.link }}</a>
        </span>
        <div>
          <button @click="startEditing(index)" class="btn-edit">
            Редагувати
          </button>
          <button @click="deleteMenuItem(item.id, index)" class="btn-delete">
            Видалити
          </button>
        </div>
      </div>
    </div>
    <div v-else class="edit-form">
      <input v-model="editingItem.name" placeholder="Назва" />
      <input v-model="editingItem.link" placeholder="Посилання" />
      <button @click="saveEdit" class="btn-save">Зберегти</button>
      <button @click="cancelEdit" class="btn-cancel">Скасувати</button>
    </div>
  </li>
</template>
