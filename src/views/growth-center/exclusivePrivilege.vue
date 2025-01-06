<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import discoverPagePopup from './discoverPagePopup.vue';
import { MyWork } from '@/types/user';
const { t } = useI18n();
const props = defineProps({
  totalHotValue: {
    type: Number || String,
    default: 0,
  },
  workList: Array as () => MyWork[],
});

const discoverVisible = ref<boolean>(false);
const showText = computed(() => {
  if (props.totalHotValue < 1000) {
    return t('growth_center.lv1_unlock');
  }
  return t('growth_center.unlocked');
});
const privilegesList = ref([
  {
    icon: '/growth-center/light_bulb.svg',
    title: t('growth_center.page_up'),
  },
  {
    icon: '/growth-center/starts.svg',
    title: t('growth_center.animation_widget'),
  },
  {
    icon: '/growth-center/gear.svg',
    title: t('growth_center.creation_tools'),
  },
  {
    icon: '/growth-center/notebook.svg',
    title: t('growth_center.creative_resources'),
  },
]);

const goDiscoverPage = (index: number) => {
  if (index === 0) {
    discoverVisible.value = true;
  }
};
</script>

<template>
  <div class="flex flex-col mt-20 px-10">
    <div class="text-16 lh-22 font-600">
      {{ $t('growth_center.exclusive_privilege') }}
    </div>
    <div class="mt-12 flex justify-between">
      <div
        class="flex flex-col items-center"
        v-for="(item, index) in privilegesList"
        :key="item.title"
      >
        <div
          @click="goDiscoverPage(index)"
          class="w-50 h-50 bg-#FFF/70 rounded-40 flex-center"
        >
          <img :src="item.icon" alt="" class="w-30 h-30" />
        </div>
        <div class="mt-8 text-12 lh-17">{{ item.title }}</div>
        <div
          :class="[
            'text-10 lh-14 flex items-center',
            props.totalHotValue > 1000 ? 'text-$tertiaryText' : 'text-$orange',
          ]"
        >
          <span
            v-if="props.totalHotValue < 1000"
            class="i-uis:lock w-8 h-10"
          ></span>
          <span>{{ showText }}</span>
        </div>
      </div>
    </div>
  </div>

  <discoverPagePopup
    :visible="discoverVisible"
    @update:visible="discoverVisible = $event"
    :workList="props.workList"
  ></discoverPagePopup>
</template>

<style scoped lang="scss"></style>
