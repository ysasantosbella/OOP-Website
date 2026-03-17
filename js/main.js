/* =============================================
   CPG3 OOP GUIDE — main.js
   Sidebar · Dark Mode · Scroll · Helpers
   ============================================= */

/* ---------- SIDEBAR ---------- */
var sidebar = document.getElementById('sidebar');
var overlay = document.getElementById('sidebarOverlay');
var hamburger = document.getElementById('hamburger');
var sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger)    hamburger.addEventListener('click', openSidebar);
if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
if (overlay)      overlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeSidebar();
});

/* ---------- NAVBAR SCROLL SHADOW ---------- */
var topnav = document.getElementById('topnav');

window.addEventListener('scroll', function() {
  if (!topnav) return;
  if (window.scrollY > 10) {
    topnav.classList.add('scrolled');
  } else {
    topnav.classList.remove('scrolled');
  }
});

/* ---------- DARK MODE ---------- */
function updateLogos(isDark) {
  var logos = document.querySelectorAll('.nav-logo');
  logos.forEach(function (logo) {
    logo.src = isDark ? 'assets/logoLight.png' : 'assets/logoDark.png';
  });
}

function toggleDarkMode() {
  var style  = document.getElementById('darkmode-style');
  var toggle = document.getElementById('darkmodeToggle');
  if (!style) return;

  var isDark = !style.disabled;   // currently dark → turn off

  if (isDark) {
    style.disabled = true;
    if (toggle) toggle.classList.remove('dark');
    localStorage.setItem('darkmode', 'disabled');
    updateLogos(false);
  } else {
    style.disabled = false;
    if (toggle) toggle.classList.add('dark');
    localStorage.setItem('darkmode', 'enabled');
    updateLogos(true);
  }
}

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
function toggleExplanation(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}