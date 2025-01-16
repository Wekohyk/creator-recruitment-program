import request from '@/utils/request';
import { AuthorData, InviteNewUsers, MyWork, NoticeList } from '@/types/user';
import { ReviewList } from '@/types/review';
import { CreatorHotTrend } from '@/types/creator';

/**
 * 获取当前用户的作品
 * @returns 当前用户的作品
 */
export const getMyWork = async (): Promise<MyWork[]> => {
  // 从服务器获取当前用户的作品
  const response = await request.get('/my-work');
  // 返回作品
  return response.data;
};

/**
 * 获取作者信息
 * @returns 作者信息
 */
export const getAuthor = async (): Promise<AuthorData> => {
  // 从服务器获取作者信息
  const response = await request.get('/author');
  // 返回作者信息
  return response.data;
};

/**
 * 获取创作者热榜
 * @returns 创作者热榜
 */
export const getCreatorHotTrend = async (): Promise<CreatorHotTrend> => {
  const response = await request.get('/creator-hot-trend');
  return response.data;
};

/**
 * 获取通知列表
 * @returns 通知列表
 */
export const getNotice = async (): Promise<NoticeList[]> => {
  // 从服务器获取通知列表
  const response = await request.get('/notice');
  // 返回通知列表
  return response.data;
};

/**
 * 获取审核信息
 * @returns 审核信息
 */
export const getReview = async (): Promise<ReviewList[]> => {
  // 从服务器获取审核信息
  const response = await request.get('/review-information');
  // 返回审核信息
  return response.data;
};

export const getInviteNewUsers = async (): Promise<InviteNewUsers[]> => {
  // 从服务器获取邀请新用户的信息
  const response = await request.get('/invite-new-users');
  // 返回邀请新用户的信息
  return response.data;
};

// 获取钱包信息
export const getWallet = async () => {
  const response = await request.get('/wallet');
  return response.data;
};
