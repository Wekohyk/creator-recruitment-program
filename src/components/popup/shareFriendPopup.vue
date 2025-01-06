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
      @click="emit('update:visible', false)"
      class="fixed top-0 left-0 z-99 w-100vw h-100vh bg-#000000/60 duration-300 transition-all ease-in-out flex-center flex-col"
    >
      <div
        @click.stop
        class="w-320 h-275 rounded-16 bg-#FFF p-16 flex flex-col gap-12"
      >
        <div class="text-16 lh-22 font-600 text-center">
          {{ $t('popup.share_friend.title') }}
        </div>
        <div class="flex items-center justify-start gap-4">
          <div
            class="w-16 h-16 rounded-50% bg-#0A7AFF/10 flex-center text-12 lh-17 font-500 text-$positive"
          >
            1
          </div>
          <div class="text-15 lh-21">
            {{ $t('popup.share_friend.copy_password') }}
          </div>
        </div>
        <div class="flex items-center justify-start gap-4">
          <div
            class="w-16 h-16 rounded-50% bg-#0A7AFF/10 flex-center text-12 lh-17 font-500 text-$positive"
          >
            2
          </div>
          <div class="text-15 lh-21">
            {{ $t('popup.share_friend.go_to_share') }}
          </div>
        </div>

        <div
          class="bg-cover bg-center w-282 h-116 rounded-12 b-1 b-solid b-#E6E6E6 relative"
          :style="{
            backgroundImage: `url(/copy_friend.webp)`,
          }"
        >
          <div
            class="bg-cover bg-center w-56 h-56 absolute top-87 left-46"
            :style="{
              backgroundImage: `url(/finger.webp)`,
            }"
          ></div>
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
