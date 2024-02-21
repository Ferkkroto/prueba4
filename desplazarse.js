document.addEventListener('DOMContentLoaded', function() {
    var startIndex = 0; // Comienza con la primera imagen como inicio del rango visible
    var imagesToShow = 2; // Define cuántas imágenes quieres mostrar a la vez, ajusta según tu diseño
    var images = document.querySelectorAll('.images-container > div');
    var prevButton = document.querySelector('.carousel-btn.prev');
    var nextButton = document.querySelector('.carousel-btn.next');

    function updateImageDisplay() {
        // Primero, oculta todas las imágenes
        images.forEach(function(img) {
            img.style.display = 'none';
        });

        // Luego, muestra solo las imágenes en el rango definido por startIndex y imagesToShow
        for (let i = 0; i < imagesToShow && (startIndex + i) < images.length; i++) {
            images[startIndex + i].style.display = 'block';
        }
    }

    // Asegúrate de que la visualización inicial se actualice según este nuevo enfoque
    updateImageDisplay();

    // Maneja el evento click para "prev"
    prevButton.addEventListener('click', function() {
        startIndex = Math.max(0, startIndex - imagesToShow);
        updateImageDisplay();
    });

    // Maneja el evento click para "next"
    nextButton.addEventListener('click', function() {
        startIndex = Math.min(images.length - imagesToShow, startIndex + imagesToShow);
        updateImageDisplay();
    });
});
