<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
  <PageLayout background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('my_wallet.tax_payment.index') }}</div>
    </template>

    <div class="flex flex-col">
      <div
        class="w-full aspect-390/25 bg-$positive flex items-center px-16 gap-10 py-4"
      >
        <div class="i-carbon:warning-filled text-#FFF text-13"></div>
        <div class="text-12 text-#FFF">
          {{ $t('my_wallet.tax_payment.hint') }}
        </div>
      </div>

      <div class="w-full pt-20 pb-27 px-16 flex flex-col gap-20">
        <div class="flex flex-col">
          <div class="flex items-center gap-8">
            <div
              class="w-20 h-20 rounded-50% bg-#0A7AFF/20 flex-center text-$positive text-14 font-500"
            >
              1
            </div>
            <div class="text-16 lh-22 font-600">
              {{ $t('my_wallet.tax_payment.first_step') }}
            </div>
          </div>
          <div class="mt-8 w-full aspect-358/224 bg-#FFF rounded-16 p-16">
            <div class="text-14 lh-20 font-500">
              {{ $t('my_wallet.tax_payment.content_1') }}
            </div>
            <div
              class="mt-12 w-full aspect-326/140 rounded-12 overflow-hidden bg-center bg-cover"
              :style="{
                backgroundImage: `url(/my-wallet/first_step.webp)`,
              }"
            ></div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex items-center gap-8">
            <div
              class="w-20 h-20 rounded-50% bg-#0A7AFF/20 flex-center text-$positive text-14 font-500"
            >
              2
            </div>
            <div class="text-16 lh-22 font-600">
              {{ $t('my_wallet.tax_payment.second_step') }}
            </div>
          </div>
          <div class="mt-8 w-full aspect-358/72 bg-#FFF rounded-16 p-16">
            <div class="text-14 lh-20 font-500">
              {{ $t('my_wallet.tax_payment.content_2') }}
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex items-center gap-8">
            <div
              class="w-20 h-20 rounded-50% bg-#0A7AFF/20 flex-center text-$positive text-14 font-500"
            >
              3
            </div>
            <div class="text-16 lh-22 font-600">
              {{ $t('my_wallet.tax_payment.third_step') }}
            </div>
          </div>
          <div class="mt-8 w-full aspect-358/52 bg-#FFF rounded-16 p-16">
            <div class="text-14 lh-20 font-500">
              {{ $t('my_wallet.tax_payment.content_3') }}
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex items-center gap-8">
            <div
              class="w-20 h-20 rounded-50% bg-#0A7AFF/20 flex-center text-$positive text-14 font-500"
            >
              4
            </div>
            <div class="text-16 lh-22 font-600">
              {{ $t('my_wallet.tax_payment.fourth_step') }}
            </div>
          </div>
          <div class="mt-8 w-full aspect-358/246 bg-#FFF rounded-16 p-16">
            <div class="text-14 lh-20 font-500">
              {{ $t('my_wallet.tax_payment.content_4') }}
            </div>
            <div
              class="mt-12 w-full aspect-326/162 rounded-12 overflow-hidden bg-center bg-cover"
              :style="{
                backgroundImage: `url(/my-wallet/fourth_step.webp)`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
