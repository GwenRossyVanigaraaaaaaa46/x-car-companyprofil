// Form validation and interaction script
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Form validation
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validateForm() {
    let valid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Name is required');
      valid = false;
    } else {
      showSuccess(nameInput);
    }
    
    // Validate email
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'Email is required');
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email');
      valid = false;
    } else {
      showSuccess(emailInput);
    }
    
    // Validate message
    if (messageInput.value.trim() === '') {
      showError(messageInput, 'Message is required');
      valid = false;
    } else {
      showSuccess(messageInput);
    }
    
    return valid;
  }
  
  function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    
    // Check if error message already exists
    let errorMessage = formGroup.querySelector('.error-message');
    
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      formGroup.appendChild(errorMessage);
    }
    
    errorMessage.innerText = message;
    input.classList.add('error-input');
  }
  
  function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
      formGroup.removeChild(errorMessage);
    }
    
    input.classList.remove('error-input');
  }
  
  // Form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      // Add loading state
      submitButton.classList.add('loading');
      submitButton.querySelector('span').innerText = 'Sending...';
      
      // Simulate form submission
      setTimeout(function() {
        submitButton.classList.remove('loading');
        submitButton.querySelector('span').innerText = 'Message Sent!';
        submitButton.classList.add('success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(function() {
          submitButton.querySelector('span').innerText = 'Send Message';
          submitButton.classList.remove('success');
        }, 3000);
      }, 2000);
    }
  });
  
  // Add active class to current navigation item
  const navLinks = document.querySelectorAll('.main-navigation a');
  const currentPage = window.location.pathname.split('/').pop();
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});