document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    const scrollDownArrow = document.querySelector('.scroll-down');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    boxes.forEach(box => {
        observer.observe(box);
    });

    // Show the scroll down arrow after 5 seconds
    setTimeout(() => {
        scrollDownArrow.classList.add('visible');
    }, 5000);
});
