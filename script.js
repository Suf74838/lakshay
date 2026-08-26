/* =========================================================
   LAKSHAY ASSOCIATES AND CONSULTANTS
   script.js  -  one file for all 4 pages
   No libraries. Plain JavaScript so it stays easy to edit.
   ========================================================= */
 
/* ---------------------------------------------------------
   1. YOUR DETAILS  (edit these three lines only)
   --------------------------------------------------------- */
const BUSINESS = {
  whatsapp: "910000000000",              // PLACEHOLDER: country code + number, no + and no spaces
  phone: "+910000000000",                // PLACEHOLDER
  email: "info@lakshayassociates.in"     // PLACEHOLDER
};
 
/* How many service cards to show on the home page.
   Change 6 to 13 if you want every standard on the home page. */
const HOME_CARDS = 6;
 
/* ---------------------------------------------------------
   2. THE 13 STANDARDS  (single source for every page)
   --------------------------------------------------------- */
const SERVICES = [
  {
    id: "iso-9001", code: "ISO 9001:2015", name: "Quality Management", accent: "var(--a1)", icon: "check",
    what: "A quality management system that helps you deliver consistent products and services.",
    who: "Any business, in any sector, that wants fewer errors and steadier customer satisfaction.",
    how: "We map your existing processes, build the documentation and prepare your team for the audit."
  },
  {
    id: "iso-14001", code: "ISO 14001:2015", name: "Environmental Management", accent: "var(--a1)", icon: "leaf",
    what: "A framework for managing your environmental impact and legal obligations.",
    who: "Manufacturing, construction, logistics and any business under environmental scrutiny.",
    how: "We identify your environmental aspects, set the controls and get your records audit ready."
  },
  {
    id: "iso-45001", code: "ISO 45001:2018", name: "Occupational Health &amp; Safety", accent: "var(--a3)", icon: "shield",
    what: "A system for reducing workplace risk and preventing injury.",
    who: "Factories, project sites, warehouses and teams working in the field.",
    how: "We run the risk assessment, write the safety procedures and train your responsible people."
  },
  {
    id: "iso-37001", code: "ISO 37001:2025", name: "Anti-Bribery Management", accent: "var(--a4)", icon: "scale",
    what: "Controls that help you prevent, detect and respond to bribery.",
    who: "Businesses bidding for tenders, large contracts and public sector work.",
    how: "We design your anti-bribery policy, due diligence checks and reporting process."
  },
  {
    id: "iso-27001", code: "ISO 27001:2022", name: "Information Security", accent: "var(--a6)", icon: "lock",
    what: "The global standard for protecting company and customer information.",
    who: "IT companies, SaaS products, BPO, fintech and anyone holding sensitive client data.",
    how: "We scope your ISMS, run the risk assessment and prepare the Statement of Applicability."
  },
  {
    id: "iso-20000", code: "ISO 20000-1:2018", name: "IT Service Management", accent: "var(--a2)", icon: "server",
    what: "A standard for running IT services reliably and to an agreed service level.",
    who: "IT service providers, managed service teams and internal IT departments.",
    how: "We align your service processes, SLAs and incident handling with the standard."
  },
  {
    id: "iso-22000", code: "ISO 22000:2018", name: "Food Safety Management", accent: "var(--a5)", icon: "food",
    what: "A food safety management system built around HACCP principles.",
    who: "Food manufacturers, processors, packers, cloud kitchens and caterers.",
    how: "We build your HACCP plan, hygiene controls and traceability records."
  },
  {
    id: "iso-27701", code: "ISO 27701:2019", name: "Privacy Information Management", accent: "var(--a4)", icon: "user",
    what: "A privacy extension to ISO 27001 for handling personal data responsibly.",
    who: "Businesses processing customer or employee personal data at scale.",
    how: "We map your data flows, set the privacy controls and align them with your ISMS."
  },
  {
    id: "iso-42001", code: "ISO 42001:2023", name: "AI Management", accent: "var(--a6)", icon: "chip",
    what: "A management system for the responsible development and use of artificial intelligence.",
    who: "Companies building, deploying or reselling AI driven products and features.",
    how: "We define your AI governance, risk controls and human oversight process."
  },
  {
    id: "iso-50001", code: "ISO 50001:2018", name: "Energy Management", accent: "var(--a5)", icon: "bolt",
    what: "A system for tracking and steadily reducing energy consumption.",
    who: "Plants, hotels, hospitals, malls and other high consumption facilities.",
    how: "We set your energy baseline, performance indicators and improvement plan."
  },
  {
    id: "iso-13485", code: "ISO 13485:2016", name: "Medical Devices", accent: "var(--a2)", icon: "cross",
    what: "A quality management system built specifically for medical device regulation.",
    who: "Device manufacturers, component suppliers, sterilisers and distributors.",
    how: "We prepare your design controls, device files and regulatory documentation."
  },
  {
    id: "iso-22301", code: "ISO 22301:2019", name: "Business Continuity", accent: "var(--a3)", icon: "refresh",
    what: "A tested plan for keeping the business running through disruption.",
    who: "Banks, IT firms, logistics and any operation where downtime is expensive.",
    how: "We run the business impact analysis and build your continuity and recovery plans."
  },
  {
    id: "iso-41001", code: "ISO 41001:2018", name: "Facility Management", accent: "var(--a1)", icon: "building",
    what: "A management system for delivering facility services consistently.",
    who: "Facility management companies, campuses, malls and large office operations.",
    how: "We structure your FM processes, service levels and performance reviews."
  }
];
 
