const sidebar = (() => {
  const openSidebar = () => {
    const button = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    button.addEventListener('click', () => {
      sidebar.classList.add('o-sidebar--active');
      document.body.classList.add('u-scroll-lock');
    });
  };

  const closeSidebar = () => {
    const button = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar');
    button.addEventListener('click', () => {
      document.body.classList.remove('u-scroll-lock');
      sidebar.classList.remove('o-sidebar--active');
    });
  };

  const init = () => {
    openSidebar();
    closeSidebar();
  };

  return {
    init,
  };
})();

export default sidebar;
