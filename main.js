/*==================== MOBILE MENU ====================*/

const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {

    navToggle.addEventListener("click", () => {

        navMenu.classList.add("show-menu");

    });

}

if (navClose) {

    navClose.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

    });

}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {

    navMenu.classList.remove("show-menu");

}

navLink.forEach(link => link.addEventListener("click", linkAction));


/*==================== HEADER SHADOW ====================*/

const scrollHeader = () => {

    const header = document.getElementById("header");

    if (window.scrollY >= 50) {

        header.classList.add("scroll-header");

    }

    else {

        header.classList.remove("scroll-header");

    }

}

window.addEventListener("scroll", scrollHeader);


/*==================== DARK THEME ====================*/

const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";

const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");

const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-sun-line" : "ri-moon-line";

if (selectedTheme) {

    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);

    themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](iconTheme);

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle(darkTheme);

    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());

    localStorage.setItem("selected-icon", getCurrentIcon());

});




/*==================== ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {

    const scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;

        const sectionTop = current.offsetTop - 100;

        const sectionId = current.getAttribute("id");

        const sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            sectionClass.classList.add("active-link");

        }

        else {

            sectionClass.classList.remove("active-link");

        }

    });

}

window.addEventListener("scroll", scrollActive);






/*==================== SCROLL REVEAL ====================*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1800,
    delay: 200,
    reset: false
});

sr.reveal(".home__content");
sr.reveal(".home__image", { origin: "right" });

sr.reveal(".about__image", { origin: "left" });
sr.reveal(".about__content", { origin: "right" });

sr.reveal(".skill", { interval: 100 });

sr.reveal(".service__card", { interval: 150 });

sr.reveal(".project__card", { interval: 150 });

sr.reveal(".stat", { interval: 120 });

sr.reveal(".contact__info", { origin: "left" });

sr.reveal(".contact__form", { origin: "right" });





/*==================== LOADER ====================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});






/*==================== SCROLL UP ====================*/

const scrollUp = document.createElement("div");

scrollUp.className = "scroll-up";

scrollUp.innerHTML = '<i class="ri-arrow-up-line"></i>';

document.body.appendChild(scrollUp);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollUp.classList.add("show-scroll");

    }

    else {

        scrollUp.classList.remove("show-scroll");

    }

});

scrollUp.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});





/*==================== COUNTERS ====================*/

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+", "").replace("%", "");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.setAttribute("data-count", count + increment);

            counter.innerText = (count + increment) + "+";

            setTimeout(updateCounter, 20);

        } else {

            if (counter.innerText.includes("%")) {

                counter.innerText = target + "%";

            } else {

                counter.innerText = target + "+";

            }

        }

    }

    updateCounter();

});






/*==================== TYPING EFFECT ====================*/

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "Front-End Developer",
        "Web Designer",
        "JavaScript Developer",
        "UI Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {
            typing.textContent = currentWord.substring(0, charIndex++);
        } else {
            typing.textContent = currentWord.substring(0, charIndex--);
        }

        let speed = deleting ? 50 : 120;

        if (!deleting && charIndex === currentWord.length + 1) {
            deleting = true;
            speed = 1800;
        }

        if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}





/*==================== PARALLAX ====================*/

const homeImage = document.querySelector(".home__blob");

window.addEventListener("mousemove", (e) => {

    if (!homeImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    homeImage.style.transform =
        `translate(${x}px, ${y}px)`;

});





/*==================== CONTACT FORM ====================*/

const form = document.querySelector(".contact__form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = this.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.borderColor = "red";

            } else {

                input.style.borderColor = "";

            }

        });

        if (valid) {

            alert("Message sent successfully!");

            this.reset();

        }

    });

}







/*==================== CARD EFFECT ====================*/

const cards = document.querySelectorAll(
    ".project__card,.service__card,.about__box"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(37,99,235,.12),
            var(--container-color) 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "";

    });

});






/*==================== TESTIMONIAL ANIMATION ====================*/

sr.reveal(".testimonial__card", {
    interval: 150
});







/*==================== PROJECT FILTER ====================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project__card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            if (filter === "all") {

                project.style.display = "block";

            }

            else if (project.dataset.category === filter) {

                project.style.display = "block";

            }

            else {

                project.style.display = "none";

            }

        });

    });

});






/*==================== PROJECT MODAL ====================*/

const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");

const modalImage = document.getElementById("modalImage");

const modalDescription = document.getElementById("modalDescription");

const closeModal = document.getElementById("closeModal");

const buttons = document.querySelectorAll(".open-project");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".project__card");

        modalTitle.textContent =
            card.querySelector("h3").textContent;

        modalDescription.textContent =
            card.querySelector("p").textContent;

        modalImage.src =
            card.querySelector("img").src;

        modal.classList.add("show");

    });

});

closeModal.onclick = () => {

    modal.classList.remove("show");

};

window.onclick = (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

};





/*==================== CERTIFICATES ====================*/

sr.reveal(".certificate__card", {
    interval: 150
});








/*==================== TIMELINE ====================*/

sr.reveal(".timeline__item", {
    interval: 200,
    origin: "left"
});




/*==================== GITHUB ====================*/

sr.reveal(".github__card", {

    interval: 200,

    origin: "bottom"

});






/*==================== PAGE PROGRESS ====================*/

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});