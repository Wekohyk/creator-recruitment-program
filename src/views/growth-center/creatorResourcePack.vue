<script setup lang="ts">
import { getInviteNewUsers } from '@/api';
import { InviteNewUsers } from '@/types/user';
import { onMounted, ref } from 'vue';
import NewcomerResourceKit from '@/components/popup/NewcomerResourceKit.vue';
import discoverPagePopup from './discoverPagePopup.vue';
import lookSharePopup from '@/components/popup/lookSharePopup.vue';
import { MyWork } from '@/types/user';

const props = defineProps({
  workList: Array as () => MyWork[],
});

const inviteNewUsersList = ref<InviteNewUsers[]>([]);
const discoverVisible = ref<boolean>(false);
const creatorVisible = ref<boolean>(false);
const lookShareVisible = ref<boolean>(false);

onMounted(async () => {
  await getInviteNewUsers().then(res => {
    inviteNewUsersList.value = res;

    // Ensure the list has at least 10 items
    const placeholders = Array.from(
      { length: 10 - inviteNewUsersList.value.length },
      () => ({
        name: '',
        avatar: '',
      }),
    );
    inviteNewUsersList.value = [...inviteNewUsersList.value, ...placeholders];
  });
});

const openVisible = (item: InviteNewUsers) => {
  if (!item.name && !item.avatar) {
    return (lookShareVisible.value = true);
  }
  creatorVisible.value = true;
};
</script>

