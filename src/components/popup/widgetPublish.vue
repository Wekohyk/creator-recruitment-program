<script setup lang="ts">
import { ReviewList } from '@/types/review';
import { openTopWidget } from '@/hooks/index';

const props = defineProps({
  widgetList: Object as () => ReviewList,
});
</script>

<template>
  <div
    class="w-302 h-407 flex-center flex-col bg-white fixed left-1/2 transform -translate-x-1/2 rounded-24"
    @click.stop
  >
    <div class="text-17 lh-17 font-500">
      {{ $t('popup.widget_publish.index') }}
    </div>
    <div
      class="relative mt-32 w-174 h-200 rounded-12 bg-$tertiaryBackground flex-center"
    >
      <div
        :style="{ backgroundImage: `url(${props.widgetList?.widgetImg})` }"
        :class="[
          'bg-cover bg-center',
          props.widgetList?.widgetType[0] === 'small'
            ? 'w-100 h-100 rounded-8'
            : props.widgetList?.widgetType[0] === 'medium'
              ? 'w-154 h-66 rounded-8'
              : 'w-124 h-120 rounded-8',
        ]"
      ></div>
    </div>
    <div class="mt-8 text-14 lh-20 font-500">
      {{ props.widgetList?.widgetName }}
    </div>

    <!-- button -->
    <div
      class="mt-32 w-206 h-46 rounded-25 bg-$positive flex-center text-14 lh-20 font-500 text-$cardBackground"
      @click="openTopWidget"
    >
      {{ $t('openContent') }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
