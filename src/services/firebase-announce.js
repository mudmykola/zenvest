import { db } from '@/services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const fetchAnnounceData = async () => {
  const docRef = doc(db, 'announce', 'adress');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};

export const updateAnnounceData = async (newData) => {
  const docRef = doc(db, 'announce', 'adress');
  await updateDoc(docRef, newData);
};
