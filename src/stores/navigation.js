import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  const sections = ref([
    { name: 'Tepelná čerpadla', link: '#tepelná-čerpadla' },
    { name: 'Klimatizace', link: '#klimatizace' },
    { name: 'O nás', link: '#o-nás' },
    { name: 'Kontakt', link: '#kontakt' },
  ]);

  const setSections = (newSections) => {
    sections.value = newSections;
  };

  return { sections, setSections };
});
