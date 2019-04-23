class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        
        this.img = document.querySelectorAll('.carousel img');

        this.curImg = 0;

        this.img[this.curImg].style.display = 'block';

        this.buttons = document.querySelectorAll('.carousel div');

        this.buttons.forEach(el => el.style.zIndex = 1);

        this.buttons.forEach(el => {
            el.addEventListener('click', e => {
                this.slide(e.target.classList.value)
            });
        });
    }
    
    slide(e) {
        const showSlide = () => {
            this.img[this.curImg].style.display = 'block';
            this.img[this.curImg].style.animation = 'fadeIn 0.5s 0s ease-in forwards';
        } 

        //hide current image(s)
        this.img.forEach(el => {
            el.style.display = 'none';
            el.style.animation = ''
        });
        // check which btn was clicked
        if (e === 'left-button') {
            //increment slide counter
            this.curImg--;

            //check slide counter num
            if (this.curImg < 0) {
                this.curImg = this.img.length-1;
                showSlide();
            } else {
                showSlide();
            }
        }
        else if (e === 'right-button') {
            //increment slide counter
            this.curImg++;

            //check slide counter num
            if (this.curImg >= this.img.length) {
                this.curImg = 0;
                showSlide();
            } else {
                showSlide();
            }

        } else {
            alert('Where did you just click?');
        }
    }
}

let carousel = document.querySelector('.carousel');
new Carousel();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
