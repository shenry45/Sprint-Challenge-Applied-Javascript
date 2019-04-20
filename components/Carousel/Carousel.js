class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        
        this.img = document.querySelectorAll('.carousel img');

        this.curImg = 0;

        this.img[this.curImg].style.display = 'block';

        this.buttons = document.querySelectorAll('.carousel div');

        this.buttons.forEach(el => {
            el.addEventListener('click', e => {
                this.slide(e.target.classList.value)
            });
        });
    }
    
    slide(e) {

        //hide current image(s)
        this.img.forEach(el => {
            el.style.display = 'none';
        });
        // check which btn was clicked
        if (e === 'left-button') {
            this.curImg--;

            if (this.curImg < 0) {
                this.curImg = this.img.length-1;

                this.img[this.curImg].style.display = 'block';


            } else {

                this.img[this.curImg].style.display = 'block';

            }
        }
        else if (e === 'right-button') {
            this.curImg++;

            if (this.curImg >= this.img.length) {
                this.curImg = 0;

                this.img[this.curImg].style.display = 'block';


            } else {

                this.img[this.curImg].style.display = 'block';

            }

        } else {
            alert('Where did you just click?');
        }
    }

    resetImgs() {
        
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
