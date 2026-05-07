document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.ui-item');

  // ── 桌面端：hover 跳转图片 ──────────────────────────────────
  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const targetId = item.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    });
  });

  // ── 移动端：点击导航项跳转 + 收起列表 ──────────────────────
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileNavList = document.getElementById('mobileNavList');

  if (mobileToggle && mobileNavList) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileNavList.hidden = isExpanded;
    });

    mobileNavList.addEventListener('click', (e) => {
      const item = e.target.closest('.ui-item');
      if (!item) return;
      const targetId = item.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileNavList.hidden = true;
    });
  }

  // ── 滚动时同步移动端 toggle 标签（不再做高亮）──────────────
  const allSlots = document.querySelectorAll('.img-slot');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && mobileToggle) {
          const id = entry.target.id;
          const matched = [...navItems].find(b => b.getAttribute('data-target') === id);
          if (matched) {
            const label = mobileToggle.querySelector('.mobile-nav__label');
            if (label) label.textContent = matched.textContent;
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  allSlots.forEach(slot => observer.observe(slot));
});
