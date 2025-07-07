document.addEventListener('DOMContentLoaded', function () {
    // AOS
    AOS.init({ duration: 800, once: true });

    // Anime
    anime({
        targets: '.logo',
        scale: [0, 1],
        duration: 1000,
        delay: 100,
        easing: 'easeOutElastic(1, .8)'
    });

    anime({
        targets: '.section-cta .btn-primary',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutBack',
        duration: 1000,
        delay: 600
    });

    // Cleave
    new Cleave('select', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    });

    // Glide
    if (document.querySelector('.glide')) {
        new Glide('.glide', {
            type: 'carousel',
            perView: 1,
            autoplay: 4000,
            animationDuration: 800,
            hoverpause: true
        }).mount();
    }

    // ✅ FIXED Mobile nav toggle
    const burger = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Search tabs
    document.querySelectorAll('.search-tabs .tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.search-tabs .tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var answer = this.nextElementSibling;
            var open = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            answer.style.display = open ? 'none' : 'block';
        });
    });
});
