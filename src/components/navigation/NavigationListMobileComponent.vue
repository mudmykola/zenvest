<script setup>
import { ref } from 'vue';

const sections = ref([
  { name: 'Tepelná čerpadla', link: '#tepelná-čerpadla' },
  { name: 'Klimatizace', link: '#klimatizace' },
  { name: 'O nás', link: '#o-nás' },
  { name: 'Kontakt', link: '#kontakt' },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="navigation-mobile">
    <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
      <span v-if="!isMenuOpen" class="menu-line" v-for="n in 3" :key="n"></span>
      <span v-else class="menu-close">X</span>
    </button>

    <div class="drawer" :class="{ open: isMenuOpen }">
      <ul class="navigation-list-mobile">
        <li
          v-for="section in sections"
          :key="section.name"
          class="navigation-item"
        >
          <a :href="section.link" @click="toggleMenu">
            {{ section.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
$drawer-bg: #ffffff;
$drawer-text: #000000;
$menu-line-color: #000000;

.menu-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 20;

  .menu-line {
    width: 30px;
    height: 3px;
    background-color: $menu-line-color;
    border-radius: 2px;
  }

  .menu-close {
    font-size: 1.5rem;
    color: $menu-line-color;
  }
}

.drawer {
  position: fixed;
  top: 5%;
  right: -100%;
  height: 60%;
  width: 250px;
  background-color: $drawer-bg;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 10;
  padding-top: 11%;

  &.open {
    right: 0;
  }

  .navigation-list-mobile {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 20px;
    list-style: none;
    text-align: center;
    .navigation-item {
      margin-bottom: 15px;

      a {
        text-decoration: none;
        color: $drawer-text;
        font-size: 1.2rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
