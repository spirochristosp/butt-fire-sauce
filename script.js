document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal:not(.active)');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Quantity & Total Price Logic
    const qtyInput = document.getElementById('quantity');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const totalPriceEl = document.getElementById('total-price');
    const pricePerBottle = 7.99;

    if (qtyInput && qtyMinus && qtyPlus && totalPriceEl) {
        const updatePrice = () => {
            const qty = parseInt(qtyInput.value) || 1;
            const total = (qty * pricePerBottle).toFixed(2);
            totalPriceEl.textContent = `$${total}`;
        };

        qtyMinus.addEventListener('click', () => {
            let qty = parseInt(qtyInput.value) || 1;
            if (qty > 1) {
                qtyInput.value = qty - 1;
                updatePrice();
            }
        });

        qtyPlus.addEventListener('click', () => {
            let qty = parseInt(qtyInput.value) || 1;
            qtyInput.value = qty + 1;
            updatePrice();
        });
    }

    // Form submission simulation
    const orderForm = document.getElementById('order-form');
    const successMsg = document.getElementById('success-msg');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            orderForm.style.display = 'none';
            successMsg.classList.remove('hidden');
        });
    }
});
