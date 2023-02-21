import { header, sidebar, footer, cookieBanner } from './components';

const document = window.document;

document.addEventListener('DOMContentLoaded', () => {
  (function () {
    header.init();
    sidebar.init();
    footer.init();

    cookieBanner.init();

    document.body.classList.remove('u-scroll-lock');
  })();
});