<template>
  <div
    class="mt-20 pt-12 px-12 pb-28 rounded-16 w-full aspect-358/595 bg-gradient-to-b from-[#FF387F] to-[#FF545E] flex flex-col"
  >
    <div class="flex items-center justify-center gap-8">
      <div class="flex items-center">
        <span
          class="w-36 h-2 bg-gradient-to-l from-[#FFF4DD] to-transparent"
        ></span>
        <span class="w-4 h-4 b-1.5 b-solid b-#FFF4DD rotate-[-135deg]"></span>
      </div>
      <div class="text-20 lh-24 font-900 text-#FFF4DD">
        {{ $t('growth_center.creator_resource_pack') }}
      </div>
      <div class="flex items-center">
        <span class="w-4 h-4 b-1.5 b-solid b-#FFF4DD rotate-[-135deg]"></span>
        <span
          class="w-36 h-2 bg-gradient-to-r from-[#FFF4DD] to-transparent"
        ></span>
      </div>
    </div>
    <div class="mt-2 text-12 lh-17 text-#FFF4DD text-center">
      {{ $t('growth_center.new_people_plan') }}
    </div>
    <div class="mt-8 flex flex-col gap-4">
      <!-- 上方内容 -->
      <div
        class="w-full aspect-334/149 bg-#FFF b-2 b-solid b-#FFB5BA rounded-18 flex flex-col justify-center px-20 relative"
      >
        <div class="flex items-center justify-between">
          <div class="flex flex-col items-center gap-10">
            <div
              class="w-196 h-74 rounded-16 shadow-[inset_0_0_5.3px_0_#ffffff] bg-center bg-cover flex items-center justify-between pl-8 pr-18"
              :style="{
                backgroundImage: `url(/red_packet_background.webp)`,
              }"
            >
              <div class="text-#FFF">
                <span class="text-16 lh-23 font-600">
                  {{ $t('growth_center.currency_symbol') }}
                </span>
                <span class="text-31 lh-43 font-600">30</span>
              </div>
              <div class="text-#FFF">
                <div class="text-18 lh-25 font-600">
                  {{ $t('growth_center.red_packet_content_1') }}
                </div>
                <div class="text-12 lh-17 opacity-80">
                  {{ $t('growth_center.red_packet_content_2') }}
                </div>
              </div>
            </div>
            <div class="text-12 lh-17 text-$tertiaryText">
              {{ $t('growth_center.cash_reward') }}
            </div>
          </div>

          <div
            class="flex flex-col items-center gap-10"
            @click="discoverVisible = true"
          >
            <div
              class="w-74 h-74 rounded-16 b-1 b-solid b-#F1F6FF bg-gradient-to-b from-[#F0F5FF] to-[#FFFFFF] flex-center relative"
            >
              <img
                src="/growth-center/light_bulb_red_packet.svg"
                alt=""
                class="w-30 h-40"
              />
              <div
                class="w-36 h-7.1 bg-#004BDD blur-17.6 absolute top-53 left-1/2 transform -translate-x-1/2"
              ></div>
            </div>
            <div class="text-12 lh-17 text-$tertiaryText flex items-center">
              <span>{{ $t('growth_center.page_up') }}</span>
              <span
                class="i-mingcute:question-fill w-12 h-12 text-#D9D9D9"
              ></span>
            </div>
          </div>
        </div>

        <div class="absolute bottom-13 left-13">
          <div class="relative flex flex-col items-center">
            <div
              class="w-9 h-9 rounded-50% bg-#FF556A opacity-50 shadow-[inset_0_4px_4px_0_#00000040] absolute top-0 left-0"
            ></div>
            <div
              class="w-3 h-26 rounded-4 bg-gradient-to-b from-[#FFC4A2_10%] via-[#FFFBF8_50%] to-[#FFC4A2_90%] absolute top-5 left-3 z-1"
            ></div>
            <div
              class="w-9 h-9 rounded-50% bg-#E33914 opacity-50 shadow-[inset_0_4px_4px_0_#00000040] absolute top-26 left-0"
            ></div>
          </div>
        </div>

        <div class="absolute bottom-13 right-23">
          <div class="relative flex flex-col items-center">
            <div
              class="w-9 h-9 rounded-50% bg-#FF556A opacity-50 shadow-[inset_0_4px_4px_0_#00000040] absolute top-0 left-0"
            ></div>
            <div
              class="w-3 h-26 rounded-4 bg-gradient-to-b from-[#FFC4A2_10%] via-[#FFFBF8_50%] to-[#FFC4A2_90%] absolute top-5 left-3 z-1"
            ></div>
            <div
              class="w-9 h-9 rounded-50% bg-#E33914 opacity-50 shadow-[inset_0_4px_4px_0_#00000040] absolute top-26 left-0"
            ></div>
          </div>
        </div>
      </div>

      <!-- 下方内容 -->
      <div
        class="w-full aspect-334/281 bg-gradient-to-b from-[rgba(142,0,0,0.2)] to-[rgba(142,0,0,0)] rounded-18 b-t-1 b-t-solid b-x-1 b-x-solid"
        style="
          border-image-source: linear-gradient(
            to bottom,
            rgba(142, 0, 0, 0.1),
            rgba(142, 0, 0, 0)
          );
        "
      >
        <div class="text-16 lh-22 font-600 text-center mt-16 text-#FFF">
          {{ $t('growth_center.new_user_resource_pack') }}
        </div>
        <div class="mt-18 w-full grid grid-cols-5 gap-15 px-12">
          <div
            @click="openVisible(item)"
            class="flex flex-col gap-4 items-center"
            v-for="item in inviteNewUsersList"
            :key="item.name"
          >
            <div
              :class="[
                'w-50 h-50 rounded-50% bg-center bg-cover flex-center',
                item.avatar ? '' : 'b-1 b-dashed b-#FFFFFF/70',
              ]"
              :style="{
                backgroundImage: `url(${item.avatar})`,
              }"
            >
              <span
                v-if="!item.avatar"
                class="i-mingcute:add-line w-21 h-21 text-#FFF"
              ></span>
            </div>
            <div class="text-10 lh-14 h-14 text-$cardBackground">
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- 按钮 -->
        <div @click="creatorVisible = true" class="mt-28 w-full h-46 px-7">
          <div
            class="w-full h-full flex-center gap-5 bg-gradient-to-r from-[#FFF1BF] to-[#FFCD83] rounded-28 text-16 lh-22 font-500 text-#C51818"
          >
            {{ $t('growth_center.invite_friends_support') }}
          </div>
        </div>
      </div>

      <!-- 分享过程 -->
      <div class="flex flex-col px-13 mt-26">
        <div class="flex items-center justify-evenly">
          <div class="w-36 h-36 rounded-50% bg-#5D0000/15 flex-center">
            <span
              class="i-icon-park-solid:share-two w-20 h-18 bg-gradient-to-b from-[#FFE7BA] to-[#FFC296]"
            ></span>
          </div>
          <span class="i-uiw:right text-#FFE0D3 w-16 h-16"></span>
          <div class="w-36 h-36 rounded-50% bg-#5D0000/15 flex-center">
            <span
              class="i-iconamoon:cloud-download-fill w-25 h-23 bg-gradient-to-b from-[#FFE7BA] to-[#FFC296]"
            ></span>
          </div>
          <span class="i-uiw:right text-#FFE0D3 w-16 h-16"></span>
          <div class="w-36 h-36 rounded-50% bg-#5D0000/15 flex-center">
            <img
              src="/growth-center/select_note.svg"
              alt=""
              class="w-16 h-18"
            />
          </div>
        </div>
        <div class="flex items-center justify-evenly mt-4 text-#FFF">
          <div class="text-11 lh-15 font-500">
            {{ $t('growth_center.share_friend') }}
          </div>
          <div
            class="text-11 lh-15 font-500 flex flex-col items-center transform translate-y-8"
          >
            <div>{{ $t('growth_center.friend_download_app') }}</div>
            <div class="opacity-60">
              {{ $t('growth_center.friend_new_user') }}
            </div>
          </div>
          <div class="text-11 lh-15 font-500">
            {{ $t('growth_center.com_invitation') }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <lookSharePopup
    :visible="lookShareVisible"
    @update:visible="lookShareVisible = $event"
  ></lookSharePopup>

  <discoverPagePopup
    :visible="discoverVisible"
    @update:visible="discoverVisible = $event"
    :workList="props.workList"
  ></discoverPagePopup>

  <NewcomerResourceKit
    openMethod
    :visible="creatorVisible"
    @update:visible="creatorVisible = $event"
  ></NewcomerResourceKit>
</template>

<style scoped lang="scss"></style>
