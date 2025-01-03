import { getRandomNumber } from '@/hooks';

export const reviewFeedback = () => {
  // 审核未通过原因
  const rejectContent = [
    '小号组件文案展示不全，建议优化',
    '您的组件过于简单，请优化',
    '您的组件背景存在问题，请删除或者更换背景',
  ];
  const rejectReason = rejectContent.slice(
    getRandomNumber(0, rejectContent.length - 1),
  );
  // 提交日期
  const submitTimeYear = getRandomNumber(2023, 2024);
  const submitTimeMonth = getRandomNumber(1, 12);
  const submitTimeMonthString =
    submitTimeMonth < 10 ? '0' + submitTimeMonth : String(submitTimeMonth);
  const submitTimeDay = getRandomNumber(1, 30);
  const submitTimeDayString =
    submitTimeDay < 10 ? '0' + submitTimeDay : String(submitTimeDay);
  const submitTime =
    submitTimeYear + '.' + submitTimeMonthString + '.' + submitTimeDayString;
  // 拒绝图片
  const rejectImg = `/review-feedback/reject_img_${getRandomNumber(1, 2)}.webp`;

  return {
    submitTime,
    rejectReason,
    rejectImg,
  };
};
