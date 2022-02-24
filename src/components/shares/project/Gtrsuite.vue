<template>
    <div class="display-project">
        <div v-if="timeClose" class="close-details"><img class="close-img" @click="returnProject" src="@/assets/img/close.png" alt="fermer le profil"></div>
        <div class="disable-choice"></div>
        <div class="contenue">
            <h2><span class="cl-pink">Réalisations</span> de différentes <span>améliorations</span> sur une suite de <span>logiciels</span> online.<br /> En collaboration avec une <span>équipe</span> depuis plus d'une <span class="cl-pink">année (2021-2022)</span></h2>
            <div class="vitrine py-5">
                <img src="@/assets/img/project/gtr/list-location-page.png" alt="Page des magasins">
            </div>
            <div class="bg-gtr vitrine py-5">
                <img class="img-bigger" src="@/assets/img/project/gtr/product-page.png" alt="Page e-commerce produit">
            </div>
            <div class="vitrine py-5">
                <img src="@/assets/img/project/gtr/lead-page.png" alt="Page e-commerce contacte client">
            </div>
            <div class="bg-gtr-dark vitrine py-5">
                <img class="img-bigger" src="@/assets/img/project/gtr/mobile-page.png" alt="Page e-commerce mobile">
                 <div class="bg-gtr py-3 mt-5 shadow-behind">
                    <h3 class="mb-1">Vous souhaitez en voir plus ? Pas de problème !</h3>
                    <div class="subtitle mb-3"><a target="_blank" href="mailto:rollet.raphael@gmail.com">Contacter moi</a> pour plus d'infomation ou lien vers les projets.</div>
                    <div class="d-flex flex-row justify-content-center">
                        <a class="mr-4" target="_blank" href="https://github.com/deeluxe74">
                            <img class="link-share-project" src="@/assets/img/github.svg" alt="Lien vers mon github">
                        </a>
                        <a class="link-gtr ml-4" target="_blank" href="https://www.gtrsuite.com/?lang=fr">
                            <img class="link-share-project" src="@/assets/img/gtr.svg" alt="Gtrsuite">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Details :techno="techno" :resumer="resumer" :difficulte="difficulte"></Details>
    </div>
</template>

<script>
import Details from './Details';

export default {
    components:{
        Details
    },
    data(){
        return {
            timeClose: false,
            techno: ['Vuejs', 'Vuetify', 'Tailwind', 'Jira', '...'],
            resumer: ["Chez Gtrsuite, j'ai pu découvrir le travail en équipe sur des projets à grandes envergures. Je suis intervenue sur une suite de logiciels propre à l'entreprise avec des mises à jour continue et hebdomadaire.", "Ma plus grande contribution a été de développer une solution qui permet à de grandes chaînes de magasins de pouvoir proposer directement en ligne les produits disponibles dans chacun de leurs magasins ou suivant la géolocalisation.", "Ce projet m'a permis de pouvoir développer entièrement l'application et d'apprendre beaucoup, il est aujourd'hui utilisé par plusieurs chaînes de magasins, dont un distributeur qui inclut plusieurs milliers de points de vente."],
            difficulte: ["Beaucoup de choses ont été nouvelle, de nombreux outils, des procédés, une stucture, une mutlitude de découverte.", "J'ai pu comprendre beaucoup plus profondément le fonctionnement de vue.js ou nuxt.js, apprendre à suivre des maquettes ou proposer moi-même des solutions UI/UX.", "Apprendre a rechercher pour passer les difficultés techniques, mais aussi que chacune des applications a son contexte propre à elle-même et que toute solution ne peut pas être abordé de la même manière."]
        }
    },
    methods: {
        returnProject(){
            this.timeClose = false;
            setTimeout(() => {
                this.$emit('backProject', true);
            },100)
        }
    },
    created(){
        setTimeout(() => {
            this.timeClose = true;
        },1500)
    }
}
</script>

<style scoped>
span {
    font-weight: 900;
}

h2 {
    text-align: right;
    padding: 2rem 1rem;
    margin-left: 30vw;
    color: black;
    font-weight: 300;
    font-size: 1rem;
    font-family: 'Prompt', sans-serif;
}

h3 {
    margin: 0;
    font-size: 1rem;
}

a {
    text-decoration: underline;
    color: rgb(255, 255, 255);
}

a:hover {
    opacity: 0.7;
}

.subtitle {
    font-size: 0.7rem;
}

.vitrine {
    background-color: #d4d4d473
}

.vitrine img {
    width: 60vw;
}

.img-bigger {
    width: 75vw !important;
}

.bg-gtr {
    background-color: #0c0054;
}

.bg-gtr-dark {
    background-color: #013c80;
}

.link-gtr {
    border: solid 2px white;
    border-radius: 8px;
}
@media screen and (max-width: 650px) {
    h2 {
        font-size: 1.5rem;
        margin-left: 10vw;
    }
    h3 {
        font-size: 1.5rem;
    }
    .vitrine img {
        width: 90vw;
    }
}
</style>