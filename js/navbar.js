/* =============================================
   CPG3 OOP GUIDE — navbar.js
   Purpose:
   - Inject shared sidebar and top navigation bar
   - Ensure consistent layout across all pages
   - Add footer with project credits
   Usage:
   - Include <div id="navbar-root"></div> and
     <div id="footer-root"></div> in each HTML file
   - Add <script src="../js/navbar.js"></script>
   ============================================= */

(function () {

  /* ------------------------------------------
     Detect active page based on current filename
     Used to highlight the correct sidebar link
  ------------------------------------------ */
  var page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return page === href ? 'active' : '';
  }

  /* ------------------------------------------
     Build shared HTML for sidebar + topnav
     Includes:
     - Sidebar overlay
     - Sidebar with navigation links
     - Top navigation bar with brand + dark mode toggle
  ------------------------------------------ */
  var html = `
    <!-- SIDEBAR OVERLAY -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- SIDEBAR -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <img src="../assets/logoLight.png" alt="OOP Guide Logo" class="nav-logo" id="sidebarLogo">
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
        <a href="codeprediction.html" class="sidebar-link ${isActive('codeprediction.html')}">
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
          <img src="../assets/logoLight.png" alt="OOP Guide Logo" class="nav-logo" id="topnavLogo">
          <span class="brand-text">The Guide to Object Oriented Programming</span>
        </a>
      </div>
      <div class="topnav-links"></div>
      <button class="toggle-track" id="darkmodeToggle" onclick="toggleDarkMode()" aria-label="Toggle dark mode">
        <span class="toggle-knob"></span>
      </button>
    </nav>
  `;

  /* ------------------------------------------
     Inject navbar into #navbar-root
  ------------------------------------------ */
  var root = document.getElementById('navbar-root');
  if (root) {
    root.innerHTML = html;
  }

  /* ------------------------------------------
     Build and inject footer into #footer-root
     Includes:
     - Logo
     - Credits
     - Statement of authorship
  ------------------------------------------ */
  var footerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <span class="footer-logo">
          <img src="../assets/logoLight.png" alt="OOP Guide Logo" class="nav-logo"> OOP Guide
        </span>
        <span class="footer-credit">No AI tools were used in proposing, designing, coding, or documenting this project.</span>
        <span class="footer-credit">LBYCPG3 | Batiller, Reantaso, Santos, Senario</span>
      </div>
    </footer>
  `;

  var footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.innerHTML = footerHTML;
  }

})();
