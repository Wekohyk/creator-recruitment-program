<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
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
      <div @click.stop class="w-358 h-197 rounded-16 bg-#FFF p-16">
        <div class="flex items-center justify-between">
          <div class="text-15 lh-21">{{ $t('mine.my_works') }}</div>
          <div
            class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"
          ></div>
        </div>

        <div class="mt-8 w-full flex-center flex-col">
          <div class="w-88 h-88">
            <img src="/mine/book.svg" alt="" class="w-full h-full" />
          </div>

          <div class="mt-4 text-14 lh-20 font-500">
            {{ $t('mine.your_no_works') }}
          </div>

          <div class="text-12 lh-17 text-$secondaryText mt-4">
            <span>{{ $t('mine.please_open') }}</span>
            <span class="text-#3678F6 font-600">{{ $t('mine.web_page') }}</span>
            <span>{{ $t('mine.publish_new_works') }}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
