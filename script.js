document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  yearEl.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  const btnNavEl = document.querySelector(".btn-mob");
  const headerEl = document.querySelector(".header"); // <-- FIXED THIS LINE

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("open-nav"); // <-- use a class that makes sense
  });
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  });

  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});
