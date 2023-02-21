export const hasTouch = 'ontouchstart' in document;
export const isApple = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
export const isAndroid = /(Android)/i.test(navigator.platform);
export const isIpad = navigator.userAgent.match(/iPad/i);
export const isMobile = navigator.userAgent.match(
  /(iPad)|(iPhone)|(iPod)|(Android)|(BlackBerry)|(IEMobile)|(Windows Phone)|(kindle)|(Opera Mini)|(webOS)/i
);
export const isIeBrowser = navigator.userAgent.match(/MSIE/i);
