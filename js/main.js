/* =============================================
   CPG3 OOP GUIDE — main.js
   Features:
   - Sidebar toggle (open/close with overlay)
   - Navbar shadow on scroll
   - Dark mode toggle with logo updates
   - Smooth scroll for hero button
   - Toggle explanation sections
   ============================================= */

/* ---------- SIDEBAR ---------- */
var sidebar      = document.getElementById('sidebar');
var overlay      = document.getElementById('sidebarOverlay');
var hamburger    = document.getElementById('hamburger');
var sidebarClose = document.getElementById('sidebarClose');

/**
 * Opens the sidebar and activates overlay
 */
function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

/**
 * Closes the sidebar and deactivates overlay
 */
function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

// Event listeners for sidebar toggle
if (hamburger)    hamburger.addEventListener('click', openSidebar);
if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
if (overlay)      overlay.addEventListener('click', closeSidebar);

// Close sidebar when pressing Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeSidebar();
});

/* ---------- NAVBAR SCROLL SHADOW ---------- */
var topnav = document.getElementById('topnav');

// Add shadow effect when scrolling down
window.addEventListener('scroll', function() {
  if (!topnav) return;
  if (window.scrollY > 10) {
    topnav.classList.add('scrolled');
  } else {
    topnav.classList.remove('scrolled');
  }
});

/* ---------- DARK MODE ---------- */
/**
 * Updates logo images depending on dark mode state
 * @param {boolean} isDark - true if dark mode is active
 */
function updateLogos(isDark) {
  var logos = document.querySelectorAll('.nav-logo');
  logos.forEach(function (logo) {
    logo.src = isDark ? 'assets/logoLight.png' : 'assets/logoDark.png';
  });
}

/**
 * Toggles dark mode on/off
 */
function toggleDarkMode() {
  var style  = document.getElementById('darkmode-style');
  var toggle = document.getElementById('darkmodeToggle');
  if (!style) return;

  var isDark = !style.disabled; // true if currently dark mode

  if (isDark) {
    // Disable dark mode
    style.disabled = true;
    if (toggle) toggle.classList.remove('dark');
    localStorage.setItem('darkmode', 'disabled');
    updateLogos(false);
  } else {
    // Enable dark mode
    style.disabled = false;
    if (toggle) toggle.classList.add('dark');
    localStorage.setItem('darkmode', 'enabled');
    updateLogos(true);
  }
}

// Apply saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
  var style  = document.getElementById('darkmode-style');
  var toggle = document.getElementById('darkmodeToggle');
  if (style) {
    var saved = localStorage.getItem('darkmode') === 'enabled';
    style.disabled = !saved;
    if (toggle && saved) toggle.classList.add('dark');
    updateLogos(saved);
  }
});

/* ---------- SMOOTH SCROLL (hero button) ---------- */
// Smoothly scroll to target section when hero button is clicked
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.querySelector('.hero-btn');
  if (btn) {
    btn.addEventListener('click', function(e) {
      var href = btn.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

/* ---------- TOGGLE EXPLANATION (oop.html) ---------- */
/**
 * Toggles visibility of explanation sections
 * @param {string} id - element ID to show/hide
 */
function toggleExplanation(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}
