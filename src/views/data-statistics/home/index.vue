<script setup lang="ts">
import WorkUpdatesBanner from './WorkUpdatesBanner.vue';
import Card from './Card.vue';
import NewCreatorBanner from './NewCreatorBanner.vue';
import { cardList } from '.';
</script>

<template>
  <div class="w-100vw h-full bg-$secondaryBackground p-16">
    <div>
      <WorkUpdatesBanner />
    </div>
    <div class="mt-16 grid grid-cols-2 gap-16">
      <Card v-for="item in cardList" :key="item.id" :cardList="item" />
    </div>
    <div class="mt-16">
      <NewCreatorBanner />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
