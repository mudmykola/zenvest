<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import BaseButton from '@/shared/BaseButton.vue';

const props = defineProps({
  slides: {
    type: Array,
    default: () => [
      {
        title: [
          'Tepelné čerpadlo s montáží do ',
          { text: '3', class: 'highlight' },
          ' dnů!',
        ],
        description: [
          'Ušetřete až ',
          { text: '-60 %', class: 'highlight' },
          ' na energiích jíž tuto topnou sezónu.',
        ],
        ctaText: 'Learn More',
        ctaLink: '#',
        imageUrl: '/images/hero_image.png',
      },
      {
        title: [
          'Objevte naši novou kolekci ',
          { text: '2024', class: 'highlight' },
        ],
        description: [
          'Najděte nejlepší produkty v naší nové kolekci ',
          { text: 'pro tuto sezónu', class: 'highlight' },
        ],
        ctaText: 'Shop Now',
        ctaLink: '#',
        imageUrl: '/images/hero_image.png',
      },
    ],
  },
});
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :loop
    :autoplay="{ delay: 3000 }"
    :modules="[Autoplay]"
  >
    <SwiperSlide
      class="hero-slide"
      v-for="(slide, index) in slides"
      :key="index"
    >
      <div class="container-fluid">
        <div class="hero-slide__box">
          <div class="hero-slide__content">
            <h1>
              <span
                v-for="(part, idx) in slide.title"
                :key="idx"
                :class="part.class || ''"
              >
                {{ typeof part === 'string' ? part : part.text }}
              </span>
            </h1>
            <p>
              <span
                v-for="(part, idx) in slide.description"
                :key="idx"
                :class="part.class || ''"
              >
                {{ typeof part === 'string' ? part : part.text }}
              </span>
            </p>
            <BaseButton
              :text="slide.ctaText"
              :link="slide.ctaLink"
              buttonType="button"
            />
          </div>
          <div class="hero-slide__image">
            <img :src="slide.imageUrl" alt="Slide Image" />
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
@use 'hero.scss' as *;
</style>
