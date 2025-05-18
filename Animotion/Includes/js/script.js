// Theme Toggle Functionality
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.documentElement.classList.toggle('light-mode');
});

// Animation Restart on Click
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Get the animation class (excluding utility classes like 'animated', 'infinite', etc.)
        const animationClasses = Array.from(box.classList).filter(cls =>
            !['box', 'animated', 'infinite', 'slow', 'slower', 'fast', 'faster', 'very-slow'].includes(cls)
        );
        const animationClass = animationClasses[0]; // Assume the first remaining class is the animation

        if (animationClass) {
            // Remove and re-add the animation class to restart
            box.classList.remove(animationClass, 'animated');
            void box.offsetWidth; // Trigger reflow
            box.classList.add(animationClass, 'animated');
        }
    });
});