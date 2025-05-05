document.addEventListener('DOMContentLoaded', function () {
    // existing nav logic
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.dataset.target;
  
        sections.forEach(section => {
          section.style.display = 'none';
        });
  
        const targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
  
        // Close mobile menu on click
        document.getElementById('mobile-menu').style.display = 'none';
      });
    });
  
    // mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuToggle.addEventListener('click', function () {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
    });
  });
  