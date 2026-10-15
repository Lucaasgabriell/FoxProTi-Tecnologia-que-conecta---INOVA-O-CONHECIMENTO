(function () {
  "use strict";

  var button = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".site-nav");
  if (!button || !navigation) return;

  function closeMenu() {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  button.addEventListener("click", function () {
    var open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) closeMenu();
  });
}());
