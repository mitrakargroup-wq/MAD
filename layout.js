(function () {
  var page = document.body.getAttribute("data-page"), C = D.CFG;
  var top = [["About","about.html","about"],["Industries","industries.html","industries"],["Projects","projects.html","projects"],["Insights","insights.html","insights"],["Careers","careers.html","careers"],["Contact","contact.html","contact"]];
  var a = function (x) { return '<a href="' + x[1] + '"' + (x[2] === page ? ' aria-current="page"' : '') + '>' + x[0] + '</a>'; };
  var dd = '<div class="dd"><a href="expertise.html"' + (page === "expertise" || page === "service" || page === "bim" ? ' aria-current="page"' : '') + '>Our Expertise</a><button type="button" class="ddb" aria-label="Expertise menu" aria-expanded="false">▾</button><div class="sub">' +
    D.SERVICES.map(function (s) { return '<a href="' + s.u + '">' + s.t + '</a>'; }).join("") + '</div></div>';
  var nav = '<a class="skip" href="#main">Skip to content</a><header class="nav" id="nav"><a href="index.html" class="brand" aria-label="Mitrakar Architectural Designers home"><img src="' + LOGO + '" alt=""><span>MITRAKAR</span></a>' +
    '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false">Menu</button><nav id="menu" aria-label="Main">' + a(top[0]) + dd + top.slice(1, 5).map(a).join("") + '<a class="navcta" href="contact.html">Enquire</a></nav></header>';
  var foot = '<footer><div class="in fgrid"><div><img src="' + LOGO + '" alt="" class="flogo"><h3>We Visualise Your Dreams</h3><p class="fm">Mitrakar Architectural Designers<br>Established 2005</p></div>' +
    '<div><h4>Expertise</h4>' + D.SERVICES.map(function (s) { return '<p><a href="' + s.u + '">' + s.n + '</a></p>'; }).join("") + '</div>' +
    '<div><h4>Company</h4>' + [["About Us","about.html"],["Industries We Serve","industries.html"],["Our Projects","projects.html"],["Insights","insights.html"],["Careers","careers.html"],["Contact","contact.html"]].map(function (x) { return '<p><a href="' + x[1] + '">' + x[0] + '</a></p>'; }).join("") + '</div>' +
    '<div><h4>Contact</h4><p>' + C.ADDR + '</p><p><a href="tel:' + C.TEL + '">' + C.PHONE + '</a></p><p><a href="mailto:' + C.EMAIL + '">' + C.EMAIL + '</a></p><p><a href="' + C.WA + '" target="_blank" rel="noopener">WhatsApp</a></p><p><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.MAP) + '">View on Google Maps</a></p></div></div>' +
    '<p class="copy">© ' + new Date().getFullYear() + ' Mitrakar Architectural Designers · <a href="privacy-policy.html">Privacy</a> · <a href="cookie.html">Cookies</a> · <a href="terms-and-conditions.html">Terms</a></p></footer>';
  document.getElementById("hdr").innerHTML = nav;
  document.getElementById("ftr").innerHTML = foot;
  var n = document.getElementById("nav"), m = document.getElementById("menu"), b = document.getElementById("burger");
  var hero = page === "home" || page === "service" || page === "bim" || page === "project";
  function sc() { n.classList.toggle("solid", !hero || window.scrollY > 40 || m.classList.contains("open")); }
  window.addEventListener("scroll", sc); sc();
  b.onclick = function () { var o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o); sc(); };
  var d = n.querySelector(".dd"), db = n.querySelector(".ddb");
  db.onclick = function () { var o = d.classList.toggle("open"); db.setAttribute("aria-expanded", o); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { d.classList.remove("open"); m.classList.remove("open"); sc(); } });
  var ld = document.createElement("script"); ld.type = "application/ld+json";
  ld.text = JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Mitrakar Architectural Designers", slogan: "We Visualise Your Dreams", foundingDate: "2005", email: C.EMAIL, telephone: C.TEL,
    address: { "@type": "PostalAddress", streetAddress: "17/2 New Palasia", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" } });
  document.head.appendChild(ld);
})();
