    // Dark/Light Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
    });

    // Typing Effect
    // Typing Effect
    const typingText = document.querySelector(".typing-effect");
    const textArray = ["Hello, I'm Adeoluwa Afolabi!", "Welcome to My Portfolio!"];
    let arrayIndex = 0;
    let charIndex = 0;

    function typeEffect() {
    // Clear the element content on every restart
    if (charIndex === 0) {
        typingText.textContent = ""; // Clear previous text
    }

    if (charIndex < textArray[arrayIndex].length) {
        typingText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); // Adjust typing speed as needed
    } else {
        // Pause before switching to the next string
        setTimeout(() => {
        charIndex = 0;
        arrayIndex = (arrayIndex + 1) % textArray.length;
        typeEffect();
        }, 2000); // Adjust pause duration as needed
    }
    }

    // Start the typing effect
    typeEffect();


    // Project Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        });
    });
    }); 

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name && email && message) {
        alert("Message Sent!");
    } else {
        alert("Please fill out all fields.");
    }
    });``
