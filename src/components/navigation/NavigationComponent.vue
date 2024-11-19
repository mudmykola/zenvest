<script setup>
import NavigationListComponent from '@/components/navigation/NavigationListComponent.vue';
import NavigationLogo from '@/components/navigation/NavigationLogo.vue';
import BaseButton from '@/shared/BaseButton.vue';
import NavigationListMobileComponent from '@/components/navigation/NavigationListMobileComponent.vue';
</script>

<template>
  <div class="navigation">
    <NavigationLogo />
    <NavigationListComponent />
    <NavigationListMobileComponent class="navigation-mobile" />
    <BaseButton
      class="navigation-phone"
      text="+420 123 456 789"
      buttonType="phone"
      phoneNumber="+420 123 456 789"
    />
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: relative;
}
</style>
