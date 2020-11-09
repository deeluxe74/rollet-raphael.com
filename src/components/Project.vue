<template>
    <div class="d-flex flex-row bg">
        <transition :name="modeSlide" mode="out-in">
            <div v-if="activeSlide == 1" key="1">
                <div class="global-pic" @mouseup="endAnim" @mouseleave="endAnim" @mousedown="dropImg" @touchstart="dropImg" @touchend="endAnim"><img :class="zoom1 ? 'img-zoom' : ''" :src="require(`@/assets/img/slides/${imageSpa}.jpg`)" alt="image de la spa de marlioz" draggable="false"></div>
                <div class="div-title d-flex justify-content-center"><div @click="displayDetailSpa = true, circleAppear = false" @mouseover="zoom1 = true" @mouseleave="zoom1 = false" class="fw-black title-project">SPA Marlioz</div></div>
                <svg v-if="circleAppear && !isClick" class="stayClick" viewBox="0 0 395 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 38.8329L17.5 20.9165L31.5 3L2 6.48376V38.8329Z" fill="#E3E1E1"/>
                    <path d="M288 111.992C226.5 20.9165 53.1 62.3234 17.5 20.9165M17.5 20.9165L2 38.8329V6.48376L31.5 3L17.5 20.9165Z" stroke="#E3E1E1" stroke-width="4"/>
                    <path d="M199.75 124.03H205.42L210.76 137.98L216.1 124.03H221.74L213.37 145H208.15L199.75 124.03ZM228.962 145.45C227.182 145.45 225.622 145.13 224.282 144.49C222.942 143.83 221.902 142.93 221.162 141.79C220.442 140.63 220.082 139.3 220.082 137.8C220.082 136.3 220.442 134.98 221.162 133.84C221.902 132.68 222.942 131.78 224.282 131.14C225.622 130.48 227.182 130.15 228.962 130.15C230.742 130.15 232.302 130.48 233.642 131.14C234.982 131.78 236.012 132.68 236.732 133.84C237.472 134.98 237.842 136.3 237.842 137.8C237.842 139.3 237.472 140.63 236.732 141.79C236.012 142.93 234.982 143.83 233.642 144.49C232.302 145.13 230.742 145.45 228.962 145.45ZM228.962 141.34C230.022 141.34 230.862 141.03 231.482 140.41C232.122 139.77 232.442 138.9 232.442 137.8C232.442 136.7 232.122 135.84 231.482 135.22C230.862 134.58 230.022 134.26 228.962 134.26C227.902 134.26 227.052 134.58 226.412 135.22C225.792 135.84 225.482 136.7 225.482 137.8C225.482 138.9 225.792 139.77 226.412 140.41C227.052 141.03 227.902 141.34 228.962 141.34ZM242.75 128.68C241.95 128.68 241.28 128.42 240.74 127.9C240.2 127.38 239.93 126.72 239.93 125.92C239.93 125.14 240.2 124.49 240.74 123.97C241.28 123.43 241.95 123.16 242.75 123.16C243.53 123.16 244.19 123.43 244.73 123.97C245.29 124.49 245.57 125.14 245.57 125.92C245.57 126.7 245.29 127.36 244.73 127.9C244.19 128.42 243.53 128.68 242.75 128.68ZM240.11 130.6H245.39V145H240.11V130.6ZM248.28 130.6H253.38V132.4C253.94 131.76 254.73 131.27 255.75 130.93C256.77 130.57 257.9 130.39 259.14 130.39V134.44C257.82 134.44 256.65 134.63 255.63 135.01C254.63 135.39 253.94 135.96 253.56 136.72V145H248.28V130.6ZM270.838 122.83H276.118V145H270.838V122.83ZM287.267 145.45C284.447 145.45 282.227 144.79 280.607 143.47C279.007 142.15 278.207 140.28 278.207 137.86C278.207 135.48 278.917 133.6 280.337 132.22C281.777 130.84 283.847 130.15 286.547 130.15C288.267 130.15 289.737 130.48 290.957 131.14C292.197 131.78 293.127 132.67 293.747 133.81C294.387 134.93 294.707 136.2 294.707 137.62V139.57H283.217C283.417 140.37 283.917 140.95 284.717 141.31C285.517 141.67 286.607 141.85 287.987 141.85C288.927 141.85 289.887 141.77 290.867 141.61C291.867 141.45 292.727 141.23 293.447 140.95V144.43C292.707 144.73 291.777 144.97 290.657 145.15C289.557 145.35 288.427 145.45 287.267 145.45ZM289.727 136.27C289.647 135.49 289.327 134.88 288.767 134.44C288.207 134 287.437 133.78 286.457 133.78C285.497 133.78 284.737 134.01 284.177 134.47C283.617 134.91 283.297 135.51 283.217 136.27H289.727ZM306.991 130.6H312.091V132.04C313.431 130.78 315.131 130.15 317.191 130.15C318.691 130.15 320.021 130.47 321.181 131.11C322.341 131.73 323.241 132.62 323.881 133.78C324.521 134.92 324.841 136.25 324.841 137.77C324.841 139.27 324.521 140.61 323.881 141.79C323.241 142.95 322.341 143.85 321.181 144.49C320.041 145.13 318.711 145.45 317.191 145.45C316.231 145.45 315.311 145.3 314.431 145C313.571 144.72 312.851 144.33 312.271 143.83V151.57H306.991V130.6ZM315.811 141.34C316.891 141.34 317.761 141.02 318.421 140.38C319.081 139.74 319.411 138.87 319.411 137.77C319.411 136.67 319.081 135.81 318.421 135.19C317.761 134.55 316.891 134.23 315.811 134.23C315.011 134.23 314.291 134.44 313.651 134.86C313.011 135.26 312.551 135.81 312.271 136.51V139.06C312.551 139.76 313.011 140.32 313.651 140.74C314.291 141.14 315.011 141.34 315.811 141.34ZM326.942 130.6H332.042V132.4C332.602 131.76 333.392 131.27 334.412 130.93C335.432 130.57 336.562 130.39 337.802 130.39V134.44C336.482 134.44 335.312 134.63 334.292 135.01C333.292 135.39 332.602 135.96 332.222 136.72V145H326.942V130.6ZM347.146 145.45C345.366 145.45 343.806 145.13 342.466 144.49C341.126 143.83 340.086 142.93 339.346 141.79C338.626 140.63 338.266 139.3 338.266 137.8C338.266 136.3 338.626 134.98 339.346 133.84C340.086 132.68 341.126 131.78 342.466 131.14C343.806 130.48 345.366 130.15 347.146 130.15C348.926 130.15 350.486 130.48 351.826 131.14C353.166 131.78 354.196 132.68 354.916 133.84C355.656 134.98 356.026 136.3 356.026 137.8C356.026 139.3 355.656 140.63 354.916 141.79C354.196 142.93 353.166 143.83 351.826 144.49C350.486 145.13 348.926 145.45 347.146 145.45ZM347.146 141.34C348.206 141.34 349.046 141.03 349.666 140.41C350.306 139.77 350.626 138.9 350.626 137.8C350.626 136.7 350.306 135.84 349.666 135.22C349.046 134.58 348.206 134.26 347.146 134.26C346.086 134.26 345.236 134.58 344.596 135.22C343.976 135.84 343.666 136.7 343.666 137.8C343.666 138.9 343.976 139.77 344.596 140.41C345.236 141.03 346.086 141.34 347.146 141.34ZM360.464 128.68C359.664 128.68 358.994 128.42 358.454 127.9C357.914 127.38 357.644 126.72 357.644 125.92C357.644 125.14 357.914 124.49 358.454 123.97C358.994 123.43 359.664 123.16 360.464 123.16C361.244 123.16 361.904 123.43 362.444 123.97C363.004 124.49 363.284 125.14 363.284 125.92C363.284 126.7 363.004 127.36 362.444 127.9C361.904 128.42 361.244 128.68 360.464 128.68ZM356.504 151.93C355.324 151.93 354.364 151.76 353.624 151.42V147.22C354.224 147.5 354.904 147.64 355.664 147.64C357.104 147.64 357.824 146.91 357.824 145.45V130.6H363.104V146.08C363.104 148 362.494 149.45 361.274 150.43C360.074 151.43 358.484 151.93 356.504 151.93ZM374.455 145.45C371.635 145.45 369.415 144.79 367.795 143.47C366.195 142.15 365.395 140.28 365.395 137.86C365.395 135.48 366.105 133.6 367.525 132.22C368.965 130.84 371.035 130.15 373.735 130.15C375.455 130.15 376.925 130.48 378.145 131.14C379.385 131.78 380.315 132.67 380.935 133.81C381.575 134.93 381.895 136.2 381.895 137.62V139.57H370.405C370.605 140.37 371.105 140.95 371.905 141.31C372.705 141.67 373.795 141.85 375.175 141.85C376.115 141.85 377.075 141.77 378.055 141.61C379.055 141.45 379.915 141.23 380.635 140.95V144.43C379.895 144.73 378.965 144.97 377.845 145.15C376.745 145.35 375.615 145.45 374.455 145.45ZM376.915 136.27C376.835 135.49 376.515 134.88 375.955 134.44C375.395 134 374.625 133.78 373.645 133.78C372.685 133.78 371.925 134.01 371.365 134.47C370.805 134.91 370.485 135.51 370.405 136.27H376.915ZM390.223 145.45C388.443 145.45 387.093 144.96 386.173 143.98C385.273 142.98 384.823 141.62 384.823 139.9V134.26H382.783V130.6H384.823V126.28H390.103V130.6H393.403V134.26H390.103V139.18C390.103 139.96 390.243 140.52 390.523 140.86C390.823 141.2 391.343 141.37 392.083 141.37C392.743 141.37 393.403 141.19 394.063 140.83V144.76C393.543 145 392.983 145.17 392.383 145.27C391.803 145.39 391.083 145.45 390.223 145.45Z" fill="white"/>
                </svg>
                
                <div v-if="circleAppear && !isClick" class="click-img">
                    <svg class="svg" viewBox="0 0 293 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M291 39.4932L275.337 21.2466L261.191 3L291 6.54795V39.4932Z" fill="#E3E1E1"/>
                        <path d="M2 114C64.1451 21.2466 239.364 63.4164 275.337 21.2466M275.337 21.2466L291 39.4932V6.54795L261.191 3L275.337 21.2466Z" stroke="#E3E1E1" stroke-width="4"/>
                    </svg>
                    <div class="svg-txt">Rester cliqué sur l'image pour parcourir les projets</div>
                </div>

            </div>
            <div v-if="activeSlide == 2" key="2">
                <div class="global-pic" @mouseup="endAnim" @mouseleave="endAnim" @mousedown="dropImg" @touchstart="dropImg" @touchend="endAnim"><img :class="zoom1 ? 'img-zoom' : ''" :src="require(`@/assets/img/slides/${imageInde}.jpg`)" alt="image de indéliable.com" draggable="false"></div>
                <div class="div-title d-flex justify-content-center"><div @click="displayDetailIndeliable = true" @mouseover="zoom1 = true" @mouseleave="zoom1 = false" class="fw-black title-project">Indéliable.com</div></div> 
            </div>
            <div v-if="activeSlide == 3" key="3">
                <div class="global-pic" @mouseup="endAnim" @mouseleave="endAnim" @mousedown="dropImg" @touchstart="dropImg" @touchend="endAnim"><img :class="zoom1 ? 'img-zoom' : ''" :src="require(`@/assets/img/slides/${imageLover}.jpg`)" alt="image de LoverWantCash" draggable="false"></div>
                <div class="div-title d-flex justify-content-center"><div @click="displayDetailLover = true" @mouseover="zoom1 = true" @mouseleave="zoom1 = false" class="fw-black title-project">Lover Want Cash</div></div>
            </div>
            <div v-if="activeSlide == 4" key="4">
                <div class="global-pic" @mouseup="endAnim" @mouseleave="endAnim" @mousedown="dropImg" @touchstart="dropImg" @touchend="endAnim"><img :class="zoom1 ? 'img-zoom' : ''" :src="require(`@/assets/img/slides/${imageValorant}.jpg`)" alt="image de Valorant slayer Victory" draggable="false"></div>
                <div class="div-title d-flex justify-content-center"><div @click="displayDetailValorant = true" @mouseover="zoom1 = true" @mouseleave="zoom1 = false" class="fw-black title-project">Valorant Slayer</div></div>
            </div>
            <div v-if="activeSlide == 5" key="5">
                <div class="global-pic" @mouseup="endAnim" @mouseleave="endAnim" @mousedown="dropImg" @touchstart="dropImg" @touchend="endAnim"><img :class="zoom1 ? 'img-zoom' : ''" :src="require(`@/assets/img/slides/${imageMarvel}.png`)" alt="image de Marvel API" draggable="false"></div>
                <div class="div-title d-flex justify-content-center"><div @click="displayDetailMarvel = true" @mouseover="zoom1 = true" @mouseleave="zoom1 = false" class="fw-black title-project">Marvel API</div></div>
            </div>
        </transition>
        <transition-group name="arrow">
            <svg :class="arrowAppear ? 'arrow arrow-right' : 'none'" viewBox="0 0 290 120" key="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M286.5 41L271 23L257 5L286.5 8.5V41Z" fill="white"/>
                <path d="M0.5 114.5C103 124 235.4 64.6 271 23M271 23L286.5 41V8.5L257 5L271 23Z" stroke="white" stroke-width="7"/>
            </svg>
            <svg :class="arrowAppear ? 'arrow arrow-left' : 'none'" viewBox="0 0 291 119" key="2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 40.8329L19.5 22.9165L33.5 5L4 8.48376V40.8329Z" fill="white"/>
                <path d="M290 113.992C187.5 123.448 55.1 64.3234 19.5 22.9165M19.5 22.9165L4 40.8329V8.48376L33.5 5L19.5 22.9165Z" stroke="white" stroke-width="7"/>
            </svg>
        </transition-group>
        <transition name="detail-transition" mode="out-in">
            <indeliable key="1" v-if="displayDetailIndeliable" @backProject="backProjectParent()"></indeliable>
            <spa key="2" v-if="displayDetailSpa" @backProject="backProjectParent()"></spa>
            <lover-want-cash key="3" v-if="displayDetailLover" @backProject="backProjectParent()"></lover-want-cash>
            <valorant-slayer key="4" v-if="displayDetailValorant" @backProject="backProjectParent()"></valorant-slayer>
            <marvel key="5" v-if="displayDetailMarvel" @backProject="backProjectParent()"></marvel>
        </transition>
    </div>
