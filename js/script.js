// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Submission with EmailJS
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Use EmailJS to send the form data
  alert('Message sent successfully!');
});
