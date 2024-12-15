<script setup>
import { computed } from 'vue';
import IconPlaceMarker from '@/components/icons/IconPlaceMarker.vue';
import IconMail from '@/components/icons/IconMail.vue';
import IconPhone from '@/components/icons/IconPhone.vue';

defineProps({
  text: {
    type: String,
    default: 'Kubánské náměstí 1391/11, Vršovice, 100 00 Praha 10',
  },
  email: {
    type: String,
    default: 'Obchod@zenvest.cz',
  },
  phone: {
    type: String,
    default: '+420 123 456 789',
  },
});

const emailLink = computed(() => `mailto:${props.email}`);
const phoneLink = computed(() => `tel:${props.phone}`);
</script>

<template>
  <div class="announce-bar">
    <div class="announce-bar__mail--mobile">
      <div class="announce-bar__icon">
        <IconMail />
      </div>
      <div class="announce-bar__message">
        <a :href="emailLink">{{ props.email }}</a>
      </div>
    </div>
    <div class="announce-bar__map">
      <div class="announce-bar__icon">
        <IconPlaceMarker />
      </div>
      <div class="announce-bar__text">
        <p>{{ text }}</p>
      </div>
    </div>
    <div class="announce-bar__mail--phone">
      <div class="announce-bar__icon">
        <IconPhone />
      </div>
      <div class="announce-bar__message">
        <a :href="phoneLink">{{ props.phone }}</a>
      </div>
    </div>
    <div class="announce-bar__mail">
      <div class="announce-bar__icon">
        <IconMail />
      </div>
      <div class="announce-bar__message">
        <a :href="emailLink">{{ props.email }}</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use 'index.scss' as *;
</style>
