const buttons = document.querySelectorAll(".slide-btn");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Prevent any default action (just a precaution)
        e.preventDefault();
        const currentScrollY = window.scrollY;

        // Get the target slide ID from the data-to attribute
        const targetSlideId = button.getAttribute("data-to");

        // Find the target element by its ID
        const targetSlide = document.querySelector(targetSlideId);

        // Scroll the target slide into view with smooth scrolling
        if (targetSlide) {
            targetSlide.scrollIntoView({
                behavior: "smooth",
                inline: "center", // This ensures horizontal centering
            });
        }

        // After scrolling horizontally, reset the vertical scroll position
        window.scrollTo({
            top: currentScrollY,
            behavior: "auto", // Immediately restore the vertical scroll
        });
    });
});
