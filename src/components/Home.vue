<template>
  <div class="global">
    <svg id="triangle-back" class="triangle" viewBox="0 0 576 486" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="triangle-form" d="M576 0.5H0.5L576 485.5V0.5Z" fill="#FF005C"/>
    </svg>

    <h1><span class="cl-pink fw-black">R</span>aphaël</h1> 
    <p><span class="fw-700">Developpeur web & Designer</span> dans la région Auvergne-Rhone-Alpes.<br> Développement web et mobiles, créations design.</p> 
    
    <router-link to='/project'>
      <button class="btn mt-3 fw-black">My work<div class="full"></div></button>
    </router-link>

    <svg :style="style" class="triangle-move triangle-small" viewBox="0 0 113 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :class="style.triangleTouch ? 'change-back' : 'reset-back-1'" d="M56.5 0L112.359 96.75H0.641361L56.5 0Z" fill="#080808bd"/>
    </svg>

    <svg :style="style2" class="triangle-move triangle-small triangle2" viewBox="0 0 113 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :class="style2.triangleTouch ? 'change-back' : 'reset-back-2'" d="M56.5 0L112.359 96.75H0.641361L56.5 0Z" fill="#202020"/>
    </svg>

    <svg :style="style3" class="triangle-move triangle-small triangle3" viewBox="0 0 113 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :class="style3.triangleTouch ? 'change-back' : 'reset-back-3'" d="M56.5 0L112.359 96.75H0.641361L56.5 0Z" fill="#202020"/>
    </svg>

  </div>
</template>

<script>
export default {
  data(){
    return {
      style:{
        top: '0px',
        left: '0px',
        height: '',
        triangleTouch: false
      },
      style2:{
        top: '-20vh',
        left: '50vw',
        height: '',
        triangleTouch: false,
      },
      style3:{
        top: '-15vh',
        left: '0vw',
        height: '',
        triangleTouch: false,
      }
    }
  },
  methods: {
    animeTriangle(triangle){
      let windowHeight,windowWidth;
      windowHeight = window.innerHeight -97;
      windowWidth = window.innerWidth -113;
      setTimeout(() => {
        triangle.top = windowHeight + 'px';
        triangle.left = windowWidth + 'px';
        
      }, 100);
    },
    newPosition(triangle){
      let windowHeight, windowWidth;
      if(window.innerWidth > 600){
        windowHeight = window.innerHeight -97;
        windowWidth = window.innerWidth -113;
      }else {
        windowHeight = window.innerHeight -60;
        windowWidth = window.innerWidth -80;
      }
      const widthTriangle = document.getElementById("triangle-back").clientWidth;
      const randomWidth = Math.floor((Math.random() * windowWidth));

      if(triangle.top != '0px'){
        windowHeight = 0;
      }
      // Go in my triangle background
      if((randomWidth - widthTriangle) > widthTriangle && windowHeight == 0){
        setTimeout(() => {
          triangle.triangleTouch = true;
            setTimeout(() => {
              triangle.triangleTouch = false;
            }, 8000);
        }, 4000);
      }

      triangle.top = Math.floor(windowHeight) + 'px';
      triangle.left = randomWidth + 'px';

    },
    intervalTriangle(style, id){
        if(id == 1){
          this.interval1 = setInterval(() => {
            this.newPosition(style);
          }, 4000);
        }
        else if(id == 2){
          this.interval2 = setInterval(() => {
            this.newPosition(style);
          }, 4000);
        }
        else if(id == 3){
          this.interval3 = setInterval(() => {
            this.newPosition(style);
          }, 4000);
        }
    },
    clearMyInterval(){
      clearInterval(this.interval1);
      clearInterval(this.interval2);
      clearInterval(this.interval3);
    }
  },
  created(){
    console.log(`
    ****************************************************

    Site développé par Rollet Raphael.
    Développeur dans la région Rhône-alpes.
    
    Email : rollet.raphael@gmail.com
    Linkedin: https://www.linkedin.com/in/rollet-raphael/
    Youtube: https://www.youtube.com/channel/UCJZkKNgLmASmb9EvLQU2saQ/

    *****************************************************`);
    for(let i = 1; i <= 3; i++){
      let style, time;
      if(i == 1 ){
        style = this.style;
        time = 100;
      }
      else if(i == 2 ){
        style = this.style2;
        time = 1000;
      }
      else if(i == 3 ){
        style = this.style3;
        time = 2500;
      }
      setTimeout(() => {
        this.animeTriangle(style);
        this.intervalTriangle(style, i);
      }, time);
    }
  },
  beforeDestroy(){
    this.clearMyInterval();
    setTimeout(() => {
     this.clearMyInterval();
    },2600)
  }
}
</script>
 
<style scoped>
.global {
  overflow: hidden;
  padding: 20vh 6vw 0 6vw;
  text-align: center;
  height: 100vh;
}

h1 {
  text-align: left;
  font-size: 8rem;
  font-weight: 700;
  opacity: 0.94;
  z-index: 10;
}

p {
  margin-left: 30vw;
  opacity: 0.94;
}

.cl-pink {
  font-size: 9.5rem;
}

.btn {
  padding: 0.2rem 2.5rem;
  position: relative;
  color: #FF005C;
  font-size: 2.5rem;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.048);
}
.btn:hover .full {
  width: 100%;
}
.full {
  position: absolute;
  top: 0; left: 0;
  transition: width 400ms linear;
  background-color: #FF005C;
  width: 0%;
  height: 100%;
}

/* Background */
.triangle {
  z-index: 15;
  position: absolute;
  top: -5px; right: 0;
  width: 35vw;
  height: auto;
}
.triangle-form {
  transition: all 800ms linear;
}
.triangle-form:hover, .triangle-form:active {
  fill: rgb(1, 231, 181);
}

/* ANIMATION */
.triangle-move {
  position: absolute;
  z-index: -1;
  transition: all 4s linear;
}

.triangle-small {
  position: absolute;
  top: 0;
  width: 113px;
  height: auto;
  left: 0;
}
.triangle2 path {
  fill: #ffffff9c;
}
.triangle3 path {
  fill: #00ff9d62;
}
.change-back {
  transition: all 1s linear;
  fill: #FF005C!important;
}

.reset-back-1 {
  transition: all 1s linear;
  fill: #080808bd;
}
.reset-back-2 {
  transition: all 1s linear;
  fill: #ffffff9c;
}
.reset-back-3 {
  transition: all 1s linear;
  fill: #00ff9d62;
}

@media screen and (max-width: 450px){
  p {
    margin-left: 10vw;
  }
  .triangle-small {
    width: 80px;
    height: 60px;
  }
}


</style>
