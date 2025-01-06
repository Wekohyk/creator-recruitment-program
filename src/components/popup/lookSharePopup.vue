<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import shareFriendPopup from './shareFriendPopup.vue';
import toast from '@/components/toast';

const { t } = useI18n();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const copyVisible = ref(false);

const emit = defineEmits(['update:visible']);

const shareList = [
  {
    shareName: t('popup.look_share_popup.content_1'),
    shareImg: '/growth-center/people_share_1.webp',
    avatarImg: '/data-statistics/avatar1.webp',
    avatarName: t('popup.look_share_popup.avatar_name_1'),
  },
  {
    shareName: t('popup.look_share_popup.content_2'),
    shareImg: '/growth-center/people_share_2.webp',
    avatarImg: '/data-statistics/avatar2.webp',
    avatarName: t('popup.look_share_popup.avatar_name_2'),
  },
  {
    shareName: t('popup.look_share_popup.content_3'),
    shareImg: '/growth-center/people_share_3.webp',
    avatarImg: '/data-statistics/avatar3.webp',
    avatarName: t('popup.look_share_popup.avatar_name_3'),
  },
  {
    shareName: t('popup.look_share_popup.content_4'),
    shareImg: '/growth-center/people_share_4.webp',
    avatarImg: '/data-statistics/avatar4.webp',
    avatarName: t('popup.look_share_popup.avatar_name_4'),
  },
];

const copyToClipboard = () => {
  navigator?.clipboard?.writeText('wekooo.com');
  toast({
    message: t('copySuccess'),
  });
  emit('update:visible', false);
  copyVisible.value = true;
};
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
      @click="emit('update:visible', false)"
      class="fixed top-0 left-0 z-99 py-69 w-100vw h-100vh bg-#000000/60 duration-300 transition-all ease-in-out flex-center flex-col"
    >
      <div
        @click.stop
        class="w-358 h-full rounded-20 bg-#FFF flex items-center flex-col py-18 relative overflow-x-hidden overflow-y-auto"
      >
        <div class="text-16 lh-22 font-500">
          {{ $t('popup.look_share_popup.title') }}
        </div>

        <div class="mt-18 grid grid-cols-2 gap-18">
          <div
            v-for="item in shareList"
            :key="item.shareName"
            class="flex flex-col"
          >
            <div
              class="w-152 h-221 rounded-10 bg-$secondaryButton bg-cover bg-center"
              :style="{
                backgroundImage: `url(${item.shareImg})`,
              }"
            ></div>
            <div class="mt-4">
              <div class="text-12 lh-17 font-500">{{ item.shareName }}</div>
              <div class="flex items-center mt-6 gap-4">
                <div
                  class="w-24 h-24 rounded-50% bg-$secondaryButton bg-cover bg-center"
                  :style="{
                    backgroundImage: `url(${item.avatarImg})`,
                  }"
                ></div>
                <div class="text-10 lh-14 text-$tertiaryText">
                  {{ item.avatarName }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-18 w-322 min-h-44 max-h-44 bg-$positive rounded-47 flex-center text-#FFF"
          @click="copyToClipboard()"
        >
          {{ $t('popup.look_share_popup.copy_password') }}
        </div>

        <div
          @click="emit('update:visible', false)"
          class="i-tabler:x w-22 h-22 flex-center absolute top-18 right-18 text-$tertiaryText"
        ></div>
      </div>
    </div>
  </transition>

  <shareFriendPopup
    :visible="copyVisible"
    @update:visible="copyVisible = $event"
  ></shareFriendPopup>
</template>

<style scoped lang="scss"></style>
