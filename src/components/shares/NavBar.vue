<template>
    <div class="nav d-flex flex-row justify-content-between px-2 pt-2">
        <router-link to="/"><img class="logo hover-rotate" src="@/assets/img/logo.png" alt="Logo Raphael Rollet"></router-link>
        <router-link v-if="about" to="/project"><h3 class="hover">WORK</h3></router-link>
        <router-link to="/about"><h3 class="hover hover-about mr-2">ABOUT</h3></router-link>
    </div>
</template>

<script>
export default {
    props:['about']
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.nav {
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100vw;
    align-items: center;
}

h3 {
    font-family: 'Prompt', sans-serif;
    color: rgb(255, 255, 255);
    font-size: 0.7rem;
    font-weight: 900;
    margin: 0;
}

.logo {
    height: 50px;
    border-radius: 50%;
}

.hover-about:hover {
    color: white;
}

@media screen and (max-width: 1000px) {
    h3 {
        font-size: 1rem;
    }
}

@media screen and (max-width: 600px) {
    .logo {
        height: 30px;
    }
    h3 {
        font-size: 1.2rem;
    }
}
</style>