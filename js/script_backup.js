const arrLeft = document.querySelector('.arr-left');
const arrRight = document.querySelector('.arr-right');
const slider = document.querySelector('.group-slide');
const slides = [...slider.children];
const dots = document.querySelector('.dots');
const imgWidth = document.querySelector('.group-slide')
.getBoundingClientRect()
.width;

const controller = {    
    qtdSlide: slider.children.length - 1,
    currentSlide: 0,
}

arrLeft.addEventListener('click', prevSlide);
arrRight.addEventListener('click', nextSlide);

slides.forEach((slide, index) => {
    const li = document.createElement('li');
    li.classList.add('dotted');
    dots.appendChild(li);
    
    if(index == controller.currentSlide){
        li.classList.add('active');
    }        
})


const activeDots = () => {
    const lis = [...dots.children];
    lis.forEach( li => {
        if(li.classList.contains('active')){
            li.classList.remove('active');
        }
    })
    lis[controller.currentSlide].classList.add('active');
}

function nextSlide() {
    const prev = (controller.currentSlide * imgWidth); // 0 * ...

    if(controller.currentSlide === controller.qtdSlide) {        
        controller.currentSlide = 0;

        const next = (controller.currentSlide * imgWidth); // 1 * 900 ..
        let valor = prev; // 0
    
        const timer = setInterval(function(){
            if(valor >= next) {
                slider.style.transform = "translateX("+(-(valor))+"px)";
            } else {
                clearInterval(timer);
            }
            valor -= 100;
    
        }, 10);
                  
    } else {
        controller.currentSlide++; // 1

        const next = (controller.currentSlide * imgWidth); // 1 * 900 ..
        let valor = prev; // 0
    
        const timer = setInterval(function(){
            if(valor <= next) {
                slider.style.transform = "translateX("+(-(valor))+"px)";
            } else {
                clearInterval(timer);
            }
            valor += 10;
    
        }, 10);
    }    

    activeDots();
}

function prevSlide() { 
    const prev = (controller.currentSlide * imgWidth);; // 0 * ...
    controller.currentSlide--; // 1
    const next = (controller.currentSlide * imgWidth); // 1 * 900 ..
    let valor = prev; // 0

    const timer = setInterval(function(){
        if(valor >= next) {
            slider.style.transform = "translateX("+(-(valor))+"px)";
        } else {
            clearInterval(timer);
        }
        valor -= 10;
    }, 10);

    activeDots();
}
