<script setup lang="ts">
import { getReview } from '@/api';
import PageLayout from '@/components/PageLayout.vue';
import { ReviewList } from '@/types/review';
import { onMounted, ref } from 'vue';

const reviewList = ref<ReviewList[]>([]);
onMounted(async () => {
  await getReview().then((res: ReviewList[]) => {
    reviewList.value = res;
    console.log(reviewList.value);
  });
});
</script>

<template>
  <PageLayout background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('system_notification.index') }}</div>
    </template>

    <div class="flex flex-col gap-8 p-8">
      <div
        class="h-68 px-12 bg-#FFF flex items-center justify-between rounded-12 px-10"
        v-for="item in reviewList"
        :key="item.reviewSvg"
      >
        <div class="flex items-center">
          <div
            class="w-44 h-44 rounded-6 flex-center bg-$tertiaryBackground"
          ></div>
          <div class="ml-12 flex flex-col gap-8 justify-center">
            <div class="text-15 lh-15 font-500">灵动面板</div>
            <div class="flex items-center gap-4">
              <span
                :class="['w-16 h-16', `i-${item.reviewSvg}`]"
                :style="{
                  color: item.reviewColor,
                }"
              ></span>
              <span class="text-13 lh-13 text-$tertiaryText">
                {{ item.reviewContent }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 text-$quaternaryText">
          <div class="text-13 lh-13" v-if="item.reviewStatus === 'refuse'">
            详情
          </div>
          <span class="i-uiw:right w-16 h-14"></span>
        </div>
      </div>
    </div>
  </PageLayout>

  <!-- 防止svg动画加载不出来 -->
  <div class="fixed top-100000 opacity-0">
    <span class="i-fluent-mdl2:completed-solid"></span>
    <span class="uiw:time"></span>
    <span class="i-ix:error-filled"></span>
  </div>
</template>

<style scoped lang="scss"></style>
