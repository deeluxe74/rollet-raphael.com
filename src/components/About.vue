<template>
    <div @mousewheel="handleScroll" @touchstart="getPosition" @touchmove="handleScrollMobile">
        <transition name="slide-components" mode="out-in">
            <div key="1" v-if="slide == 1" class="bloc-1 px-2">
                <div class="bg-title">
                    <div class="bg-txt"><span class="cl-pink">R</span>aphael</div>
                    <div class="bg-txt"><span class="cl-pink">R</span>ollet</div>
                </div>
                <div class="title">
                    <h1><span class="cl-pink">D</span>éveloppeur Web</h1>
                    <h1 class="region"><span class="cl-pink">D</span>esigner <strong>Région Annecy & Rhone-Alpes</strong></h1>
                </div>
                <div class="icon-scroll"></div>
                <img class="profil-picture" src="@/assets/img/profil1.png" alt="Photo de profil (raphael rollet)">
            </div>
            
            <div key="2" v-if="slide == 2" class="bloc-2 pt-4">
                <div class="px-5 mt-3 index-block">
                    <div class="close-details"><img class="close-img" @click="returnSlide1" src="@/assets/img/close.png" alt="fermer le profil"></div>
                    <h3>Mélanger ma passion pour le <span class="cl-pink">développement</span> et le <span class="cl-pink">design</span>.</h3>
                    <p class="mt-3">
                        <span>Développeur Web freelance</span>, je consacre toutes mes <span class="cl-pink">compétences</span> pour développer votre projet en passant par la phase de <span>création</span>, de <span>conception</span> et de <span>production</span>.
                    </p>
                    <div class="d-flex justify-content-end">
                        <p>Découvrir la possibilité de <span class="cl-pink">mélanger</span> le <span>développement</span> et le <span>design</span> pour former un seul et unique <span class="cl-pink">résultat</span>, m'a beaucoup motivé dans ma démarche d'autodidacte, me donne le besoin <span>d'apprendre</span> et revoir ma <span>vision</span> afin de proposer le <span class="cl-pink">meilleur</span> de moi-même.</p>
                    </div>
                    <h1 class="vision">Ma vision</h1>
                    <p><span class="cl-pink">Aucun</span> produit <span>révolutionnaire</span> n’a fonctionner sans un design <span>inédit</span>. Ils forment une <span class="cl-pink">paire</span> et sont la <span>clé</span> de tout produit. Même si vous ne comptez pas révolutionner le monde avec un IPod ou un Macintosh, il est important de ne pas <span class="cl-pink">négliger</span> un élément, au <span>contraire</span> les utilisés à votre propre <span>avantage</span>.</p>
                    <div class="d-flex justify-content-end">
                        <p class="mb-5">
                            La <span class="cl-pink">passion</span> pour ce domaine me permet <span>d'acquérir</span> de nouvelles <span>compétences</span> tous les jours, possédant certaines <span class="cl-pink">préférences</span> technologiques je ne suis pas <span>restreint</span> a elle-même. J'apprécie le fait de <span class="cl-pink">découvrir</span> <span>différentes technologies</span> et style de <span>procéder</span>.
                        </p>
                    </div>

                    <h1 class="vision">Votre Projet</h1>
                    <p>Chaque <span class="cl-pink">projet</span> possède ses <span>différences</span> et <span>particularités</span>, il est donc nécessaire de concevoir votre <span class="cl-pink">projet</span> à votre <span>image</span> et de manière <span>personnalisée</span> afin d'avoir un <span class="cl-pink">impact</span> <span>concret</span> et <span>nouveau</span> par rapport a vos <span class="cl-pink">concurrents</span>.</p>
                    <div class="d-flex justify-content-end">
                        <p>Du fait de sa <span class="cl-pink">personnalisation</span> tous les devis sont <span>uniques</span>, aucun prix n'est <span>prédéfini</span> dans un tableau. Le <span class="cl-pink">prix</span> ne peut s'évaluer sur un <span>nombre de pages</span>, il est nécessaire de connaître ses <span>fonctionnalités</span>, sont <span>design</span>, le <span>contenu</span>. Prenons le <span class="cl-pink">temps</span> <span>d'échanger</span> sur votre projet pour <span>connaître</span> au mieux votre <span>objectif</span> et comprendre vos <span>besoins</span>.</p>
                    </div>
                    <h4 class="my-5">Mon <span class="cl-pink">projet</span> ? développer le <span>votre</span>.</h4>
                </div>
                <div class="techno badge-dark w-100"><span>Laravel Vuejs</span>  Mysql <span>PHP JS</span>  Bootstrap <span>PWA</span> Firebase <span>Heroku Git</span> ...</div>
                
                <p class="final-sentence mt-5">Vous avez un projet en tête ? Contacter moi.</p>        
                
                <div class="d-flex flex-row-reverse justify-content-between py-4">
                    <div><a target="_blank" href="https://www.linkedin.com/in/rollet-raphael/"><div class="badge badge-dark hover">linkedin.com/in/rollet-raphael</div></a></div>
                    <a target="_blank" href="mailto:rollet.raphael@gmail.com"><div class="badge bg-pink mt-5 hover"><span>rollet.raphael@gmail.com</span></div></a>
                </div>

                <p class="quotes quote-anim quote1">“ If no one hates it no one really loves it ” <br/> <span>Jessica Walsh</span></p>
                <p :class="quote2 ? 'quote2 quote-anim' : ''" class="quotes">“ Be yourself, everyone else is already taken.” <br/><span>Oscar Wilde</span></p>
                <p :class="quote3 ? 'quote3 quote-anim' : ''" class="quotes">“ Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.” <br/><span>Albert Einstein</span></p>
                <p :class="quote4 ? 'quote4 quote-anim' : ''" class="quotes">“ Don't fake it till you make it. Fake it till you become.”<br/><span>Amy Cuddy</span></p>
                <p :class="quote5 ? 'quote5 quote-anim' : ''" class="quotes">“ It’s fine to celebrate success, but it is more important to heed the lessons of failure.”<br/><span>Bill Gates</span></p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slide: 1,
            quote2: false,
            quote3: false,
            quote4: false,
            quote5: false,
        }
    },
    methods: {
        handleScroll(event){
            if(this.slide == 1 && event.deltaY > 1){
                this.slide = 2;
                setTimeout(() => {
                    window.scrollTo(0,0);
                },500)
            }
        },
        handleScrollMobile(event){
            if(this.slide == 1 && (this.position > event.changedTouches[0].screenY)){
                this.slide = 2;
                setTimeout(() => {
                    window.scrollTo(0,0);
                },500)
            }
        },
        returnSlide1(){
            this.slide = 1;
            setTimeout(() => {
                window.scrollTo(0,0);
            },600)
        },
        getPosition(event){
            this.position = event.changedTouches[0].screenY;
        }
        
    },
    updated(){
        if(this.slide == 2 && this.quote2 == false){
            this.$emit('disableNav', true);
            if(window.innerWidth < 800) {
                this.clear = setTimeout(() => {this.quote2 = true},8000);
                this.clear1 = setTimeout(() => {this.quote3 = true},18000);
                this.clear2 = setTimeout(() => {this.quote4 = true},28000);
                this.clear3 = setTimeout(() => {this.quote5 = true},38000);
            }else {
                this.clear = setTimeout(() => {this.quote2 = true},4000);
                this.clear1 = setTimeout(() => {this.quote3 = true},9000);
                this.clear2 = setTimeout(() => {this.quote4 = true},14000);
                this.clear3 = setTimeout(() => {this.quote5 = true},18000);
            }
        }else if(this.slide == 1) {
            this.$emit('disableNav', false);
            clearTimeout(this.clear);clearTimeout(this.clear1);clearTimeout(this.clear2);clearTimeout(this.clear3);
            setTimeout(() => {this.quote2 = false;this.quote3 = false;this.quote4 = false;this.quote5 = false;},500)
        }
    },
    created(){
        this.$emit('displayAbout', true);
    },
    destroyed(){
        this.$emit('displayAbout', false);
    }
}
</script>

