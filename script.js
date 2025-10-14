// script.js

document.addEventListener('DOMContentLoaded', () => {

  // 1. Project Scroller
  const projectGrid = document.querySelector('.project-grid');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');

  if (projectGrid && scrollLeftBtn && scrollRightBtn) {
    const scrollAmount = projectGrid.clientWidth * 0.8; // Scroll 80% of the container width

    scrollLeftBtn.addEventListener('click', () => {
      projectGrid.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      projectGrid.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  }

  // 2. Accordion Functionality
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      const content = item.querySelector('.accordion-content');
      const wasActive = item.classList.contains('active');

      // Close all other items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      // Toggle the clicked item
      if (!wasActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });

});