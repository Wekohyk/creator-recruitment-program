import { $t } from '@/lang';
import { getRandomNumber } from '@/hooks';

export const walletDetailList = [
  {
    icon: '/my-wallet/gift_package.svg',
    color: '#FF950026',
    title: $t('my_wallet.inter_growth_reward1'),
    money: '+5.00',
  },
  {
    icon: '/my-wallet/gift_package.svg',
    color: '#FF950026',
    title: $t('my_wallet.inter_growth_reward2'),
    money: '+25.00',
  },
  {
    icon: '/my-wallet/gift_package.svg',
    color: '#FF950026',
    title: $t('my_wallet.inter_growth_reward3'),
    money: '+300.00',
  },
  {
    icon: '/my-wallet/gift_package.svg',
    color: '#FF950026',
    title: $t('my_wallet.inter_growth_reward4'),
    money: '+1500.00',
  },
  {
    icon: '/my-wallet/gift_package.svg',
    color: '#FF950026',
    title: $t('my_wallet.inter_growth_reward5'),
    money: '+3000.00',
  },
  {
    icon: '/my-wallet/gift_package.svg',
    color: '#FF950026',
    title: $t('my_wallet.newcomer_resource_pack'),
    money: '+10.00',
  },
  {
    icon: '/my-wallet/withdrawal.svg',
    color: '#FF524826',
    title: $t('my_wallet.withdrawal'),
    money: '-40.00',
  },
  {
    icon: '/my-wallet/withdrawal_error.svg',
    color: '#45D84226',
    title: $t('my_wallet.withdrawal_error'),
    money: '+50.00',
  },
  {
    icon: '/my-wallet/every_settlement.svg',
    color: '#0A7AFF26',
    title: $t('my_wallet.everyday_settlement'),
    money: '+50.00',
  },
  {
    icon: '/my-wallet/personal_income_tax.svg',
    color: '#0A7AFF26',
    title: $t('my_wallet.personal_income_tax'),
    money: '-10.00',
  },
];

export const myWallet = async () => {
  const moneyContent = getRandomNumber(0, 1000);
  const totalWithdraw = getRandomNumber(0, 1000);

  const amountDetails = Array.from({ length: getRandomNumber(0, 10) }, () => {
    const walletDetail =
      walletDetailList[Math.floor(Math.random() * walletDetailList.length)];
    const {
      icon: walletDetailIcon,
      color: walletDetailColor,
      title: walletDetailTitle,
      money: walletDetailMoney,
    } = walletDetail;

    // 提交日期
    const submitTimeYear = getRandomNumber(2023, 2024);
    const submitTimeMonth = getRandomNumber(1, 12);
    const submitTimeMonthString =
      submitTimeMonth < 10 ? '0' + submitTimeMonth : String(submitTimeMonth);
    const submitTimeDay = getRandomNumber(1, 30);
    const submitTimeDayString =
      submitTimeDay < 10 ? '0' + submitTimeDay : String(submitTimeDay);
    const submitTimeHour = getRandomNumber(0, 23);
    const submitTimeHourString =
      submitTimeHour < 10 ? '0' + submitTimeHour : String(submitTimeHour);
    const submitTimeMinute = getRandomNumber(0, 59);
    const submitTimeMinuteString =
      submitTimeMinute < 10 ? '0' + submitTimeMinute : String(submitTimeMinute);
    const submitTime =
      submitTimeYear +
      $t('year') +
      submitTimeMonthString +
      $t('month') +
      submitTimeDayString +
      $t('day') +
      ' ' +
      submitTimeHourString +
      ':' +
      submitTimeMinuteString;

    return {
      walletDetailIcon,
      walletDetailColor,
      walletDetailTitle,
      walletDetailMoney,
      submitTime,
    };
  });

  // 根据 submit time 排序
  amountDetails.sort((a, b) => {
    const dateA = new Date(a.submitTime);
    const dateB = new Date(b.submitTime);
    return dateB.getTime() - dateA.getTime();
  });

  return {
    moneyContent,
    totalWithdraw,
    amountDetails,
  };
};
