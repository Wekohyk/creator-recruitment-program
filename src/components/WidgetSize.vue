<script setup lang="ts">
defineProps({
  content: String,
  width: Number,
  height: Number,
});
</script>

<template>
  <div
    class="bg-$secondaryBackground rounded-4 font-600 text-11 lh-11 text-$quaternaryText flex-center"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    {{ content }}
  </div>
</template>

<style scoped lang="scss"></style>
