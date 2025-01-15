<script setup lang="ts">
const props = defineProps({
  number: String,
  letter: String,
});
</script>

<template>
  <div class="w-full h-47 bg-#FCFCFE rounded-5 flex-center flex-col">
    <div class="text-25 lh-30">
      {{ props.number }}
    </div>
    <div class="text-10 h-12 lh-12 font-700">
      {{ props.letter }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
