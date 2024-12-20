<script setup lang="ts">
import { MyWork } from '@/types/user';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
    masterList: Array as () => MyWork[],
  },
});
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
      class="fixed top-0 left-0 z-98 w-100vw h-100vh bg-#000000/50 duration-300 transition-all ease-in-out pt-114px"
    ></div>
  </transition>
</template>

<style scoped lang="scss"></style>
