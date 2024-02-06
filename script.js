// JavaScript code for your website

// Example function to handle button click event
function handleClick() {
    alert('Button clicked!');
}

// Example function to change text color on mouseover
function changeTextColor() {
    document.getElementById('text').style.color = 'red';
}

// Example function to change text color back to black on mouseout
function resetTextColor() {
    document.getElementById('text').style.color = 'black';
}

function showContent(sectionId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section with a delay for the transition to take effect
    setTimeout(() => {
        document.getElementById(sectionId).classList.add('active');
    }, 100);
}
