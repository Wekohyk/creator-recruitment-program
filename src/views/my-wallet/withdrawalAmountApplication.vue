<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 本次提款金额
const thisWithdrawalAmount = ref<string>('0');
// 可提现次数
const withdrawalTimes = ref<number>(0);
const WITHDRAWAL_DATA = 'CREATOR_RECRUITMENT_PROGRAM_WITHDRAWAL_DATA';

onMounted(() => {
  const withdrawalData = JSON.parse(
    localStorage.getItem(WITHDRAWAL_DATA) || '{}',
  );
  thisWithdrawalAmount.value = withdrawalData.thisWithdrawalAmount || '0';
  withdrawalTimes.value = withdrawalData.withdrawalTimes || 0;
});
</script>

<template>
  <PageLayout>
    <div class="w-full h-full px-20 pb-32 flex flex-col justify-between">
      <div class="flex flex-col gap-40">
        <div class="flex-center flex-col gap-12 mt-32">
          <div class="w-82 h-82 rounded-50% bg-#08D36A flex-center">
            <div class="i-healthicons:money-bag text-#FFF text-70"></div>
          </div>
          <div class="text-18 lh-25 font-600">
            {{ $t('my_wallet.withdrawal_application_successful.index') }}
          </div>
        </div>

        <div class="w-full flex flex-col gap-8">
          <div class="w-full px-22 flex items-center">
            <div
              class="flex-shrink-0 w-18 h-18 rounded-50% bg-#0A7AFF/10 flex-center"
            >
              <div class="w-9 h-9 rounded-50% bg-$positive"></div>
            </div>
            <div class="flex-grow h-3 bg-$positive"></div>
            <div
              class="flex-shrink-0 w-18 h-18 rounded-50% bg-#0A7AFF/10 flex-center"
            >
              <div class="w-9 h-9 rounded-50% bg-$positive"></div>
            </div>
            <div class="flex-grow h-3 bg-$quaternaryText"></div>
            <div
              class="flex-shrink-0 w-18 h-18 rounded-50% bg-#0A7AFF/10 flex-center"
            >
              <div class="w-9 h-9 rounded-50% bg-$quaternaryText"></div>
            </div>
          </div>

          <div class="mt-8 flex items-center justify-between">
            <div class="flex flex-col gap-2 text-center">
              <div class="text-14 lh-20 font-500">
                {{
                  $t(
                    'my_wallet.withdrawal_application_successful.publish_application',
                  )
                }}
              </div>
              <div class="text-12 lh-17 text-$quaternaryText">
                {{
                  $t(
                    'my_wallet.withdrawal_application_successful.publish_success',
                  )
                }}
              </div>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <div class="text-14 lh-20 font-500">
                {{
                  $t(
                    'my_wallet.withdrawal_application_successful.application_confirmation',
                  )
                }}
              </div>
              <div class="text-12 lh-17 text-$quaternaryText">
                {{
                  $t(
                    'my_wallet.withdrawal_application_successful.three_working_days',
                  )
                }}
              </div>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <div class="text-14 lh-20 font-500 text-$tertiaryText">
                {{
                  $t(
                    'my_wallet.withdrawal_application_successful.withdrawal_success',
                  )
                }}
              </div>
              <div class="text-12 lh-17 text-$quaternaryText">
                {{
                  $t(
                    'my_wallet.withdrawal_application_successful.we_chat_balance',
                  )
                }}
              </div>
            </div>
          </div>
        </div>

        <div class="text-14 lh-20 text-$tertiaryText flex flex-col gap-8">
          <div class="flex items-center justify-between">
            <div>
              {{
                $t(
                  'my_wallet.withdrawal_application_successful.withdrawal_amount',
                )
              }}
            </div>
            <div>
              {{
                $t('money_symbol') +
                ' ' +
                Number(thisWithdrawalAmount).toFixed(2)
              }}
            </div>
          </div>
          <div class="w-full h-1 bg-#F2F2F7"></div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div>
                {{
                  $t('my_wallet.withdrawal_application_successful.payout_tax')
                }}
              </div>
              <div class="i-mingcute:question-fill"></div>
            </div>
            <div>
              {{
                $t('money_symbol') +
                ' ' +
                (Number(thisWithdrawalAmount) * 0.2).toFixed(2)
              }}
            </div>
          </div>
          <div class="w-full h-1 bg-#F2F2F7"></div>
          <div class="flex items-center justify-between">
            <div>
              {{
                $t('my_wallet.withdrawal_application_successful.actual_arrival')
              }}
            </div>
            <div class="text-$primaryText font-600">
              {{
                $t('money_symbol') +
                ' ' +
                (Number(thisWithdrawalAmount) * 0.8).toFixed(2)
              }}
            </div>
          </div>
        </div>

        <div
          class="w-full bg-$tertiaryBackground rounded-10 p-12 text-12 lh-17 text-$tertiaryText"
        >
          {{
            $t('my_wallet.withdrawal_application_successful.tax_regulations')
          }}
        </div>
      </div>

      <div class="flex flex-col items-center px-10">
        <div class="text-12 lh-17 text-$quaternaryText">
          {{
            $t('my_wallet.keyboard.today_remaining') +
            (5 - withdrawalTimes) +
            '/5' +
            $t('my_wallet.keyboard.times')
          }}
        </div>
        <div
          class="w-full h-46 rounded-46 text-#FFF bg-$positive text-16 lh-22 font-600 mt-7 flex-center"
          @click="router.push('/my-wallet')"
        >
          {{ $t('popup.confirmation_box.confirm') }}
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
