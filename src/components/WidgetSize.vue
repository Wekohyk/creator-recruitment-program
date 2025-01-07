<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  content: String,
  width: Number,
  height: Number,
  background: String,
  fontSize: String,
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
    class="rounded-4 font-600 text-$quaternaryText flex-center"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      background: props.background
        ? props.background
        : 'var(--secondaryBackground)',
      'font-size': props.fontSize ? props.fontSize : '11px',
      'line-height': props.fontSize ? props.fontSize : '11px',
    }"
  >
    {{ contentValue }}
  </div>
</template>

<style scoped lang="scss"></style>
