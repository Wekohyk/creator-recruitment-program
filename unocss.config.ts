import { defineConfig, presetIcons, toEscapedSelector as e } from 'unocss';
import presetWind from '@unocss/preset-wind';
import presetRemToPx from './src/assets/uno/preset-rem-to-px';
import presetResolveRpx from './src/assets/uno/preset-resolve-rpx';
import transformerVariantGroup from '@unocss/transformer-variant-group';

const normalizeSize = (size: string) => {
  if (+size + '' === size) {
    return `${size}px`;
  }
  if (size.endsWith('rpx')) {
    return `${(100 * +size.replace('rpx', '')) / 390}vw`;
  }
  return size;
};

export default defineConfig({
  presets: [
    presetWind(),
    presetRemToPx({ baseFontSize: 4 }),
    presetResolveRpx(),
    presetIcons({
      /* options */
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      // 按需引入的图标
      collections: {},
    }),
  ],
  transformers: [transformerVariantGroup()],
  rules: [
    // 隐藏滚动条
    [
      /^scrollbar-hidden$/,
      () => {
        return `.scrollbar-hidden::-webkit-scrollbar { display: none; } `;
      },
    ],
    // flex居中
    [
      /^flex-center$/,
      () => {
        return `.flex-center { display: flex; justify-content: center; align-items: center; }`;
      },
    ],
    // 背景模糊
    [
      /^bg-blur-(\d+)$/, // 匹配 bg-blur-后面的数字
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d); // 规范化大小
        return `${selector} { backdrop-filter: blur(${size}); }`;
      },
    ],
    // 处理文本溢出并应用省略号
    [
      /^ellipsis-(\d+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        return `
          ${selector} {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${+d};
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
          }
        `;
      },
    ],
    [
      /^adapt-mb-(.+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            margin-bottom: calc(constant(safe-area-inset-bottom) + ${size});
            margin-bottom: calc(env(safe-area-inset-bottom) + ${size});
          }
      `;
      },
    ],
    [
      /^adapt-mt-(.+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            margin-top: calc(constant(safe-area-inset-top) + ${size});
            margin-top: calc(env(safe-area-inset-top) + ${size});
          }
        `;
      },
    ],
    [
      /^adapt-pb-(.+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            padding-bottom: calc(constant(safe-area-inset-bottom) + ${size});
            padding-bottom: calc(env(safe-area-inset-bottom) + ${size});
          }
        `;
      },
    ],
    [
      /^adapt-pt-(.+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            padding-top: calc(constant(safe-area-inset-top) + ${size});
            padding-top: calc(env(safe-area-inset-top) + ${size});
          }
        `;
      },
    ],
    [
      /^adapt-top-(.+)$/,
      ([, d], { rawSelector }) => {
        const negative = rawSelector.startsWith('-');
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            top: calc(constant(safe-area-inset-top) ${negative ? '-' : '+'} ${size});
            top: calc(env(safe-area-inset-top) ${negative ? '-' : '+'} ${size});
          }
        `;
      },
    ],
    [
      /^adapt-bottom-(.+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            bottom: calc(constant(safe-area-inset-bottom) + ${size});
            bottom: calc(env(safe-area-inset-bottom) + ${size});
          }
        `;
      },
    ],
    [
      /^adapt-h-(.+)$/,
      ([, d], { rawSelector }) => {
        const selector = e(rawSelector);
        const size = normalizeSize(d);
        return `
          ${selector} {
            height: calc(constant(safe-area-inset-bottom) + ${size});
            height: calc(env(safe-area-inset-bottom) + ${size});
          }
        `;
      },
    ],
  ],
});
