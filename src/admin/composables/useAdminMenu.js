import { ref, onMounted } from 'vue';
import { fetchMenuItems, updateMenuItem } from '@/services/firebase-navigation';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebase';

export default function useAdminMenu() {
  const menuItems = ref([]);
  const editingIndex = ref(null);
  const editingItem = ref(null);
  const newMenuItem = ref({ name: '', link: '' });

  // Завантаження даних із Firestore
  onMounted(async () => {
    menuItems.value = await fetchMenuItems();
  });

  // Початок редагування
  const startEditing = (index) => {
    editingIndex.value = index;
    editingItem.value = { ...menuItems.value[index] };
  };

  // Збереження змін
  const saveEdit = async () => {
    if (editingIndex.value !== null) {
      const id = menuItems.value[editingIndex.value].id;
      await updateMenuItem(id, editingItem.value);
      menuItems.value[editingIndex.value] = { id, ...editingItem.value };
      editingIndex.value = null;
    }
  };

  // Скасування редагування
  const cancelEdit = () => {
    editingIndex.value = null;
  };

  // Додавання нового пункту меню
  const addMenuItem = async () => {
    if (newMenuItem.value.name && newMenuItem.value.link) {
      const docRef = await addDoc(
        collection(db, 'header/navigation/menu'),
        newMenuItem.value
      );
      menuItems.value.push({ id: docRef.id, ...newMenuItem.value });
      newMenuItem.value = { name: '', link: '' }; // Очищення форми
    } else {
      alert('Заповніть обидва поля!');
    }
  };

  // Видалення пункту меню
  const deleteMenuItem = async (id, index) => {
    await deleteDoc(doc(db, 'header/navigation/menu', id));
    menuItems.value.splice(index, 1); // Видалення з локального списку
  };

  return {
    menuItems,
    editingIndex,
    editingItem,
    newMenuItem,
    startEditing,
    saveEdit,
    cancelEdit,
    addMenuItem,
    deleteMenuItem,
  };
}
