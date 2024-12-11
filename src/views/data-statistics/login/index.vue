<script setup lang="ts"></script>

<template>
  <div class="w-full h-full bg-#FFF rounded-16 flex flex-col items-center">
    <div class="mt-100 font-600 text-16 lh-22">
      {{ $t('data_statistics.login.title') }}
    </div>
    <div class="mt-32 b-2 b-solid b-$primaryText w-90 h-56 rounded-6"></div>
    <div
      class="mt-6 w-32 b-1 b-solid b-$primaryText rounded-10 text-$primaryText"
    ></div>
    <div class="mt-12 text-12 lh-17 text-$quaternaryText">
      {{ $t('data_statistics.login.content') }}
    </div>
    <div
      class="mt-12 px-10 py-4 bg-$secondaryBackground rounded-43 font-500 text-12 lh-17 flex items-center justify-center"
    >
      <div class="text-$secondaryText">💻电脑访问：</div>
      <div class="text-$tertiaryText">x.xiaozujian.com</div>
      <span class="i-ph:copy-simple"></span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
