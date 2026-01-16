// ===============================
// Sticky Header on Scroll
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ===============================
// Active Navbar Link on Scroll
// ===============================
const sections = document.querySelectorAll("section, .products");
const navLinks = document.querySelectorAll(".navbar li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===============================
// ScrollReveal Animations
// ===============================
ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal(".text, .heading", { origin: "top" });
ScrollReveal().reveal(".form-container, .about-img", { origin: "left" });
ScrollReveal().reveal(".products-container .box, .service-container .box, .reviews-container .box", {
  origin: "bottom",
  interval: 200
});
ScrollReveal().reveal(".about-text", { origin: "right" });

// ===============================
// Order Form Submission Alert
// ===============================
const orderForm = document.querySelector(".form-container form");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Thank you! Your order has been placed successfully.");
  orderForm.reset();
});

// ===============================
// Newsletter Subscribe Alert
// ===============================
const subscribeBtn = document.querySelector(".newsletter .btn");

subscribeBtn.addEventListener("click", () => {
  alert("✅ Thank you for subscribing to our newsletter!");
});

// ===============================
// Button Hover Effect (JS touch)
// ===============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});
