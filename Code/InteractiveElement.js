document.querySelectorAll('.interactive-box').forEach(box => {
    box.addEventListener('click', () => {
        window.open(box.getAttribute('data-url'), '_blank');
    });
});