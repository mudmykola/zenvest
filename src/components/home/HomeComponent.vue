<script setup>
import { defineAsyncComponent } from 'vue';
import BenefitsComponent from '@/components/benefits/BenefitsComponent.vue';

const HeroBannerComponent = defineAsyncComponent(
  () => import('@/components/hero-banner/HeroBannerComponent.vue')
);
</script>

<template>
  <div class="home-component">
    <section class="hero-slider">
      <HeroBannerComponent />
    </section>
    <section class="benefits">
      <BenefitsComponent />
    </section>
  </div>
</template>
