<template>
    <div class="display-project">
        <div v-if="timeClose" class="close-details"><img class="close-img" @click="returnProject" src="@/assets/img/close.png" alt="fermer le profil"></div>
        <div class="disable-choice"></div>
        <div class="contenue">
            <h2><span>L'application</span> de gestion de <span>budget</span> spécial <span class="cl-pink">couple</span> !<br><span>Vous</span> avez des dépenses en commun avec une personne, <span class="cl-pink">souvent</span> vous ne savez plus on vous en <span>êtes</span> ?<br><span class="cl-pink">Lover Want Cash</span> est fait pour vous !</h2>
            <div class="vitrine py-5">
                <img class="shadow-behind" src="@/assets/img/project/lover-want-cash/statistique-graphique-classement.png" alt="Graphique, statistique par mois, par an. Tout savoir sur vos dépenses">
            </div>
            <div class="vitrine-auto">
                <img src="@/assets/img/project/lover-want-cash/vitrine-fonctionnement-notes.png" alt="Comment marche le principe des notes">
            </div>
            <div class="vitrine-multiple py-5 d-flex flex-column">
                <div class="d-flex flex-row justify-content-center mobile-wrap">
                    <div><img class="size-very-small mr-5 mobile shadow-behind" src="@/assets/img/project/lover-want-cash/information-utilisation-application.png" alt="Information, explication du fonctionnement de l'application"></div>
                    <div class="ml-5 align-self-center mobile rotate"><img class="size-very-small" src="@/assets/img/project/lover-want-cash/profil-utilisateur.png" alt="Profil avec la personne liées a vous, vos statistiques et info personnelle"></div>
                </div>

                <div class="bg-black py-3 mt-5 shadow-behind">
                    <h3 class="mb-3">Vous souhaitez essayer par vous-même ? Pas de problème c'est totalement gratuit et ça marche sur Ios et Android !</h3>
                    <div class="d-flex flex-row justify-content-center">
                        <a class="mr-4" target="_blank" href="https://loverwantcash.noteatcookie.fr/">
                            <img class="link-share-project" src="@/assets/img/play.svg" alt="Lien de test">
                        </a>
                        <a class="ml-4" target="_blank" href="https://github.com/deeluxe74/LoverWantCash">
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
            techno: ['Vuejs', 'Laravel', 'PWA', 'Bootstrap', 'Mysql'],
                        resumer: ["Lover Want Cash permet de connaitre le montant que chaque personne doit à l'autre. De plus, elle permet de créer des notes, se lier à une personne, voir ses dettes, obtenir des graphiques sur votre budget par mois/années/catégories, reconsulter les notes des mois précédents.","Pour profiter de toutes les fonctionnalités, il faudra vous lier à une personne n'importe qui tant que vous avez des dépenses en commun ! Si vous souhaitez profiter de l'application seul celle-ci vous permet de sauvegarder vos dépenses et de les consulter.", "À chaque fin de mois la même question : Combien avez-vous dépensé ? Combien votre conjoint a-t-il dépensé ? Plus besoin de vous poser ces questions, l'application vous le dit. Vous pouvez consulter toutes les informations sur vos dépenses ainsi que celles de votre conjoint."],
            difficulte: ["Créer une Progressiv Web App fonctionnelle sous Ios, Android et desktop avec un responsive adapté à tous devices (smartphone, tablette, desktop). Relier des personnes entre elles pour former un couple, distribuer les données, lier les notes à chaque couple.", "Les multiples tables détaillées, vous permettent d'obtenir un réel suivi dans le temps avec la possibilité de revenir consulter ses dépenses des mois précédents. Vous pouvez ainsi connaître qui doit de l'argent à qui sur le mois ou sur l'année. Des graphiques vous permettent de voir les dépenses de chacun par catégories."]
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
    color: rgb(179, 179, 179);
}

.vitrine {
    background-color: rgb(182, 2, 77);
}

.vitrine img {
    width: 35vw;
}

.vitrine-multiple {
    background-color: #B6024D;
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

.vitrine-auto {
    padding: 3rem 0;
    background-color: #1C1C1C;
}

.vitrine-auto img {
    width: 85vw;
}

.size-very-small {
    height: auto;
    width: 20vw;
}

.bg-black {
    background-color: #1C1C1C;
}

@media screen and (max-width: 1100px) {
    .vitrine-auto img {
        width: 100vw;
    }
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