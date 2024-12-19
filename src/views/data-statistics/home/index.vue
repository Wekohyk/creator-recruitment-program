<script setup lang="ts">
import WorkUpdatesBanner from './WorkUpdatesBanner.vue';
import NewCreatorBanner from './NewCreatorBanner.vue';
import Card from './Card.vue';
import CardBanner from './CardBanner.vue';
import { cardList } from '@/mocks/modules/author';
import { onMounted, ref } from 'vue';
import { getAuthor, getMyWork } from '@/api';
import { AuthorList, MyWork } from '@/types/user';

const myWorkList = ref<MyWork[]>([]);
const authorList = ref<AuthorList>({
  totalWorksUsage: 0,
  totalHotValue: 0,
  everyTotalWorks: 0,
  everyHotValue: 0,
});
onMounted(async () => {
  await getMyWork().then(res => {
    myWorkList.value = res;
    console.log('我的作品', myWorkList.value);
  });
  await getAuthor().then(res => {
    authorList.value = res;
    console.log('作者', authorList.value);
  });
});
</script>

<template>
  <div class="w-100vw h-full bg-$secondaryBackground p-16">
    <div>
      <WorkUpdatesBanner />
    </div>
    <div class="mt-16 grid grid-cols-2 gap-16">
      <Card
        v-for="(item, index) in cardList"
        :key="item.id"
        :cardList="item"
        :authorList="authorList"
        :index="index"
      />
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
        :key="item.useCount"
        :widgetList="item"
      ></CardBanner>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
