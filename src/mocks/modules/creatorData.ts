import { getRandomNumber } from '@/hooks';
import { fakerZH_CN as faker } from '@faker-js/faker';

export const creatorMirage = () => {
  const creatorName = faker.person.fullName();
  const creatorAvatar = `/data-statistics/avatar${getRandomNumber(0, 5)}.webp`;

  return { creatorName, creatorAvatar };
};
