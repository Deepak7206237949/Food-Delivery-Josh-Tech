// JTEats Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Carousel functionality
    class Carousel {
        constructor(container) {
            this.container = container;
            this.track = container.querySelector('.carousel-track');
            this.prevBtn = container.querySelector('.carousel-btn-prev');
            this.nextBtn = container.querySelector('.carousel-btn-next');
            this.cards = container.querySelectorAll('.food-card');
            
            this.currentIndex = 0;
            this.cardWidth = 324; // 300px width + 24px gap
            this.visibleCards = this.getVisibleCards();
            
            this.init();
        }
        
        init() {
            this.updateButtons();
            this.bindEvents();
            window.addEventListener('resize', () => {
                this.visibleCards = this.getVisibleCards();
                this.updateButtons();
            });
        }
        
        getVisibleCards() {
            const containerWidth = this.container.offsetWidth;
            return Math.floor(containerWidth / this.cardWidth);
        }
        
        bindEvents() {
            this.prevBtn.addEventListener('click', () => this.prev());
            this.nextBtn.addEventListener('click', () => this.next());
            
            // Touch/swipe support
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            
            this.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
            });
            
            this.track.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                e.preventDefault();
            });
            
            this.track.addEventListener('touchend', () => {
                if (!isDragging) return;
                const diff = startX - currentX;
                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                }
                isDragging = false;
            });
        }
        
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateCarousel();
            }
        }
        
        next() {
            const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
                this.updateCarousel();
            }
        }
        
        updateCarousel() {
            const translateX = -this.currentIndex * this.cardWidth;
            this.track.style.transform = `translateX(${translateX}px)`;
            this.updateButtons();
        }
        
        updateButtons() {
            const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
            this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
            this.prevBtn.disabled = this.currentIndex === 0;
            this.nextBtn.disabled = this.currentIndex >= maxIndex;
        }
    }
    
    // Initialize carousel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        new Carousel(carouselContainer);
    }
    
    // Modal functionality
    class Modal {
        constructor() {
            this.modal = document.getElementById('food-modal');
            this.closeBtn = this.modal.querySelector('.modal-close');
            this.modalImage = this.modal.querySelector('.modal-image');
            this.modalTitle = this.modal.querySelector('.modal-title');
            this.modalDescription = this.modal.querySelector('.modal-description');
            this.modalStars = this.modal.querySelector('.modal-stars');
            this.modalRatingText = this.modal.querySelector('.modal-rating-text');
            this.modalPrice = this.modal.querySelector('.modal-price');
            
            this.init();
        }
        
        init() {
            // Close modal events
            this.closeBtn.addEventListener('click', () => this.close());
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.close();
            });
            
            // Escape key to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                    this.close();
                }
            });
            
            // Food card click events
            document.querySelectorAll('.food-card').forEach(card => {
                card.addEventListener('click', () => this.openFromCard(card));
            });
        }
        
        openFromCard(card) {
            const img = card.querySelector('.food-image');
            const name = card.querySelector('.food-name');
            const stars = card.querySelector('.stars');
            const rating = card.querySelector('.rating-text');
            const price = card.querySelector('.food-price');
            
            this.modalImage.src = img.src;
            this.modalImage.alt = img.alt;
            this.modalTitle.textContent = name.textContent;
            this.modalDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            this.modalStars.textContent = stars.textContent;
            this.modalRatingText.textContent = rating.textContent;
            this.modalPrice.textContent = price.textContent;
            
            this.open();
        }
        
        open() {
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        close() {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Initialize modal
    new Modal();

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Scroll to popular items section
            const popularSection = document.querySelector('.popular-items-section');
            if (popularSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = popularSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Highlight matching food items (simple demo)
            const foodCards = document.querySelectorAll('.food-card');
            foodCards.forEach(card => {
                const foodName = card.querySelector('.food-name').textContent.toLowerCase();
                if (foodName.includes(searchTerm.toLowerCase())) {
                    card.style.transform = 'scale(1.05)';
                    card.style.boxShadow = '0 8px 30px rgba(26, 192, 115, 0.3)';
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 2000);
                }
            });

            console.log('Searching for:', searchTerm);
        }
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Video play button functionality
    const videoPlayBtn = document.querySelector('.video-play-btn');
    const videoPlayer = document.querySelector('.video-player');
    
    if (videoPlayBtn && videoPlayer) {
        videoPlayBtn.addEventListener('click', () => {
            videoPlayer.play();
            videoPlayBtn.style.display = 'none';
        });
        
        videoPlayer.addEventListener('pause', () => {
            videoPlayBtn.style.display = 'block';
        });
        
        videoPlayer.addEventListener('ended', () => {
            videoPlayBtn.style.display = 'block';
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 192, 115, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#1AC073';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for smooth loading
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Home Kitchen add button functionality
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();

            // Visual feedback
            const originalText = this.textContent;
            this.textContent = '✓';
            this.style.background = 'var(--primary-green)';

            // Reset after animation
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1000);

            // Get item details
            const card = this.closest('.kitchen-card');
            const itemName = card.querySelector('.kitchen-item-name').textContent;
            const price = card.querySelector('.kitchen-price').textContent;

            console.log(`Added to cart: ${itemName} - ${price}`);
        });
    });

    // Popular Items add button functionality
    document.querySelectorAll('.popular-add-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();

            // Visual feedback
            const originalText = this.textContent;
            this.textContent = '✓';
            this.style.background = 'var(--primary-green)';

            // Reset after animation
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1000);

            // Get item details
            const card = this.closest('.popular-food-card');
            const itemName = card.querySelector('.popular-food-name').textContent;
            const price = card.querySelector('.popular-food-price').textContent;

            console.log(`Added to cart: ${itemName} - ${price}`);
        });
    });

    // Popular Items carousel functionality
    const popularCarouselTrack = document.querySelector('.popular-carousel-track');
    const popularPrevBtn = document.querySelector('.popular-carousel-btn-prev');
    const popularNextBtn = document.querySelector('.popular-carousel-btn-next');

    if (popularCarouselTrack && popularPrevBtn && popularNextBtn) {
        let popularCurrentIndex = 0;
        const popularCards = document.querySelectorAll('.popular-food-card');
        const popularCardsToShow = 3;
        const popularMaxIndex = Math.max(0, popularCards.length - popularCardsToShow);

        function updatePopularCarousel() {
            const translateX = popularCurrentIndex * -320; // 300px card width + 20px gap
            popularCarouselTrack.style.transform = `translateX(${translateX}px)`;

            // Update button states
            popularPrevBtn.style.opacity = popularCurrentIndex === 0 ? '0.5' : '1';
            popularNextBtn.style.opacity = popularCurrentIndex >= popularMaxIndex ? '0.5' : '1';
        }

        popularPrevBtn.addEventListener('click', () => {
            if (popularCurrentIndex > 0) {
                popularCurrentIndex--;
                updatePopularCarousel();
            }
        });

        popularNextBtn.addEventListener('click', () => {
            if (popularCurrentIndex < popularMaxIndex) {
                popularCurrentIndex++;
                updatePopularCarousel();
            }
        });

        // Initialize
        updatePopularCarousel();
    }

    console.log('JTEats website loaded successfully!');
});
