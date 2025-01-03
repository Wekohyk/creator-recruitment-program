import { getRandomNumber } from '@/hooks';
import { InviteNewUsers } from '@/types/user';

export const inviteNewUsersList: InviteNewUsers[] = [
  {
    name: '香蕉怪',
    avatar: '/data-statistics/avatar1.webp',
  },
  {
    name: '熊猫先人',
    avatar: '/data-statistics/avatar2.webp',
  },
  {
    name: '大嘴',
    avatar: '/data-statistics/avatar3.webp',
  },
  {
    name: 'Jack',
    avatar: '/data-statistics/avatar4.webp',
  },
  {
    name: 'Tom',
    avatar: '/data-statistics/avatar5.webp',
  },
];

export const inviteNewUsers = () => {
  const inviteNewUser =
    inviteNewUsersList[getRandomNumber(0, inviteNewUsersList.length - 1)];
  const { name: inviteNewUserName, avatar: inviteNewUserAvatar } =
    inviteNewUser;
  return {
    name: inviteNewUserName,
    avatar: inviteNewUserAvatar,
  };
};
