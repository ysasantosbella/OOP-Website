/* =============================================
   CPG3 OOP GUIDE — navbar.js
   Injects the shared sidebar + topnav into
   every page. Add <div id="navbar-root"></div>
   and <script src="../js/navbar.js"></script>
   to each HTML file.
   ============================================= */

(function () {

  /* ------------------------------------------
     Detect which page is active based on filename
  ------------------------------------------ */
  var page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return page === href ? 'active' : '';
  }

  /* ------------------------------------------
     Build the shared HTML
  ------------------------------------------ */
  var html = `
    <!-- SIDEBAR OVERLAY -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- SIDEBAR -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <img src="../assets/logoDark.png" alt="OOP Guide Logo" class="nav-logo" id="sidebarLogo">
          <span class="sidebar-logo-text">OOP Guide</span>
        </div>
        <button class="sidebar-close" id="sidebarClose" aria-label="Close sidebar">✕</button>
      </div>
      <nav class="sidebar-nav">
        <a href="index.html" class="sidebar-link ${isActive('index.html')}">
          <img src="assets/home.png" alt="" class="sidebar-link-icon"> Home
        </a>
        <a href="oop.html" class="sidebar-link ${isActive('oop.html')}">
          <img src="assets/explore.png" alt="" class="sidebar-link-icon"> OOP Concepts
        </a>
        <a href="quiz.html" class="sidebar-link ${isActive('quiz.html')}">
          <img src="assets/practiceQuiz.png" alt="" class="sidebar-link-icon"> Practice Quiz
        </a>
        <a href="dragdrop.html" class="sidebar-link ${isActive('dragdrop.html')}">
          <img src="assets/codeBuilder.png" alt="" class="sidebar-link-icon"> Code Builder
        </a>
        <a href="codepredict.html" class="sidebar-link ${isActive('codepredict.html')}">
          <img src="assets/codePrediction.png" alt="" class="sidebar-link-icon"> Code Prediction
        </a>
      </nav>
      <div class="sidebar-footer">
        <p>LBYCPG3</p>
        <p>Batiller · Reantaso · Santos · Senario</p>
      </div>
    </aside>

    <!-- TOP NAVBAR -->
    <nav class="topnav" id="topnav">
      <div class="topnav-left">
        <button class="hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <a href="index.html" class="topnav-brand">
          <img src="../assets/logoDark.png" alt="OOP Guide Logo" class="nav-logo" id="topnavLogo">
          <span class="brand-text">The Guide to Object Oriented Programming</span>
        </a>
      </div>
      <div class="topnav-links"></div>
      <button class="toggle-track" id="darkmodeToggle" onclick="toggleDarkMode()" aria-label="Toggle dark mode">
        <span class="icon-sun">☀️</span>
        <span class="icon-moon">🌙</span>
        <span class="toggle-knob"></span>
      </button>
    </nav>
  `;

  /* ------------------------------------------
     Inject into #navbar-root
  ------------------------------------------ */
  var root = document.getElementById('navbar-root');
  if (root) {
    root.innerHTML = html;
  }

})();