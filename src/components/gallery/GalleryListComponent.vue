<script setup>
defineProps({
  videos: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="gallery-list">
    <div class="gallery-list__group">
      <div class="gallery-list__group--first">
        <div class="gallery-list__group--first_video">
          <div class="gallery-list__group--first_video-block">
            <ul>
              <li v-for="video in videos" :key="video.id">
                <video
                  width="540"
                  height="345"
                  :src="video.src"
                  controls
                  class="gallery-video"
                ></video>
              </li>
            </ul>
          </div>

          <div class="gallery-list__group--first_img-block">
            <ul>
              <li v-for="image in images.slice(0, 2)" :key="image.id">
                <img
                  width="255"
                  height="345"
                  :src="image.src"
                  :alt="image.alt"
                  class="gallery-image"
                />
              </li>
            </ul>
          </div>
        </div>

        <div class="gallery-list__group--first_img">
          <ul>
            <li v-for="image in images.slice(2, 3)" :key="image.id">
              <img
                width="500"
                height="721"
                :src="image.src"
                :alt="image.alt"
                class="gallery-image"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-list__group--second">
        <ul>
          <li v-for="image in images.slice(3)" :key="image.id">
            <img
              width="100%"
              height="345"
              :src="image.src"
              :alt="image.alt"
              class="gallery-image"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use 'gallery.scss' as *;
</style>
