// Fade In Effect for Intro Box on Scroll
window.addEventListener('scroll', function() {
    const intro = document.querySelector('.intro');
    const introPosition = intro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    // If the intro section is in view, add fade-in class
    if (introPosition < screenPosition) {
        intro.classList.add('fade-in');
    }
});

// Button Hover Animation (Grow and Shrink Effect)
const buttons = document.querySelectorAll('header button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)'; // Slightly grow the button
        button.style.transition = 'transform 0.2s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Shrink back to original size
    });
});

// Modal Popup
const modalBtn = document.getElementById('showModalBtn');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close-modal');

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block'; // Show the modal
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Close the modal if clicked outside
    }
});
