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
      class="fixed top-0 left-0 z-98 w-100vw h-100vh bg-#000000/50 duration-300 transition-all ease-in-out flex-center"
      @click="emit('update:visible', false)"
    >
      <div
        class="w-310 h-346 rounded-16 bg-#FFF pt-36 pb-33 flex-center flex-col"
        @click.stop
      >
        <div class="text-18 lh-18 font-600 text-center">
          {{ $t('growth_center.join_group_chat.title') }}
        </div>
        <div class="relative mt-34 w-180 h-180 rounded-24 relative flex-center">
          <span class="corner top-left"></span>
          <span class="corner top-right"></span>
          <span class="corner bottom-left"></span>
          <span class="corner bottom-right"></span>
          <div
            class="bg-cover bg-center w-145 h-145"
            :style="{
              backgroundImage: 'url(/QRcode.webp)',
            }"
          ></div>
          <div
            class="absolute bottom-[-21.5px] right-[-27.5px] bg-cover bg-center w-56 h-56"
            :style="{
              backgroundImage: 'url(/finger.webp)',
            }"
          ></div>
        </div>
        <div class="text-15 lh-15 font-600 text-$positive mt-30 flex-center">
          <span class="i-mingcute:finger-tap-fill w-16 h-16"></span>
          <span>{{ $t('growth_center.join_group_chat.content') }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.corner {
  position: absolute;
  width: 40px; /* Adjust as needed */
  height: 40px; /* Adjust as needed */
  border: 6px solid #0a7aff1a; /* Adjust color as needed */
}

.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
  border-radius: 24px 0 0 0;
}

.top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
  border-radius: 0 24px 0 0;
}

.bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
  border-radius: 0 0 0 24px;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
  border-radius: 0 0 24px 0;
}
</style>
