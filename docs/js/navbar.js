// js/navbar.js
// We find the placeholder div and set its innerHTML directly.
// This approach works everywhere because it needs no network request —
// it's just JavaScript manipulating the page, which is always allowed.
document.getElementById('navbar-placeholder').innerHTML = `
  <header class="site-header">
    <div class="site-header-name">Joakim Vik Haukedal</div>
    <nav class="site-nav">
      <a href="index.html">Home</a>
      <a href="jvh_cv.html">My CV</a>
      <a href="projects.html">Projects</a>
      <a href="https://github.com/Jokkusmaximus" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </header>
`;
