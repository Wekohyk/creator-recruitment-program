<script setup lang="ts">
import toast from '@/components/toast';
import key from './key.vue';
import { $t } from '@/lang';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { calculateTimeToMidnight } from '@/hooks';

const props = defineProps<{
  visible: boolean;
  moneyContent: number;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
}>();

const inputRef = ref<HTMLInputElement>();
// 提款金额
const withdrawalAmount = ref<string>('0.0');
// 是否可以提款
const withdrawalAmountExcessive = ref<boolean>(false);
// 本次提款金额
const thisWithdrawalAmount = ref<string>('0.0');
// 可提现次数
const withdrawalTimes = ref<number>(0);

// 点击键盘
const clickKey = (number: string) => {
  if (withdrawalAmount.value === '0.0') {
    withdrawalAmount.value = number;
  } else {
    withdrawalAmount.value += number;
  }
};

// 回退按钮
const rollBack = () => {
  if (withdrawalAmount.value === '0.0') return;
  withdrawalAmount.value = withdrawalAmount.value.slice(0, -1);
  if (+withdrawalAmount.value < 500) {
    withdrawalAmountExcessive.value = false;
  }
};

// 提款
const withdrawal = () => {
  if (withdrawalTimes.value >= 5) {
    toast({ message: $t('my_wallet.keyboard.today_no_times') });
    return;
  }
  thisWithdrawalAmount.value = String(
    Number(thisWithdrawalAmount.value) + Number(withdrawalAmount.value),
  );
  withdrawalAmount.value = '0.0';
  withdrawalAmountExcessive.value = false;
  withdrawalTimes.value++;
};

// 全部提款
const allWithdrawal = () => {
  withdrawalAmount.value =
    props.moneyContent - Number(thisWithdrawalAmount.value) > 500
      ? '500'
      : String(props.moneyContent - Number(thisWithdrawalAmount.value));
};

// 处理提现金额发生变化
watch(
  () => withdrawalAmount.value,
  () => {
    if (!withdrawalAmount.value) {
      withdrawalAmount.value = '0.0';
    }
    // 剩余提款金额
    const remainingWithdrawalAmount =
      props.moneyContent - Number(thisWithdrawalAmount.value);
    if (+withdrawalAmount.value > 500) {
      toast({ message: $t('my_wallet.keyboard.exceed_withdrawal_500') });
      withdrawalAmount.value = '500';
      withdrawalAmountExcessive.value = true;
      return;
    }
    if (+withdrawalAmount.value > remainingWithdrawalAmount) {
      toast({
        message:
          $t('my_wallet.keyboard.remaining_withdrawal') +
          $t('money_symbol') +
          (remainingWithdrawalAmount > 500 ? 500 : remainingWithdrawalAmount),
      });
      withdrawalAmount.value = String(remainingWithdrawalAmount);
      withdrawalAmountExcessive.value = true;
      return;
    }
  },
);

// 弹窗关闭时，清空提现金额
watch(
  () => props.visible,
  newVal => {
    if (!newVal) {
      withdrawalAmount.value = '0.0';
      withdrawalAmountExcessive.value = false;
    }
  },
);

// 到0点的倒计时
const countDown = ref<string>();
let intervalId: ReturnType<typeof setInterval>;
// 在组件挂载时启动倒计时
onMounted(() => {
  intervalId = setInterval(() => {
    countDown.value = calculateTimeToMidnight();
  }, 1000);
});

// 在组件卸载时清除倒计时
onUnmounted(() => {
  clearInterval(intervalId);
});

const keyboardList = [
  {
    number: '1',
    letter: '',
  },
  {
    number: '2',
    letter: 'ABC',
  },
  {
    number: '3',
    letter: 'DEF',
  },
  {
    number: '4',
    letter: 'GHI',
  },
  {
    number: '5',
    letter: 'JKL',
  },
  {
    number: '6',
    letter: 'MNO',
  },
  {
    number: '7',
    letter: 'PQRS',
  },
  {
    number: '8',
    letter: 'TUV',
  },
  {
    number: '9',
    letter: 'WXYZ',
  },
  {
    number: '',
    letter: '',
  },
  {
    number: '0',
    letter: '',
  },
];
</script>

