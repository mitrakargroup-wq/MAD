(function () {
  var page = document.body.getAttribute("data-page");
  var q = new URLSearchParams(location.search).get("p");
  var main = document.getElementById("main");
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function im(i, alt, cls) { return '<img class="' + (cls || "") + '" alt="' + esc(alt || "") + '" loading="lazy" data-src="' + D.P[i % D.P.length] + '">'; }
  function ph(e, t, s) { return '<section class="page-h"><p class="eyebrow">' + e + '</p><h1>' + t + '</h1>' + (s ? '<p class="lead">' + s + '</p>' : '') + '</section>'; }
  function cards() {
    return '<div class="grid">' + D.PROJECTS.map(function (p) {
      return '<a class="card fade" href="project.html?p=' + p.s + '">' + im(p.i, p.n) + '<div><h3>' + p.n + '</h3><span>' + p.l.toUpperCase() + ' · ' + p.t.toUpperCase() + '</span></div></a>';
    }).join("") + '</div>';
  }
  function plist() {
    return '<div class="plist">' + D.PROJECTS.map(function (p) {
      return '<a href="project.html?p=' + p.s + '" data-i="' + p.i + '"><h3>' + p.n + '</h3><span>' + p.l + ' · ' + p.y + '</span></a>';
    }).join("") + '</div>';
  }
  function posts() {
    return '<div class="posts">' + D.POSTS.map(function (p) {
      return '<a class="fade" href="post.html?p=' + p.s + '">' + im(p.i, p.n) + '<h3>' + p.n + '</h3><p>' + p.d + '</p></a>';
    }).join("") + '</div>';
  }
  function legal(t, paras) { return ph("LEGAL", t) + '<section class="wrap prose">' + paras.map(function (x) { return '<p>' + x + '</p>'; }).join("") + '</section>'; }
  function find(arr) { return arr.filter(function (x) { return x.s === q; })[0] || arr[0]; }

  var R = {
    about: function () {
      return ph("ABOUT THE STUDIO", "Architecture shaped by context and long-term vision.", "Mitrakar Architectural Designers is based at New Palasia, Indore.") +
        '<section class="wrap split"><div><h2>Concept, development and execution under one roof.</h2><p class="muted">We design contemporary architecture grounded in precision and strategy. From residences to commercial developments, our work bridges conceptual clarity and site reality.</p><ul class="pillars"><li><b>Clarity</b>Simple ideas, carefully resolved.</li><li><b>Precision</b>Detailed drawings and close site coordination.</li><li><b>Trust</b>Transparent communication at every stage.</li></ul></div>' + im(1, "Studio", "ph tall") + '</section>' +
        '<section class="wrap"><p class="eyebrow">PARTNERS IN VISION</p><h2>Built on trust. Defined by excellence.</h2>' + partners() + '</section>';
    },
    projects: function () { return ph("SELECTED WORK", "Every line considered. Every space purposeful.") + '<section class="wrap">' + plist() + '<div style="height:60px"></div>' + cards() + '</section>'; },
    project: function () {
      var p = find(D.PROJECTS), nx = D.PROJECTS[(D.PROJECTS.indexOf(p) + 1) % D.PROJECTS.length];
      return '<section class="pd-hero">' + im(p.i, p.n, "bg") + '<div class="shade"></div><div class="hero-in"><p class="eyebrow">' + p.t.toUpperCase() + '</p><h1>' + p.n + '</h1></div></section>' +
        '<section class="wrap split"><div><h2>About the project</h2><p class="muted">' + p.d + '</p></div><dl class="meta"><div><dt>Location</dt><dd>' + p.l + '</dd></div><div><dt>Year</dt><dd>' + p.y + '</dd></div><div><dt>Type</dt><dd>' + p.t + '</dd></div><div><dt>Area</dt><dd>' + p.a + '</dd></div></dl></section>' +
        '<section class="wrap gal">' + im(p.i + 1, "", "ph") + im(p.i + 2, "", "ph") + im(p.i + 3, "", "ph") + '</section>' +
        '<section class="wrap"><a class="next" href="project.html?p=' + nx.s + '"><span>NEXT PROJECT</span><h2>' + nx.n + '</h2></a></section>';
    },
    services: function () {
      return ph("SERVICES", "From vision to built reality.", "A structured approach that turns ideas into precise, functional and enduring architecture.") +
        '<section class="wrap"><div class="steps">' + D.SERVICES.map(function (s, i) { return '<article class="fade"><span>0' + (i + 1) + '</span><h3>' + s.n + '</h3><p>' + s.d + '</p></article>'; }).join("") + '</div></section>' +
        '<section class="wrap"><p class="eyebrow">BEFORE WE BEGIN</p><h2>Answers. Defined by precision.</h2>' + faq() + '</section>';
    },
    team: function () {
      return ph("MEET THE STUDIO", "One team. Every project.", "Architects, designers and technical specialists united by a commitment to clarity and excellence.") +
        '<section class="wrap"><div class="team">' + D.TEAM.map(function (t) { return '<div class="fade"><i>' + t.n[0] + '</i><b>' + t.n + '</b><span>' + t.r + '</span><p>' + t.c + '</p></div>'; }).join("") + '</div></section>';
    },
    blog: function () { return ph("OUR JOURNAL", "Shaping architecture. Defining the future.") + '<section class="wrap">' + posts() + '</section>'; },
    post: function () {
      var p = find(D.POSTS);
      return '<section class="page-h"><p class="eyebrow">JOURNAL</p><h1>' + p.n + '</h1><p class="lead">' + p.d + '</p></section><section class="wrap prose">' + im(p.i, p.n, "ph wide") + p.b.map(function (x) { return '<p>' + x + '</p>'; }).join("") + '<p><a class="btn" href="blog.html">← All articles</a></p></section>';
    },
    contact: function () {
      return ph("CONTACT", "Let’s shape the future of your space.") +
        '<section class="wrap split"><div><h3>Mitrakar Architectural Designers</h3><p class="muted">17/2 New Palasia,<br>Indore, Madhya Pradesh 452001</p><p><a class="lnk" href="tel:+917071723383">+91 70717 23383</a></p><p><a class="lnk" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Mitrakar+Architectural+Designers+17%2F2+New+Palasia+Indore">Open in Google Maps</a></p></div>' +
        '<form id="cf" class="form"><input name="name" placeholder="Your name" required><input name="phone" placeholder="Phone number" required><textarea name="msg" rows="5" placeholder="Tell us about your project" required></textarea><button class="btn" type="submit">Send on WhatsApp</button><small class="muted">Opens WhatsApp with your message to +91 70717 23383.</small></form></section>';
    },
    "privacy-policy": function () { return legal("Privacy Policy", ["This website does not collect personal data on its own. If you contact us by phone or WhatsApp, we use the details you share only to respond to your enquiry.", "We do not sell your information. Contact us at +91 70717 23383 to ask about or remove your data."]); },
    cookie: function () { return legal("Cookie Policy", ["This website does not set tracking or advertising cookies. Fonts may be loaded from Google Fonts and images from Unsplash, which may log standard request data."]); },
    "terms-and-conditions": function () { return legal("Terms and Conditions", ["Content on this website is provided for general information about Mitrakar Architectural Designers and does not form a contract.", "Project images are illustrative. All rights to the studio name and logo belong to Mitrakar Architectural Designers."]); }
  };
  function partners() {
    return '<div class="posts four">' + D.PARTNERS.map(function (p) { return '<div class="fade">' + im(p.i, p.n) + '<h3>' + p.n + '</h3></div>'; }).join("") + '</div>';
  }
  function faq() {
    var f = [["What types of projects do you handle?", "Residential, commercial and mixed-use projects, from private homes to larger developments."], ["What is your design process?", "Discovery, concept, development and execution, with review points at each stage."], ["Do you handle approvals and drawings?", "Yes. We prepare technical documentation and coordinate approvals."], ["How do we begin?", "Call or message us to book a free consultation."]];
    return '<div class="faq">' + f.map(function (x, i) { return '<details' + (i ? '' : ' open') + '><summary>' + x[0] + '</summary><p>' + x[1] + '</p></details>'; }).join("") + '</div>';
  }

  if (page === "home") {
    var set = function (id, h) { var e = document.getElementById(id); if (e) e.innerHTML = h; };
    set("projList", plist()); set("partners", partners()); set("posts", posts()); set("faq", faq());
    document.querySelectorAll("img[data-img]").forEach(function (e) { e.setAttribute("data-src", D.IMG[e.getAttribute("data-img")]); });
  } else if (R[page]) {
    main.innerHTML = R[page]();
    document.title = (page === "project" ? find(D.PROJECTS).n : page === "post" ? find(D.POSTS).n : page.replace(/-/g, " ").replace(/^./, function (c) { return c.toUpperCase(); })) + " | Mitrakar Architectural Designers";
  }

  document.querySelectorAll("img[data-src]").forEach(function (e) {
    e.onerror = function () { e.style.visibility = "hidden"; };
    e.src = e.getAttribute("data-src");
  });

  var cf = document.getElementById("cf");
  if (cf) cf.onsubmit = function (ev) {
    ev.preventDefault();
    var f = new FormData(cf);
    var t = "Hello Mitrakar, I am " + f.get("name") + " (" + f.get("phone") + "). " + f.get("msg");
    window.open("https://wa.me/917071723383?text=" + encodeURIComponent(t), "_blank");
  };

  var pv = document.createElement("div"); pv.className = "pv"; pv.innerHTML = "<img alt=''>"; document.body.appendChild(pv);
  document.querySelectorAll(".plist a").forEach(function (a) {
    a.addEventListener("mouseenter", function () { var i = pv.firstChild; i.src = D.P[+a.getAttribute("data-i")]; pv.classList.add("on"); });
    a.addEventListener("mouseleave", function () { pv.classList.remove("on"); });
    a.addEventListener("mousemove", function (e) { pv.style.left = Math.min(e.clientX + 30, window.innerWidth - 330) + "px"; pv.style.top = (e.clientY - 120) + "px"; });
  });

  document.querySelectorAll(".steps article,.team div,.pillars li").forEach(function (e) { e.classList.add("fade"); });
  var els = document.querySelectorAll(".fade");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: 0.1 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add("in"); }); }
})();
