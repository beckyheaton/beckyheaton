document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');

    fetch('artworks.json')
        .then(response => response.json())
        .then(data => {
            const artwork = data.artworks.find(art => art.title === title);
            if (artwork) {
                document.title = artwork.title;
                document.querySelector('header h1').innerText = artwork.title;
                document.getElementById('artwork-image').src = `images/${artwork.image}`;
                document.getElementById('artwork-date').innerText = artwork.date;
                document.getElementById('artwork-description').innerText = artwork.description || '';
            }
        })
        .catch(error => console.error('Error loading artwork details:', error));
});