<template>
  <transition
    enter-active-class="transition-transform duration-300"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-transform duration-300"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <div
      v-if="props.visible"
      class="fixed bottom-0 left-0 z-99 w-100vw h-100vh bg-#000000/60 flex items-end"
      @click="emit('update:visible', false)"
    >
      <div
        class="w-full flex flex-col rounded-t-20 overflow-hidden"
        @click.stop
      >
        <div class="w-full px-18 py-20 bg-#FFF flex flex-col gap-16">
          <div
            :class="[
              'flex-center gap-4 w-full py-4.5  rounded-6',
              withdrawalAmountExcessive
                ? 'text-$red bg-#FF3B30/10'
                : 'text-$positive bg-#0A7AFF/10',
            ]"
          >
            <div class="i-carbon:warning-filled text-13"></div>
            <div class="text-12">
              {{
                $t('my_wallet.keyboard.today_withdrawal') +
                $t('money_symbol') +
                thisWithdrawalAmount +
                '，' +
                $t('my_wallet.keyboard.remaining_withdrawal') +
                $t('money_symbol') +
                (props.moneyContent - Number(thisWithdrawalAmount) > 500
                  ? 500
                  : props.moneyContent - Number(thisWithdrawalAmount))
              }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-16 lh-22 font-500">
              {{ $t('my_wallet.keyboard.withdrawal_amount') }}
            </div>
            <div class="flex items-center gap-4">
              <div class="i-mingcute:wechat-fill text-22 text-#08D36A"></div>
              <div class="text-12 lh-17 font-500">
                {{ $t('my_wallet.keyboard.withdrawal_we_chat') }}
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-8">
            <div class="flex items-center justify-between">
              <div
                :class="[
                  'flex items-end gap-2 w-150',
                  withdrawalAmountExcessive ? 'text-$red' : 'text-$primaryText',
                ]"
              >
                <div class="text-20 lh-38 font-500">
                  {{ $t('money_symbol') }}
                </div>
                <input
                  ref="inputRef"
                  :class="[
                    'text-34 lh-48 font-500 pointer-events-none',
                    withdrawalAmountExcessive
                      ? 'text-$red'
                      : 'text-$primaryText',
                  ]"
                  type="number"
                  maxlength="3"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  :value="withdrawalAmount"
                />
              </div>

              <div class="flex flex-col items-end whitespace-nowrap">
                <div
                  class="text-12 lh-17 text-$positive"
                  @click="allWithdrawal"
                >
                  {{ $t('my_wallet.keyboard.all_withdrawal') }}
                </div>
                <div class="text-12 lh-17 text-$quaternaryText">
                  {{ $t('my_wallet.keyboard.exceed_withdrawal_500') }}
                </div>
              </div>
            </div>
            <div class="w-full h-1 bg-#F2F2F7"></div>
            <div class="text-12 lh-17 text-$tertiaryText">
              <span>{{ $t('my_wallet.keyboard.payout_tax') }}</span>
              <span class="font-600">
                {{ (+withdrawalAmount * 0.2).toFixed(2) }}
              </span>
            </div>

            <div class="flex flex-col items-center gap-4">
              <div
                @click="withdrawal"
                :class="[
                  'w-258 h-44 rounded-31 flex-center text-14 lh-20 font-500 m-auto',
                  withdrawalAmountExcessive || withdrawalTimes >= 5
                    ? 'bg-#F2F2F7 text-$quaternaryText pointer-events-none'
                    : 'bg-$positive text-#FFF',
                ]"
              >
                <div
                  v-if="withdrawalTimes >= 5"
                  class="flex items-center gap-4"
                >
                  <div>{{ $t('my_wallet.keyboard.remaining') }}</div>
                  <div class="text-18 font-500">{{ countDown }}</div>
                </div>
                <div v-else>
                  {{ $t('my_wallet.keyboard.withdrawal') }}
                </div>
              </div>
              <div
                :class="[
                  'text-12 lh-17',
                  withdrawalTimes >= 5 ? 'text-$red' : 'text-$tertiaryText',
                ]"
                v-if="withdrawalTimes"
              >
                {{
                  $t('my_wallet.keyboard.today_remaining') +
                  (5 - withdrawalTimes) +
                  '/5' +
                  $t('my_wallet.keyboard.times')
                }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full bg-#DEDEDE pt-6 px-6 pb-46 grid grid-cols-3 gap-x-4 gap-y-6"
        >
          <key
            @click="clickKey(item.number)"
            v-for="(item, index) in keyboardList"
            :key="item.number"
            :number="item.number"
            :letter="item.letter"
            :class="{ 'bg-transparent': index === 9 }"
          ></key>
          <div class="w-124 h-47 flex-center" @click="rollBack">
            <div class="i-mingcute:delete-back-line text-25"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
