/* =============================================
   OOP CONCEPTS PAGE — oop.js
   Toggle examples + active nav highlight
   ============================================= */

/* ---------- TOGGLE EXAMPLE BLOCKS ---------- */
function toggleExample(id, btn) {
  var block = document.getElementById(id);
  if (!block) return;

  var isOpen = block.classList.contains('open');

  if (isOpen) {
    block.classList.remove('open');
    btn.textContent = '+ Show Examples';
  } else {
    block.classList.add('open');
    btn.textContent = '− Hide Examples';
  }
}

/* ---------- ACTIVE NAV HIGHLIGHT ON SCROLL ---------- */
window.addEventListener('load', function () {
  var sections = document.querySelectorAll('.concept-section');
  var navItems = document.querySelectorAll('.concept-nav-item');

  if (!sections.length || !navItems.length) return;

  function setActive(id) {
    navItems.forEach(function (item) {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + id) {
        item.classList.add('active');
      }
    });
  }

  function onScroll() {
    var scrollY = window.scrollY;
    var windowH = window.innerHeight;
    var docH = document.documentElement.scrollHeight;

    // If near the bottom, activate the last section
    if (scrollY + windowH >= docH - 50) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    // Find which section's top is closest above the middle of the viewport
    var middle = scrollY + windowH * 0.4;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= middle) {
        current = section;
      }
    });

    setActive(current.id);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});