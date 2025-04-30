// Enhanced Netflix Animation Script
document.addEventListener('DOMContentLoaded', function() {
    // Create the enhanced Netflix intro animation
    function createNetflixIntro() {
      // Get the existing Netflix intro container
      const netflixIntro = document.querySelector('.netflix-intro');
      
      // Add the enhanced animation elements
      const enhancedIntroHTML = `
        <div class="netflix-container">
          <div class="netflix-logo">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="netflix-shine"></div>
          </div>
          <div class="netflix-text">PORTFOLIO</div>
          
          <!-- Add Netflix sound effect -->
          <audio id="netflix-sound" preload="auto">
            <source src="data:audio/mpeg;base64,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" type="audio/mpeg">
          </audio>
          
          <!-- Add skip button -->
          <button class="skip-intro">Skip Intro</button>
        </div>
      `;
      
      // Replace the intro content
      netflixIntro.innerHTML = enhancedIntroHTML;
      
      // Get the audio element and play it when animation starts
      const netflixSound = document.getElementById('netflix-sound');
      
      // Play the sound with a slight delay
      setTimeout(() => {
        netflixSound.play().catch(error => {
          console.log('Auto-play was prevented. Click interaction needed.');
        });
      }, 500);
      
      // Add skip button functionality
      const skipButton = document.querySelector('.skip-intro');
      skipButton.addEventListener('click', completeIntroAnimation);
      
      // Function to handle intro animation completion
      function completeIntroAnimation() {
        netflixIntro.style.opacity = '0';
        document.querySelector('.container').style.opacity = '1';
        
        // Fade out sound if playing
        if (!netflixSound.paused) {
          let volume = 1.0;
          const fadeAudio = setInterval(() => {
            if (volume > 0) {
              volume -= 0.1;
              netflixSound.volume = Math.max(0, volume);
            } else {
              clearInterval(fadeAudio);
              netflixSound.pause();
            }
          }, 50);
        }
        
        setTimeout(function() {
          netflixIntro.style.display = 'none';
        }, 1000);
      }
      
      // Start the intro animation sequence
      setTimeout(completeIntroAnimation, 4000);
    }
    
    // Create and add CSS for the enhanced Netflix intro
    function addNetflixStyles() {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .netflix-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        
        .skip-intro {
          position: absolute;
          bottom: 30px;
          right: 30px;
          padding: 8px 16px;
          background-color: rgba(51, 51, 51, 0.7);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .skip-intro:hover {
          background-color: rgba(229, 9, 20, 0.7);
        }
        
        /* Enhanced Netflix Animation */
        .netflix-logo {
          position: relative;
          width: 120px;
          height: 300px;
          transform: scale(1.5);
        }
        
        .netflix-logo .line {
          position: absolute;
          height: 100%;
          width: 30px;
          background: #E50914;
          border-radius: 4px;
          transform: scaleY(0);
          animation: netflix-animation 2s forwards;
          box-shadow: 0 0 20px rgba(229, 9, 20, 0.7);
        }
        
        .netflix-logo .line:nth-child(1) {
          left: 0;
          animation-delay: 0s;
        }
        
        .netflix-logo .line:nth-child(2) {
          left: 45px;
          animation-delay: 0.5s;
        }
        
        .netflix-logo .line:nth-child(3) {
          right: 0;
          animation-delay: 1s;
        }
        
        @keyframes netflix-animation {
          0% {
            transform: scaleY(0);
          }
          40% {
            transform: scaleY(1);
          }
          60% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(1) translateX(0);
          }
        }
        
        .netflix-text {
          position: absolute;
          color: #E50914;
          font-size: 42px;
          font-weight: bold;
          opacity: 0;
          letter-spacing: 12px;
          animation: text-appear 1s forwards;
          animation-delay: 2.5s;
          text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
        }
        
        @keyframes text-appear {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .netflix-shine {
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shine-effect 3s infinite;
          animation-delay: 3s;
        }
        
        @keyframes shine-effect {
          0% {
            left: -150%;
          }
          30% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }
      `;
      
      document.head.appendChild(styleElement);
    }
    
    // Initialize the enhanced Netflix intro
    addNetflixStyles();
    createNetflixIntro();
    
    // Add scroll animations
    function initScrollAnimations() {
      // Get all elements to animate on scroll
      const sections = document.querySelectorAll('.projects, .about, .contact');
      
      // Add scroll-reveal class to all sections
      sections.forEach(section => {
        section.classList.add('scroll-reveal');
      });
      
      // Function to check if element is in viewport
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
      }
      
      // Function to handle scroll animation
      function handleScrollAnimation() {
        sections.forEach(section => {
          if (isInViewport(section)) {
            section.classList.add('active');
          }
        });
      }
      
      // Add scroll event listener
      window.addEventListener('scroll', handleScrollAnimation);
      
      // Trigger once on load
      handleScrollAnimation();
    }
    
    // Initialize scroll animations
    initScrollAnimations();
  });