<template>
    <div class="display-project">
        <div v-if="timeClose" class="close-details"><img class="close-img" @click="returnProject" src="@/assets/img/close.png" alt="fermer le profil"></div>
        <div class="disable-choice"></div>
        <div class="contenue">
            <h2><span>Rassemblez</span> les studios de jeux indépendants, chaque <span class="cl-pink">studio</span> apporte une partie de sa communauté pour accroître celle des autres. Une démarche <span class="cl-pink">bénéfique</span> pour <span>tous</span>.</h2>
            <div class="vitrine py-5">
                <img src="@/assets/img/project/indeliable/espaces-constructif-question.png" alt="Espace constructif avec description et question">
            </div>
            <div class="multiple-picture d-flex flex-column mobile-wrap">
                <div class="d-flex flex-row justify-content-center my-5 mobile-wrap mobile">
                    <div class="z-index-21"><img class="size-small shadow " src="@/assets/img/project/indeliable/rechercher-jeux-independant.png" alt="Rechercher un jeux indépendant et afficher sa fiche"></div>
                    <div class="z-index-20"><img class="size-small mobile  marge-top" src="@/assets/img/project/indeliable/boutique-indystore-shop.png" alt="boutique acheter un jeux dans le shop"></div>
                </div>
                <div class="mb-4 mobile"><img class="size-medium shadow" src="@/assets/img/project/indeliable/actualites-sur-jeux-independant.png" alt="retrouver les actualités de tout les jeux"></div>
            </div>
            <div class="vitrine py-5 bg-pink">
                <img src="@/assets/img/project/indeliable/feuille-jeux-description.png" alt="fiche de jeux avec description du projet">
            
                <div class="bg-inde py-4 mt-4 shadow-behind">
                    <h3 class="mb-3">Vous souhaitez en voir plus ? Avec toutes les fonctionnalités et animations ?</h3>
                    <div class="d-flex flex-row justify-content-center">
                        <a class="mx-4" target="_blank" href="https://www.youtube.com/watch?v=LAR4FebhZVo">
                            <img class="link-share-project youtube-project" src="@/assets/img/youtube.png" alt="Lien vidéo youtube">
                        </a>
                        <a class="ml-4" target="_blank" href="https://github.com/deeluxe74/indeliable.com">
                            <img class="link-share-project" src="@/assets/img/github.svg" alt="Lien du répertoire github">
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
            techno: ['Vuejs', 'Laravel', 'Firebase'],
            resumer: ["Indéliable.com a pour objectif de réunir plusieurs studios indépendants pour partager les avancements, les questions et les objectifs sur leurs projets. Ainsi, ils peuvent proposer leurs jeux directement à la vente dans la boutique IndyStore et renforcer leur communauté grâce à celle des autres studios.", "La plupart des joueurs ne se restreignent pas à seulement une catégorie de jeux, ce qui permet a chaque joueur de pouvoir découvrir des jeux qui proviennent de différents horizons."],
            difficulte: ["Le challenge a été d'obtenir un système totalement géré depuis firebase, grâce à la base de données il existe pour chaque jeu une 'fiche-type' qui à sa création va automatiquement afficher le jeu sur le site et va rendre de façon dynamique son contenu.", "Par exemple, pour les jeux proposés dans la boutique, il suffit d'ajouter une section 'shop' à la fiche pour que le jeux soit intégré automatiquement dans la boutique. Cela marche aussi pour l'offre partenaire (espace constructif), les actualités, sorties de la semaine ... Tout est géré depuis Firebase ce qui permet une totale autonomie du site web !"]
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
    text-decoration: none;
    color: black;
}

a:hover {
    opacity: 0.5;
}

.bg-inde {
    background-color: #00E08F;
}

@media screen and (max-width: 650px) {
    .vitrine img {
        width: 90vw;
    }
    .mobile {
        margin: 50px 0 0 0!important;
    }
    .mobile-wrap {
        flex-wrap: wrap!important;
    }
    .size-small {
        width: 80vw;
    }
    .size-medium {
        width: 60vw;
    }
    h2 {
        margin-left: 10vw;
        font-size: 1.5rem;
    }
    h3 {
        font-size: 1.5rem;
    }
}
</style>