(function () {
  var C = D.CFG, page = document.body.getAttribute("data-page"), pp = document.body.getAttribute("data-p");
  var q = pp || new URLSearchParams(location.search).get("p"), main = document.getElementById("main");
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var li = function (a) { return a.map(function (x) { return "<li>" + x + "</li>"; }).join(""); };
  function im(i, alt, cls) { return '<img class="' + (cls || "") + '" alt="' + esc(alt || "") + '" loading="lazy" data-src="' + D.P[i % D.P.length] + '">'; }
  function find(a) { return a.filter(function (x) { return x.s === q; })[0] || a[0]; }
  function meta(t, d) { document.title = t + " | Mitrakar Architectural Designers"; var m = document.querySelector('meta[name="description"]'); if (m && d) m.setAttribute("content", d); }
  function ph(e, t, s, dark) { return '<section class="ph' + (dark ? " dark" : "") + '"><div class="in"><p class="eyebrow">' + e + '</p><h1>' + t + '</h1>' + (s ? '<p class="lead">' + s + '</p>' : "") + '</div></section>'; }
  function sec(inner, cls) { return '<section class="sec ' + (cls || "") + '"><div class="in">' + inner + '</div></section>'; }
  function head(e, t, p) { return '<p class="eyebrow">' + e + '</p><h2>' + t + '</h2>' + (p ? '<p class="lead">' + p + '</p>' : ""); }
  function cta(t, p) {
    return '<section class="sec dark"><div class="in cta"><h2>' + t + '</h2><div><p class="lead">' + p + '</p><p class="row"><a class="btn lt" href="contact.html">Enquire now</a><a class="btn lt" target="_blank" rel="noopener" href="' + C.WA + '">WhatsApp</a><a class="btn lt" href="mailto:' + C.EMAIL + '">Email us</a></p></div></div></section>';
  }
  function verts() {
    return '<div class="vl">' + D.SERVICES.map(function (s, i) {
      return '<a class="fade" href="' + s.u + '"><span class="no">0' + (i + 1) + '</span><h3>' + s.n + '</h3><p>' + s.k.slice(0, 5).join(" · ") + '</p><i aria-hidden="true">→</i></a>';
    }).join("") + '</div>';
  }
  function inds() {
    return '<div class="mos">' + D.INDS.map(function (x) {
      return '<a class="tile fade" href="industries.html#' + x.s + '">' + im(x.i, x.n) + '<div><h3>' + x.n + '</h3><p>' + x.d + '</p></div></a>';
    }).join("") + '</div>';
  }
  function badge(p) { return '<span class="tag">' + p.st + '</span>' + (p.ph ? '<span class="tag ph-b">Placeholder</span>' : ""); }
  function pcard(p) {
    return '<a class="pc fade" data-c="' + p.c.join("|") + '" href="project.html?p=' + p.s + '">' + im(p.i, p.n) + '<div class="pm">' + badge(p) + '</div><h3>' + p.n + '</h3><p>' + p.l + ' · ' + p.y + '</p></a>';
  }
  function feat(p) {
    return '<a class="feat fade" href="project.html?p=' + p.s + '">' + im(p.i, p.n) + '<div><div class="pm">' + badge(p) + '</div><h3>' + p.n + '</h3><p>' + p.c.join(" · ") + '</p><span class="more">View project →</span></div></a>';
  }
  function posts(n) {
    return '<div class="il">' + D.POSTS.slice(0, n || 9).map(function (p) {
      return '<a class="fade" href="post.html?p=' + p.s + '">' + im(p.i, p.n) + '<div><h3>' + p.n + '</h3><p>' + p.d + '</p></div></a>';
    }).join("") + '</div>';
  }
  var STEPS = [["Plan", "Site, context, budget and feasibility define a clear direction."], ["Design", "Architecture and interiors developed with technical rigour."], ["Build", "Construction and finishing delivered with coordinated drawings."], ["Manage", "Scheduling, cost control and supervision through handover."]];
  function process() { return '<div class="proc">' + STEPS.map(function (s, i) { return '<div class="fade"><span class="no">0' + (i + 1) + '</span><h3>' + s[0] + '</h3><p>' + s[1] + '</p></div>'; }).join("") + '</div>'; }

  // ---- forms ----
  function inp(n, l, t, r) { return '<label for="f-' + n + '">' + l + (r ? " *" : "") + '</label><input id="f-' + n + '" name="' + n + '" type="' + (t || "text") + '"' + (r ? " required" : "") + '>'; }
  function area(n, l, r) { return '<label for="f-' + n + '">' + l + (r ? " *" : "") + '</label><textarea id="f-' + n + '" name="' + n + '" rows="5"' + (r ? " required" : "") + '></textarea>'; }
  function sel(n, l, o, v) { return '<label for="f-' + n + '">' + l + ' *</label><select id="f-' + n + '" name="' + n + '" required>' + o.map(function (x) { return '<option' + (x === v ? " selected" : "") + '>' + x + '</option>'; }).join("") + '</select>'; }
  function formEnd(l) { return '<input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="btn fill" type="submit">' + (l || "Send enquiry") + '</button><p class="st" role="status" aria-live="polite"></p>'; }
  function cform(v) {
    return '<form class="form" id="cf" data-sub="Website enquiry" novalidate>' + inp("name", "Name", "text", 1) + inp("email", "Email", "email", 1) + inp("phone", "Phone / WhatsApp") +
      sel("enquiry", "Enquiry type", D.PATHS.map(function (p) { return p.n; }), v) + area("message", "Message", 1) + formEnd() + '</form>';
  }
  function bform() {
    return '<form class="form" id="bf" data-sub="BIM outsourcing enquiry" novalidate>' + inp("name", "Name", "text", 1) + inp("company", "Company", "text", 1) + inp("country", "Country", "text", 1) + inp("email", "Email", "email", 1) +
      sel("project_type", "Project type", ["Residential", "Commercial", "Institutional", "Hospitality", "Mixed use", "Other"]) +
      '<fieldset><legend>Required BIM services</legend>' + D.SERVICES[5].k.map(function (k, i) { return '<label class="chk"><input type="checkbox" name="services" value="' + k + '"> ' + k + '</label>'; }).join("") + '</fieldset>' +
      area("description", "Project description", 1) + '<label for="f-file">Drawings / files (optional)</label><input id="f-file" type="file" name="attachment" multiple><small>File upload works once a form service that supports attachments is connected. Otherwise, attach files in the email that opens.</small>' + formEnd() + '</form>';
  }
  function wire(f) {
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = f.querySelector(".st");
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var fd = new FormData(f), subj = f.getAttribute("data-sub");
      if (C.FORM_ENDPOINT) {
        fd.append("_subject", subj + " - Mitrakar website"); st.textContent = "Sending…";
        fetch(C.FORM_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } }).then(function (r) {
          if (!r.ok) throw 0; st.textContent = "Thank you. Your enquiry has been sent."; f.reset();
        }).catch(function () { st.textContent = "We could not send your enquiry. Please email " + C.EMAIL + " or call " + C.PHONE + "."; });
      } else {
        var o = {}; fd.forEach(function (v, k) { if (typeof v === "string" && k !== "_gotcha" && v) o[k] = o[k] ? o[k] + ", " + v : v; });
        var body = Object.keys(o).map(function (k) { return k + ": " + o[k]; }).join("\n");
        st.textContent = "Online form delivery is not connected yet, so your email app has opened. Please review, attach any files and press send.";
        location.href = "mailto:" + C.EMAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
      }
    });
  }


  function dform() {
    return '<form class="form" id="df" data-sub="Development enquiry" novalidate>' + inp("name", "Name", "text", 1) + inp("phone", "Phone number", "tel", 1) + inp("email", "Email", "email", 1) + inp("land_location", "Location of land", "text", 1) + inp("land_area", "Approximate land area") +
      sel("requirement", "Type of requirement", D.DEV.reqs) + sel("working_model", "Preferred working model", D.DEV.mods) + area("details", "Additional project details") + formEnd("Submit Development Enquiry") + '</form>';
  }
  function dev() {
    var s = D.SERVICES[4], V = D.DEV; meta("Colony & Land Development", s.m);
    var groups = V.groups.map(function (g) {
      return '<article class="dgrp fade" id="' + g.s + '">' + im(g.i, g.n) + '<div><span class="no">' + g.l + '</span><h3>' + g.n + '</h3><ul class="klist">' + li(g.k) + '</ul>' + (g.note ? '<p class="note">' + g.note + '</p>' : "") + '</div></article>';
    }).join("");
    var models = V.models.map(function (m, i) {
      return '<article class="model fade"><span class="no">MODEL 0' + (i + 1) + '</span><h3>' + m.n + '</h3><p>' + m.t + '</p>' + (m.note ? '<p class="note">' + m.note + '</p>' : "") + '</article>';
    }).join("");
    var why = V.why.map(function (w, i) { return '<div class="fade"><span class="no">0' + (i + 1) + '</span><h3>' + w[0] + '</h3><p>' + w[1] + '</p></div>'; }).join("");
    var steps = V.steps.map(function (t, i) { return '<li class="fade"><span class="no">0' + (i + 1) + '</span><p>' + t + '</p></li>'; }).join("");
    function col(st) {
      return '<div><h3>' + st + ' Projects</h3>' + V.projects.filter(function (x) { return x.st === st; }).map(function (x) {
        return '<article class="dpc fade">' + im(x.i, x.n) + '<div class="pm"><span class="tag">' + x.st + '</span>' + (x.ph ? '<span class="tag ph-b">Placeholder</span>' : "") + '</div><h4>' + x.n + '</h4><dl><dt>Location</dt><dd>' + x.l + '</dd><dt>Land area</dt><dd>' + x.a + '</dd><dt>Scope of work</dt><dd>' + x.w + '</dd><dt>Services provided</dt><dd>' + x.v + '</dd></dl></article>';
      }).join("") + '</div>';
    }
    return '<section class="hero short">' + im(6, "", "bg") + '<div class="shade"></div><div class="in hero-in"><p class="eyebrow">DEVELOPMENT & INFRASTRUCTURE</p><h1>Colony & Land Development</h1><p class="sub2">From Land to Livable Communities.</p><p class="lead">We provide integrated land and residential layout development solutions, bringing together planning, regulatory coordination, infrastructure development, utilities and landscaping under one coordinated approach.</p><p class="row"><a class="btn lt" href="#enquire">Discuss Your Project</a><a class="btn lt" href="#services">Explore Our Development Services</a></p></div></section>' +
      sec('<div class="split"><div>' + head("OUR DEVELOPMENT APPROACH", "Transforming Land Into Planned Communities") + '</div><div class="prose"><p>Mitrakar undertakes integrated land and colony development solutions, helping landowners and developers transform vacant land into well-planned residential developments.</p><p>From layout planning and regulatory coordination to roads, utilities, infrastructure and landscaping, we bring multiple project requirements together through a coordinated development approach.</p></div></div>') +
      '<section class="sec sand" id="services"><div class="in">' + head("WHAT WE DO", "Four service groups, one coordinated scope.") + groups + '</div></section>' +
      '<section class="sec dark"><div class="in">' + head("OUR WORKING MODELS", "Choose how we work with you.") + '<div class="models">' + models + '</div><p class="row"><a class="btn lt" href="#enquire">Explore the Right Development Model for Your Land</a></p><p class="note disc">Commercial terms, scope and pricing are finalised in writing before work begins.</p></div></section>' +
      sec(head("WHY CHOOSE MITRAKAR", "Built around accountability.") + '<div class="whyg">' + why + '</div>') +
      sec(head("OUR DEVELOPMENT PROCESS", "Six steps from site visit to handover.") + '<ol class="tline">' + steps + '</ol>', "sand") +
      sec(head("FEATURED DEVELOPMENT PROJECTS", "Completed and ongoing.") + '<div class="dcols">' + col("Completed") + col("Ongoing") + '</div><p class="note">Entries marked “Placeholder” will be replaced with verified project information and photographs.</p>') +
      '<section class="sec dark" id="enquire"><div class="in split"><div>' + head("LANDOWNER & DEVELOPER ENQUIRY", "Have Land to Develop? Let’s Build Its Potential.", "Whether you own land, are planning a residential layout or are exploring a development partnership, our team can help you evaluate the possibilities.") + '<p class="note">Approvals are granted by the relevant statutory authorities; Mitrakar assists with documentation and coordination only.</p></div>' + dform() + '</div></section>';
  }

  var R = {
    home: function () {
      meta("Architects in Indore | Architecture, Interiors, Construction, PMC & BIM", "Mitrakar Architectural Designers (est. 2005), Indore: an integrated architecture, design-build and project management company offering architecture, interiors, construction, PMC, development and BIM services.");
      document.title = "Mitrakar Architectural Designers | Architects in Indore, Madhya Pradesh";
      return '<section class="hero">' + im(0, "", "bg") + '<div class="shade"></div><div class="in hero-in"><p class="eyebrow">EST. 2005 · WE VISUALISE YOUR DREAMS</p><h1>Creating Spaces. Shaping Experiences. Building Futures.</h1><p class="lead">An integrated practice delivering architecture, interior design, construction, project management, land development and BIM solutions.</p><p class="row"><a class="btn lt" href="expertise.html">Our expertise</a><a class="btn lt" href="contact.html">Enquire</a></p></div></section>' +
        sec('<div class="split"><div>' + head("WHO WE ARE", "One practice. Every stage of a project.") + '</div><div class="prose"><p>Mitrakar Architectural Designers is a multidisciplinary practice established in 2005. We bring together architectural design, interior solutions, construction, project management consultancy, urban development and BIM services under one integrated approach.</p><p>From educational institutions and hospitality destinations to residential developments, commercial spaces and recreational projects, we focus on delivering thoughtful design, coordinated planning and efficient project execution.</p><p><a class="more" href="about.html">About Mitrakar →</a></p></div></div>') +
        sec(head("OUR EXPERTISE", "Six connected disciplines.") + verts(), "sand") +
        '<section class="promo">' + im(6, "", "bg") + '<div class="shade"></div><div class="in promo-in"><p class="eyebrow">COLONY & LAND DEVELOPMENT</p><h2>Have Land to Develop?</h2><p class="lead">From residential layout planning to complete infrastructure development, we help transform land into thoughtfully planned communities.</p><p class="row"><a class="btn lt" href="development-infrastructure.html">Explore Colony Development</a></p></div></section>' +
        sec(head("INDUSTRIES WE SERVE", "Designed for the way each sector works.") + inds()) +
        sec(head("FEATURED PROJECTS", "Selected work.") + D.PROJECTS.slice(0, 3).map(feat).join("") + '<p><a class="btn" href="projects.html">All projects</a></p>', "sand") +
        sec(head("OUR APPROACH", "From planning to handover.") + process()) +
        '<section class="sec dark"><div class="in split"><div>' + head("WHY MITRAKAR", "One integrated team, from concept to completion.") + '</div><ul class="why"><li><b>Integrated delivery</b>Architecture, interiors, construction, PMC and development coordinated under one roof.</li><li><b>Design with technical rigour</b>Creative ideas resolved through detailed drawings and planning.</li><li><b>Execution-minded planning</b>Schedules, costs and quality considered from the first sketch.</li><li><b>Open to global collaboration</b>BIM services for architecture and construction firms internationally.</li></ul></div></section>' +
        sec('<div class="split"><div>' + head("EXPERIENCE & CAPABILITIES", "Established in 2005.") + '</div><div><p class="lead">Mitrakar’s capabilities span the full lifecycle of a built project.</p><div class="chips">' + ["Architecture", "Urban Planning", "Interiors", "Turnkey Construction", "PMC", "Land Development", "Infrastructure", "BIM & Documentation"].map(function (x) { return "<span>" + x + "</span>"; }).join("") + '</div></div></div>') +
        sec(head("LATEST INSIGHTS", "Thinking behind the work.") + posts(3) + '<p><a class="btn" href="insights.html">All insights</a></p>', "sand") +
        cta("Let’s discuss your project.", "Tell us about your plot, building or development, and we will guide you to the right team.");
    },
    about: function () {
      return ph("ABOUT US", "Beyond Architecture. Into Everything We Build.", "A multidisciplinary practice established in 2005.") +
        sec('<div class="split"><div>' + head("COMPANY", "Integrated by design.") + '</div><div class="prose"><p>Mitrakar Architectural Designers brings together architectural design, interior solutions, construction, project management consultancy, urban development and BIM services under one integrated approach.</p><p>We work across education, hospitality, recreation, residential, commercial and healthcare projects, combining creativity, technical expertise and practical execution to transform ideas into meaningful built environments.</p><h3 class="subh">Integrated Land & Colony Development</h3><p>Beyond architecture and construction, Mitrakar also undertakes integrated land and colony development solutions. We work with landowners and developers to transform vacant land into well-planned residential developments through layout planning, regulatory coordination, infrastructure development, utilities and landscaping.</p><p>By bringing planning, design, approvals and execution together, we offer a coordinated approach with a single point of responsibility throughout the development process.</p><p><a class="more" href="development-infrastructure.html">Explore Colony & Land Development →</a></p></div></div>') +
        sec('<div class="split"><div>' + head("OUR JOURNEY", "Since 2005.") + '</div><div class="prose"><p>Established in 2005, Mitrakar today offers six connected disciplines under one practice, so clients can engage with a single team from planning through completion.</p><p class="note">Company milestones, awards and key projects can be added here once supplied.</p></div></div>', "sand") +
        sec('<div class="trio"><div class="fade"><h3>Vision</h3><p>To be a trusted integrated practice that shapes thoughtful, well-built environments.</p></div><div class="fade"><h3>Mission</h3><p>To deliver coordinated design, planning and execution that turn client ideas into reality.</p></div><div class="fade"><h3>Design philosophy</h3><p>Clarity, context and buildability: ideas should be as sound on site as they are on paper.</p></div></div>') +
        sec(head("MULTIDISCIPLINARY EXPERTISE", "Six disciplines, one approach.") + verts(), "sand") +
        sec(head("OUR APPROACH", "From planning to handover.") + process()) +
        sec(head("COMPANY PROFILE", "Download our profile.") + '<p><span class="btn disabled" aria-disabled="true">Company profile (PDF) — coming soon</span></p>', "sand") +
        cta("Start a conversation.", "We would be glad to discuss your project.");
    },
    expertise: function () {
      return ph("OUR EXPERTISE", "Six divisions. One integrated practice.", "Design, build, manage and develop with a single coordinated team.") + sec(verts()) +
        sec(head("ENQUIRY PATHWAYS", "Where would you like to begin?") + paths(), "sand") + cta("Not sure where to start?", "Tell us about your project and we will connect you with the right team.");
    },
    service: function () {
      var s = find(D.SERVICES), i = D.SERVICES.indexOf(s), nx = D.SERVICES[(i + 1) % 6];
      if (s.s === "development-infrastructure") return dev();
      meta(s.t, s.m);
      return '<section class="ph dark"><div class="in"><p class="eyebrow">EXPERTISE 0' + (i + 1) + '</p><h1>' + s.t + '</h1><p class="lead">' + s.d + '</p></div></section>' +
        sec('<div class="split"><div>' + head("WHAT WE OFFER", "Services") + '</div><ul class="klist">' + li(s.k) + '</ul></div>') +
        sec('<div class="split">' + im(i, s.t, "ph-img") + '<div>' + head("INTEGRATED PRACTICE", "Connected to every other discipline.") + '<p>This division works alongside our other disciplines, so design, construction, management and development stay coordinated from concept to completion.</p><p class="row"><a class="btn fill" href="contact.html?t=' + s.e + '">Enquire about ' + s.n + '</a></p></div></div>', "sand") +
        sec('<a class="next" href="' + nx.u + '"><span>NEXT DISCIPLINE</span><h2>' + nx.t + '</h2></a>') + cta("Discuss your requirement.", "Share a few details and we will respond with the right next step.");
    },
    bim: function () {
      var s = D.SERVICES[5]; meta("Global BIM Services", s.m);
      return '<section class="ph dark"><div class="in"><p class="eyebrow">BIM & DIGITAL ENGINEERING</p><h1>Global BIM Services</h1><p class="lead">BIM and documentation support for architecture and construction firms in the USA, Canada, the UK and other international markets, delivered from Indore, India.</p><p class="row"><a class="btn lt" href="#enquire">Partner With Our BIM Team</a></p></div></section>' +
        sec('<div class="split"><div>' + head("SERVICES", "What we support.") + '</div><ul class="klist">' + li(s.k) + '</ul></div>') +
        sec('<div class="split"><div>' + head("WHY PARTNER WITH MITRAKAR", "BIM informed by real design and construction.") + '</div><div class="prose"><p>Mitrakar practises architecture, construction and project management under one roof, so BIM output is prepared with an understanding of how buildings are designed, coordinated and built.</p><p>We can work as an extension of your team on modeling, documentation and coordination, aligned to your project standards and requirements.</p></div></div>', "sand") +
        sec(head("HOW WE WORK", "A clear collaboration process.") + '<div class="proc">' + [["Brief & Standards", "We review your scope, templates and delivery requirements."], ["Modeling & Documentation", "Models and drawings are produced to the agreed standards."], ["Coordination & Review", "Clash detection and coordination support with your team."], ["Delivery & Revisions", "Final deliverables with structured revision handling."]].map(function (x, i) { return '<div class="fade"><span class="no">0' + (i + 1) + '</span><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div>'; }).join("") + '</div>') +
        '<section class="sec sand" id="enquire"><div class="in split"><div>' + head("BIM ENQUIRY", "Partner With Our BIM Team") + '<p>Share your project details and we will respond by email.</p></div>' + bform() + '</div></section>';
    },
    industries: function () {
      return ph("INDUSTRIES WE SERVE", "Sector knowledge, applied to every brief.") +
        sec(D.INDS.map(function (x, i) { return '<article class="irow fade" id="' + x.s + '">' + im(x.i, x.n) + '<div><span class="no">0' + (i + 1) + '</span><h2>' + x.n + '</h2><p class="lead">' + x.d + '</p><a class="more" href="contact.html">Enquire about this sector →</a></div></article>'; }).join("")) +
        cta("Planning a project in one of these sectors?", "Talk to us about design, construction, PMC or development support.");
    },
    projects: function () {
      return ph("OUR PROJECTS", "Selected work across sectors.") +
        sec('<div class="flt" role="group" aria-label="Filter projects"><button class="on" data-f="All">All</button>' + D.CATS.map(function (c) { return '<button data-f="' + c + '">' + c + '</button>'; }).join("") + '</div><div class="pg" id="pg">' + D.PROJECTS.map(pcard).join("") + '</div><p class="empty" id="empty" hidden>No projects in this category yet.</p><p class="note">Entries marked “Placeholder” are sample records to be replaced with real project data and photographs.</p>');
    },
    project: function () {
      var p = find(D.PROJECTS), nx = D.PROJECTS[(D.PROJECTS.indexOf(p) + 1) % D.PROJECTS.length];
      meta(p.n, "Project: " + p.n + " by Mitrakar Architectural Designers.");
      return '<section class="hero short">' + im(p.i, p.n, "bg") + '<div class="shade"></div><div class="in hero-in"><p class="eyebrow">' + p.c.join(" · ").toUpperCase() + '</p><h1>' + p.n + '</h1></div></section>' +
        sec('<div class="split"><div>' + head("PROJECT", "Overview") + '<p>' + p.d + '</p>' + (p.ph ? '<p class="note">Placeholder project record. Replace with real information.</p>' : "") + '</div><dl class="meta"><div><dt>Location</dt><dd>' + p.l + '</dd></div><div><dt>Year</dt><dd>' + p.y + '</dd></div><div><dt>Status</dt><dd>' + p.st + '</dd></div><div><dt>Area</dt><dd>' + p.a + '</dd></div><div class="wide"><dt>Categories</dt><dd>' + p.c.join(", ") + '</dd></div><div class="wide"><dt>Services by Mitrakar</dt><dd>' + p.v.join(", ") + '</dd></div></dl></div>') +
        sec('<div class="gal">' + im(p.i + 1, "") + im(p.i + 2, "") + im(p.i + 3, "") + '</div>', "sand") +
        sec('<a class="next" href="project.html?p=' + nx.s + '"><span>NEXT PROJECT</span><h2>' + nx.n + '</h2></a>');
    },
    insights: function () { return ph("INSIGHTS", "Thinking behind the work.") + sec(posts()); },
    post: function () {
      var p = find(D.POSTS); meta(p.n, p.d);
      return ph("INSIGHTS", p.n, p.d) + sec(im(p.i, p.n, "ph-img wide") + '<div class="prose">' + p.b.map(function (x) { return "<p>" + x + "</p>"; }).join("") + '<p><a class="btn" href="insights.html">← All insights</a></p></div>');
    },
    careers: function () {
      return ph("CAREERS", "Build your career with Mitrakar.", "We welcome architects, interior designers, site engineers, project managers and BIM professionals.") +
        sec('<div class="split"><div>' + head("OPEN APPLICATION", "Send us your portfolio.") + '</div><div class="prose"><p>There are no listed vacancies at the moment. If you would like to be considered for future openings, email your CV and portfolio and mention the area you are interested in.</p><p class="row"><a class="btn fill" href="mailto:' + C.EMAIL + '?subject=Career%20application">Email your application</a></p></div></div>') +
        sec(head("WHERE YOU COULD WORK", "Across the practice.") + '<div class="chips">' + D.SERVICES.map(function (s) { return "<span>" + s.n + "</span>"; }).join("") + '</div>', "sand");
    },
    contact: function () {
      var t = new URLSearchParams(location.search).get("t"), v = (D.PATHS.filter(function (p) { return p.k === t; })[0] || {}).n;
      return ph("CONTACT US", "Let’s talk about your project.") +
        sec('<div class="split"><div><h3>Mitrakar Architectural Designers</h3><p>' + C.ADDR + '</p><p><a class="lnk" href="tel:' + C.TEL + '">' + C.PHONE + '</a></p><p><a class="lnk" href="mailto:' + C.EMAIL + '">' + C.EMAIL + '</a></p><p><a class="btn" target="_blank" rel="noopener" href="' + C.WA + '">Chat on WhatsApp</a></p></div>' + cform(v) + '</div>') +
        sec(head("ENQUIRY PATHWAYS", "Choose the right team.") + paths(), "sand") +
        sec('<iframe class="map" title="Mitrakar Architectural Designers on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=' + encodeURIComponent(C.MAP) + '&output=embed"></iframe>');
    }
  };
  function paths() {
    return '<div class="paths">' + D.PATHS.map(function (p) { return '<a class="fade" href="' + (p.k === "bim" ? "global-bim-services.html#enquire" : p.k === "development" ? "development-infrastructure.html#enquire" : "contact.html?t=" + p.k) + '"><h3>' + p.n + '</h3><span class="more">Start an enquiry →</span></a>'; }).join("") + '</div>';
  }
  function legal(t, a) { return ph("LEGAL", t) + sec('<div class="prose">' + a.map(function (x) { return "<p>" + x + "</p>"; }).join("") + '</div>'); }
  R["privacy-policy"] = function () { return legal("Privacy Policy", ["This website does not collect personal data on its own. If you contact us by form, email, phone or WhatsApp, we use the details you share only to respond to your enquiry.", "We do not sell your information. Contact " + C.EMAIL + " to ask about or remove your data."]); };
  R.cookie = function () { return legal("Cookie Policy", ["This website does not set tracking or advertising cookies. Fonts, images and maps may be loaded from third parties (Google Fonts, Unsplash, Google Maps), which may log standard request data."]); };
  R["terms-and-conditions"] = function () { return legal("Terms and Conditions", ["Content on this website is provided for general information about Mitrakar Architectural Designers and does not form a contract.", "Project images are illustrative unless stated. All rights to the studio name and logo belong to Mitrakar Architectural Designers."]); };

  if (R[page]) { main.innerHTML = R[page](); }
  wire(document.getElementById("cf")); wire(document.getElementById("bf")); wire(document.getElementById("df"));

  var fl = document.querySelectorAll(".flt button");
  fl.forEach(function (b) {
    b.onclick = function () {
      fl.forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on");
      var f = b.getAttribute("data-f"), n = 0;
      document.querySelectorAll(".pc").forEach(function (c) { var ok = f === "All" || c.getAttribute("data-c").split("|").indexOf(f) > -1; c.style.display = ok ? "" : "none"; if (ok) n++; });
      document.getElementById("empty").hidden = n > 0;
    };
  });

  document.querySelectorAll("img[data-src]").forEach(function (e) { e.onerror = function () { e.style.visibility = "hidden"; }; e.src = e.getAttribute("data-src"); });
  var els = document.querySelectorAll(".fade");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add("in"); }); }
})();
