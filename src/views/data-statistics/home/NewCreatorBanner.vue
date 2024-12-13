<script setup lang="ts"></script>

<template>
  <div
    class="w-full rounded-16 py-7 px-16 bg-gradient-to-r from-[#FFE7E7] to-[#FFFFFF] flex items-center justify-between"
  >
    <div class="flex items-center gap-8">
      <span class="i-mdi:gift w-28 h-28 text-#FF705A"></span>
      <div class="flex flex-col text-12 lh-17">
        <div class="font-500 text-#ED0007">
          {{ $t('data_statistics.home.pending_collection') }}
        </div>
        <div class="text-$tertiaryText">
          {{ $t('data_statistics.home.newCreatorPackage') }}
        </div>
      </div>
    </div>
    <div class="i-uiw:right w-20 h-20 text-$quaternaryText"></div>
  </div>
</template>

<style scoped lang="scss"></style>
