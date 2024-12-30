<script setup>
import AdminSidebar from './components/sidebar/AdminSidebar.vue';
</script>
<template>
  <div class="admin-app">
    <AdminSidebar />
    <main class="admin-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.admin-app {
  display: flex;
  height: 100vh;
}

.admin-main {
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
  overflow-y: auto;
}
</style>
