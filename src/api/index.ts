import { MyWork } from '@/types/user';
import axios from 'axios';

/**
 * 获取我的作品
 * @returns 作品列表
 */
export const getMyWork = async (): Promise<MyWork[]> => {
  return (await axios.get('/mock/my-work')).data;
};
