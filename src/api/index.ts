import request from '@/utils/request';
import { AuthorData, InviteNewUsers, MyWork, NoticeList } from '@/types/user';
import { ReviewList } from '@/types/review';

/**
 * Get the works of the current user
 * @returns The works of the current user
 */
export const getMyWork = async (): Promise<MyWork[]> => {
  // Get the works of the current user from the server
  const response = await request.get('/my-work');
  // Return the works
  return response.data;
};

/**
 * Get the author information
 * @returns The author information
 */
export const getAuthor = async (): Promise<AuthorData> => {
  // Get the author information from the server
  const response = await request.get('/author');
  // Return the author information
  return response.data;
};

/**
 * Get the notice list
 * @returns The notice list
 */
export const getNotice = async (): Promise<NoticeList[]> => {
  // Get the notice list from the server
  const response = await request.get('/notice');
  // Return the notice list
  return response.data;
};

/**
 * Get the review information
 * @returns The review information
 */
export const getReview = async (): Promise<ReviewList[]> => {
  // Get the review information from the server
  const response = await request.get('/review-information');
  // Return the review information
  return response.data;
};

export const getInviteNewUsers = async (): Promise<InviteNewUsers[]> => {
  // Get the invite new users from the server
  const response = await request.get('/invite-new-users');
  // Return the invite new users
  return response.data;
};

// 获取钱包
export const getWallet = async () => {
  const response = await request.get('/wallet');
  return response.data;
};
