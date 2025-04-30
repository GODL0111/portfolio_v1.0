# portfolio_v1.0
My Netflix Style portfolio


# Netflix-Inspired Portfolio Website

A modern, responsive portfolio website with a Netflix-inspired intro animation and sleek design.

## Features

- **Netflix-Style Intro Animation**: An eye-catching animation resembling the iconic Netflix intro sequence
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Project Showcase**: Elegant grid layout to highlight your work
- **Contact Form**: Fully functional contact form with validation
- **Custom Animations**: Scroll animations and hover effects

## Files Included

1. **index.html**: The main HTML file containing the structure of the website
2. **styles.css**: The main CSS file for styling (extracted from the inline styles)
3. **script.js**: The main JavaScript file for functionality
4. **netflix-animation.js**: Enhanced Netflix intro animation script

## How to Use

1. **Basic Setup**:
   - Download all files to your local machine
   - Open `index.html` in a web browser to view the website

2. **Customization**:
   - Replace placeholder text and images with your own content
   - Update the project cards with your actual projects
   - Add your own photo and about information
   - Update contact information and social media links

3. **Customizing the Netflix Intro**:
   - The intro animation can be modified in the `netflix-animation.js` file
   - You can change the animation timing, colors, and text

4. **Adding Projects**:
   - To add a new project, copy an existing project card in the HTML and update:
     ```html
     <div class="project-card">
       <img src="path/to/your/project-image.jpg" alt="Project Title">
       <div class="project-info">
         <h3>Project Title</h3>
         <p>Project description goes here.</p>
         <a href="#" class="btn">View Project</a>
       </div>
     </div>
     ```

## Customization Options

### Colors

The main color scheme uses:
- Background: `#141414` (Dark Netflix background)
- Accent Color: `#E50914` (Netflix Red)
- Text: `#ffffff` (White) and `#cccccc` (Light Gray)

To change the color scheme, search for these values in the CSS and replace them with your preferred colors.

### Fonts

The default font is Arial. To use a custom font:

1. Add the font import to the head of the HTML:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
   ```

2. Update the font-family in the CSS:
   ```css
   * {
     font-family: 'Your Font', sans-serif;
   }
   ```

### Adding Pages

To add additional pages to your portfolio:

1. Create a new HTML file (e.g., `project-details.html`)
2. Copy the header and footer from `index.html`
3. Add your content between the header and footer
4. Link to the new page from the navigation menu or project cards

## Advanced Customization

### Disabling the Netflix Intro

If you want to disable the Netflix intro:

1. Open `index.html`
2. Remove the Netflix intro section:
   ```html
   <!-- Remove this section -->
   <div class="netflix-intro">
     <div class="netflix-logo">
       <div class="line"></div>
       <div class="line"></div>
       <div class="line"></div>
     </div>
     <div class="netflix-text">PORTFOLIO</div>
   </div>
   ```

3. Update the JavaScript to not wait for the intro:
   ```javascript
   document.querySelector('.container').style.opacity = '1';
   ```

### Adding Analytics

To add Google Analytics:

1. Get your Google Analytics tracking code
2. Add it to the `<head>` of your HTML file:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-ID');
   </script>
   ```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Credits

- Inspired by Netflix's intro animation
- Placeholder images: Use your own project images or free stock photos

## License

This project is available for personal and commercial use.

---

## Need Help?

If you need assistance customizing this template:
- Check our documentation
- Contact us through the support portal
- Consider hiring a developer for custom modifications

Happy showcasing your portfolio!
