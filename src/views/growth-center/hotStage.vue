<script setup lang="ts">
import { type LevelIcon, type AuthorData } from '@/types/user';

const props = defineProps({
  levelIcon: Object as () => LevelIcon,
  authorList: Object as () => AuthorData,
});
</script>

<template>
  <div
    class="w-full h-183 bg-#FFF rounded-20 b-1 b-solid b-#E7E7E7 pt-12 py-16 px-20 flex flex-col justify-between"
  >
    <div class="flex justify-between">
      <div class="flex flex-col gap-1 justify-start items-start">
        <div class="text-$orange text-14 lh-13 font-500 flex items-center">
          <span class="i-tabler:flame-filled w-12 h-12"></span>
          <span class="ml-2">
            {{ $t('growth_center.hot_value') }}
          </span>
        </div>
        <div class="text-52 lh-73 font-600">
          {{ props.authorList?.totalHotValue }}
        </div>
      </div>
      <div class="flex flex-col gap-6 justify-start items-center">
        <div
          class="w-70 h-70 bg-cover bg-center"
          :style="{ backgroundImage: `url(${props.levelIcon?.img})` }"
        ></div>
        <div class="text-12 lh-17 text-$tertiaryText">
          {{ props.levelIcon?.title }}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div
        class="flex justify-between items-center text-10 lh-14 text-$quaternaryText"
      >
        <div class="">
          {{ props.levelIcon?.level }}
        </div>
        <div class="">{{ props.levelIcon?.upLevel }}</div>
      </div>

      <div class="w-full h-6 rounded-10 bg-#F2F2F7 overflow-hidden">
        <div
          class="rounded-10 h-full"
          :style="{
            width: props.levelIcon?.upgradeRequirements,
            height: '100%',
            background: 'var(--orange)',
          }"
        ></div>
      </div>

      <div
        class="flex justify-between items-center text-10 lh-14 text-$tertiaryText"
      >
        <div class="">
          {{
            $t('growth_center.have_need') +
            props.levelIcon?.needUpValue +
            $t('growth_center.hot_value_up')
          }}
        </div>
        <div class="flex items-center">
          <div class="text-10 lh-14 text-$tertiaryText">
            {{ $t('growth_center.next_stage') }}
          </div>
          <div class="w-10 h-12 ml-2 mr-1">
            <img src="/growth-center/red_envelope.svg" alt="" />
          </div>
          <div class="text-10 lh-14 font-600 text-#FF3868">
            {{ $t('growth_center.reward') + props.levelIcon?.extraBonus }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
