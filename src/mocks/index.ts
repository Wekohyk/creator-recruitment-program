import { createServer, Model } from 'miragejs';
import { myWorksRandom } from './modules/my-work';
import { authorMirage } from './modules/author';
import { noticeRandom } from './modules/notice';
import { getRandomNumber } from '@/hooks';

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
        return {
          ...myWork,
          notice,
        };
      });
      return data;
    });

    // handle GET 作者信息
    this.get('/author', () => {
      const data = authorMirage();
      return data;
    });

    // handle GET 通知信息
    this.get('/notice', () => {
      const data = Array.from({ length: getRandomNumber(0, 20) }, () =>
        noticeRandom(),
      );
      return data;
    });
  },
});
