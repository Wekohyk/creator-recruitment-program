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
      class="relative mt-32 w-174 h-200 rounded-12 bg-$tertiaryBackground"
    ></div>
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
