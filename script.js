const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.querySelector('.modal-close');

const galleryImages = document.querySelectorAll('.modeling-item img');

galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; 
        modalImg.src = img.src; 
        modalImg.alt = img.alt; 
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
