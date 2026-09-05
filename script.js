/* =========================================
   PORTFOLIO JAVASCRIPT
   ========================================= */


/* =========================================
   DARK / LIGHT MODE
   ========================================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }

});


/* =========================================
   CURRENT YEAR
   ========================================= */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;


    contactForm.reset();

});
