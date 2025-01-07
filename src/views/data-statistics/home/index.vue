<script setup lang="ts">
import WorkUpdatesBanner from './WorkUpdatesBanner.vue';
import NewCreatorBanner from './NewCreatorBanner.vue';
import NewcomerResourceKit from '@/components/popup/NewcomerResourceKit.vue';
import Card from './Card.vue';
import CardBanner from './CardBanner.vue';
import { cardList } from '@/mocks/modules/author';
import { onMounted, ref } from 'vue';
import { getMyWork } from '@/api';
import { AuthorData, MyWork } from '@/types/user';

// 控制弹窗显隐
const visible = ref(false);
// 我的作品列表
const myWorkList = ref<MyWork[]>([]);
// 总使用
const authorList = ref<AuthorData>({
  totalWorksUsage: 0,
  totalHotValue: 0,
  everyTotalWorks: 0,
  everyHotValue: 0,
});
// 通知处理
const totalNoticeNumber = ref<number>(0);
const userAvatarList = ref<string[]>([]);
onMounted(async () => {
  // 处理我的作品
  await getMyWork().then(res => {
    myWorkList.value = res;
    res.forEach((item: MyWork) => {
      authorList.value.totalHotValue! += Number(item.todayHotValue);
      authorList.value.totalWorksUsage! += Number(item.useCount);
      authorList.value.everyTotalWorks! += Number(item.todayUseCount);
      authorList.value.everyHotValue! += Number(item.todayHotValue);
      // 处理总通知
      item.notice.forEach(element => {
        totalNoticeNumber.value += element.widgetNotice;
        userAvatarList.value.push(element.avatarImgRandom);
      });
    });
  });
});
</script>

<template>
  <div class="w-100vw h-full bg-$secondaryBackground p-16">
    <div>
      <WorkUpdatesBanner
        :totalNoticeNumber="totalNoticeNumber"
        :user-avatar="userAvatarList"
        :masterList="myWorkList"
      />
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
    <div class="mt-16" @click="visible = true">
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
      />
    </div>
  </div>

  <teleport to="body">
    <NewcomerResourceKit
      :visible="visible"
      @update:visible="visible = $event"
    ></NewcomerResourceKit>
  </teleport>
</template>

<style scoped lang="scss"></style>
