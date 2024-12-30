<template>
  <aside class="admin-sidebar">
    <ul>
      <SidebarGroup
        v-for="group in groups"
        :key="group.title"
        :title="group.title"
      >
        <SidebarItem
          v-for="item in group.items"
          :key="item.name"
          :name="item.name"
          :link="item.link"
        />
      </SidebarGroup>
    </ul>
  </aside>
</template>

<script setup>
import SidebarGroup from './SidebarGroup.vue';
import SidebarItem from './SidebarItem.vue';

const groups = [
  {
    title: 'Головне',
    items: [
      { name: 'Хедер', link: '/admin/header' },
      { name: 'Редагування навігації', link: '/admin/navigation' },
    ],
  },
  {
    title: 'Налаштування',
    items: [
      { name: 'Профіль', link: '/admin/settings/profile' },
      { name: 'Користувачі', link: '/admin/settings/users' },
    ],
  },
];
</script>

<style scoped>
.admin-sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 16px;
}
</style>
