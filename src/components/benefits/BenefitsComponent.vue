<script setup>
import { ref } from 'vue';
import BenefitsItemComponent from '@/components/benefits/BenefitsItemComponent.vue';
import IconEcoSystem from '@/components/icons/IconEcoSystem.vue';
import IconCoins from '@/components/icons/IconCoins.vue';
import IconWorldwide from '@/components/icons/IconWorldwide.vue';
import IconExterior from '@/components/icons/IconExterior.vue';

const items = ref([
  {
    id: 1,
    icon: IconEcoSystem,
    title: 'profesionální montáž',
    description:
      'Naši technici mají certifikaci na manipulaci s <strong>F-plyny,</strong> což zaručuje správnou instalaci a údržbu tepelných čerpadel podle nejpřísnějších evropských norem.',
  },
  {
    id: 2,
    icon: IconCoins,
    title: 'Cena vs. kvalita',
    description:
      'Nabízíme špičkovou montáž za výhodné ceny. <span>Zdarma porovnáme naši nabídku s konkurencí,</span> abyste měli jistotu, že dostáváte nejlepší možnou hodnotu.',
  },
  {
    id: 3,
    icon: IconWorldwide,
    title: 'Záruka 7 let',
    description:
      'Montujeme jen kvalitní a prověřené značky, pracujeme s kvalitním materiálem. Na tepelná čerpadla, komponenty i práci dáváme záruku <span>7 let.</span>',
  },
  {
    id: 4,
    icon: IconExterior,
    title: 'Rodinná firma',
    description:
      'Jsme rodinná firma s <span>dlouholetými zkušenostmi</span> v oboru.',
  },
]);
</script>

<template>
  <div class="benefits-box">
    <div class="container-fluid">
      <div class="benefits-inner">
        <BenefitsItemComponent :items="items" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'benefits.scss' as *;
</style>