<style scoped>
h1 {
    font-size: 5rem;
    font-weight: 900!important;
}


h3 {
    padding-right: 10vw;
    color: black;
    font-size: 3rem;
    font-weight: 800;
}

h4 {
    color: black;
    text-align: center;
    font-weight: 200;
}

a {
    text-decoration: none;
    color: inherit;
}

p {
    font-size: 1.2rem;
    width: 40vw;
    font-weight: 200;
    color: black;
}

span {
    font-weight: 900;
}

strong {
    font-size: 3rem;
}

.bloc-1 {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
}

.title {
    margin-top: 10vh;
}

.region {
    margin-right: 30vw;
}

.bg-title {
    opacity: 0.05;
    position: absolute;
    bottom: 10vh;
    transform: rotate(-10deg);
    left: 14vh;
    height: auto;
}

.bg-txt {
    line-height: 1;
    font-size: 10rem;
    font-weight: 900!important;
}

.profil-picture {
    z-index: 10;
    animation: life-picture 15s linear infinite;
    position: absolute;
    bottom: 0;
    right: 0;
    max-height: 95vh;
    width: auto;
}

.final-sentence {
    text-align: center;
    padding: 0.5rem 0.5rem;
    background-color: rgb(22, 22, 22);
    color: white;
    font-weight: 900;
    margin-bottom: 0;
    width: 60vw;
}
@keyframes life-picture {
    0% {
        filter: blur(2px);
        transform: scale(1);
    }
    50% {
        filter: blur(0px);
        transform: scale(1.05);
    }
    100% {
        filter: blur(2px);
        transform: scale(1);
    }
}

