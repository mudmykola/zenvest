<script setup>
import ReviewsListComponent from '@/components/reviews/ReviewsListComponent.vue';

function getRandomDateWithinLastDays(days) {
  const now = new Date();
  const pastDate = new Date();
  pastDate.setDate(now.getDate() - Math.floor(Math.random() * days));
  return pastDate.toISOString().split('T')[0]; // Формат YYYY-MM-DD
}

const reviews = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/40',
    name: 'Andre',
    rating: 5,
    date: '10-01-2023',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Amet nunc odio eget bibendum. A vulputate nec dignissim molestie proin pulvinar. Habitant at leo tortor accumsan commodo mi velit fusce gravida. Urna dui mauris sed eget porta. Consectetur scelerisque parturient diam pellentesque blandit integer ac.',
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/40',
    name: 'Andre',
    rating: 5,
    date: '10-01-2023',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Amet nunc odio eget bibendum. A vulputate nec dignissim molestie proin pulvinar. Habitant at leo tortor accumsan commodo mi velit fusce gravida. Urna dui mauris sed eget porta. Consectetur scelerisque parturient diam pellentesque blandit integer ac.',
  },
  {
    id: 3,
    avatar: 'https://via.placeholder.com/40',
    name: 'Andre',
    rating: 5,
    date: '10-01-2023',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Amet nunc odio eget bibendum. A vulputate nec dignissim molestie proin pulvinar. Habitant at leo tortor accumsan commodo mi velit fusce gravida. Urna dui mauris sed eget porta. Consectetur scelerisque parturient diam pellentesque blandit integer ac.',
  },
  {
    id: 4,
    avatar: 'https://via.placeholder.com/40',
    name: 'Andre',
    rating: 5,
    date: '10-01-2023',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Amet nunc odio eget bibendum. A vulputate nec dignissim molestie proin pulvinar. Habitant at leo tortor accumsan commodo mi velit fusce gravida. Urna dui mauris sed eget porta. Consectetur scelerisque parturient diam pellentesque blandit integer ac.',
  },
].map((review) => ({
  ...review,
  date: getRandomDateWithinLastDays(30),
}));
</script>

<template>
  <div class="reviews-inner">
    <div class="container-fluid">
      <div class="reviews-box">
        <ReviewsListComponent :reviews="reviews" title="Co o nás lidé říkají" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
