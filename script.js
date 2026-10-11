
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

document.getElementById("year").textContent =
  new Date().getFullYear();