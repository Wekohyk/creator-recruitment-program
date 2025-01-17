import toast from '@/components/toast';
import { $t } from '@/lang';
import { WidgetType } from '@/types/user';

/**
 * Copy the given text to the clipboard.
 *
 * @param text The text to be copied
 * @returns A Promise that resolves to undefined
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    toast({ message: $t('copySuccess') });
  } catch (error) {
    toast({ message: $t('copyFail') });
  }
};

/**
 * Check if a number is positive or negative.
 *
 * @param number The number to be checked
 * @returns A boolean indicating whether the number is positive or negative
 * @throws An error if the number is null, undefined, or not a number
 */
export const isPositiveOrNegative = (number: number | string): boolean => {
  if (number === null || number === undefined) {
    throw new Error('number is null or undefined');
  }
  const num = Number(number);
  if (isNaN(num)) {
    throw new Error('number is not a number');
  }
  // Check if the number is positive
  if (num > 0) {
    return true;
  }
  // The number is negative
  return false;
};

/**
 * Get a random number between min and max.
 *
 * @param min The minimum number
 * @param max The maximum number
 * @returns A random number between min and max
 */
export const getRandomNumber = (min: number, max: number): number => {
  // Generate a random number between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const compareWidgetSize = (
  widgetType: WidgetType,
  width: string | number,
  height: string | number,
  rounded: string | number,
) => {
  if (widgetType === 'small') {
    return {
      width,
      height,
      rounded,
    };
  }
  if (widgetType === 'medium') {
    return {
      width,
      height,
      rounded,
    };
  }
  return {
    width,
    height,
    rounded,
  };
};

export const openTopWidget = () => {
  console.log('openTopWidget');
};

// 计算从当前时间到午夜的剩余时间
export const calculateTimeToMidnight = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0); // 设置为午夜0点
  const diff = midnight.getTime() - now.getTime();

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
