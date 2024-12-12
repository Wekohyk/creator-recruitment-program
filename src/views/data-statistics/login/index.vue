<script setup lang="ts">
import toast from '@/components/toast';
import { copyToClipboard } from '@/hooks/index';
const VUE_URL = 'wekooo.com';

const login = () => {
  toast({ message: '你还想登陆? 嘻嘻' });
};
</script>

<template>
  <div
    class="w-100vw h-[calc(100%-49px)] bg-$secondaryBackground flex flex-col p-16"
  >
    <div
      class="w-full h-full flex flex-col items-center bg-#FFF rounded-16 relative top-0 left-0"
    >
      <div class="font-600 text-16 lh-22 mt-100">
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
        <div class="text-$secondaryText">
          {{ '💻' + ' ' + $t('data_statistics.login.computer_access') + ': ' }}
        </div>
        <div
          class="text-$tertiaryText flex items-center gap-2 ml-4"
          @click="copyToClipboard(VUE_URL)"
        >
          <span>{{ VUE_URL }}</span>
          <span class="i-ph:copy-simple w-14 h-14"></span>
        </div>
      </div>

      <div class="w-168 h-40 flex justify-center absolute bottom-56">
        <div
          class="w-168 h-40 bg-#E6F1FF rounded-23 flex-center text-$positive"
        >
          <span class="i-icon-park-outline:computer w-18 h-18"></span>
          <span class="ml-2 font-500 text-14 lh-20" @click="login">
            {{ $t('data_statistics.login.button_content') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
