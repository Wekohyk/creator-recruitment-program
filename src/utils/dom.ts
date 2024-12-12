/**
 * dom相关
 */

import clientUtil from './client';
import { h, render, ComponentInternalInstance } from 'vue';

class DomUtil {
  // 禁止dom滚动
  noScroll(): number {
    let scrollTop;
    const documentRef: any = document;
    if (documentRef.scrollingElement.scrollTop) {
      scrollTop = documentRef.scrollingElement.scrollTop;
    } else {
      scrollTop = 0;
    }
    document.body.style.top = -scrollTop + 'px';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    return scrollTop;
  }

  // 还原dom高度
  overlayClick(scrollTop: number): void {
    document.body.style.overflow = 'auto';
    document.body.style.position = '';
    (document as any).scrollingElement.scrollTop = scrollTop;
    console.log('overlayClick');
  }

  // 键盘弹起事件
  keyboardTrigger(callback: any): void {
    const clientInfo = clientUtil.getInfo();
    const originalHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    function οnresize() {
      //键盘弹起与隐藏都会引起窗口的高度发生变化
      const resizeHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      callback(resizeHeight < originalHeight);
    }
    if (clientInfo.isIOS) {
      document.body.addEventListener('focusin', () => {
        callback(true);
      });
      document.body.addEventListener('focusout', () => {
        callback(false);
      });
    } else {
      window.addEventListener('resize', οnresize);
    }
  }
  // 返回顶部
  scrollToTop(): void {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(this.scrollToTop.bind(this));
      window.scrollTo(0, scrollTop - scrollTop / 4);
    }
  }

  anchor(scrollTo: number): void {
    window.scrollTo(0, scrollTo);
  }

  // 动态创建组件dom节点
  createComponentInstanceDom(
    component: any,
    symbolClassName: string,
  ): ComponentInternalInstance {
    const domDiv = document.createElement('div');
    domDiv.className = symbolClassName;
    const vnode = h(component);
    render(vnode, domDiv);
    document.body.appendChild(domDiv.firstElementChild as Element);
    return vnode.component as ComponentInternalInstance;
  }

  getNearEle(
    ele: Element,
    type: 'nextSibling' | 'previousSibling',
  ): Element | null {
    let nearEle: any = ele[type];
    while (nearEle) {
      if (nearEle.nodeType === 1) {
        return nearEle;
      }
      nearEle = nearEle[type];
      if (!nearEle) {
        break;
      }
    }
    return null;
  }
}

export default new DomUtil();
