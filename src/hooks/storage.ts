// 每天午夜清除存储
export const clearStorageAtMidnight = (storage: string) => {
  // 计算距离午夜的剩余时间
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0); // 设置为午夜
  const timeUntilMidnight = midnight.getTime() - now.getTime();

  // 设置一个定时器在午夜时清除 localStorage
  setTimeout(() => {
    localStorage.removeItem(storage);
    // 可选地，设置一个间隔每24小时重复此操作
    // setInterval(
    // () => {
    // localStorage.removeItem(
    // 'CREATOR_RECRUITMENT_PROGRAM_WITHDRAWAL_DATA',
    // );
    // },
    // 24 * 60 * 60 * 1000,
    // );
  }, timeUntilMidnight);
};
