import { createServer, Model } from 'miragejs';
import { getMyWork } from '@/api/index';
import { ref } from 'vue';

const totalWorksUsage = ref(0);
const totalHotValue = ref(0);
const everyTotalWorks = ref(0);
const everyHotValue = ref(0);
const authorMirage = async () => {
  await getMyWork().then(res => {
    res.forEach(item => {
      totalWorksUsage.value += Number(item.useCount);
      totalHotValue.value += Number(item.hotValue);
      everyTotalWorks.value += Number(item.todayUseCount);
      everyHotValue.value += Number(item.todayHotValue);
    });
  });
  return {
    totalWorksUsage: totalWorksUsage.value,
    totalHotValue: totalHotValue.value,
    everyTotalWorks: everyTotalWorks.value,
    everyHotValue: everyHotValue.value,
  };
};

createServer({
  routes() {
    this.namespace = 'mock';

    this.get('/author', () => {
      const data = authorMirage();
      return data;
    });
  },
});
