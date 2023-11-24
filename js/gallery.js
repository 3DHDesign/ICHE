function LightboxGallery() {
    this.index = 0;
    this.$items = document.querySelectorAll('.tm-img-gallery .grid-item');
    this.totalItems = this.$items.length;

    this.counter = function() {
        const counterElement = document.createElement('div');
        counterElement.id = 'lg-counter';
        counterElement.innerHTML = `
            <span id="lg-counter-current">${this.index + 1}</span> / 
            <span id="lg-counter-all">${this.totalItems}</span>
        `;
        document.querySelector('.gallery-one').appendChild(counterElement);
    };

    this.next = function() {
        if (this.index < this.totalItems - 1) {
            this.index++;
            this.showImage();
        }
    };

    this.prev = function() {
        if (this.index > 0) {
            this.index--;
            this.showImage();
        }
    };

    this.showImage = function() {
        // Hide all images
        this.$items.forEach(item => {
            item.style.display = 'none';
        });

        // Show the current image
        this.$items[this.index].style.display = 'block';

        // Update counter
        document.getElementById('lg-counter-current').textContent = this.index + 1;
    };

    this.init = function() {
        this.counter(); // Create the counter

        // Show the initial image (index 0)
        this.showImage();

        // Example: Set up event listeners for next and previous buttons
        const nextButton = document.getElementById('nextButton');
        const prevButton = document.getElementById('prevButton');

        nextButton.addEventListener('click', () => {
            this.next();
        });

        prevButton.addEventListener('click', () => {
            this.prev();
        });
    };
}

// Usage
const lightboxGallery = new LightboxGallery();
lightboxGallery.init();
