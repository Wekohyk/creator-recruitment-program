<script setup lang="ts"></script>

<template>
  <div
    class="w-50 h-111 bg-#FFF shadow-[0px_0px_16px_0px_#00000014] rounded-12 flex flex-col gap-1 py-4"
  >
    <div
      class="w-50 h-50 flex-center flex-col items-center gap-1"
      @click="$router.push('/tax-payment')"
    >
      <div class="i-healthicons:i-certificate-paper-outline w-22 h-22"></div>
      <div class="text-8 lh-13">
        {{ $t('my_wallet.hint_card.tax_payment') }}
      </div>
    </div>
    <div class="w-46 h-1 rounded-1 bg-$secondaryButton"></div>

    <div class="w-50 h-50 flex-center flex-col items-center gap-1">
      <div class="i-hugeicons:customer-service-02 w-20 h-20"></div>
      <div class="text-8 lh-13">
        {{ $t('my_wallet.hint_card.online_service') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
