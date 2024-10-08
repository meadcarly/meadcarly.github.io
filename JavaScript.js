let currentIndex = 1;

function updateCarousel(){
    const container = document.querySelector('.project-container');
    const offset = -currentIndex * (200 + 20);
    container.style.trasform = `translateX(${offset}px)`;
}

function scrollLeft(){
    if (currentIndex > 0){
        currentIndex--;
        updateCarousel();
    }
}

function scrollRight(){
    if (currentIndex < 2){
        currentIndex++;
        updateCarousel();
    }
}