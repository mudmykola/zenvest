<script setup>
import { defineAsyncComponent } from 'vue';
import BenefitsComponent from '@/components/benefits/BenefitsComponent.vue';
import ReviewsComponent from '@/components/reviews/ReviewsComponent.vue';

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
    <section class="reviews">
      <ReviewsComponent />
    </section>
  </div>
</template>
