<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getMyWork } from '@/api';
import { type MyWork } from '@/types/user';
import widgetSize from '@/components/WidgetSize.vue';
import noWorkPopup from './noWorkPopup.vue';

const myWorkList = ref<MyWork[]>([]);

const workVisible = ref(false);

onMounted(async () => {
  await getMyWork().then(res => {
    myWorkList.value = res;
  });
});
</script>

<template>
  <div
    class="mt-16 w-full h-197 rounded-16 bg-#FFF p-16"
    @click="workVisible = true"
  >
    <div class="flex items-center justify-between">
      <div class="text-15 lh-21">{{ $t('mine.my_works') }}</div>

      <div class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"></div>
    </div>

    <div class="mt-8 flex items-center justify-between">
      <div
        v-for="item in myWorkList.slice(0, 3)"
        :key="item.hotValue"
        class="min-w-99 min-h-136 aspect-99/136 shadow-[0px_1px_4px_0px_#00000014] rounded-7 overflow-hidden relative"
      >
        <div class="min-w-99 aspect-99/113 bg-$tertiaryBackground flex-center">
          <div
            class="bg-cover bg-center"
            :class="[
              item.widgetType[0] === 'small'
                ? 'w-56 h-56 rounded-6'
                : item.widgetType[0] === 'medium'
                  ? 'w-84 h-40 rounded-6'
                  : 'w-74 h-77 rounded-6',
            ]"
            :style="{
              backgroundImage: `url(${item.widgetImg})`,
            }"
          ></div>
        </div>
        <div
          class="text-12 lh-17 font-500 pt-2 pl-6 pr-11 whitespace-nowrap overflow-hidden"
        >
          {{ item.widgetName }}
        </div>

        <div class="absolute top-4.5 right-4.5 flex items-center gap-4">
          <widgetSize
            v-for="widget in item.widgetType"
            :key="widget"
            :content="widget"
            :width="10"
            :height="10"
            font-size="6px"
            background="#EAEBED"
          ></widgetSize>
        </div>
      </div>
    </div>
  </div>

  <noWorkPopup
    :visible="workVisible"
    @update:visible="workVisible = $event"
  ></noWorkPopup>
</template>

<script lang="scss" scoped></script>
