<script setup lang="ts">
import { ReviewList } from '@/types/review';

const props = defineProps({
  reviewList: Object as () => ReviewList,
});
</script>

<template>
  <div class="bg-#F2F2F7 w-full h-1"></div>
  <div class="p-16">
    <div class="font-500 text-17 lh-24">
      {{ $t('popup.review_feedback.respected_designer') + ':' }}
    </div>
    <div class="px-12">
      <ul class="flex flex-col gap-20 mt-12">
        <li class="flex flex-col">
          <div class="text-14 lh-20">
            {{ $t('popup.review_feedback.unsuccessful_review') }}
          </div>
          <div class="px-10 mt-10">
            <div>
              <span class="text-14 lh-30 text-#8A8A8A">
                {{ $t('popup.review_feedback.component_name') }}
              </span>
              <span class="text-14 lh-30 font-500">
                {{ props.reviewList?.widgetName }}
              </span>
            </div>
            <div>
              <span class="text-14 lh-30 text-#8A8A8A">
                {{ $t('popup.review_feedback.submission_date') }}
              </span>
              <span class="text-14 lh-30 font-500">
                {{ props.reviewList?.rejectData?.submitTime }}
              </span>
            </div>
          </div>
        </li>
        <li class="flex flex-col">
          <div class="text-15 lh-21 font-500">
            {{ $t('popup.review_feedback.review_unsuccessful_reason') }}
          </div>
          <div class="flex flex-col mt-10 px-12">
            <div
              v-for="(item, index) in props.reviewList?.rejectData
                ?.rejectReason"
              :key="item"
            >
              <span class="text-14 lh-22 text-#3678F6">
                {{ String.fromCharCode(97 + index) }}.
              </span>
              <span class="text-14 lh-22">{{ item }}</span>
            </div>
          </div>
        </li>
        <li class="flex flex-col">
          <div class="text-15 lh-21 font-500">
            {{ $t('popup.review_feedback.review_unsuccessful_content') }}
          </div>
          <div class="px-12 mt-10 flex flex-col gap-10">
            <div class="text-14 lh-22">
              {{ $t('popup.review_feedback.review_img_content') }}
            </div>
            <div
              class="bg-cover bg-center w-320 h-155 b-1 b-solid b-$primaryDivider"
              :style="{
                backgroundImage: `url(${props.reviewList?.rejectData?.rejectImg})`,
              }"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="bg-#F2F2F7 w-full h-1 mt-10"></div>
  <div class="text-13 lh-22 font-500 text-$tertiaryText py-20 px-16">
    <div class="indent-12">
      <span>{{ $t('popup.review_feedback.text1') }}</span>
      <span class="text-#3678F6">{{ $t('popup.review_feedback.text2') }}</span>
      <span>
        {{ $t('popup.review_feedback.text3') }}
      </span>
    </div>
    <div class="indent-12">
      {{ $t('popup.review_feedback.text4') }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
