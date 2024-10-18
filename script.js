function showImageNumber(number) {
    var imageNumberElement = document.querySelector('.image_number');
    imageNumberElement.textContent = number;
    var countElement = document.querySelector('.tdk-pro-count');
    countElement.style.display = 'block';
}

// Hide the count when mouse leaves the carousel
document.querySelector('.carousel-inner').onmouseleave = function() {
    var countElement = document.querySelector('.tdk-pro-count');
    countElement.style.display = 'none';
};
