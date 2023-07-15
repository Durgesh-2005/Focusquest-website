// Smooth scroll when clicking on anchor tag
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  