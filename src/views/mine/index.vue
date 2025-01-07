<script setup lang="ts">
import { getAuthor } from '@/api';
import PageLayout from '@/components/PageLayout.vue';
import levelDescriptionPopup from './levelDescriptionPopup.vue';
import myWork from './myWork.vue';
import { type AuthorData } from '@/types/user';
import { onMounted, ref } from 'vue';

const authorData = ref<AuthorData>({});

const levelVisible = ref(false);

onMounted(async () => {
  await getAuthor().then(res => {
    authorData.value = res;
  });
});
</script>

<template>
  <PageLayout hideBack background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('mine.index') }}</div>
    </template>
    <div class="flex flex-col px-16 pt-16 adapt-pb-84">
      <!-- 用户头部信息 -->
      <div class="flex justify-between items-center">
        <div class="flex">
          <div
            class="w-64 h-64 rounded-50% bg-cover bg-center"
            :style="{
              backgroundImage: `url(${authorData.creatorAvatar})`,
            }"
          ></div>
          <div class="flex flex-col ml-12">
            <div class="flex items-center gap-4">
              <div class="text-18 lh-22 font-500">
                {{ authorData.creatorName }}
              </div>
              <div class="i-f7:square-pencil w-15 h-15 relative bottom-1"></div>
            </div>
            <div class="flex items-center gap-2 mt-3">
              <div
                v-if="!authorData.isRealNameAuthentication"
                class="i-emojione:exclamation-mark w-12 h-12 text-$orange"
              ></div>
              <div class="text-12 lh-17 font-600 text-$orange">
                {{
                  authorData.isRealNameAuthentication
                    ? $t('mine.real_name_authentication')
                    : $t('mine.un_real_name_authentication')
                }}
              </div>
            </div>
            <div
              @click="levelVisible = true"
              class="mt-4 w-52 h-18 bg-cover bg-center"
              :style="{
                backgroundImage: `url(${authorData.creatorLevelImg})`,
              }"
            ></div>
          </div>
        </div>
        <div class="w-20 h-20 rounded-50% flex-center bg-#E7E7E8">
          <span
            class="i-mingcute:right-fill w-16 h-16 text-$quaternaryText"
          ></span>
        </div>
      </div>

      <!-- 扫一扫 -->
      <div
        class="mt-24 px-16 w-full h-58 rounded-16 bg-$cardBackground flex items-center justify-between"
      >
        <div class="flex items-center gap-10">
          <div class="w-26 h-26 rounded-6 bg-$positive flex-center">
            <div class="i-tabler:line-scan text-#FFF w-22 h-22"></div>
          </div>
          <div class="text-15 lh-21">{{ $t('mine.scan') }}</div>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-15 lh-21 text-$quaternaryText">
            {{ $t('mine.login_squall') }}
          </div>
          <div
            class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"
          ></div>
        </div>
      </div>

      <!-- 成长中心 -->
      <div
        class="mt-16 px-16 w-full h-58 rounded-16 bg-$cardBackground flex items-center justify-between"
        @click="$router.push('/growth-center')"
      >
        <div class="flex items-center gap-10">
          <div class="w-26 h-26 rounded-6 bg-$orange flex-center">
            <div class="i-ph:medal-bold w-16 h-16 text-#FFF"></div>
          </div>
          <div>{{ $t('mine.growth_center') }}</div>
        </div>
        <div class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"></div>
      </div>

      <!-- 每日推送 & 我的钱包 & 关于我们 -->
      <div
        class="mt-16 w-full h-168 rounded-16 bg-$cardBackground p-16 flex flex-col gap-15"
      >
        <!-- 每日推送 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-10">
            <div class="w-26 h-26 rounded-6 bg-#07C160 flex-center">
              <div class="i-ic:round-email w-21 h-17 text-#FFF"></div>
            </div>
            <div class="text-15 lh-21">{{ $t('mine.daily_push') }}</div>
          </div>

          <div class="flex items-center gap-4">
            <div class="text-15 lh-21 text-$quaternaryText">
              {{ $t('mine.unsubscribed') }}
            </div>
            <div
              class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"
            ></div>
          </div>
        </div>

        <div class="w-[calc(100%-36px)] h-1 bg-$primaryDivider ml-36"></div>

        <!-- 我的钱包 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-10">
            <div
              class="w-26 h-26 rounded-6 bg-#07C160 flex-center text-#FFF text-18 lh-26"
            >
              {{ $t('money_symbol') }}
            </div>
            <div class="text-15 lh-21">{{ $t('mine.my_wallet') }}</div>
          </div>

          <div class="flex items-center gap-4">
            <div class="text-15 lh-21">
              {{
                $t('money_symbol') + (authorData.moneyData?.moneyContent ?? 0)
              }}
            </div>
            <div
              class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"
            ></div>
          </div>
        </div>

        <div class="w-[calc(100%-36px)] h-1 bg-$primaryDivider ml-36"></div>

        <!-- 关于我们 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-10">
            <div class="w-26 h-26 rounded-6 bg-$orange flex-center">
              <div
                class="i-material-symbols:priority-high-rounded w-20 h-20 text-#FFF transform rotate-180"
              ></div>
            </div>
            <div class="text-15 lh-21">{{ $t('mine.about_us') }}</div>
          </div>

          <div
            class="i-mingcute:right-fill text-$quaternaryText w-16 h-16"
          ></div>
        </div>
      </div>

      <!-- 我的作品 -->
      <myWork></myWork>
    </div>
  </PageLayout>

  <levelDescriptionPopup
    :level="authorData.creatorLeave"
    :visible="levelVisible"
    @update:visible="levelVisible = false"
  ></levelDescriptionPopup>
</template>

<style scoped lang="scss"></style>
