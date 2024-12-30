<script setup>
import useAdminMenu from '@/admin/composables/useAdminMenu';
import MenuList from '@/admin/components/navigation/MenuList.vue';
import AddMenuItemForm from '@/admin/components/navigation/AddMenuItemForm.vue';

const {
  menuItems,
  editingIndex,
  editingItem,
  newMenuItem,
  startEditing,
  saveEdit,
  cancelEdit,
  addMenuItem,
  deleteMenuItem,
} = useAdminMenu();
</script>

<template>
  <div class="navigation-edit">
    <h2>Редагування меню</h2>
    <MenuList
      :menuItems="menuItems"
      :editingIndex="editingIndex"
      :editingItem="editingItem"
      :startEditing="startEditing"
      :saveEdit="saveEdit"
      :cancelEdit="cancelEdit"
      :deleteMenuItem="deleteMenuItem"
    />

    <AddMenuItemForm :newMenuItem="newMenuItem" :addMenuItem="addMenuItem" />
  </div>
</template>

<style lang="scss">
$color_1: #1f2937;
$color_2: #2563eb;
$color_3: #1d4ed8;
$color_4: white;
$color_5: black;
$background-color_1: #f9fafb;
$background-color_2: #ffffff;
$background-color_3: #f3f4f6;
$background-color_4: transparent;
$background-color_5: #10b981;
$background-color_6: #059669;
$background-color_7: #d1d5db;
$background-color_8: #9ca3af;
$background-color_9: #3b82f6;
$background-color_10: #2563eb;

.navigation-edit {
  background-color: $background-color_1;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 20px auto;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
  color: $color_1;
  margin-bottom: 24px;
  text-align: center;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $background-color_2;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: $background-color_3;
  }
  .item-content {
    display: flex;
    align-items: center;
    gap: 16px;
    a {
      text-decoration: none;
      color: $color_2;
      font-weight: 500;
    }
    button {
      background-color: $background-color_4;
      border: none;
      color: $color_2;
      cursor: pointer;
      font-weight: 500;
      transition: color 0.3s ease;
      &:hover {
        color: $color_3;
      }
    }
  }
}
.edit-form {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
  input {
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    width: 250px;
    outline: none;
    font-size: 1rem;
  }
  button {
    padding: 10px 18px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  .btn-save {
    background-color: $background-color_5;
    color: $color_4;
    border: none;
    &:hover {
      background-color: $background-color_6;
    }
  }
  .btn-cancel {
    background-color: $background-color_7;
    color: $color_5;
    border: none;
    &:hover {
      background-color: $background-color_8;
    }
  }
}
.add-menu-form {
  margin-top: 24px;
  padding: 20px;
  background-color: $background-color_2;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: $color_1;
    margin-bottom: 16px;
  }
  input {
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    margin-right: 16px;
    width: 250px;
  }
  button {
    padding: 10px 18px;
    background-color: $background-color_9;
    color: $color_4;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: $background-color_10;
    }
  }
}
@media (max-width: 768px) {
  .navigation-edit {
    padding: 16px;
  }
  h2 {
    font-size: 1.5rem;
  }
  .menu-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .edit-form {
    flex-direction: column;
    gap: 10px;
  }
  .add-menu-form {
    padding: 16px;
    input {
      width: 100%;
      margin-bottom: 10px;
    }
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
