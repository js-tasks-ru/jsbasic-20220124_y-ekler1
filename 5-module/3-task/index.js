function initCarousel() {
   let carousel = document.querySelector('.carousel__inner'),
       carouselRight = document.querySelector('.carousel__arrow_right'),
       carouselLeft = document.querySelector('.carousel__arrow_left'),
       carouselInnerWidth = document.querySelector(".carousel__inner").offsetWidth,
       countSlide = document.querySelectorAll('.carousel__slide').length;

       let count = 0;

       setArrow(count, carouselRight, carouselLeft, countSlide);

     carouselRight.addEventListener('click' , () => {
        count++;
        carousel.style.transform = `translateX(-${count * carouselInnerWidth}px)`;
        setArrow(count, carouselRight, carouselLeft, countSlide);

     });

     carouselLeft.addEventListener('click' , () => {
        count--;
        carousel.style.transform = `translateX(-${count * carouselInnerWidth}px)`;
        setArrow(count, carouselRight, carouselLeft, countSlide);
     });

     function setArrow(count, carouselRight, carouselLeft, countSlide) {
       if(count === 0) {
        carouselLeft.style.display = 'none';
       } else {
        carouselLeft.style.display = '';
       }

       if(count >= countSlide - 1) {
        carouselRight.style.display = 'none';
       } else {
        carouselRight.style.display = '';
       }
     }

}
