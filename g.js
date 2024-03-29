document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var index = 0;

    function showSlide() {
        slides.forEach(function(slide) {
            slide.style.opacity = 0;
        });

        slides[index].style.opacity = 1;
        index = (index + 1) % slides.length;
    }

    showSlide(); // Show the first slide immediately

    setInterval(showSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});
