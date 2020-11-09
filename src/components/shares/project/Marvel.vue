<template>
    <div class="display-project">
        <div v-if="timeClose" class="close-details"><img class="close-img" @click="returnProject" src="@/assets/img/close.png" alt="fermer le profil"></div>
        <div class="disable-choice"></div>
        <div class="contenue">
            <h2><span>Pouvoir</span> rechercher tous ses héros <span class="cl-pink">favoris</span> ! Crée <span>votre</span> liste et observée toutes leurs statistiques. Retrouver <span>toutes</span> leurs apparitions dans des comics, mais aussi dans leur numéro <span class="cl-pink">spécial</span>.</h2>
            <div class="vitrine py-5">
                <img src="@/assets/img/project/marvel/home.png" alt="Page d'accueil avec explication du fonctionnement">
            </div>
            <div class="py-5 vitrine bg-marvel">
                <img src="@/assets/img/project/marvel/favorites.png" alt="Ajouter ses héros préferer a sa liste.">
            </div>

            <div class="vitrine py-5">
                <img src="@/assets/img/project/marvel/one-heros.png" alt="Exemple d'une page d'un hero.">
                 <div class="bg-marvel py-3 mt-5 shadow-behind">
                    <h3 class="mb-3">Vous souhaitez essayer par vous-même ? Pas de problème c'est totalement gratuit et ça marche partout !</h3>
                    <div class="d-flex flex-row justify-content-center">
                        <a class="mr-4" target="_blank" href="https://marvelapp.noteatcookie.fr/">
                            <img class="link-share-project" src="@/assets/img/play.svg" alt="Lien de test">
                        </a>
                        <a class="mx-4" target="_blank" href="https://www.youtube.com/watch?v=Cn_GSPjGlUk">
                            <img class="link-share-project youtube-project" src="@/assets/img/youtube.png" alt="Lien vidéo youtube">
                        </a>
                        <a class="ml-4" target="_blank" href="https://github.com/deeluxe74/front-marvel">
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
            techno: ['Vuejs', 'Marvel API', 'Adobe XD'],
            resumer: ["L'application sert à retrouver tous les héros possibles (référencés sur l'api officiel Marvel) ainsi que d'obtenir des redirections vers leurs différentes statistiques et explorer leurs apparitions dans des comics, éditions spéciales ... ", "De plus, on peut ajouter grâce à simple clic dans ses favoris les héros et obtenir une liste sauvegardée dans le navigateur (local Storage), ainsi que les retirer tout aussi facilement."],
            difficulte: ["Trouver un design qui correspond a l'univers Marvel, en gardant comme principe le fait d'aérer l'espace et obtenir une UI facile et lisible." , "Apprendre à se servir de l'api Marvel, qui reste relativement pratique grâce au fait de pouvoir effectuer des tests d'appels directement depuis le site."]
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
    color: rgb(0, 0, 0);
}

.vitrine {
    background-color: rgba(212, 212, 212, 0.452)
}

.vitrine img {
    width: 60vw;
}

.vitrine-three {
    width: 85vw;
    height: auto;
}

.size-very-small {
    width: 17vw;
}
.size-small {
    width: 20vw;
}

.rotate-reverse {
  transform: rotate(-0deg)!important;
}
.rotate {
  transform: rotate(-7deg)!important;
}

.multiple-picture {
    background-color: #CE3142;
}

.bg-marvel {
    background-color: #7A1F1E;
}

a:hover {
    opacity: 0.7;
}

@media screen and (max-width: 650px) {
    .vitrine img {
        width: 90vw;
    }
    .vitrine-three {
        width: 100vw;
        height: auto;
    }
    .mobile {
        margin: 50px 0 0 0!important;
    }
    .mobile-wrap {
        flex-wrap: wrap!important;
    }
    .size-very-small {
        width: 80vw;
    }
    .size-small {
        width: 80vw;
    }
    .size-medium {
        width: 60vw;
    }
    h2 {
        font-size: 1.5rem;
        margin-left: 10vw;
    }
    h3 {
        font-size: 1.5rem;
    }
}
</style>