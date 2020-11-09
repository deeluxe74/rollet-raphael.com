<template>
    <div class="display-project">
        <div v-if="timeClose" class="close-details"><img class="close-img" @click="returnProject" src="@/assets/img/close.png" alt="fermer le profil"></div>
        <div class="disable-choice"></div>
        <div class="contenue">
            <h2><span>Adopter</span> des animaux, s'informer, nous <span class="cl-pink">aider</span>.<br>Site web et zone <span>d'administration</span></h2>
            <div class="vitrine py-5">
                <img src="@/assets/img/project/spa-marlioz/accueil-home-spa.png" alt="Présentation de la page d'accueil de la spa marlioz">
            </div>
            <div class="multiple-picture d-flex flex-column">
                <div class="d-flex mobile-wrap flex-row justify-content-center my-5">
                    <div class="z-index-21"><img class="size-small shadow " src="@/assets/img/project/spa-marlioz/adoption-animaux-categorie.png" alt="Retrouver tout les animaux a adopter"></div>
                    <div class="z-index-20 mobile ml-5 mt-5"><img class="size-small" src="@/assets/img/project/spa-marlioz/actualites-information.png" alt="Toutes les actualités et information de la spa"></div>
                </div>
                <div class="mb-4 mobile"><img class="size-medium shadow" src="@/assets/img/project/spa-marlioz/parrainnage-aide.png" alt="comment parrainer un animal ?"></div>
            </div>
            <div class="vitrine-multiple py-5 d-flex flex-column">
                <div class="d-flex flex-row justify-content-center mobile-wrap">
                    <div><img class="size-very-small contenu-admin shadow-behind" src="@/assets/img/project/spa-marlioz/benevolat-spa-information.png" alt="Nous aidez, faire du bénévolat"></div>
                    <div class="d-flex flex-column mobile-wrap">
                        <div><img class="size-small mobile ml-5 rotate shadow-strong" src="@/assets/img/project/spa-marlioz/admin-connexion.png" alt="Administration phase de connexion"></div>
                        <div class="mt-5">
                            <img class="ml-4 mobile size-very-small shadow-behind" src="@/assets/img/project/spa-marlioz/admin-nouveau-ajout.png" alt="Administration, ajouter un animal, un article">
                            <img class="ml-5 mobile size-small rotate" src="@/assets/img/project/spa-marlioz/admin-edition.png" alt="Administration, gerer un contenue, le supprimer">
                        </div>
                    </div>
                </div>
                <div class="bg-grey py-3 mt-4 shadow-behind">
                    <h3 class="mb-3">Vous souhaitez en voir plus ? Avec toutes les fonctionnalités et animations ?</h3>
                    <div class="d-flex flex-row justify-content-center">
                        <a class="mr-4" target="_blank" href="https://github.com/deeluxe74/SPAPets">
                            <img class="link-share-project" src="@/assets/img/github.svg" alt="Lien du répertoire github">
                        </a>
                        <a class="ml-4" target="_blank" href="https://www.youtube.com/watch?v=Wh_0QZ7CrJs">
                            <img class="link-share-project youtube-project" src="@/assets/img/youtube.png" alt="Lien vidéo youtube">
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
            techno: ['PHP', 'MYSQL', 'Bootstrap', 'Html / Css'],
           resumer: ["Pouvoir consulter les animaux à l'adoption, obtenir toutes les informations essentielles ainsi que suivre l'actualité avant de rejoindre le centre de la SPA.", "Grâce a sa base de données toutes les informations sont stockées et redistribuées selon différents critères (age, Types), une partie du site est réservé à l'administration il permet de façon compréhensible et simple de pouvoir : ajouter, modifier, supprimer toutes les données !", "Toutes les informations peuvent donc évoluer sans avoir besoin de les retirer et les recréer, comme par exemple modifier sa description, actualiser sa photo...  Chaque donnée potentiellement absente comme par exemple l'âge, un numéro de médaille, une photo se verra attribué une valeur par défaut."],
            difficulte: ["Ce site a été réalisé entièrement en PHP, la difficulté principale a été de développer une zone d'administration lisible et fonctionnelle, compréhensible pour les personnes n'ayant aucunes compétences en informatique. D'obtenir un rendu dynamique et adapté selon la taille du contenue. Créer un design avec des couleurs vives tout en restant le plus simple possible.","D'obtenir un rendu dynamique et adapté selon certains manquements dans les tables. Créer un design avec des couleurs vives tout en restant lisible et épurer."]
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
    color: rgb(99, 99, 99);
}

.vitrine {
    background-color: #c73a03;
}

.vitrine-multiple {
    background-color: #c73a03;
}

a:hover {
    opacity: 0.5;
}

.size-small {
    width: 30vw;
}
.size-medium {
    width: 35vw;
    max-height: 65vh;
}

.bg-grey {
    background-color: rgb(31, 31, 31);
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