// Add smooth scrolling to the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({behavior: 'smooth'});
  });
});

// Validate the contact form before submitting
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', event => {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
  }

  if (!isValid) {
    event.preventDefault();
  }
});
