import { ref, onMounted } from 'vue';
import { fetchMenuItems, updateMenuItem } from '@/services/firebase-navigation';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebase';

export default function useAdminMenu() {
  const menuItems = ref([]);
  const editingIndex = ref(null);
  const editingItem = ref(null);
  const newMenuItem = ref({ name: '', link: '' });

  onMounted(async () => {
    menuItems.value = await fetchMenuItems();
  });

  const startEditing = (index) => {
    editingIndex.value = index;
    editingItem.value = { ...menuItems.value[index] };
  };

  const saveEdit = async () => {
    if (editingIndex.value !== null) {
      const id = menuItems.value[editingIndex.value].id;
      await updateMenuItem(id, editingItem.value);
      menuItems.value[editingIndex.value] = { id, ...editingItem.value };
      editingIndex.value = null;
    }
  };

  const cancelEdit = () => {
    editingIndex.value = null;
  };

  const addMenuItem = async () => {
    if (newMenuItem.value.name && newMenuItem.value.link) {
      const docRef = await addDoc(
        collection(db, 'header/navigation/menu'),
        newMenuItem.value
      );
      menuItems.value.push({ id: docRef.id, ...newMenuItem.value });
      newMenuItem.value = { name: '', link: '' };
    } else {
      alert('Заповніть обидва поля!');
    }
  };

  const deleteMenuItem = async (id, index) => {
    await deleteDoc(doc(db, 'header/navigation/menu', id));
    menuItems.value.splice(index, 1);
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
