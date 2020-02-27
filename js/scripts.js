class Carrousel {
    constructor(){
        const arrLeft = document.querySelector('.arr-left');
        const arrRight = document.querySelector('.arr-right');
        const slider = document.querySelector('.group-slide');
        const slides = [...slider.children];
        const dots = document.querySelector('.dots');
        const imgWidth = document.querySelector('.group-slide')
            .getBoundingClientRect()
            .width;      
    }    
}

const carrousel = new Carrousel();