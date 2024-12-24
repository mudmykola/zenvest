<script setup>
import GalleryListComponent from '@/components/gallery/GalleryListComponent.vue';

const galleryData = {
  videos: [{ id: 1, src: 'https://www.w3schools.com/html/mov_bbb.mp4' }],
  images: [
    {
      id: 1,
      src: 'https://i.pinimg.com/originals/3e/69/20/3e692055727c05ea508edb52a2472ebe.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://www.androidauthority.com/wp-content/uploads/2024/01/Winter-wallpapers-3.jpg',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://i.etsystatic.com/32159506/r/il/0030a9/4425622546/il_570xN.4425622546_leb4.jpg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-Qjii4Sv68MrVnKcyF6kakMxYozeacE-DQ&s',
      alt: 'Image 4',
    },
  ],
};

const galleryTitle =
  '<span class="highlightGreen">8 790</span> realizací po celé České republice';
const galleryDescription =
  'Pomohli jsme snížit náklady na teplo domova pro XXX domácností v celé České republice.';
</script>

<template>
  <div class="gallery-box">
    <div class="container-fluid">
      <div class="gallery-inner">
        <div class="gallery-inner__title">
          <h2 v-html="galleryTitle"></h2>
          <p>{{ galleryDescription }}</p>
        </div>
        <GalleryListComponent
          :videos="galleryData.videos"
          :images="galleryData.images"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'gallery.scss' as *;
</style>
