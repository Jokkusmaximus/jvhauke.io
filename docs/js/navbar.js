// js/navbar.js
// We find the placeholder div and set its innerHTML directly.
// reads the absolute URL of navbar.js itself (which is always in /js/), strips one folder to get the site root, and uses that as an absolute base for all links. This works identically on file:// and any web server.
// Get the path of this script file, then find root relative to it
const scriptSrc = document.currentScript.src;
const scriptDir = scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));   // .../js
const rootDir = scriptDir.substring(0, scriptDir.lastIndexOf('/'));     // site root

const pagePath = window.location.href;
const root = rootDir + '/';

document.getElementById('navbar-placeholder').innerHTML = `
  <header class="site-header">
    <div class="site-header-name">Joakim Vik Haukedal</div>
    <nav class="site-nav">
      <a href="${root}index.html">Home</a>
      <a href="${root}jvh_cv.html">My CV</a>
      <a href="${root}projects.html">Projects</a>
      <a href="https://github.com/Jokkusmaximus" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </header>
`;