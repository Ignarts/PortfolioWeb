document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.blog-image');
    const overlay = document.querySelector('.overlay');

    images.forEach(image => {
        image.addEventListener('click', function () {
            // Scroll to the image
            this.scrollIntoView({ behavior: 'auto', block: 'center' });

            // Wait for the scroll to complete before toggling the class

            this.classList.toggle('enlarged');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    });

    overlay.addEventListener('click', function () {
        const enlargedImage = document.querySelector('.blog-image.enlarged');
        if (enlargedImage) {
            enlargedImage.classList.remove('enlarged');
        }
        this.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});