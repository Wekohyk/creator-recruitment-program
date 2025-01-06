<script setup lang="ts">
import { MyWork } from '@/types/user';
import WidgetSize from '@/components/WidgetSize.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  workList: Array as () => MyWork[],
});

const emit = defineEmits(['update:visible']);
</script>

<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.visible"
      class="fixed top-0 left-0 z-99 w-100vw h-100vh bg-#000000/60 duration-300 transition-all ease-in-out flex-center flex-col"
      @click="emit('update:visible', false)"
    >
      <div class="w-352 h-352 rounded-8 bg-#FFF relative" @click.stop>
        <div class="mt-13 text-center text-16 lh-22 font-600 pb-12">
          {{ $t('growth_center.discover_page_popup.title') }}
        </div>
        <div class="px-14.5 pt-10 pb-11 b-y-1 b-y-solid b-y-$primaryDivider">
          <div class="w-full grid grid-cols-2 gap-4">
            <div
              class="w-158 h-210 rounded-5.5 overflow-hidden shadow-[0px_3.61px_7.22px_0px_#00000008]"
              v-for="item in props.workList?.slice(0, 2)"
              :key="item.hotValue"
            >
              <div
                class="w-full min-h-158 aspect-158/158 bg-$secondaryBackground flex-center relative"
              >
                <div class="absolute right-7 top-7 flex items-center gap-4">
                  <WidgetSize
                    v-for="widgetSize in item.widgetType"
                    :key="widgetSize"
                    :width="14.5"
                    :height="14.5"
                    :content="widgetSize"
                    background="#EAEBED"
                  ></WidgetSize>
                </div>
                <div
                  :class="[
                    'bg-cover bg-center shadow-[0px_3.61px_7.22px_0px_#00000008]',
                    item.widgetType[0] === 'small'
                      ? 'w-100 h-100 rounded-6'
                      : item.widgetType[0] === 'medium'
                        ? 'w-140 h-65 rounded-7'
                        : 'w-115.5 h-120 rounded-6',
                  ]"
                  :style="{ backgroundImage: `url(${item.widgetImg})` }"
                ></div>
              </div>
              <div
                class="w-full min-h-52 aspect-158/52 bg-#FFF b-1 b-solid b-$secondaryButton p-9 rounded-b-5.5"
              >
                <div class="text-13 lh-13">{{ item.widgetName }}</div>
                <div class="flex items-center justify-between mt-5">
                  <div class="flex items-center gap-4">
                    <div
                      class="w-16 h-16 rounded-50% bg-cover bg-center bg-$secondaryBackground"
                      :style="{
                        backgroundImage: `url(${item.creator.creatorAvatar})`,
                      }"
                    ></div>
                    <div class="text-9 lh-13 text-$tertiaryText">
                      {{ item.creator.creatorName }}
                    </div>
                  </div>
                  <div class="text-9 lh-13 text-$tertiaryText">
                    {{
                      item.useCount +
                      $t('growth_center.discover_page_popup.use_count')
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-33 pt-11 pb-42 flex items-center justify-between">
          <div class="flex flex-col items-center">
            <div class="i-bxs:home w-22 h-22 text-#D8D8D8"></div>
            <div class="text-8 lh-13 text-$quaternaryText">
              {{ $t('growth_center.discover_page_popup.home') }}
            </div>
          </div>
          <div class="flex flex-col items-center text-$positive">
            <div class="i-solar:lightbulb-bold w-22 h-22"></div>
            <div class="text-8 lh-13">
              {{ $t('growth_center.discover_page_popup.discover') }}
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="i-bxs:widget w-22 h-22 text-#D8D8D8"></div>
            <div class="text-8 lh-13 text-$quaternaryText">
              {{ $t('growth_center.discover_page_popup.theme') }}
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="i-tabler:photo-filled w-22 h-22 text-#D8D8D8"></div>
            <div class="text-8 lh-13 text-$quaternaryText">
              {{ $t('growth_center.discover_page_popup.photo') }}
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="i-mingcute:more-3-fill w-22 h-22 text-#D8D8D8"></div>
            <div class="text-8 lh-13 text-$quaternaryText">
              {{ $t('growth_center.discover_page_popup.more') }}
            </div>
          </div>
        </div>

        <div
          class="absolute bottom-43 left-1/2 transform -translate-x-1/2 w-257 h-48 rounded-15 p-9 bg-#000/80 text-#FFF text-11 lh-15 font-500 text-center"
        >
          <span>
            {{ $t('growth_center.discover_page_popup.content1') }}
          </span>
          <span class="font-600 text-$orange">
            {{ $t('growth_center.discover_page_popup.content2') }}
          </span>
          <span>{{ $t('growth_center.discover_page_popup.content3') }}</span>
        </div>
      </div>

      <div
        @click="emit('update:visible', false)"
        class="w-40 h-40 b-1 b-solid b-#FFF rounded-50% flex-center mt-16"
      >
        <img src="/turn_off.svg" alt="" class="w-16 h-16" />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
