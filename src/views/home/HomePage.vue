<script setup>
import { defineAsyncComponent } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const HomeComponent = defineAsyncComponent(
  () => import('@/components/home/HomeComponent.vue')
);
</script>

<template>
  <DefaultLayout>
    <HomeComponent />
  </DefaultLayout>
</template>
