<script setup>
import { onMounted } from 'vue';
import { useReviewsStore } from '@/stores/reviewsStore';
import ReviewsListComponent from '@/components/reviews/ReviewsListComponent.vue';

const reviewsStore = useReviewsStore();

onMounted(() => {
  reviewsStore.fetchReviews();
});
</script>

<template>
  <div class="reviews-inner">
    <div class="container-fluid">
      <div class="reviews-box">
        <ReviewsListComponent
          :reviews="reviewsStore.reviews"
          :title="reviewsStore.title"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
