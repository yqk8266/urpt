import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'throttle-debounce';

const isServer = typeof window === 'undefined';

/* istanbul ignore next */
const resizeHandler = function(entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    }
  }
};

/* istanbul ignore next */
export const addResizeListener = function(urpt, fn) {
  if (isServer) return;
  if (!urpt.__resizeListeners__) {
    urpt.__resizeListeners__ = [];
    urpt.__ro__ = new ResizeObserver(debounce(16, resizeHandler));
    urpt.__ro__.observe(urpt);
  }
  urpt.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
export const removeResizeListener = function(urpt, fn) {
  if (!urpt || !urpt.__resizeListeners__) return;
  urpt.__resizeListeners__.splice(urpt.__resizeListeners__.indexOf(fn), 1);
  if (!urpt.__resizeListeners__.length) {
    urpt.__ro__.disconnect();
  }
};
