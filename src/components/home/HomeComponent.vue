<script setup>
import { defineAsyncComponent } from 'vue';
import BenefitsComponent from '@/components/benefits/BenefitsComponent.vue';
import ReviewsComponent from '@/components/reviews/ReviewsComponent.vue';
import GalleryComponent from '@/components/gallery/GalleryComponent.vue';

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
    <section class="gallery">
      <GalleryComponent />
    </section>
  </div>
</template>
