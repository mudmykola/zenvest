<template>
  <component
    :is="buttonElement"
    :href="computedHref"
    :class="['base-button', buttonType]"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String,
    required: true,
    validator: (value) => {
      return ['button', 'link', 'phone'].includes(value);
    },
  },
  url: {
    type: String,
    default: '#',
  },
  phoneNumber: {
    type: String,
    default: '',
  },
});

const buttonElement = computed(() => {
  return props.buttonType === 'link' || props.buttonType === 'phone'
    ? 'a'
    : 'button';
});

const computedHref = computed(() => {
  return props.buttonType === 'phone' ? 'tel:' + props.phoneNumber : props.url;
});

const handleClick = () => {
  if (props.buttonType === 'button') {
    console.log('Button clicked!');
  }
};
</script>

<style scoped lang="scss">
.base-button {
  display: inline-block;
  width: 200px;
  height: 46px;
  font-size: 1rem;
  line-height: var(--line-height-normal);
  font-weight: 700;
  color: var(--color-white);
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &.button {
    background-color: var(--color-accent);
    border: none;
    border-radius: 0;

    &:hover {
      background-color: var(--color-accent-hover);
    }
  }

  &.link {
    background-color: transparent;
    color: #ff563f;

    &:hover {
      text-decoration: underline;
    }
  }

  &.phone {
    background-color: var(--color-accent);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: var(--color-accent-hover);
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
