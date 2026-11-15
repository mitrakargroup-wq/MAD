var D = (function () {
  var U = function (id) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=1600&q=70"; };
  var P = ["photo-1486406146926-c627a92ad1ab","photo-1503387762-592deb58ef4e","photo-1487958449943-2429e8be8625","photo-1518005020951-eccb494ad742","photo-1511818966892-d7d671e672a2","photo-1545324418-cc1a3fa10c00"].map(U);
  return {
    P: P,
    IMG: { hero: P[0], about: P[1], cta: P[2], j1: P[3], j2: P[4], j3: P[5] },
    PROJECTS: [
      { s: "residence-one", n: "Residence One", l: "Indore", y: "2024", t: "Residential", a: "4,200 sq ft", i: 4, d: "A private home organised around a central courtyard, balancing privacy with daylight and cross-ventilation suited to Indore's climate." },
      { s: "commercial-block", n: "Commercial Block", l: "Indore", y: "2023", t: "Commercial", a: "18,000 sq ft", i: 0, d: "A mixed retail and office block with a clean, repeatable facade and efficient floor plates." },
      { s: "courtyard-house", n: "Courtyard House", l: "Madhya Pradesh", y: "2023", t: "Residential", a: "5,600 sq ft", i: 2, d: "A low-rise family house that opens onto landscaped terraces and shaded outdoor rooms." },
      { s: "office-interiors", n: "Office Interiors", l: "Indore", y: "2022", t: "Interiors", a: "7,500 sq ft", i: 5, d: "A workplace interior built around natural light, acoustic comfort and flexible planning." },
      { s: "studio-pavilion", n: "Studio Pavilion", l: "Madhya Pradesh", y: "2025", t: "Hospitality", a: "3,000 sq ft", i: 1, d: "A compact pavilion for gatherings, designed with simple materials and strong lines." }
    ],
    TEAM: [
      { n: "Principal Architect", r: "Design Direction", c: "Leads concept and design strategy across every project." },
      { n: "Senior Architect", r: "Residential & Commercial", c: "Develops drawings and coordinates consultants." },
      { n: "Project Manager", r: "Site & Execution", c: "Runs schedules, vendors and quality on site." },
      { n: "Interior Designer", r: "Interiors & Detailing", c: "Shapes materials, joinery and finishes." }
    ],
    PARTNERS: [
      { n: "Urban Developers", i: 3 }, { n: "Industrial Partners", i: 0 },
      { n: "Hospitality Group", i: 2 }, { n: "Residential Clients", i: 4 }
    ],
    SERVICES: [
      { n: "Architecture", d: "Complete architectural design from concept sketches to working drawings for homes, offices and developments." },
      { n: "Interior Design", d: "Space planning, materials, lighting and custom furniture that match the architecture." },
      { n: "Planning & Approvals", d: "Technical documentation and coordination with local authorities and consultants." },
      { n: "Project Management", d: "On-site supervision, vendor coordination and quality control through handover." }
    ],
    POSTS: [
      { s: "precision-in-practice", n: "Precision in Practice", d: "Detail and discipline behind every successful build.", i: 3, b: ["A building is only as good as its details. Every junction, edge and joint is decided on paper long before it is built.", "Clear drawings and early coordination with engineers and contractors keep surprises off site.", "Precision is a habit we practise on every project, large or small."] },
      { s: "modern-residential-design", n: "Modern Residential Design", d: "Contemporary living shaped by clarity and function.", i: 4, b: ["A good home starts with how a family actually lives. We plan rooms around routines, light and views.", "In Indore's climate, shaded openings, courtyards and cross-ventilation make homes more comfortable.", "Simple materials, honestly used, give homes that age well."] },
      { s: "the-power-of-space", n: "The Power of Space", d: "How architecture influences experience and emotion.", i: 5, b: ["Proportion, light and sequence shape how a place feels long before anyone notices the finishes.", "We design transitions as carefully as rooms: entrances, corridors and thresholds.", "Space that feels right is rarely accidental."] },
      { s: "from-concept-to-build", n: "From Concept to Build", d: "Turning ideas into precise architectural reality.", i: 0, b: ["Every project moves through discovery, concept, development and execution.", "Review points at each stage keep clients informed and decisions clear.", "Keeping design and execution in one team protects the original idea."] }
    ]
  };
})();
