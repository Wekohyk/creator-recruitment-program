import { getRandomNumber } from '@/hooks';

export const myWallet = async () => {
  const moneyContent = getRandomNumber(0, 100);
  return {
    moneyContent,
  };
};
