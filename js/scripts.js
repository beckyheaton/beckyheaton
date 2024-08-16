document.addEventListener("DOMContentLoaded", function() {
    const edoFurinImage = document.getElementById('edoFurin');
    const hoverSound = new Audio('sounds/edoFurin.wav');
    const clickSound = new Audio('sounds/imaginaryBeach.wav');
    clickSound.loop = true; // Set the audio to loop
    let isPlaying = { value: false }; // Using an object to maintain reference in the function

    // Attach event listeners
    edoFurinImage.addEventListener('mouseover', function() {
        playHoverSound(hoverSound);
    });

    edoFurinImage.addEventListener('click', function() {
        toggleClickSound(clickSound, isPlaying);
    });

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

function playHoverSound(hoverSound) {
    hoverSound.play();
}

function toggleClickSound(clickSound, isPlaying) {
    if (isPlaying.value) {
        clickSound.pause();
    } else {
        clickSound.play();
    }
    isPlaying.value = !isPlaying.value;
}
