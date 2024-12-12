<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { tabList } from '.';

const route = useRoute();
const router = useRouter();
const navigateToTab = (url: string) => {
  router.push(url);
};
</script>

<template>
  <router-view></router-view>
  <!-- 下方 tab 栏 -->
  <div
    class="fixed bottom-0 left-0 z-999 w-100vw adapt-h-49 px-38 pt-12 bg-#FFFFFF/80 bg-blur-54 flex justify-between"
  >
    <div
      :class="[
        'flex flex-col items-center',
        (route.meta.title as string).includes(item.meta)
          ? 'text-$positive'
          : 'text-$primaryText',
      ]"
      v-for="item in tabList"
      :key="item.id"
      @click="navigateToTab(item.url)"
    >
      <span :class="[`i-${item.icon}`, 'w-24 h-24']"></span>
      <div class="font-500 text-10 lh-14">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
