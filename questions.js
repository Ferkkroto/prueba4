
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        let answer = toggle.closest('.faq-item').querySelector('.faq-answer');
        if (toggle.classList.contains('active')) {
          answer.style.display = 'block';
          toggle.textContent = '−';
        } else {
          answer.style.display = 'none';
          toggle.textContent = '+';
        }
      });
    });
  });
  


