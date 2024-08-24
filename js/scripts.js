document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and running"); // Debugging marker
    // =======================
    // Sound Button Setup
    // =======================
    const soundButton = document.getElementById('soundButton');
    const clickSound = new Audio('sounds/imaginaryBeach.wav');
    const hoverSound = new Audio('sounds/edoFurin.wav'); // Load the hover sound
    clickSound.loop = true; // Ensure the sound loops continuously
    console.log(soundButton); // Check if the element is correctly retrieved
    let isSoundOn = false;

    // Add click event listener
    soundButton.addEventListener('click', function() {
        console.log("Sound button clicked"); // Debugging marker
        if (isSoundOn) {
            soundButton.textContent = "turn sound on";
            clickSound.muted = true; // Mute the sound
        } else {
            soundButton.textContent = "turn sound off";
            clickSound.muted = false; // Unmute the sound
            clickSound.play(); // Ensure the sound is playing when unmuted
        }

        // Toggle the state
        isSoundOn = !isSoundOn;
    }); 

    // Add 'hover' (mouseover) event listener 
    soundButton.addEventListener('mouseover', function() {
        hoverSound.play(); // Play the hover sound
    });


    // =======================
    // Ripple Effect Setup
    // =======================
    // Initialize ripples without mouse interaction
    $('body').ripples({
        resolution: 512,
        dropRadius: 20, // px
        perturbance: 0.04,
        interactive: false // Disable automatic ripple interaction
    });

    // Continuous ripple effect while holding down the mouse
    let isMouseDown = false;

    document.body.addEventListener('mousedown', function(event) {
        isMouseDown = true;
        triggerRipple(event.clientX, event.clientY);
    });

    document.body.addEventListener('mousemove', function(event) {
        if (isMouseDown) {
            triggerRipple(event.clientX, event.clientY);
        }
    });

    document.body.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    function triggerRipple(x, y) {
        $('body').ripples('drop', x, y, 20, 0.04);
    }

});
