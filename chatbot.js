/* Portfolio bot for Karra Chanakya — 100% client-side, works on file:// too.
   Knowledge base curated with verified engineering achievements, projects & experience. */
(function () {
  'use strict';

  var MAIL = 'chanakyak313@gmail.com',
      PHONE = '+91 9398074313',
      GH = 'https://github.com/chanakyak313-design',
      LI = 'https://www.linkedin.com/in/chanakya-karra',
      STAYSPOT_GH = 'https://github.com/chanakyak313-design/StaySpot',
      FOUNDLY_LIVE = 'https://lost-and-found-brown-two.vercel.app',
      FOUNDLY_GH = 'https://github.com/chanakyak313-design/Lost-and-Found',
      JOBSHIELD_GH = 'https://github.com/chanakyak313-design/AI-Aware-Recruitment-Fraud-Detection',
      SIGNLINK_GH = 'https://github.com/chanakyak313-design/Sign-Link',
      PROCRASTI_GH = 'https://github.com/chanakyak313-design/ProcrastiSense-AI';

  function link(href, text) {
    return '<a href="' + href + '" target="_blank" rel="noopener">' + text + '</a>';
  }

  var KB = [
    {
      k: ['hello', 'hey', 'namaste', 'greetings', 'good morning', 'good evening', ' hi ', 'hi'],
      a: "Hey! I'm the assistant for Chanakya Karra's portfolio. Ask me about his <b>Enterprise AI & Agentforce credentials</b>, <b>projects</b>, <b>500+ LeetCode problems</b>, or how to <b>hire/contact</b> him."
    },
    {
      k: ['who are you', 'about yourself', 'about him', 'about chanakya', 'who is chanakya', 'background', 'introduce', 'yourself', 'bio'],
      a: "<b>Karra Chanakya</b> is a Forward Deployed Engineer and <b>Salesforce Certified Agentforce Specialist</b> (B.Tech CSE, graduating 2028). He builds autonomous enterprise agentic workflows, full-stack microservices on Google Cloud, and has solved <b>500+ LeetCode problems</b> with solid systems fundamentals."
    },
    {
      k: ['agentforce', 'salesforce', 'agent', 'agents', 'agentic', 'mcp', 'model context protocol', 'langgraph', 'autonomous'],
      a: "Chanakya is a <b>Salesforce Certified Agentforce Specialist</b> credentialed in designing autonomous enterprise agents, configuring reasoning engines, action dispatchers, and deterministic guardrails. He also builds multi-agent workflows with <b>Model Context Protocol (MCP)</b>, LangGraph, and Vertex AI."
    },
    {
      k: ['education', 'college', 'university', 'degree', 'study', 'studying', 'btech', 'b tech', 'cgpa', 'school', 'vardhaman', 'marks', 'intermediate', '10th', '12th'],
      a: "<b>B.Tech in Computer Science & Engineering:</b> Vardhaman College of Engineering, Hyderabad (2024–2028, CGPA 8.0/10) · <b>Intermediate (MPC):</b> Pavitra Co-op College (913/1000) · <b>SSC (10th):</b> Nirmala High School (563/600)."
    },
    {
      k: ['skill', 'tech stack', 'technologies', 'language', 'framework', 'what can you do', 'stack', 'tools', 'backend', 'frontend'],
      a: "<b>Enterprise AI:</b> Salesforce Agentforce, MCP, LangGraph, Vertex AI / Gemini API · <b>Backend & Cloud:</b> Python, FastAPI, Node.js/Express, Docker, GCP (Cloud Run, Vertex AI), AWS Lambda · <b>Frontend:</b> React, TypeScript, Tailwind CSS, Vite · <b>Data:</b> PostgreSQL (PostGIS), MongoDB Atlas, SQLite, SQLAlchemy."
    },
    {
      k: ['project', 'work', 'built', 'portfolio', 'showcase'],
      a: "Key shipped projects: <b>TruthLens</b> (Multi-Agent Fact Verification on Vertex AI + MCP), <b>StaySpot</b> (Hostel Discovery & Booking with Razorpay + Gemini), <b>JobShield</b> (Recruitment Fraud Detection with SHAP), <b>Foundly</b> (Lost & Found with realtime chat), <b>TransitHub</b> (PostGIS telemetry), <b>Sign-Link</b>, and <b>ProcrastiSense AI</b>."
    },
    {
      k: ['truthlens', 'fact', 'fact-check', 'verification', 'hallucination', 'multimodal'],
      a: "<b>TruthLens:</b> Enterprise multi-agent fact-verification platform built on Vertex AI / Gemini API, LangGraph, and FastAPI. Implemented custom <b>Model Context Protocol (MCP)</b> servers connecting reasoning agents to external truth registries, reducing factual hallucination by <b>42%</b>."
    },
    {
      k: ['stayspot', 'hostel', 'booking', 'razorpay', 'pg', 'accommodation'],
      a: "<b>StaySpot:</b> AI-powered hostel discovery and vacancy management platform. Features end-to-end booking, room management, RBAC, Razorpay payments with idempotent verification & automated PDF receipts, Google Maps, and Gemini AI. " + link(STAYSPOT_GH, 'GitHub ↗')
    },
    {
      k: ['jobshield', 'fraud', 'recruitment fraud', 'shap', 'forensic', 'explainable'],
      a: "<b>JobShield:</b> Autonomous recruitment fraud detection and forensic screening pipeline with decoupled dual-engine verification and SHAP LinearExplainer telemetry for explainable feature attributions. " + link(JOBSHIELD_GH, 'GitHub ↗')
    },
    {
      k: ['foundly', 'lost and found', 'chat', 'socket', 'socket.io', 'campus'],
      a: "<b>Foundly:</b> Campus lost and found platform featuring intelligent matching, claim management, handover scheduling, and real-time Socket.IO chat with Cloudinary uploads. " + link(FOUNDLY_LIVE, 'Live Demo ↗') + ' · ' + link(FOUNDLY_GH, 'GitHub ↗')
    },
    {
      k: ['transithub', 'bus', 'transit', 'postgis', 'geospatial', 'telemetry', 'docker compose'],
      a: "<b>TransitHub:</b> Real-time geospatial telemetry and bus stop discovery app. 17 FastAPI endpoints with PostGIS spatial indexing optimizing nearby queries to sub-50ms latency, Docker Compose orchestration, and React UI."
    },
    {
      k: ['sign-link', 'sign link', 'sign language', 'gesture', 'mediapipe', 'computer vision'],
      a: "<b>Sign-Link:</b> Real-time computer vision translator that turns webcam-captured hand gestures into readable text, assisting communication for individuals with hearing and speech impairments. " + link(SIGNLINK_GH, 'GitHub ↗')
    },
    {
      k: ['procrastisense', 'procrastination', 'productivity'],
      a: "<b>ProcrastiSense AI:</b> Flask web app with behavioral diagnostics and Gemini-powered productivity insights and personalized habit recommendations. " + link(PROCRASTI_GH, 'GitHub ↗')
    },
    {
      k: ['leetcode', 'dsa', 'algorithm', 'problem solving', 'coding', 'data structures'],
      a: "Chanakya has solved <b>500+ LeetCode problems</b> in Python, C++, and Java, with strong command over Dynamic Programming, Graph algorithms, Trees, and System Design fundamentals."
    },
    {
      k: ['experience', 'internship', 'infosys', 'servicenow', 'smartbridge', 'work experience', 'careerlens'],
      a: "<b>Infosys Springboard:</b> AI & Distributed Architecture Intern (designed microservices & architecture for CareerLens AI) · <b>ServiceNow x SmartBridge:</b> Platform Infrastructure Intern (workflows, incident routing, business rules) · <b>DevOps Hackathon:</b> 3rd Place at Vardhaman College."
    },
    {
      k: ['certification', 'certifications', 'certified', 'credentials', 'snowflake', 'nptel', 'cisco'],
      a: "Certifications: <b>Salesforce Certified Agentforce Specialist</b> · Building AI Agents with Snowflake · Introduction to Generative AI (Google Cloud) · Python Essentials 1 & 2 (Cisco) · Programming in Java (NPTEL) · Introduction to Unix (Infosys)."
    },
    {
      k: ['contact', 'email', 'mail', 'reach', 'phone', 'number', 'linkedin', 'github', 'call'],
      a: 'Reach Chanakya via email at <a href="mailto:' + MAIL + '">' + MAIL + '</a> or call <b>' + PHONE + '</b>. Also connect on ' + link(LI, 'LinkedIn ↗') + ' and ' + link(GH, 'GitHub ↗') + '.'
    },
    {
      k: ['resume', 'cv', 'download'],
      a: 'You can download his official résumé directly from the hero or about section, or click <a href="./Chanakya_Karra_Resume.pdf" target="_blank" rel="noopener">here to view the PDF ↗</a>.'
    },
    {
      k: ['location', 'where', 'based', 'city', 'hyderabad', 'remote', 'relocate'],
      a: "Based in <b>Hyderabad, India</b>, and open to on-site, hybrid, and remote Forward Deployed Engineer / Software Engineer roles worldwide."
    },
    {
      k: ['hire', 'hiring', 'role', 'intern', 'fde', 'swe'],
      a: "Chanakya is actively exploring <b>Forward Deployed Engineer (FDE)</b>, <b>AI / Agentic Systems Engineer</b>, and <b>Software Engineering</b> roles. Use the role selector in the Contact section to trigger a pre-filled email!"
    },
    {
      k: ['thank', 'thanks', 'cool', 'awesome', 'great', 'nice'],
      a: "You're welcome! Feel free to drop Chanakya a line directly via the Contact section below."
    },
    {
      k: ['bye', 'see you', 'goodbye'],
      a: "Goodbye! Have a great day and don't hesitate to reach out to Chanakya anytime."
    }
  ];

  var FALLBACK = "I can answer questions regarding Chanakya's <b>Agentforce certification</b>, <b>projects (TruthLens, StaySpot, JobShield)</b>, <b>500+ LeetCode problems</b>, or <b>contact info</b>. Or write to him directly at <a href=\"mailto:" + MAIL + "\">" + MAIL + "</a>.";
  var CHIPS = ['Agentforce?', 'TruthLens?', 'StaySpot?', '500+ LeetCode?', 'Contact Chanakya?'];

  function norm(s) {
    return ' ' + String(s || '').toLowerCase().replace(/[^a-z0-9+\s]/g, ' ').replace(/\s+/g, ' ') + ' ';
  }

  function kwHit(n, words, raw) {
    var k = String(raw || '').trim().toLowerCase();
    if (!k) return false;
    if (n.indexOf(' ' + k + ' ') !== -1) return true;
    if (k.indexOf(' ') !== -1) return false;
    if (k.length < 4) return false;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (w && w.length >= 4 && (w.indexOf(k) === 0 || k.indexOf(w) === 0)) return true;
    }
    return false;
  }

  function match(q) {
    var n = norm(q), words = n.split(' '), best = null, bs = 0, i, j, s;
    for (i = 0; i < KB.length; i++) {
      s = 0;
      for (j = 0; j < KB[i].k.length; j++) {
        if (kwHit(n, words, KB[i].k[j])) {
          s += (KB[i].k[j].indexOf(' ') !== -1 ? 3 : 1);
        }
      }
      if (s > bs) {
        bs = s;
        best = KB[i];
      }
    }
    return bs > 0 ? best.a : FALLBACK;
  }

  var fab = document.getElementById('botFab'),
      panel = document.getElementById('botPanel'),
      closeBtn = document.getElementById('botClose'),
      msgs = document.getElementById('botMsgs'),
      chips = document.getElementById('botChips'),
      form = document.getElementById('botForm'),
      input = document.getElementById('botInput');

  if (!fab || !panel) return;

  function toggle(open) {
    var state = open !== undefined ? open : !panel.classList.contains('open');
    panel.classList.toggle('open', state);
    panel.setAttribute('aria-hidden', state ? 'false' : 'true');
    fab.setAttribute('aria-expanded', state ? 'true' : 'false');
    if (state && input) setTimeout(function () { input.focus(); }, 120);
  }

  fab.addEventListener('click', function () { toggle(); });
  if (closeBtn) closeBtn.addEventListener('click', function () { toggle(false); });

  function addMsg(html, sender) {
    var div = document.createElement('div');
    div.className = 'bot-msg ' + sender;
    div.innerHTML = html;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function showTyping() {
    var div = document.createElement('div');
    div.className = 'bot-msg bot typing';
    div.id = 'botTyping';
    div.innerHTML = '<span class="tdot"></span><span class="tdot"></span><span class="tdot"></span>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById('botTyping');
    if (el) el.remove();
  }

  function respond(q) {
    showTyping();
    var wait = 300 + Math.random() * 350;
    setTimeout(function () {
      hideTyping();
      addMsg(match(q), 'bot');
    }, wait);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q) return;
      addMsg(q, 'user');
      input.value = '';
      respond(q);
    });
  }

  // render suggestion chips
  if (chips) {
    CHIPS.forEach(function (label) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bot-chip';
      btn.textContent = label;
      btn.addEventListener('click', function () {
        addMsg(label, 'user');
        respond(label);
      });
      chips.appendChild(btn);
    });
  }

  // initial greeting
  addMsg("Hi! I'm <b>Chanakya's portfolio assistant</b>. Ask me anything about his autonomous AI agents, full-stack builds, LeetCode record, or how to contact him!", 'bot');
})();
