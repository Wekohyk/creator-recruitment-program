<script setup lang="ts">
import { getReview } from '@/api';
import PageLayout from '@/components/PageLayout.vue';
import Mask from '@/components/popup/Mask.vue';
import widgetPublish from '@/components/popup/widgetPublish.vue';
import reviewNotification from '@/views/review-feedback/index.vue';
import { ReviewList } from '@/types/review';
import { onMounted, ref } from 'vue';

const reviewList = ref<ReviewList[]>([]);
onMounted(async () => {
  await getReview().then((res: ReviewList[]) => {
    reviewList.value = res;
  });
});

const visible = ref(false);
const reviewVisible = ref(false);
const publishWidget = ref<ReviewList>();
const clickProcess = (item: ReviewList) => {
  publishWidget.value = item;

  console.log(publishWidget.value);

  if (item.reviewStatus === 'publish') {
    visible.value = true;
  }
  if (item.reviewStatus === 'refuse') {
    reviewVisible.value = true;
  }
};
</script>

<template>
  <PageLayout
    v-if="!reviewVisible"
    background="var(--secondaryBackground)"
    class="transition-transform ease-in-out duration-300"
  >
    <template #navigationBarCenter>
      <div>
        {{ $t('system_notification.index') }}
      </div>
    </template>

    <div class="flex flex-col gap-8 p-8">
      <div
        class="h-68 px-12 bg-#FFF flex items-center justify-between rounded-12 px-10"
        v-for="item in reviewList"
        :key="item.reviewSvg"
        @click="clickProcess(item)"
      >
        <div class="flex items-center">
          <div class="w-44 h-44 rounded-6 flex-center bg-$tertiaryBackground">
            <div
              :class="[
                'bg-cover bg-center rounded-3',
                item.widgetType[0] === 'small'
                  ? 'w-27 h-27'
                  : item.widgetType[0] === 'medium'
                    ? 'w-34 h-13'
                    : 'w-28 h-29',
              ]"
              :style="{
                backgroundImage: `url(${item.widgetImg})`,
                'box-shadow': `0px 8.46px 14.1px 0px #00000014`,
              }"
            ></div>
          </div>
          <div class="ml-12 flex flex-col gap-8 justify-center">
            <div class="text-15 lh-15 font-500">{{ item.widgetName }}</div>
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
            {{ $t('system_notification.details') }}
          </div>
          <span
            v-if="
              item.reviewStatus === 'publish' || item.reviewStatus === 'refuse'
            "
            class="i-uiw:right w-16 h-14"
          ></span>
        </div>
      </div>
    </div>
  </PageLayout>

  <PageLayout
    v-else
    background="#FFF"
    class="transition-transform ease-in-out duration-300"
    use-back
    @back="reviewVisible = false"
  >
    <template #navigationBarCenter>
      <div>
        {{ $t('popup.review_feedback.index') }}
      </div>
    </template>

    <reviewNotification :reviewList="publishWidget"></reviewNotification>
  </PageLayout>

  <!-- 防止svg图标加载不出来 -->
  <div class="fixed top-100000 opacity-0">
    <span class="i-ix:success-filled"></span>
    <span class="i-ion:time"></span>
    <span class="i-ix:error-filled"></span>
  </div>

  <Mask :visible="visible" @update:visible="visible = $event">
    <widgetPublish :widgetList="publishWidget"></widgetPublish>
  </Mask>
</template>

<style scoped lang="scss"></style>
