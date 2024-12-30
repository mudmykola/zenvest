import { db } from '@/services/firebase.js';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

export const fetchMenuItems = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, 'header/navigation/menu')
    );
    const menuItems = [];
    querySnapshot.forEach((doc) => {
      menuItems.push({ id: doc.id, ...doc.data() });
    });
    return menuItems;
  } catch (error) {
    console.error('Помилка отримання меню:', error);
    return [];
  }
};

export const updateMenuItem = async (id, data) => {
  try {
    const menuDoc = doc(db, 'header/navigation/menu', id);
    await setDoc(menuDoc, data, { merge: true });
    console.log('Успішно оновлено:', id);
  } catch (error) {
    console.error('Помилка оновлення меню:', error);
  }
};
