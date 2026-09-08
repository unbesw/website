// ESW UNB — small progressive-enhancement script.
// Everything works without JS; this just improves the mobile menu.

(function () {
  "use strict";

  // --- Mobile navigation toggle ---
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after tapping a link (mobile).
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Keep the footer year current ---
  document.querySelectorAll("#year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
