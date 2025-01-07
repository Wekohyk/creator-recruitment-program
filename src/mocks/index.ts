import { createServer, Model } from 'miragejs';
import { myWorksRandom } from './modules/my-work';
import { authorMirage } from './modules/author';
import { noticeRandom } from './modules/notice';
import { reviewRandom } from './modules/review-information';
import { getRandomNumber } from '@/hooks';
import { reviewFeedback } from './modules/review-feedback';
import { inviteNewUsers } from './modules/invite-new-users';
import { creatorMirage } from './modules/creatorData';
import { myWallet } from './modules/wallet';

// create mock server
createServer({
  models: {
    my_works: Model,
  },

  seeds(server) {
    // Create 10 records with individually generated random data
    for (let i = 0; i < 10; i++) {
      server.create('my_work', myWorksRandom() as any);
    }
  },

  routes() {
    this.namespace = 'mock';

    // handle GET 我的作品
    this.get('/my-work', () => {
      const data = Array.from({ length: 10 }, () => {
        const myWork = myWorksRandom();
        const notice = Array.from({ length: getRandomNumber(0, 20) }, () =>
          noticeRandom(),
        );
        const creator = creatorMirage();
        return {
          ...myWork,
          notice,
          creator,
        };
      });
      return data;
    });

    // handle GET 作者信息
    this.get('/author', async () => {
      const data = await authorMirage();
      const moneyData = await myWallet();
      return { ...data, moneyData };
    });

    // handle GET 通知信息
    this.get('/notice', () => {
      const data = Array.from({ length: getRandomNumber(0, 20) }, () =>
        noticeRandom(),
      );
      return data;
    });

    // handle GET 审核信息
    this.get('/review-information', () => {
      const data = Array.from(
        { length: getRandomNumber(0, 15) },
        (_, index) => {
          const res = reviewRandom();
          const rejectData = reviewFeedback();
          res.widgetId = 0 + index;
          return {
            ...res,
            rejectData,
          };
        },
      );
      return data;
    });

    // handle GET 邀请新用户
    this.get('/invite-new-users', () => {
      const data = Array.from({ length: getRandomNumber(0, 10) }, () =>
        inviteNewUsers(),
      );
      return data;
    });
  },
});
