let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides-container');
const totalSlides = slides.length;
const visibleSlides = 3;

function updateSlides() {
    const offset = -currentIndex * (100 / visibleSlides);
    slidesContainer.style.transform = `translateX(${offset}%)`;
    updateButtons();
}

function updateButtons(){
    document.querySelector('.prev').style.display = currentIndex > 0 ? 'block' : 'none';
    document.querySelector('.next').style.display = currentIndex < totalSlides - visibleSlides ? 'block' : 'none';
}

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalSlides - visibleSlides)
    {
        currentIndex++;
        updateSlides();
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if(currentIndex > 0){
        currentIndex--;
        updateSlides();
    } 
    
});

updateSlides();
/*const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;
    
    if(index < 0)
        index = slides.length -1;
    
    slides[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', e => {prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});*/