import request from '@/utils/request';
import { MyWork } from '@/types/user';

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
export const getAuthor = async (): Promise<any> => {
  // Get the author information from the server
  const response = await request.get('/author');
  // Return the author information
  return response.data;
};

/**
 * Get the notice list
 * @returns The notice list
 */
export const getNotice = async (): Promise<any> => {
  // Get the notice list from the server
  const response = await request.get('/notice');
  // Return the notice list
  return response.data;
};
