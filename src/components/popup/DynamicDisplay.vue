<script setup lang="ts">
import { NoticeList } from '@/types/user';
import { useRouter } from 'vue-router';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 所有通知信息
  allNoticeList: Array as () => NoticeList[],
  // 通知数量
  totalNoticeNumber: {
    type: Number,
    default: 0,
  },
  // 所有动态
  allDynamic: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:visible']);

const router = useRouter();

const linkSystemNotification = () => {
  router.push('/system-notification');
};
</script>

<template>
  <transition
    enter-from-class="transform translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform translate-y-full"
  >
    <div
      v-if="props.visible"
      class="fixed top-0 left-0 z-99 w-100vw h-100vh duration-300 transition-all ease-in-out pt-114px"
      @click="emit('update:visible', false)"
    >
      <div
        class="w-100vw h-full rounded-t-16 bg-#FFF flex items-center flex-col relative px-16 overflow-y-scroll"
        @click.stop
      >
        <div class="w-full pt-23 pb-24 flex items-center justify-center">
          <div class="text-17 lh-17 font-500">
            {{ $t('popup.dynamic_display.index') }}
          </div>
          <div
            class="i-fluent-mdl2:status-circle-error-x text-$quaternaryText w-28 h-28 absolute top-18 right-16"
            @click="emit('update:visible', false)"
          ></div>
        </div>

        <div class="w-full flex flex-col gap-4">
          <!-- 系统通知 -->
          <div
            v-if="props.allDynamic"
            class="w-full h-60 bg-$primaryDivider rounded-12 p-10 flex items-center justify-between"
            @click="linkSystemNotification"
          >
            <div class="flex items-center">
              <div class="w-40 h-40 rounded-50% bg-#FF8A00 flex-center">
                <span class="i-ix:alarm-bell-filled w-28 h-28 bg-#FFF"></span>
              </div>
              <div class="flex flex-col ml-8 gap-8">
                <div class="text-15 lh-15 font-500">
                  {{ $t('popup.dynamic_display.system_notification') }}
                </div>
                <div class="text-13 lh-13 text-$tertiaryText">
                  {{ $t('popup.dynamic_display.title') }}
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="py-3 px-5 bg-$red text-#FFF rounded-9 text-10 lh-10">
                {{
                  props.totalNoticeNumber > 99 ? '99+' : props.totalNoticeNumber
                }}
              </div>
              <div class="i-uiw:right w-16 h-16 text-#2B2967"></div>
            </div>
          </div>

          <!-- 通知列表 -->
          <div
            class="w-full h-full flex items-center gap-8 !h-64"
            v-for="item in allNoticeList"
            :key="item.hotValue"
          >
            <div class="relative">
              <div
                class="w-40 h-40 bg-cover bg-center rounded-50%"
                :style="{
                  backgroundImage: `url(${item.avatarImgRandom})`,
                }"
              ></div>
              <div
                class="absolute bottom-0 right-[-2px] w-16 h-16 b-2 b-solid b-#FFF rounded-50% flex-center"
                :style="{
                  background: item.svgColor,
                }"
              >
                <span :class="['i-' + item.svgImg, 'text-#FFF w-9 h-9']"></span>
              </div>
            </div>
            <div
              class="w-[calc(100%-50px)] flex items-center justify-between gap-8 b-b-solid b-b-0.5 b-b-$primaryDivider h-64"
            >
              <div class="flex flex-col items-start gap-8">
                <div class="text-15 lh-15 font-500">{{ item.avatarName }}</div>
                <div class="flex items-center gap-4">
                  <div class="text-13 lh-13 text-$tertiaryText">
                    {{ item.hotContent }}
                  </div>
                  <div class="bg-#FFE8C8 flex-center gap-2 rounded-5 py-2 px-6">
                    <span
                      class="i-tabler:flame-filled w-12 h-12 text-$orange"
                    ></span>
                    <div class="text-12 lh-17 text-$orange">
                      {{ '热度' + item.hotValue }}
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="w-44 h-44 bg-$tertiaryBackground rounded-6 flex-center"
                v-if="allDynamic"
              >
                <div
                  class="bg-center bg-cover"
                  :class="[
                    item.widgetData?.widgetType[0] === 'small'
                      ? 'w-27 h-27'
                      : item.widgetData?.widgetType[0] === 'medium'
                        ? 'w-27 h-13'
                        : 'w-27 h-27',
                  ]"
                  :style="{
                    backgroundImage: `url(${item.widgetData?.widgetImg})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
