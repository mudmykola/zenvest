<script setup>
import { ref, onMounted } from 'vue';
import {
  fetchAnnounceData,
  updateAnnounceData,
} from '@/services/firebase-announce';
import AnnounceBarComponent from '@/components/announce-bar/AnnounceBarComponent.vue';

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
</script>

<template>
  <div class="admin-header">
    <div class="admin-announce">
      <h2>Анонс бар</h2>
      <form @submit.prevent="saveChanges">
        <div>
          <label for="address">Адреса:</label>
          <input type="text" v-model="address" id="address" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" />
        </div>
        <div>
          <label for="phone">Телефон:</label>
          <input type="tel" v-model="phone" id="phone" />
        </div>
        <button type="submit">Зберегти зміни</button>
      </form>
    </div>
    <AnnounceBarComponent :text="address" :email="email" :phone="phone" />
  </div>
</template>

<style scoped lang="scss">
$color_1: white;
$background-color_1: #f9f9f9;
$background-color_2: #007bff;
$background-color_3: #0056b3;

.admin-header {
  padding: 20px;
  background-color: $background-color_1;
}
.admin-announce {
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
label {
  font-size: 16px;
}
input {
  padding: 8px;
  font-size: 14px;
  margin-top: 5px;
}
button {
  padding: 10px;
  background-color: $background-color_2;
  color: $color_1;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: $background-color_3;
  }
}
</style>
