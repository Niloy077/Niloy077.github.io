// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("active");
  });
});

const emailCopy = document.getElementById("email-copy");

if (emailCopy) {
  const toast = emailCopy
    .closest(".social-item")
    .querySelector(".copy-toast");

  emailCopy.addEventListener("click", (e) => {
    e.preventDefault(); // stops smooth-scroll hijack

    navigator.clipboard.writeText("niloybiswas0100@gmail.com");

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  });
}
