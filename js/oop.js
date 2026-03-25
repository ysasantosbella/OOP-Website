/* =============================================
   OOP CONCEPTS PAGE — oop.js
   Features:
   - Toggle example blocks (show/hide)
   - Highlight active navigation item on scroll
   ============================================= */

/* ---------- TOGGLE EXAMPLE BLOCKS ---------- */
/**
 * Toggles visibility of an example block and updates button text
 * @param {string} id - ID of the example block element
 * @param {HTMLElement} btn - Button element that triggered the toggle
 */
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

  /**
   * Sets the active navigation item based on section ID
   * @param {string} id - Section ID to highlight
   */
  function setActive(id) {
    navItems.forEach(function (item) {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + id) {
        item.classList.add('active');
      }
    });
  }

  /**
   * Determines which section is currently in view
   * and updates the active nav item accordingly
   */
  function onScroll() {
    var scrollY = window.scrollY;
    var windowH = window.innerHeight;
    var docH = document.documentElement.scrollHeight;

    // If near the bottom, activate the last section
    if (scrollY + windowH >= docH - 50) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    // Find section closest above the middle of the viewport
    var middle = scrollY + windowH * 0.4;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= middle) {
        current = section;
      }
    });

    setActive(current.id);
  }

  // Attach scroll listener and run once on load
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
