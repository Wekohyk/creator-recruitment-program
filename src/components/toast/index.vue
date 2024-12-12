<template>
  <transition name="gly-toast">
    <div class="gly-toast" v-show="toastConf.show">
      <div
        class="gly-toast-txt"
        :style="toastConf.style"
        :class="toastConf.className"
        v-html="toastConf.message"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { reactive } from 'vue';
interface GluToastType {
  show: boolean;
  message: string;
  duration: number;
  timer: number;
  className: string;
  style: string;
}
export default {
  setup() {
    const toastConf = reactive<GluToastType>({
      show: false,
      message: '',
      duration: 800,
      timer: 0,
      className: '',
      style: '',
    });

    return {
      toastConf,
    };
  },
};
</script>

<style lang="scss">
.gly-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  z-index: 9999;
  transition: opacity 0.3s linear;
  // 闪屏
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  &-txt {
    color: #fff;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
  }
}

/* 动画 */
.gly-toast-enter {
  opacity: 0;
}
.gly-toast-enter-active {
  transition: opacity 0.3s ease;
}
.gly-toast-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
