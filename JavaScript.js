document.addEventListener("DOMContentLoaded", function() {
    updateCarousel();
});

let currentIndex = 0;

function updateCarousel(){
    const container = document.querySelector('.project-container');
    const offset = -currentIndex * (300 + 20);
    container.style.transform = `translateX(${offset}px)`;
}

function scrollLeft(){
    if (currentIndex > 0){
        currentIndex--;
        updateCarousel();
    }
}

function scrollRight(){
    const totalProjects = document.querySelectorAll('.project').length;
    if (currentIndex < totalProjects - 3){
        currentIndex++;
        updateCarousel();
    }
}