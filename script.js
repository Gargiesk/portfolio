// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// FLOATING AVATAR (SAFE)
const avatar = document.getElementById("avatar");

if (avatar) {
  avatar.addEventListener("click", () => {
    avatar.classList.add("clicked");
    setTimeout(() => avatar.classList.remove("clicked"), 2500);
  });
}
/* =========================
   3D TILT EFFECT (CARDS)
   ========================= */

const tiltElements = document.querySelectorAll(".tilt");

tiltElements.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(0)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

/* =========================
   HERO PARALLAX DEPTH
   ========================= */

const layers = document.querySelectorAll(".layer");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  layers.forEach(layer => {
    const depth = layer.dataset.depth;
    layer.style.transform = `
      translateX(${x * depth}px)
      translateY(${y * depth}px)
      translateZ(${depth * 60}px)
    `;
  });
});
