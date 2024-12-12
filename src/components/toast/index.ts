import ToastComponent from './index.vue';
import domUtil from '@/utils/dom';

/**
 * toast提示
 */
const Toast = function () {
  const className = '__app-toast__';
  const vm: any = domUtil.createComponentInstanceDom(
    ToastComponent,
    className,
  ).proxy;

  return (opt = {}) => {
    clearTimeout(vm.toastConf.timer);
    Object.assign(vm.toastConf, opt);
    vm.toastConf.show = true;
    vm.toastConf.timer = setTimeout(() => {
      vm.toastConf.show = false;
      vm.toastConf.callback && vm.toastConf.callback();
    }, vm.toastConf.duration);
  };
};

export default Toast();
