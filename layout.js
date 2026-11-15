(function () {
  var page = document.body.getAttribute("data-page");
  var L = [["About","about"],["Projects","projects"],["Services","services"],["Team","team"],["Blog","blog"],["Contact","contact"]];
  var nav = '<header class="nav" id="nav"><a href="index.html" class="brand"><img src="assets/logo.png" alt="Mitrakar logo"><span>MITRAKAR</span></a><button class="burger" id="burger" aria-label="Menu">Menu</button><nav id="menu">' +
    L.map(function (x) { return '<a href="' + x[1] + '.html"' + (x[1] === page ? ' class="act"' : '') + '>' + x[0] + '</a>'; }).join("") + '</nav></header>';
  var foot = '<footer><div class="wrap fgrid"><div><img src="assets/logo.png" alt="" class="flogo"><h3>Designing the future of space.</h3></div>' +
    '<div><h4>Contact us</h4><p><a href="tel:+917071723383">+91 70717 23383</a></p><p>17/2 New Palasia,<br>Indore, Madhya Pradesh 452001</p><p><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Mitrakar+Architectural+Designers+17%2F2+New+Palasia+Indore">View on map</a></p></div>' +
    '<div><h4>Site map</h4><p><a href="about.html">About</a></p><p><a href="services.html">Services</a></p><p><a href="projects.html">Projects</a></p><p><a href="team.html">Team</a></p><p><a href="blog.html">Blog</a></p></div>' +
    '<div><h4>Projects</h4>' + D.PROJECTS.slice(0, 3).map(function (p) { return '<p><a href="project.html?p=' + p.s + '">' + p.n + '</a></p>'; }).join("") + '</div></div>' +
    '<p class="copy">© ' + new Date().getFullYear() + ' Mitrakar Architectural Designers · <a href="privacy-policy.html">Privacy</a> · <a href="cookie.html">Cookies</a> · <a href="terms-and-conditions.html">Terms</a></p></footer>';
  document.getElementById("hdr").innerHTML = nav;
  document.getElementById("ftr").innerHTML = foot;
  var n = document.getElementById("nav"), m = document.getElementById("menu");
  function sc() { n.classList.toggle("solid", window.scrollY > 40 || page !== "home"); }
  window.addEventListener("scroll", sc); sc();
  document.getElementById("burger").onclick = function () { m.classList.toggle("open"); };
})();
