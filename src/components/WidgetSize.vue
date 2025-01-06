<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  content: String,
  width: Number,
  height: Number,
  background: String,
});

const contentValue = computed(() => {
  return props.content === 'small'
    ? '小'
    : props.content === 'medium'
      ? '中'
      : '大';
});
</script>

<template>
  <div
    class="rounded-4 font-600 text-11 lh-11 text-$quaternaryText flex-center"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      background: props.background
        ? props.background
        : 'var(--secondaryBackground)',
    }"
  >
    {{ contentValue }}
  </div>
</template>

<style scoped lang="scss"></style>
