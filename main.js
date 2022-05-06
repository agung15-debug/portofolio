// SKILL SECTION
const cards = document.querySelectorAll("[data-target]"),
  cardContent = document.querySelectorAll("[data-content]");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = document.querySelector(card.dataset.target);

    cardContent.forEach((item) => {
      item.classList.remove("skill-selected");
    });
    target.classList.add("skill-selected");

    cards.forEach((card) => {
      card.classList.remove("skill-selected");
    });
    card.classList.add("skill-selected");
  });
});

//smooth scrool link
const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");
for (let index = 0; index < smoothScrollAnchor.length; index++) {
  const el = smoothScrollAnchor[index];

  el.addEventListener("click", function (ev) {
    ev.preventDefault();

    if (document.getElementById(this.getAttribute("href").replace("#", "")))
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
  });
}

//scroll to top
toTop = document.getElementById("to-top");
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//active nav
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  sections.forEach((active) => {
    const sectionHeight = active.offsetHeight;
    const sectionTop = active.offsetTop - 200,
      sectionId = active.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
});

AOS.init();