</template>

<script>
import Indeliable from './shares/project/Indeliable';
import Spa from './shares/project/Spa';
import LoverWantCash from './shares/project/Lover';
import ValorantSlayer from './shares/project/Valorant';
import Marvel from './shares/project/Marvel';



export default {
    components: {
        Indeliable,
        Spa,
        LoverWantCash,
        ValorantSlayer,
        Marvel
    },
    data(){
        return{
            zoom1:false,
            position:100,
            scaleText: 1,
            isClick: false,
            arrowAppear:false,
            positionCursor: 0,
            activeSlide: 1,
            modeSlide: 'slide',
            circleAppear: false,
            displayDetailIndeliable: false,
            displayDetailSpa:false,
            displayDetailLover: false,
            displayDetailValorant: false,
            displayDetailMarvel: false,
            imageSpa: 'presentation-spa-marlioz',
            imageInde: 'presentation-indeliable',
            imageLover: 'presentation-lover-want-cash',
            imageValorant: 'presentation-valorant',
            imageMarvel: 'presentation-marvel',


            
        }
    },
    methods: {
        dropImg(event){
            if(this.isMobile && event.changedTouches){
                this.positionCursor = event.changedTouches[0].screenX;
            }
            event.target.className = 'global-pic scale-anim';
            this.isClick = true;
            this.circleAppear = false;
            this.arrowTime = setTimeout(() => {this.arrowAppear = true;},700)
        },
        endAnim(event){
            event.target.className = 'global-pic';
            this.isClick = false;
            clearTimeout(this.arrowTime);
            this.arrowAppear = false;
        },
        mouseMove(event){     
            if(this.isClick){
                if(this.isMobile){         
                    this.device = event.changedTouches[0];
                }else {
                    this.device = event;
                }
                
                if((this.positionCursor - this.device.screenX) > 50 || (this.positionCursor - this.device.screenX) < -50){// Cursor need move more than X
                    if(this.device.screenX < this.positionCursor){
                        if(this.activeSlide >= 2){
                            this.activeSlide -= 1;
                        }else {
                            this.activeSlide = 5;
                        }
                        this.modeSlide = 'reverseSlide';
                        this.isClick = false;
                    }else {
                        if(this.activeSlide <= 4){
                            this.activeSlide += 1;
                        }else {
                            this.activeSlide = 1;
                        }
                        this.modeSlide = 'slide';
                        this.isClick = false;
                    }
                }
            }else if (!this.isClick && !this.isMobile) {
                this.positionCursor = event.screenX;
            } 
        },
        backProjectParent(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
            const scrollInterval = setInterval(() => {
                if(window.screenY == 0){
                    this.displayDetailIndeliable = false;
                    this.displayDetailSpa = false;
                    this.displayDetailLover = false;
                    this.displayDetailValorant = false;
                    this.displayDetailMarvel = false;
                    clearInterval(scrollInterval);
                }
            }, 100);
            
        }
        
    },
    created() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.isMobile= true;
        }

        //Check if print img mobile size
        if(window.innerWidth <= 600){
            this.imageSpa = 'mobile/presentation-spa-marlioz';
            this.imageInde = 'mobile/presentation-indeliable';
            this.imageLover = 'mobile/presentation-lover-want-cash';
            this.imageValorant = 'mobile/presentation-valorant';
            this.imageMarvel = 'mobile/presentation-marvel';
        }

        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('touchmove', this.mouseMove);
        setTimeout(() => {
            this.circleAppear = true;
        },1500)
    },
    destroyed() {
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('touchmove', this.mouseMove);

    }
 
}

