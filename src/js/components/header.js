const header = (() => {

  const headerElement = document.getElementById('header');
  let lastScrollTop = 0;

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > 200) {
        headerElement.classList.add('o-header--scrolled');
      } else {
        headerElement.classList.remove('o-header--scrolled');
      }

      if (st > lastScrollTop) {
        if (st > 100) {
          headerElement.classList.add('o-header--hide');
        }
      } else {
        headerElement.classList.remove('o-header--hide');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false)
  }

  const init = () => {
    stickyHeader();
  };

  return {
    init
  };
})();

export default header;
