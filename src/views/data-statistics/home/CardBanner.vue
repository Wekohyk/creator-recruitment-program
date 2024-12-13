<script setup lang="ts">
import WidgetSize from '@/components/WidgetSize.vue';
</script>

<template>
  <div
    class="w-full bg-$cardBackground rounded-16 pl-14 pr-12 py-11 flex items-center justify-between"
  >
    <div class="flex items-center">
      <div class="w-58 h-58 rounded-8 bg-$tertiaryBackground"></div>
      <div class="flex flex-col ml-13 gap-9">
        <div class="flex items-center">
          <div class="text-15 lh-15 font-500">天气</div>
          <div class="flex items-center gap-4 ml-8">
            <WidgetSize
              :width="16"
              :height="16"
              content="中"
              v-for="item in 3"
              :key="item"
            ></WidgetSize>
          </div>
        </div>
        <div class="text-13 lh-14 text-$tertiaryText">使用量1203</div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex flex-col gap-4 items-end">
        <div class="flex items-center gap-4">
          <span class="text-12 lh-12 text-$secondaryText">总热度值</span>
          <span class="text-22 lh-22">339</span>
        </div>
        <div class="flex items-center gap-4 text-13 lh-13">
          <span class="text-$tertiaryText">今日</span>
          <span class="text-$red font-500">+385</span>
        </div>
      </div>
      <span class="i-uiw:right w-20 h-20 text-$quaternaryText"></span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
