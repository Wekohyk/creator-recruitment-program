<script setup lang="ts">
import WidgetSize from '@/components/WidgetSize.vue';
import { MyWork } from '@/types/user';

const props = defineProps({
  widgetList: Object as () => MyWork,
});
</script>

<template>
  <div
    class="w-full bg-$cardBackground rounded-16 pl-14 pr-12 py-11 flex items-center justify-between"
  >
    <div class="flex items-center">
      <div class="w-58 h-58 rounded-8 bg-$tertiaryBackground"></div>
      <div class="flex flex-col ml-13 gap-9">
        <div class="flex items-center">
          <div class="text-15 lh-15 font-500">
            {{ props.widgetList?.widgetName }}
          </div>
          <div class="flex items-center gap-4 ml-8">
            <WidgetSize
              :width="16"
              :height="16"
              v-for="type in props.widgetList?.widgetType"
              :key="type"
              :content="type"
            ></WidgetSize>
          </div>
        </div>
        <div class="text-13 lh-14 text-$tertiaryText">
          {{
            $t('data_statistics.home.usage') + ' ' + props.widgetList!.useCount
          }}
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex flex-col gap-4 items-end">
        <div class="flex items-center gap-4">
          <span class="text-12 lh-12 text-$secondaryText">
            {{ $t('data_statistics.home.totalHot') }}
          </span>
          <span class="text-22 lh-22">{{ props.widgetList?.hotValue }}</span>
        </div>
        <div class="flex items-center gap-4 text-13 lh-13">
          <span class="text-$tertiaryText">
            {{ $t('data_statistics.home.today') }}
          </span>
          <span class="text-$red font-500">
            {{ props.widgetList?.todayHotValue }}
          </span>
        </div>
      </div>
      <span class="i-uiw:right w-20 h-20 text-$quaternaryText"></span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
