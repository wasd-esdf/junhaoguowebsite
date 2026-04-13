document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.ui-item');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const targetId = item.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop, 
          behavior: 'auto'
        });
      }
    });
  });
});


