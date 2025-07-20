/*let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ['Software Developer', 'IIT Kanpur Student', 'Web Developer', 'AI Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'IIT Kanpur Student', 'Web Developer', 'AI Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// --------------------
// Accordion for Experience Section
// --------------------
document.querySelectorAll('.experience-toggle').forEach(card => {
    card.addEventListener('click', () => {
      const details = card.nextElementSibling;
      const allDetails = document.querySelectorAll('.experience-details');
  
      // Close all others
      allDetails.forEach(detail => {
        if (detail !== details) {
          detail.style.display = 'none';
          detail.style.maxHeight = null;
        }
      });
  
      // Toggle selected
      if (details.style.display === 'block') {
        details.style.display = 'none';
        details.style.maxHeight = null;
      } else {
        details.style.display = 'block';
        details.style.maxHeight = details.scrollHeight + 'px';
      }
    });
  });

  // Select modal elements
const modal = document.getElementById("skillModal");
const modalTitle = document.getElementById("modal-title");
const modalIcons = document.getElementById("modal-icons");
const closeBtn = document.querySelector(".close-btn");

// Skills data (with icons)
const skillsData = {
    "Web Development": [
      { name: "HTML", icon: "bxl-html5" },
      { name: "CSS", icon: "bxl-css3" },
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "TypeScript", icon: "bxl-typescript" },
      { name: "React", icon: "bxl-react" },
      { name: "Node.js", icon: "bxl-nodejs" },
      { name: "MongoDB", icon: "bxl-mongodb" },
      { name: "MySQL", icon: "bxs-data" },
      { name: "PostgreSQL", icon: "bxs-data" }
    ],
    "Machine Learning & AI": [
      { name: "Python", icon: "bxl-python" },
      { name: "TensorFlow", icon: "bxs-brain" },
      { name: "scikit-learn", icon: "bxs-analyse" }
    ],
    "Data Structures & Algorithms": [
      { name: "C++", icon: "bx-code" },
      { name: "C", icon: "bx-terminal" },
      { name: "OOPs", icon: "bx-cube" },
      { name: "Git", icon: "bxl-git" },
      { name: "LaTeX", icon: "bx-book" },
      { name: "LeetCode", icon: "bx-code-alt" },
      { name: "Codeforces", icon: "bx-terminal" }
    ]
  };
  
  

// Function to open modal with correct content
function openModal(skill) {
  modalTitle.textContent = skill;
  modalIcons.innerHTML = ""; // Clear previous icons
  skillsData[skill].forEach(item => {
    modalIcons.innerHTML += `
      <div>
        <i class='bx ${item.icon}'></i>
        <p>${item.name}</p>
      </div>
    `;
  });
  modal.style.display = "flex";
}

document.querySelectorAll(".services-box .btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Stop page jump
      const skillName = btn.getAttribute("data-skill");
      if (skillsData[skillName]) {
        openModal(skillName);
      } else {
        console.error("No skill data found for:", skillName);
      }
    });
  });
  
// Close modal on clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
