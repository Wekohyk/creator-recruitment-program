<script setup lang="ts">
import { getCreatorHotTrend } from '@/api';
import PageLayout from '@/components/PageLayout.vue';
import { CreatorHotTrend } from '@/types/creator';
import { onMounted, ref } from 'vue';

const creatorHotTrend = ref<CreatorHotTrend>([{}]);
onMounted(async () => {
  await getCreatorHotTrend().then(res => {
    creatorHotTrend.value = res;
    console.log('creatorHotTrend.value', creatorHotTrend.value);
  });
});
</script>

<template>
  <PageLayout hideBack background="var(--secondaryBackground)">
    <template #navigationBarCenter>{{ $t('creator.index') }}</template>

    <div class="w-100vw pt-12 flex flex-col gap-32">
      <div class="w-full h-32 px-16">
        <div
          class="w-full h-full flex items-center justify-start gap-4 bg-#FFF py-6 pl-12 rounded-8"
        >
          <div class="i-iconamoon:search text-20 text-$tertiaryText"></div>
          <div class="text-15 lh-15 text-$tertiaryText">
            {{ $t('creator.search_creator') }}
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="flex items-center justify-between px-16">
          <div class="text-17 lh-17 font-600">
            {{ $t('creator.hot_trend') }}
          </div>
          <div class="flex items-center text-$positive">
            <div class="text-15 lh-15 font-500">
              {{ $t('creator.look_all') }}
            </div>
            <div class="i-uiw:right text-16"></div>
          </div>
        </div>

        <div
          class="mt-12 overflow-x-auto overflow-y-hidden flex gap-8 flex-1 scrollbar-hidden px-16"
        >
          <div
            v-for="(item, index) in creatorHotTrend"
            :key="item.totalHotValue"
            class="w-114 h-136 bg-#FFF rounded-12 flex flex-center flex-col gap-6 flex-shrink-0 relative"
          >
            <div
              class="w-52 h-52 rounded-50% bg-cover bg-center flex-shrink-0"
              :style="{
                backgroundImage: `url(${item.creatorAvatar})`,
              }"
            ></div>
            <div class="text-13 lh-15 font-500">{{ item.creatorName }}</div>
            <div class="flex-center gap-2 h-21 bg-#FF9500/8 rounded-6 px-8">
              <div class="i-bxs:up-arrow text-10 text-$orange"></div>
              <div class="text-11 lh-11 font-500 text-$orange">
                {{ item.everyHotValue }}
              </div>
            </div>

            <div
              class="absolute top-8 left-8 w-20 h-20 rounded-4 flex-center bg-$secondaryBackground text-14 lg-14 font-600"
              :style="{
                color:
                  index === 0
                    ? '#EECA71'
                    : index === 1
                      ? '#C3D2E5'
                      : index === 2
                        ? '#DCBFA6'
                        : 'var(--tertiaryText)',
              }"
            >
              {{ index + 1 }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col">
        <div class="w-full px-16 flex items-center justify-between">
          <div class="text-17 lh-17 font-600">
            {{ $t('creator.hot_creator') }}
          </div>
          <div
            class="flex items-center gap-5 text-15 lh-15 font-500 text-$secondaryText relative"
          >
            <div>
              {{ $t('creator.sort_by') }}
            </div>
            <div class="i-bxs:down-arrow text-12 text-$quaternaryText"></div>
          </div>
        </div>

        <div class="py-12 px-16">
          <div class="rounded-12 overflow-hidden relative">
            <div class="w-175 h-156 bg-#F9FAFC rounded-t-12 flex-center">
              <div class=""></div>
            </div>
            <div class="w-175 h-56 bg-#FFF rounded-b-12"></div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
