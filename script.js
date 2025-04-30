// This JavaScript file contains enhanced functionality for the portfolio website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Netflix Intro Animation with more advanced control
    const netflixIntro = document.querySelector('.netflix-intro');
    const container = document.querySelector('.container');
    
    // Function to handle intro animation completion
    function completeIntroAnimation() {
      netflixIntro.style.opacity = '0';
      container.style.opacity = '1';
      
      setTimeout(function() {
        netflixIntro.style.display = 'none';
      }, 1000);
    }
    
    // Start the intro animation sequence
    setTimeout(completeIntroAnimation, 4000);
    
    // Skip intro animation on click
    netflixIntro.addEventListener('click', completeIntroAnimation);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Add subtle animation to the project info on hover
        const projectInfo = this.querySelector('.project-info');
        projectInfo.style.transform = 'translateY(-10px)';
        projectInfo.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        const projectInfo = this.querySelector('.project-info');
        projectInfo.style.transform = 'translateY(0)';
      });
    });
    
    // Form validation and submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
        }
        
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
        
        // In a real application, you would use fetch or axios to submit the form:
        /*
        fetch('your-server-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message
          }),
        })
        .then(response => response.json())
        .then(data => {
          alert('Message sent successfully!');
          this.reset();
        })
        .catch(error => {
          alert('There was an error sending your message. Please try again later.');
          console.error('Error:', error);
        });
        */
      });
    }
    
    // Scroll animation for elements
    const scrollElements = document.querySelectorAll('.projects, .about, .contact');
    
    // Function to check if element is in view
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
      scrollElements.forEach(el => {
        if (isElementInViewport(el)) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Set initial styles for scroll animation
    scrollElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger once on load
    handleScrollAnimation();
    
    // Dark/Light mode toggle (for future implementation)
    // This is just a placeholder for future functionality
    const darkModeToggle = document.createElement('button');
    darkModeToggle.classList.add('dark-mode-toggle');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.backgroundColor = '#333';
    darkModeToggle.style.color = '#fff';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.width = '50px';
    darkModeToggle.style.height = '50px';
    darkModeToggle.style.fontSize = '20px';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.zIndex = '999';
    
    document.body.appendChild(darkModeToggle);
    
    // Toggle dark/light mode
    let isDarkMode = true;
    darkModeToggle.addEventListener('click', function() {
      if (isDarkMode) {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
        // Update other styles as needed
        this.innerHTML = '☀️';
      } else {
        document.body.style.backgroundColor = '#141414';
        document.body.style.color = '#ffffff';
        this.innerHTML = '🌙';
      }
      isDarkMode = !isDarkMode;
    });
  });