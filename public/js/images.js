class LazyLoader {
    constructor(imageSelector, bgSelector, fallbackImage = '', fallbackBg = '') {
        this.imageSelector = imageSelector; // selector for images
        this.bgSelector = bgSelector; // selector for elements with background images
        this.fallbackImage = fallbackImage; // fallback image if loading fails
        this.fallbackBg = fallbackBg; // fallback background if loading fails
        this.threshold = 0.5; // intersection observer threshold
        this.observer = null; // intersection observer instance
    }

    init() {
        this.observer = new IntersectionObserver(this.loadElements.bind(this), {
            threshold: this.threshold,
        });

        document.querySelectorAll(this.imageSelector).forEach((img) => this.observer.observe(img));
        document.querySelectorAll(this.bgSelector).forEach((el) => this.observer.observe(el));
    }

    loadElements(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Handle image lazy loading
                if (el.tagName === 'IMG' && el.hasAttribute('data-src')) {
                    this.loadImage(el);
                }

                // Handle background image lazy loading
                if (el.hasAttribute('data-bg')) {
                    this.loadBackground(el);
                }

                // Stop observing the element once it's loaded
                this.observer.unobserve(el);
            }
        });
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');

        // Set image src with fallback using 'onerror'
        img.src = src;
        if (this.fallbackImage) {
            img.onerror = () => {
                img.src = this.fallbackImage; // Fallback if image fails to load
            };
        }

        // Remove data-src after loading
        img.removeAttribute('data-src');
    }

    loadBackground(el) {
        const bgUrl = el.getAttribute('data-bg');

        // Set background image with fallback built-in
        el.style.backgroundImage = `url('${bgUrl}'), url('${this.fallbackBg}')`;

        // Remove data-bg after setting background
        el.removeAttribute('data-bg');
    }

    update() {
        // Update any new elements that are added dynamically to the DOM
        const newImages = document.querySelectorAll(this.imageSelector);
        const newBgElements = document.querySelectorAll(this.bgSelector);

        // Observe newly added images and background elements
        newImages.forEach((img) => this.observer.observe(img));
        newBgElements.forEach((el) => this.observer.observe(el));
    }

    destroy() {
        // Disconnect the observer to stop observing elements
        this.observer.disconnect();
    }
}

var lazyLoader = new LazyLoader('img[data-src]', '[data-bg]', '/public/img/fallback.webp', '/public/img/fallback.webp');
lazyLoader.init();
htmxAfterFunctions.push(() => lazyLoader.update());