/* ---------------------------------------------------------
   3. ICONS
   --------------------------------------------------------- */
const ICONS = {
  check:    '<path d="M20 6L9 17l-5-5"/>',
  leaf:     '<path d="M11 20A7 7 0 0 1 4 13c0-6 9-9 16-9 0 7-3 16-9 16z"/><path d="M4 20c3-6 7-9 11-11"/>',
  shield:   '<path d="M12 3l7 4v5c0 4.4-3 8.3-7 9-4-.7-7-4.6-7-9V7l7-4z"/>',
  scale:    '<path d="M12 3v18M5 7h14"/><path d="M5 7l-3 6h6zM19 7l-3 6h6z"/>',
  lock:     '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  server:   '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  food:     '<path d="M6 3v8a3 3 0 0 0 6 0V3M9 11v10"/><path d="M17 3c-1.5 2-2 4-2 7h4c0-3-.5-5-2-7zM17 10v11"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  chip:     '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  bolt:     '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
  cross:    '<path d="M12 5v14M5 12h14"/>',
  refresh:  '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/>'
};
 
const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
 
function iconSvg(name) {
  return '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.check) + '</svg>';
}
 
/* ---------------------------------------------------------
   4. BUILD THE HOME PAGE SERVICE CARDS
   --------------------------------------------------------- */
const cardWrap = document.getElementById("serviceCards");
if (cardWrap) {
  cardWrap.innerHTML = SERVICES.slice(0, HOME_CARDS).map(function (s) {
    return '' +
      '<a class="card reveal" href="services.html#' + s.id + '" style="--accent:' + s.accent + '">' +
        '<div class="card__icon">' + iconSvg(s.icon) + '</div>' +
        '<div>' +
          '<div class="card__code">' + s.code + '</div>' +
          '<div class="card__name">' + s.name + '</div>' +
        '</div>' +
        '<span class="card__more">Learn more ' + arrow + '</span>' +
      '</a>';
  }).join("");
}
 
/* ---------------------------------------------------------
   5. BUILD THE SERVICES PAGE LIST (click to expand)
   --------------------------------------------------------- */
