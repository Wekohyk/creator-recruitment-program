<script setup lang="ts">
import { MyWork } from '@/types/user';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
    masterList: Array as () => MyWork[],
  },
  totalNoticeNumber: {
    type: Number,
    default: 0,
  },
  allDynamic: Boolean,
});

const emit = defineEmits(['update:visible']);
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
      class="fixed top-0 left-0 z-999 w-100vw h-100vh duration-300 transition-all ease-in-out pt-114px"
    >
      <div
        class="w-100vw h-full rounded-t-16 bg-#FFF flex items-center flex-col relative px-16"
      >
        <div class="w-full h-63 flex items-center justify-center">
          <div class="text-17 lh-17 font-500">
            {{ $t('popup.dynamic_display.index') }}
          </div>
          <div
            class="i-fluent-mdl2:status-circle-error-x text-$quaternaryText w-28 h-28 absolute top-18 right-16"
            @click="emit('update:visible', false)"
          ></div>
        </div>

        <!-- 系统通知 -->
        <div
          v-if="props.allDynamic"
          class="w-full h-60 bg-$primaryDivider rounded-12 p-10 flex items-center justify-between"
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
        <div class="w-full h-64"></div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
