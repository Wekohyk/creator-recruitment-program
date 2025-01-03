<script setup lang="ts">
import { $t } from '@/lang';
import { useRouter } from 'vue-router';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:visible']);

const svgList = [
  {
    svg: '/popup/light_bulb.svg',
    title: $t('popup.newcomer_resource_kit.discovery_page'),
    content: $t('popup.newcomer_resource_kit.hundreds_millions'),
  },
  {
    svg: '/popup/stars.svg',
    title: $t('popup.newcomer_resource_kit.dynamic_component'),
    content: $t('popup.newcomer_resource_kit.industry_first'),
  },
  {
    svg: '/popup/gear.svg',
    title: $t('popup.newcomer_resource_kit.creation_tools'),
    content: $t('popup.newcomer_resource_kit.professional_tools'),
  },
  {
    svg: '/popup/notebook.svg',
    title: $t('popup.newcomer_resource_kit.creative_resources'),
    content: $t('popup.newcomer_resource_kit.rich_widget_library'),
  },
];

const router = useRouter();
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
      <div class="font-600 text-20 lh-28 text-#FFF6E4">
        {{ $t('popup.newcomer_resource_kit.title') }}
      </div>
      <div
        class="mt-19 w-343 h-390 bg-#FFF rounded-16 flex-center flex-col"
        @click.stop
      >
        <div class="text-20 lh-28 font-600">
          {{ $t('popup.newcomer_resource_kit.content') }}
        </div>
        <div
          class="w-207 h-78 mt-29 rounded-16 overflow-hidden bg-center bg-cover"
          :style="{
            backgroundImage: `url(/popup/red_packet.webp)`,
          }"
        ></div>
        <div class="text-14 lh-20 text-#818181 mt-9">
          {{ $t('popup.newcomer_resource_kit.limited_time_offer') }}
        </div>
        <div
          class="w-full px-29 flex items-center justify-between gap-27 mt-27"
        >
          <div
            class="flex-center flex-col"
            v-for="item in svgList"
            :key="item.svg"
          >
            <div class="w-30 h-30">
              <img :src="item.svg" alt="" class="w-full h-full" />
            </div>
            <div class="text-12 lh-17">{{ item.title }}</div>
            <div class="text-12 lh-17 text-$tertiaryText">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div class="w-full px-23 flex items-center justify-between mt-33">
          <div
            class="w-141.5 h-44 b-1 b-solid b-#DEDEDE flex-center rounded-35 text-14 lh-20 text-#BCBCBC"
            @click="emit('update:visible', false)"
          >
            {{ $t('popup.newcomer_resource_kit.not_claiming_for_now') }}
          </div>
          <div
            class="w-141.5 h-44 flex-center rounded-35 text-14 lh-20 font-500 text-#FFF"
            :style="{
              background: `linear-gradient(270deg, #FF253A 0.18%, #FF4470 76.55%)`,
              'box-shadow': `0px 0px 5.3px 0px #FFFFFF inset`,
            }"
            @click="() => router.push('/growth-center')"
          >
            {{ $t('popup.newcomer_resource_kit.claim_now') }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
