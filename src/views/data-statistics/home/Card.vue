<script setup lang="ts">
import { type CardList, type AuthorList } from '@/types/user';
import { isPositiveOrNegative } from '@/hooks/index';

const props = defineProps({
  cardList: Object as () => CardList,
  authorList: Object as () => AuthorList,
  index: Number,
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
      {{
        index === 0
          ? props.authorList?.totalWorksUsage
          : props.authorList?.totalHotValue
      }}
    </div>
    <div
      :class="[
        'mt-7 font-500 text-13 lh-13 flex items-center gap-4',
        isPositiveOrNegative(
          index === 0
            ? props.authorList!.everyTotalWorks
            : props.authorList!.everyHotValue,
        )
          ? 'text-$red'
          : 'text-$tertiaryText',
      ]"
    >
      <span class="i-fluent:arrow-up-right-12-filled w-13 h-13"></span>
      <span class="">
        {{
          $t('data_statistics.home.today') +
          (index === 0
            ? props.authorList?.everyTotalWorks
            : props.authorList?.everyHotValue)
        }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