</script>

<style scoped>
img {
    box-shadow: 40px 45px 30px 5px rgba(0,0,0,0.75);
    z-index: 2;
    pointer-events: none;
    opacity: 1;
    transition: all 900ms linear;
    width: 100vw;
    height: 100vh;
 
}

.global-pic {
    user-select: none;
    z-index: 2;
    cursor: grab;
    transition: all 500ms linear;
}

.img-zoom {
    opacity: 1;
    transform: scale(1.1) rotate(-2deg);
}

.title-project:hover {
    transform: scale(1.2);   
}

.title-project {
    user-select: none;
    transition: all 500ms linear;
    cursor: pointer;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 6rem;
}

.div-title {
    position: absolute;
    top: 25vh;
    width: 100vw;
}

.bg {
    overflow: hidden;
    background-color: #FF005C;
}

.arrow {
    width: 10vw;
    height: auto;
    opacity: 0.8;
    position: absolute;
    z-index: 100;
    animation: wing-arrow 2s infinite linear;
}

.arrow-left {
    transition: all 500ms linear;
    bottom: 20vh;
    left: 15vw;
}

.arrow-right {
    transition: all 500ms linear;
    bottom: 20vh;
    right: 15vw;
}
/* ANIMATION */
.scale-anim {
    transition: all 300ms linear;
    transform: scale(0.8);
    filter: blur(4px);
}

