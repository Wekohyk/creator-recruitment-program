<script setup lang="ts">
import { getMyWork } from '@/api';
import PageLayout from '@/components/PageLayout.vue';
import hotStage from './hotStage.vue';
import exclusivePrivilege from './exclusivePrivilege.vue';
import creatorResourcePack from './creatorResourcePack.vue';
import growthIncentives from './growthIncentives.vue';
import { computed, onMounted, ref } from 'vue';
import { LevelIcon, MyWork } from '@/types/user';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const myWorkList = ref<MyWork[]>([]);

const authorList = ref({
  totalWorksUsage: 0,
  totalHotValue: 0,
  everyTotalWorks: 0,
  everyHotValue: 0,
});

onMounted(() => {
  getMyWork().then(res => {
    myWorkList.value = res;
    res.forEach((item: MyWork) => {
      authorList.value.totalHotValue += Number(item.todayHotValue);
      authorList.value.totalWorksUsage += Number(item.useCount);
      authorList.value.everyTotalWorks += Number(item.todayUseCount);
      authorList.value.everyHotValue += Number(item.todayHotValue);
    });
  });
});

const levelIcon = computed(() => {
  let data: LevelIcon = {
    img: '/growth-center/level_6.webp',
    title: t('growth_center.level_6'),
    level: 'LV6',
    upLevel: '',
    extraBonus: '¥5',
    upgradeRequirements: '100%',
    needUpValue: 0,
  };
  if (authorList.value.totalHotValue < 500000) {
    data = {
      img: '/growth-center/level_5.webp',
      title: t('growth_center.level_5'),
      level: 'LV5',
      upLevel: `LV6(${t('growth_center.level_6')})`,
      extraBonus: '¥25',
      upgradeRequirements: `${(authorList.value.totalHotValue / 500000) * 100}%`,
      needUpValue: 500000 - authorList.value.totalHotValue,
    };
  }
  if (authorList.value.totalHotValue < 250000) {
    data = {
      img: '/growth-center/level_4.webp',
      title: t('growth_center.level_4'),
      level: 'LV4',
      upLevel: `LV5(${t('growth_center.level_5')})`,
      extraBonus: '¥300',
      upgradeRequirements: `${(authorList.value.totalHotValue / 250000) * 100}%`,
      needUpValue: 250000 - authorList.value.totalHotValue,
    };
  }
  if (authorList.value.totalHotValue < 50000) {
    data = {
      img: '/growth-center/level_3.webp',
      title: t('growth_center.level_3'),
      level: 'LV3',
      upLevel: `LV4(${t('growth_center.level_4')})`,
      extraBonus: '¥1500',
      upgradeRequirements: `${(authorList.value.totalHotValue / 50000) * 100}%`,
      needUpValue: 50000 - authorList.value.totalHotValue,
    };
  }
  if (authorList.value.totalHotValue < 10000) {
    data = {
      img: '/growth-center/level_2.webp',
      title: t('growth_center.level_2'),
      level: 'LV2',
      upLevel: `LV3(${t('growth_center.level_3')})`,
      extraBonus: '¥3000',
      upgradeRequirements: `${(authorList.value.totalHotValue / 10000) * 100}%`,
      needUpValue: 10000 - authorList.value.totalHotValue,
    };
  }
  if (authorList.value.totalHotValue < 1000) {
    data = {
      img: '/growth-center/level_1.webp',
      title: t('growth_center.level_1'),
      level: 'LV1',
      upLevel: `LV2(${t('growth_center.level_2')})`,
      extraBonus: '¥5',
      upgradeRequirements: `${(authorList.value.totalHotValue / 1000) * 100}%`,
      needUpValue: 1000 - authorList.value.totalHotValue,
    };
  }
  return data;
});
</script>

<template>
  <PageLayout background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('growth_center.index') }}</div>
    </template>
    <div class="px-16 mt-22 pb-87">
      <!-- 热度阶段 -->
      <hotStage :levelIcon="levelIcon" :authorList="authorList"></hotStage>
      <!-- 已解锁专属特权 -->
      <exclusivePrivilege
        :totalHotValue="authorList.totalHotValue"
        class="mt-20 px-10"
      ></exclusivePrivilege>
      <!-- 创作者资源包 -->
      <creatorResourcePack></creatorResourcePack>
      <!-- 成长奖励 -->
      <growthIncentives></growthIncentives>
      <!-- 按钮即下方内容 -->
      <div class="flex gap-18 items-center justify-between mt-20">
        <div
          class="w-full h-64 bg-#FFF rounded-20 flex items-center pl-19 py-14 gap-10"
        >
          <div class="w-36 h-36 rounded-50% bg-#FF9500 flex-center">
            <span class="i-tabler:flame-filled text-#FFF"></span>
          </div>
          <div class="text-16 lh-22 font-500">
            {{ $t('growth_center.hot_instruction') }}
          </div>
        </div>
        <div
          class="w-full h-64 bg-#FFF rounded-20 flex items-center pl-19 py-14 gap-10"
        >
          <div class="w-36 h-36 rounded-50% bg-#08D36A flex-center">
            <span class="i-simple-icons:wechat text-#FFF"></span>
          </div>
          <div class="text-16 lh-22 font-500">
            {{ $t('growth_center.join_discussion') }}
          </div>
        </div>
      </div>

      <div class="flex-center gap-5 mt-20">
        <div class="w-20 h-20">
          <img src="/growth-center/handle.svg" alt="" class="w-full h-full" />
        </div>
        <div class="text-12 lh-17 text-#B5B5B5">
          {{ $t('growth_center.creator_plan') }}
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
