document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            const isOpen = navMenu.classList.contains("show");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            menuBtn.textContent = isOpen ? "✕" : "☰";
        });


        const menuLinks = navMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("show");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuBtn.textContent = "☰";
            });

        });


        document.addEventListener("click", function (event) {

            if (
                navMenu.classList.contains("show") &&
                !navMenu.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navMenu.classList.remove("show");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuBtn.textContent = "☰";
            }

        });

    }

});
