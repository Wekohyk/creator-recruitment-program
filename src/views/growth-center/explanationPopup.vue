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
      class="fixed top-0 left-0 z-99 w-100vw h-100vh bg-#000000/60 duration-300 transition-all ease-in-out flex-center"
      @click="emit('update:visible', false)"
    >
      <div class="w-325 h-563 rounded-20 p-20 bg-#FFF relative" @click.stop>
        <div class="text16 lh-22 font-600 text-center text-#000">
          {{ $t('growth_center.explanation_popup.title') }}
        </div>
        <div class="mt-3 text-12 lh-17 text-$secondaryText">
          {{ $t('growth_center.explanation_popup.content') }}
        </div>
        <div class="text-13 lh-18 font-600 mt-20 text-#000">
          {{ $t('growth_center.explanation_popup.title1') }}
        </div>
        <div class="text-12 lh-17 mt-3">
          {{ $t('growth_center.explanation_popup.content1') }}
        </div>
        <div>
          <span class="text-13 lh-18 font-600 text-#000">
            {{ $t('growth_center.explanation_popup.content2') }}
          </span>
          <span class="text-12 lh-17 mt-3">
            {{ $t('growth_center.explanation_popup.content3') }}
          </span>
        </div>
        <div class="pl-18">
          <div class="text-12 lh-17 text-$secondaryText list-disc list-item">
            <span>{{ $t('growth_center.explanation_popup.content4') }}</span>
            <span class="text-$orange font-500">
              {{ $t('growth_center.explanation_popup.content5') }}
            </span>
          </div>
        </div>
        <div class="mt-20 text-12 lh-17 text-$secondaryText">
          {{ $t('growth_center.explanation_popup.content6') }}
        </div>
        <div class="text-13 lh-18 font-600 mt-20 text-#000">
          {{ $t('growth_center.explanation_popup.title2') }}
        </div>
        <div class="text-12 lh-17 font-600 text-#000">
          {{ $t('growth_center.explanation_popup.content7') }}
        </div>
        <div class="text-12 lh-17 text-$secondaryText">
          {{ $t('growth_center.explanation_popup.content8') }}
        </div>
        <div class="text-13 lh-18 font-600 mt-20 text-#000">
          {{ $t('growth_center.explanation_popup.title3') }}
        </div>
        <div class="text-12 lh-17 text-$secondaryText">
          {{ $t('growth_center.explanation_popup.content9') }}
        </div>
        <div class="text-13 lh-18 font-600 mt-20 text-#000">
          {{ $t('growth_center.explanation_popup.title4') }}
        </div>
        <div class="text-12 lh-17 text-$secondaryText">
          {{ $t('growth_center.explanation_popup.content10') }}
        </div>

        <div
          class="absolute bottom-20 w-285 h-46 bg-$positive flex-center text-#FFF mt-20 rounded-46"
          @click="emit('update:visible', false)"
        >
          {{ $t('growth_center.explanation_popup.i_know') }}
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
