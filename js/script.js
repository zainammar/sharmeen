document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Example JavaScript functionality: handle button click
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    if (myButton && messageParagraph) {
        myButton.addEventListener('click', function() {
            messageParagraph.textContent = 'You clicked the button! ✨';
        });
    }
});