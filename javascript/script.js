
// navbar function 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

// text animation in hero section
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "AI & ML Engineer";
    }, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);

// accordian function 

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-container');

    accordions.forEach((accordion) => {
        const accordionHeaders = accordion.querySelectorAll('.accordion-header');
        const accordionContents = accordion.querySelectorAll('.accordion-content');

        // Open the second section on page load for each accordion
        const secondAccordionContent = accordionContents[0];
        const secondAccordionIcon = accordionHeaders[1].querySelector('i');

        secondAccordionContent.classList.add('open');
        secondAccordionContent.style.maxHeight = secondAccordionContent.scrollHeight + 'px';
        if (secondAccordionIcon) secondAccordionIcon.classList.add('rotate');

        // Set other sections (excluding the second) to be closed on page load
        accordionContents.forEach((accordionContent, index) => {
            if (index !== 0) {
                accordionContent.classList.remove('open');
                accordionContent.style.maxHeight = 0;
            }
        });

        accordionHeaders.forEach((button, index) => {
            // Skip adding click event to the first block
            if (index === 0) return;

            button.addEventListener('click', () => {
                const accordionContent = button.nextElementSibling;
                const icon = button.querySelector('i');

                if (accordionContent.classList.contains('open')) {
                    accordionContent.classList.remove('open');
                    accordionContent.style.maxHeight = 0;
                    if (icon) icon.classList.remove('rotate');
                } else {
                    accordionContent.classList.add('open');
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                    if (icon) icon.classList.add('rotate');
                }
            });
        });
    });
});

// projects section //
// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and associated content
      this.classList.add('active');
      document.getElementById(this.dataset.tab).classList.add('active');

      // Add animation to the tab heading background
      animateTabTransition(this);
    });
  });

  function animateTabTransition(activeTab) {
    const direction = activeTab.dataset.tab === 'internship-projects' 
      ? 'left-to-right' : 'right-to-left';
    
    activeTab.style.backgroundPosition = direction === 'left-to-right' ? 'left' : 'right';

    // Add the actual animation logic
    setTimeout(() => {
      activeTab.style.backgroundPosition = 'center';
    }, 1000); // Matches the CSS transition time
  }
});


// -----------------contact form script--------------------- //

// Function to handle the form submission and send the request to Google Apps Script

const sendFormData = async (formData) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxRiRrKqCfzF2MEaJ5lA8cf_VUnT2WJO-rApkSIIahP1MxC00kceM-QCAVdjKhoQw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Ensure you're sending JSON
        },
        body: JSON.stringify(formData),  // Convert the form data to JSON
      });
  
      const result = await response.json();  // Parse the response as JSON
  
      if (result.success) {
        alert('Thankyou for contacting me. I will get back to you soon.');
      } else {
        alert('An error occurred: ' + result.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
  
  // Example usage:
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,  // Optional
      message: document.getElementById('message').value,
    };
  
    sendFormData(formData);  // Send the form data to the Google Apps Script
  });
  

