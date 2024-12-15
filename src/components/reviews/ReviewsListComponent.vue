<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import { ref, onMounted } from 'vue';

defineProps({
  reviews: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const progressBar = ref(null);

const updateProgressBar = (swiper) => {
  if (progressBar.value) {
    const percentage = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
    progressBar.value.style.width = `${percentage}%`;
  }
};

onMounted(() => {
  if (progressBar.value) {
    progressBar.value.style.width = '33.33%';
  }
});
</script>

<template>
  <div class="reviews-slider">
    <div class="reviews-slider__title">
      <h2>{{ title }}</h2>
      <span class="reviews-slider__divider"></span>
    </div>
    <div class="swiper-progress-bar">
      <div ref="progressBar" class="progress" />
    </div>

    <Swiper
      :slides-per-view="3"
      :space-between="20"
      @slideChange="updateProgressBar"
      class="swiper-container"
    >
      <SwiperSlide v-for="review in reviews" :key="review.id">
        <div class="review-item">
          <div class="review-rating">
            <span v-for="n in review.rating" :key="n" class="star">⭐</span>
          </div>

          <div class="review-content">
            <p>{{ review.comment }}</p>

            <div class="review-content__user">
              <img :src="review.avatar" alt="Avatar" class="review-avatar" />
              <div class="review-content__user--info">
                <h3>{{ review.name }}</h3>
                <p class="review-date">{{ review.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
@use 'reviews.scss' as *;
</style>