/* BLOC 2 */
.bloc-2 {
    position: relative;
    min-height: 100%;
    transition: all 200ms linear;
    background-color: white;
}

.index-block {
    position: relative;
    z-index: 5!important;
}

.badge-dark {
    background-color: black;
}

.vision {
    text-align: center;
    font-size: 9rem;
    color: rgb(209, 209, 209);
}

.techno {
    text-align: center;
    font-size: 1.5rem;
}

.badge  {
    font-size: 1.5rem;
    border-radius: 0;
    padding: 1.5rem 1.5rem;
}

/* ANIMATION */

/* Bloc 1 */
.icon-scroll,
.icon-scroll:before{
    z-index: 15;
    position: absolute;
    left: 50%;
}

.icon-scroll{
    z-index: 15;
    width: 30px;
    height: 50px;
    top: 92%;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
}

.icon-scroll:before{
    z-index: 15;
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
}

@keyframes scroll{
  0%{ opacity: 1}
  100%{ opacity: 0;
    transform: translateY(30px)}
}

.slide-components-enter-active {
  transition: all 300ms linear;
}
.slide-components-enter{
  filter: blur(20px);
}

.slide-components-leave-active {
  transition: all 300ms linear;
}

.slide-components-leave-to  {
  opacity: 0;
  filter: blur(20px);
}
/* Bloc 2 */

.quotes {
    pointer-events: none;
    font-size: 0.6rem;
    z-index: 2!important;
    display: none;
    position: absolute;
}
.quote-anim {
    display: inherit;
    animation: quotes-move 20s infinite linear;
}

.quote1 {
   left: 5vw; 
   transform: rotate(-7deg);
}
.quote2 {
   right: 5vw; 
   transform: rotate(10deg);
}

.quote3 {
   right: 30vw;
   transform: rotate(-2deg);
}

.quote4 {
   left: 15vw; 
   transform: rotate(-3deg);
}

.quote5 {
   right: 10vw; 
   transform: rotate(8deg);
}
@keyframes quotes-move {
    0% {
        opacity: 1;
        top: 0;
    }
    100% {
        opacity: 1;
        top: 90%;
    }
}

@media screen and (max-width: 1300px){
    .profil-picture {
        height: auto;
        width: 55vw;
    }
}

@media screen and (min-width: 850px) and (max-width: 990px){
        .vision {
            font-size: 7rem;
        }
}
@media screen and (max-width: 800px){
    .badge, .techno {
        font-size: 1.8rem;
    }
    h2, .bg-txt {
        font-size: 9rem;
    }
    .profil-picture {
        height: auto;
        width: 65vw;
    }
    .quotes {
        font-size: 0.6rem;
    }
    .quote-anim {
        animation: quotes-move 39s infinite linear;
    }
    
}

@media screen and (min-width: 450px) and (max-width: 740px){
        .vision {
            font-size: 5rem;
        }
}

@media screen and (min-width: 450px) and (max-width: 600px){
    .profil-picture {
        max-height: auto;
        width: 80vw;
    }
    .bg-txt {
        font-size: 8rem;
    }
    .bg-title {
        bottom: 30vh;
        transform: rotate(-10deg);
        left: 5vw;
    }
    .quotes {
        font-size: 0.6rem;
    }
}


@media screen and (max-width: 450px){
    .flex-row-reverse {
        flex-direction: column!important;
    }
    p {
        font-size: 1.4rem;
        width: 40vw;
    }
    .vision {
        font-size: 6rem;
    }
    .profil-picture {
        max-height: auto;
        width: 100vw;
    }
    .bg-txt {
        font-size: 9rem;
    }
    .bg-title {
        bottom: 30vh;
        transform: rotate(-10deg);
        left: 5vw;
    }
    .quotes {
        font-size: 0.7rem;
    }
}
</style>