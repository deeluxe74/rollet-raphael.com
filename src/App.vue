<template>
  <div id="app">
    <nav-bar :about="about" v-if="!disableNav"></nav-bar>
    <transition name="component-swap" mode="out-in">    
      <router-view @displayAbout="displayAbout" @disableNav="onClickChild"></router-view>
    </transition>
    <Nav-bottom v-if="!disableNav"></Nav-bottom>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import NavBar from './components/shares/NavBar';
import NavBottom from './components/shares/NavBottom';

export default {
  name: 'App',
  components: {
    NavBar,
    NavBottom
  },
  data(){
    return {
      disableNav: false,
      about: false
    }
  },
  methods: {
    onClickChild (value) {
      this.disableNav = value;
    },
    displayAbout (value) {
      this.about = value;
    }
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  height: 100%;
  width: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  box-sizing: border-box;
  color: white;
  background-color: #1a1a1a;
}

h1 {
  color: white;
  margin: 0;
  font-family: 'Prompt', sans-serif;
}

p {
  color: white;
  font-size: 1rem;
  font-weight: 300;
  text-align: left;
}

.hover-rotate {
  transition: all 400ms ease-out;
}
.hover-rotate:hover {
  cursor: pointer;
  transform: rotate(-95deg) scale(1.3);
}
.hover:hover {
  cursor: pointer;
  opacity: 0.8;
}

.hover-scale {
  transition: all 400ms ease-out;
}
.hover-scale:hover {
  transform: scale(1.1) translateY(5px);
}

.btn {
  border-radius: 0px;
  padding: 0.4rem 2rem;
}

.btn-white {
  font-size: 2rem;
  color: #FF005C;
  background-color: white;
}

.bg-pink {
  background-color: #FF005C !important;
}
.cl-pink {
  color: #FF005C !important;
}

.fw-thin {
  font-weight: 100;
}
.fw-700 {
  font-weight: 700;
}
.fw-black {
  font-weight: 900;
}

.z-index-20 {
  z-index: 20!important;
}
.z-index-21 {
  z-index: 21!important;
}

.shadow {
  box-shadow: 60px 70px 49px -15px rgba(0,0,0,0.14)!important;
}

.shadow-strong {
  box-shadow: 60px 70px 49px -15px rgba(0,0,0,0.5)!important;
}
.shadow-behind {
  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.5)!important;
}

.rotate {
  transform: rotate(5deg)!important;
}
.rotate-reverse {
  transform: rotate(-7deg)!important;
}

.none {
  opacity: 0!important;
}

.marge-top {
  margin-top: 20vh;
}

.link-share-project {
  width: 75px!important;
}
.youtube-project{
  margin-top: 3px;
  width: 70px;
}

/* ANIMATION */
.component-swap-enter-active {
  transition: all 300ms linear;
}
.component-swap-enter{
  filter: blur(20px);
}

.component-swap-leave-active {
  transition: all 300ms linear;
}

.component-swap-leave-to  {
  opacity: 0;
  filter: blur(20px);
}

.close-details {
  z-index: 100;
  width: 100%;
  text-align: left;
  position: fixed;
  top: 1vh;
}
.close-img {
  opacity: 0.7;
  cursor: pointer;
  width: 2.5vw;
  height: auto;
}
.close-img:hover  {
  opacity: 1;
}


/* Project details */

.display-project {
    z-index: 200;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    margin: 0;
}

.disable-choice {
    height: 60vh;
}

.contenue {
    text-align: center;
    background-color: rgb(255, 255, 255);
    min-height: 40vh;
}

.vitrine {
    box-shadow: inset 0 6px 13px -7px rgba(0,0,0,0.7), inset 0 -7px 13px -7px rgba(0,0,0,0.7);  
    background-color: rgba(0, 225, 255, 1);
}
.vitrine img {
  width: 50vw;
}

.multiple-picture {
  padding: 2rem 0;
}

.size-very-small {
  width: 20vw;
}
.size-small {
  width: 40vw;
}
.size-medium {
  width: 55vw;
}

.close-details {
  left: 48vw;
}

.display-none {
    display: none;
}

@media screen and (max-width: 1400px){
  body,html {
    font-size: 20px;
  }
}

@media screen and (max-width: 850px){
  body,html {
    font-size: 15px;
  }
  .close-img {
    width: 5vw;
  }
}

@media screen and (max-width: 650px) {
  .vitrine img {
      width: 90vw;
  }
  .size-very-small {
    width: 80vw;
  }
  .size-small {
    width: 80vw;
  }
  .size-medium {
    width: 80vw;
  }
  .rotate {
    transform: rotate(0deg)!important;
  }
  .rotate-reverse {
    transform: rotate(0deg)!important;
  }
}

@media screen and (max-width: 450px){
  body,html {
    font-size: 10px;
  }
  p {
    font-size: 1.5rem;
  }
  .close-img {
    width: 8vw;
  }
}

@media screen and (max-width: 340px){
  body,html {
    font-size: 8px;
  }
  p {
    font-size: 1.6rem;
  }
}
</style>
