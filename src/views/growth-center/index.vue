<script setup lang="ts">
import { getMyWork } from '@/api';
import PageLayout from '@/components/PageLayout.vue';
import { computed, onMounted, ref } from 'vue';
import { MyWork } from '@/types/user';
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
    console.log('myWorkList', myWorkList.value);
    res.forEach((item: MyWork) => {
      authorList.value.totalHotValue += Number(item.todayHotValue);
      authorList.value.totalWorksUsage += Number(item.useCount);
      authorList.value.everyTotalWorks += Number(item.todayUseCount);
      authorList.value.everyHotValue += Number(item.todayHotValue);
    });
  });
});

const levelIcon = computed(() => {
  if (authorList.value.totalHotValue < 1500000) {
    return {
      img: '/growth-center/level_6.webp',
      title: t('growth_center.level_6'),
    };
  } else if (authorList.value.totalHotValue < 150000) {
    return {
      img: '/growth-center/level_5.webp',
      title: t('growth_center.level_5'),
    };
  } else if (authorList.value.totalHotValue < 100000) {
    return {
      img: '/growth-center/level_4.webp',
      title: t('growth_center.level_4'),
    };
  } else if (authorList.value.totalHotValue < 50000) {
    return {
      img: '/growth-center/level_3.webp',
      title: t('growth_center.level_3'),
    };
  } else if (authorList.value.totalHotValue < 10000) {
    return {
      img: '/growth-center/level_2.webp',
      title: t('growth_center.level_2'),
    };
  } else {
    return {
      img: '/growth-center/level_1.webp',
      title: t('growth_center.level_1'),
    };
  }
});
</script>

<template>
  <PageLayout background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('growth_center.index') }}</div>
    </template>
    <div class="px-16 mt-22">
      <div
        class="w-full h-183 bg-#FFF rounded-20 b-1 b-solid b-#E7E7E7 pt-12 py-16 px-20 flex justify-between"
      >
        <div class="flex flex-col gap-1 justify-start items-start">
          <div class="text-$orange text-14 lh-13 font-500 flex items-center">
            <span class="i-tabler:flame-filled w-12 h-12"></span>
            <span class="ml-2">
              {{ $t('growth_center.hot_value') }}
            </span>
          </div>
          <div class="text-52 lh-73 font-600">
            {{ authorList.totalHotValue }}
          </div>
        </div>
        <div class="flex flex-col justify-start items-center">
          <div
            class="w-70 h-70 bg-cover bg-center"
            :style="{ backgroundImage: `url(${levelIcon.img})` }"
          ></div>
          <div class="text-12 lh-17 text-$tertiaryText">
            {{ levelIcon.title }}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