const svcWrap = document.getElementById("serviceList");
if (svcWrap) {
  svcWrap.innerHTML = SERVICES.map(function (s, i) {
    const n = String(i + 1).padStart(2, "0");
    return '' +
      '<div class="svc" id="' + s.id + '">' +
        '<button class="svc__head" aria-expanded="false">' +
          '<span class="svc__index">' + n + '</span>' +
          '<span class="svc__title">' +
            '<span class="svc__code">' + s.code + '</span>' +
            '<span class="svc__name">' + s.name + '</span>' +
          '</span>' +
          '<span class="svc__toggle">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>' +
          '</span>' +
        '</button>' +
        '<div class="svc__panel">' +
          '<div class="svc__inner">' +
            '<span></span>' +
            '<div class="svc__body">' +
              '<div><h4>What it is</h4><p>' + s.what + '</p></div>' +
              '<div><h4>Who it is for</h4><p>' + s.who + '</p></div>' +
              '<div><h4>How we help</h4><p>' + s.how + '</p></div>' +
              '<div class="svc__cta">' +
                '<a class="btn btn--navy" href="contact.html?service=' + encodeURIComponent(s.code) + '">Enquire About This Certification ' + arrow + '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }).join("");
 
  // open and close
  svcWrap.querySelectorAll(".svc__head").forEach(function (head) {
    head.addEventListener("click", function () {
      const item = head.parentElement;
      const panel = item.querySelector(".svc__panel");
      const open = item.classList.contains("is-open");
 
      svcWrap.querySelectorAll(".svc").forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".svc__panel").style.maxHeight = null;
        other.querySelector(".svc__head").setAttribute("aria-expanded", "false");
      });
 
      if (!open) {
        item.classList.add("is-open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        head.setAttribute("aria-expanded", "true");
      }
    });
  });
 
  // if someone arrives from a home page card, open that standard
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && target.classList.contains("svc")) {
      setTimeout(function () {
        target.querySelector(".svc__head").click();
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }
}
 
/* ---------------------------------------------------------
   6. CONTACT FORM DROPDOWN + SUBMIT
   --------------------------------------------------------- */
const certSelect = document.getElementById("certification");
if (certSelect) {
  SERVICES.forEach(function (s) {
    const opt = document.createElement("option");
    opt.value = s.code + " " + s.name.replace("&amp;", "&");
    opt.textContent = s.code + " " + s.name.replace("&amp;", "&");
    certSelect.appendChild(opt);
  });
  const other = document.createElement("option");
  other.value = "Not sure yet";
  other.textContent = "Not sure yet, please advise";
  certSelect.appendChild(other);
 
  // preselect if the visitor came from a service card
  const fromUrl = new URLSearchParams(window.location.search).get("service");
  if (fromUrl) {
    Array.from(certSelect.options).forEach(function (o) {
      if (o.value.indexOf(fromUrl) === 0) certSelect.value = o.value;
    });
  }
}
 
const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
 
    form.querySelectorAll("[required]").forEach(function (field) {
      const note = field.parentElement.querySelector("small");
      let message = "";
      if (!field.value.trim()) {
        message = "This field is needed.";
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        message = "Enter a valid email address.";
      } else if (field.type === "tel" && field.value.replace(/\D/g, "").length < 10) {
        message = "Enter a 10 digit phone number.";
      }
      if (note) note.textContent = message;
      if (message) valid = false;
    });
 
    if (!valid) return;
 
    // No server is connected yet, so the enquiry opens in the mail app with
    // everything filled in. See README.txt to connect a form service later.
    const get = function (id) { return (document.getElementById(id) || {}).value || ""; };
    const body =
      "Name: " + get("name") + "\n" +
      "Company: " + get("company") + "\n" +
      "Phone: " + get("phone") + "\n" +
      "Email: " + get("email") + "\n" +
      "Certification required: " + get("certification") + "\n\n" +
      "Message:\n" + get("message");
 
    window.location.href = "mailto:" + BUSINESS.email +
      "?subject=" + encodeURIComponent("Consultation request: " + get("certification")) +
      "&body=" + encodeURIComponent(body);
  });
}
 
/* ---------------------------------------------------------
   7. NAVIGATION
   --------------------------------------------------------- */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
 
if (burger) {
  burger.addEventListener("click", function () {
    const open = menu.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");
      burger.classList.remove("is-open");
    });
  });
}
 
window.addEventListener("scroll", function () {
  if (nav) nav.classList.toggle("is-stuck", window.scrollY > 12);
});
 
/* ---------------------------------------------------------
   8. SCROLL REVEAL
   --------------------------------------------------------- */
const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
 
document.querySelectorAll(".reveal").forEach(function (el, i) {
  el.style.transitionDelay = (i % 4) * 0.07 + "s";
  io.observe(el);
});
 
/* ---------------------------------------------------------
   9. COUNTER (only counts real numbers on the page)
   --------------------------------------------------------- */
document.querySelectorAll("[data-count]").forEach(function (el) {
  const target = parseInt(el.dataset.count, 10);
  const counter = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    let current = 0;
    const tick = setInterval(function () {
      current++;
      el.textContent = current;
      if (current >= target) clearInterval(tick);
    }, 900 / target);
    counter.disconnect();
  }, { threshold: 0.4 });
  counter.observe(el);
});
 
/* ---------------------------------------------------------
   10. SMALL THINGS
   --------------------------------------------------------- */
// apply the phone, email and WhatsApp details from step 1
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (a) {
  a.href = "https://wa.me/" + BUSINESS.whatsapp;
});
document.querySelectorAll('a[href^="tel:"]').forEach(function (a) { a.href = "tel:" + BUSINESS.phone; });
document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
  if (a.href.indexOf("?") === -1) a.href = "mailto:" + BUSINESS.email;
});
 
// current year in the footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
 
// hide the loading screen
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) setTimeout(function () { loader.classList.add("is-done"); }, 250);
});
 