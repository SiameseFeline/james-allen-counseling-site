// Concern finder: chips highlight the matching service and explain it.
(function () {
  var chips = document.querySelectorAll(".chip");
  var result = document.getElementById("finderResult");
  if (!chips.length || !result) return;
  chips.forEach(function (chip) {
    chip.setAttribute("aria-pressed", "false");
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      document.querySelectorAll(".svc.highlight").forEach(function (s) { s.classList.remove("highlight"); });
      chip.setAttribute("aria-pressed", "true");
      var target = document.getElementById(chip.getAttribute("data-target"));
      if (target) target.classList.add("highlight");
      var page = chip.getAttribute("data-page");
      var link = page ? '<a href="' + page + '">Learn more about this service</a> or ' : '<a href="#services">See this service below</a> or ';
      result.innerHTML = chip.getAttribute("data-msg") + " " + link + '<a href="tel:+12814138063">call (281) 413-8063</a>.';
    });
  });
})();

// FAQ accordion
(function () {
  document.querySelectorAll(".faq button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq");
      var open = item.classList.contains("open");
      document.querySelectorAll(".faq.open").forEach(function (f) {
        f.classList.remove("open");
        f.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
