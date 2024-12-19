<script setup lang="ts">
const props = defineProps({
  totalNoticeNumber: Number,
  userAvatar: Array,
});
</script>

<template>
  <div
    class="w-full pl-16 pr-8 py-7 bg-$cardBackground rounded-16 flex items-center justify-between relative"
  >
    <div class="flex items-center gap-6">
      <span class="i-flowbite:bullhorn-solid w-20 h-20 text-#FF9500"></span>
      <div class="text-14 lh-16">
        {{ $t('data_statistics.home.work_updates') }}
      </div>
    </div>

    <div class="flex gap-6 items-center">
      <div class="flex">
        <div
          v-for="(item, index) in props.userAvatar?.slice(0, 3)"
          :key="index"
          :class="[
            'w-30 h-30 rounded-50% bg-$secondaryBackground bg-cover bg-center transform',
            {
              'translate-x-16': index === 0,
              'translate-x-8': index === 1,
            },
          ]"
          :style="{
            backgroundImage: `url(${item})`,
          }"
        ></div>
      </div>
      <div class="i-uiw:right w-16 h-16 text-$quaternaryText"></div>
    </div>

    <div
      class="py-1 px-4 bg-#FF3B30 text-#FFF text-10 lh-14 rounded-8 absolute -top-6 -right-6 flex items-center justify-center"
      v-if="props.totalNoticeNumber"
    >
      {{ props.totalNoticeNumber > 999 ? '999+' : props.totalNoticeNumber }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
