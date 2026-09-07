// ---------------------------------
// Mobile Navigation
// ---------------------------------

const menuToggle =
    document.getElementById("menuToggle");

const navigation =
    document.getElementById("navigation");


menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen =
        navigation.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Close mobile navigation after clicking a link

const navLinks =
    document.querySelectorAll(".navigation a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ---------------------------------
// Smooth Scrolling
// ---------------------------------

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


// ---------------------------------
// Project Filter
// ---------------------------------

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const category =
                button.dataset.filter;


            filterButtons.forEach(
                function (btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            projectCards.forEach(
                function (project) {

                    const projectCategory =
                        project.dataset.category;


                    if (
                        category === "all" ||
                        projectCategory === category
                    ) {

                        project.style.display =
                            "block";

                    } else {

                        project.style.display =
                            "none";

                    }

                }
            );

        }
    );

});


// ---------------------------------
// Project Image Lightbox
// ---------------------------------

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );

const projectImages =
    document.querySelectorAll(
        ".project-image"
    );


projectImages.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt;

                lightbox.classList.add(
                    "open"
                );

                closeLightbox.focus();

            }
        );

    }
);


function closeImagePreview() {

    lightbox.classList.remove(
        "open"
    );

    lightboxImage.src = "";

}


closeLightbox.addEventListener(
    "click",
    closeImagePreview
);


lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {

            closeImagePreview();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains(
                "open"
            )
        ) {

            closeImagePreview();

        }

    }
);


// ---------------------------------
// Contact Form Validation
// ---------------------------------

const contactForm =
    document.getElementById(
        "contactForm"
    );

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById(
        "nameError"
    );

const emailError =
    document.getElementById(
        "emailError"
    );

const messageError =
    document.getElementById(
        "messageError"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        let isValid = true;


        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";


        // Validate name

        if (
            nameInput.value.trim() === ""
        ) {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        }


        // Validate email

        const email =
            emailInput.value.trim();


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (
            !validateEmail(email)
        ) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        // Validate message

        if (
            messageInput.value.trim() === ""
        ) {

            messageError.textContent =
                "Please enter a message.";

            isValid = false;

        }


        // Successful validation

        if (isValid) {

            formMessage.textContent =
                "Thank you! Your message has been validated successfully.";

            contactForm.reset();

        }

    }
);


// ---------------------------------
// Automatically update footer year
// ---------------------------------

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();
