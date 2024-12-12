<script setup lang="ts">
import { type CardList } from '@/types/user';

const props = defineProps({
  cardList: Object as () => CardList,
});
</script>

<template>
  <div class="p-14 bg-$cardBackground rounded-16">
    <div
      class="w-32 h-32 rounded-8 flex-center"
      :style="{ backgroundColor: props.cardList?.iconColor }"
    >
      <span
        :class="['text-#FFF w-24 h-24', `i-${props.cardList?.icon}`]"
      ></span>
    </div>
    <div class="mt-12 font-500 text-$tertiaryText text-13 lh-13">
      {{ props.cardList?.title }}
    </div>
    <div class="mt-6 font-600 text-24 lh-24">
      {{ props.cardList?.useCountPeople ?? props.cardList?.hotValue }}
    </div>
    <div class="mt-7 font-500 text-13 lh-13 text-$red flex items-center gap-4">
      <span class="i-fluent:arrow-up-right-12-filled w-13 h-13"></span>
      <span class="">
        {{
          $t('data_statistics.home.today') +
          (props.cardList?.count ?? props.cardList?.hotCount)
        }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
