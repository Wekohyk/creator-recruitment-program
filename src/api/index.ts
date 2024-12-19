import request from '@/utils/request';
import { MyWork } from '@/types/user';

/**
 * 获取我的作品
 * @returns 作品列表
 */
export const getMyWork = async (): Promise<MyWork[]> => {
  return (await request.get('/my-work')).data;
};

/**
 * 获取作者信息
 * @returns 作者信息
 */
export const getAuthor = async (): Promise<any> => {
  return (await request.get('/author')).data;
};
