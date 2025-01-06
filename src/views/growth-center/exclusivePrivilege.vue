<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
  totalHotValue: {
    type: Number || String,
    default: 0,
  },
});

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
</script>

<template>
  <div class="flex flex-col mt-20 px-10">
    <div class="text-16 lh-22 font-600">
      {{ $t('growth_center.exclusive_privilege') }}
    </div>
    <div class="mt-12 flex justify-between">
      <div
        class="flex flex-col items-center"
        v-for="item in privilegesList"
        :key="item.title"
      >
        <div class="w-50 h-50 bg-#FFF/70 rounded-40 flex-center">
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
</template>

<style scoped lang="scss"></style>
