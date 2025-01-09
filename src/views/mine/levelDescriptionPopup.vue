<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  level: {
    type: Number,
  },
});

const emit = defineEmits(['update:visible']);

const levelDescriptionList = [
  { level: 1, title: t('mine.level_content1') },
  { level: 2, title: t('mine.level_content2') },
  { level: 3, title: t('mine.level_content3') },
  { level: 4, title: t('mine.level_content4') },
  { level: 5, title: t('mine.level_content5') },
  { level: 6, title: t('mine.level_content6') },
];
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
      <div @click.stop class="w-324 h-184 rounded-20 bg-#FFF py-20 px-16">
        <div class="text-14 lh-12 font-500">
          {{ $t('mine.level_description') }}
        </div>

        <ul class="mt-8 pl-16">
          <li
            v-for="item in levelDescriptionList"
            :key="item.level"
            :class="[
              'text-12 lh-17 list-disc',
              props.level === item.level
                ? 'text-#3678F6 font-600'
                : 'text-#8A8A8A',
            ]"
          >
            {{ item.title }}
          </li>
        </ul>
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
