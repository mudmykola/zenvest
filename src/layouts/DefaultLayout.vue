<script setup>
import AnnounceBarComponent from '@/components/announce-bar/AnnounceBarComponent.vue';
import NavigationComponent from '@/components/navigation/NavigationComponent.vue';
import { useAnnounceBarEdit } from '@/composables/useAnnounceBarEdit';

const { address, email, phone, saveChanges } = useAnnounceBarEdit();
</script>

<template>
  <div class="default-layout">
    <header class="header">
      <div class="container-fluid">
        <div class="header-box">
          <AnnounceBarComponent :text="address" :email="email" :phone="phone" />
          <NavigationComponent />
        </div>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="container-fluid">footer</div>
    </footer>
  </div>
</template>