.slide-enter-active, .slide-leave-active {
  transition: all 600ms;
}
.slide-enter, .slide-leave-to {
    transform: translateX(100vw) rotate(5deg) rotateX(-20deg) scale(0.8);
}

.reverseSlide-enter-active, .reverseSlide-leave-active {
  transition: all 600ms;
}
.reverseSlide-enter, .reverseSlide-leave-to {
    transform: translateX(-100vw) rotate(5deg) rotateX(-20deg) scale(0.8);
}

/* DETAIL */
.arrow-enter-active {
  transition: opacity 500ms ;
  transition-delay: 1.5s;
}
.arrow-enter, .arrow-leave-to {
    opacity: 0;
}

.stayClick {
    position: absolute;
    top: 45vh;
    right: 30vh;
    width: 350px;
    pointer-events: none;
}

.click-img  {
    text-align: center;
    position: absolute;
    top: 70vh;
    left: 30vh;
    pointer-events: none;
}

.svg {
    width: 50%;
}

.svg-txt {
   font-family: 'Prompt', sans-serif;
   font-size: 0.8rem;
   font-weight: 600;
}
@keyframes  wing-arrow {
    0% {
        
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

/* DISPLAY PROJECT */
.img-dezoom {
    width: 90vh;
}

.detail-transition-enter-active {
    transition: all 500ms linear;
}
.detail-transition-enter {
    transform: translateY(40vw);
}

.detail-transition-leave-active {
    transition: all 800ms linear;
}

.detail-transition-leave-to {
    transform: translateY(40vw);
}

@media screen and (max-width: 1400px){
    .svg-txt {
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 1150px){
    .title-project {
        font-size: 4rem;
    }
    .stayClick {
        top: 38vh;
        right: 10vh;
        width: 300px;
    }

    .click-img  {
        top: 70vh;
        left: 10vh;
    }
    
}

@media screen and (max-width: 850px){
    .title-project {
        font-size: 4.5rem;
    }
    .stayClick {
        top: 36vh;
        right: 2vh;
        width: 250px;
    }

    .click-img  {
        top: 75vh;
        left: 2vh;
    }
}

@media screen and (max-width: 600px){
    .title-project {
        font-size: 3.2rem;
    }
    .stayClick {
        top: 33vh;
    }
}

@media screen and (max-width: 450px){
    .stayClick {
        top: 31vh;
        right: 1vw;
        width: 250px;
    }

    .click-img  {
        top: 68vh;
        left: 1vw;
    }
    .svg-txt {
        font-size: 1.7rem;
    }
}

@media screen and (max-width: 340px){
    .stayClick {    
        width: 200px;
    }
    .svg-txt {
        font-size: 1.35rem;
    }
}
</style>