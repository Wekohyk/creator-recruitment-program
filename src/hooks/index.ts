import toast from '@/components/toast';
import { $t } from '@/lang';

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
