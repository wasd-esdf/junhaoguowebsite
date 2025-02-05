
const menuToggle = document.querySelector('.menu-toggle');
const overlayMenu = document.getElementById('overlayMenu');
const closeBtn = document.getElementById('closeBtn');

// 打开覆盖菜单
menuToggle.addEventListener('click', () => {
  overlayMenu.classList.add('show');
  document.body.style.overflow = 'hidden'; // 禁止滚动
});

// 关闭覆盖菜单
closeBtn.addEventListener('click', () => {
  overlayMenu.classList.remove('show');
  document.body.style.overflow = ''; // 恢复滚动
});

// 点击覆盖层外部时关闭菜单（可选）
overlayMenu.addEventListener('click', (event) => {
  if (event.target === overlayMenu) {
    overlayMenu.classList.remove('show');
  }
});
