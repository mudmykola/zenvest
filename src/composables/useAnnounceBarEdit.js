import { ref, onMounted } from 'vue';
import {
  fetchAnnounceData,
  updateAnnounceData,
} from '@/services/firebase-announce';

export function useAnnounceBarEdit() {
  const address = ref('');
  const email = ref('');
  const phone = ref('');

  onMounted(async () => {
    const data = await fetchAnnounceData();
    if (data) {
      address.value = data.text;
      email.value = data.mail;
      phone.value = data.tel;
    }
  });

  const saveChanges = async () => {
    const newData = {
      text: address.value,
      mail: email.value,
      tel: phone.value,
    };
    await updateAnnounceData(newData);
  };

  return {
    address,
    email,
    phone,
    saveChanges,
  };
}
