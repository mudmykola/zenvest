import { defineStore } from 'pinia';
import axios from 'axios';

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [],
    title: 'Co o nás lidé říkají',
  }),
  actions: {
    async fetchReviews() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/comments'
        );
        this.reviews = response.data.slice(0, 10).map((review) => ({
          id: review.id,
          avatar: `https://i.pravatar.cc/40?img=${review.id}`,
          name: review.name.split(' ')[0],
          rating: Math.floor(Math.random() * 5) + 1,
          date: this.getRandomDateWithinLastDays(30),
          comment: review.body,
        }));
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    },
    getRandomDateWithinLastDays(days) {
      const now = new Date();
      const pastDate = new Date();
      pastDate.setDate(now.getDate() - Math.floor(Math.random() * days));
      return pastDate.toISOString().split('T')[0];
    },
  },
});
