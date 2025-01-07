<script setup lang="ts">
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
  { level: 1, title: '入门创作者 (热度值 <2000): 初步接触创作' },
  { level: 2, title: '见习创作者 (热度值 2000): 基本身份和社区认可' },
  { level: 3, title: '新锐创作者 (热度值 50000): 解锁更多创作工具' },
  { level: 4, title: '资深创作者 (热度值 250000): 获得专属的推广机会' },
  { level: 5, title: '精英创作者 (热度值 500000): 优先参与平台活动' },
  { level: 6, title: '知名创作者 (热度值 1500000): 最高平台支持和曝光' },
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
