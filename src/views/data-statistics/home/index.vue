<script setup lang="ts">
import WorkUpdatesBanner from './WorkUpdatesBanner.vue';
import NewCreatorBanner from './NewCreatorBanner.vue';
import Card from './Card.vue';
import CardBanner from './CardBanner.vue';
import { cardList } from '.';
import { onMounted, ref } from 'vue';
import { getMyWork } from '@/api';

const myWorkList = ref({});
onMounted(async () => {
  await getMyWork().then(res => {
    myWorkList.value = res;
    console.log('我的作品', myWorkList.value);
  });
});
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

    <div class="mt-20">
      <div class="font-600 text-17 lh-17">
        {{ $t('data_statistics.home.my_work') }}
      </div>
    </div>

    <div class="mt-12 flex flex-col gap-8 adapt-pb-57">
      <CardBanner
        v-for="item in myWorkList"
        :key="item"
        :widgetList="item"
      ></CardBanner>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
