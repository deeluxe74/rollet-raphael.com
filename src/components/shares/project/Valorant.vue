<template>
    <div class="display-project">
        <div v-if="timeClose" class="close-details"><img class="close-img" @click="returnProject" src="@/assets/img/close.png" alt="fermer le profil"></div>
        <div class="disable-choice"></div>
        <div class="contenue">
            <h2><span>Jouer</span> des matchs compétitifs, <span>évoluer</span> dans les classement avec ses <span class="cl-pink">coéquipiers</span>.<br><span>Organisez</span>, <span class="cl-pink">créez</span>, <span>acceptez</span> les matchs que vous voulez avec votre <span class="cl-pink">équipe</span>.</h2>
            <div class="vitrine py-5">
                <img src="@/assets/img/project/valorant-slayer/fiche-equipe.jpg" alt="Tous les détails de votre team et de ses membres">
            </div>
            <div class="bg-valorant">
                <img class="vitrine-three" src="@/assets/img/project/valorant-slayer/accueil-profil-description-team.png" alt="Page d'accueil, profil, team avec description récapitulatif">
            </div>
            <div class="vitrine-multiple py-5 d-flex flex-column">
                <div class="d-flex flex-row justify-content-center mobile-wrap">
                    <div><img class="size-small mr-5 mobile mobile" src="@/assets/img/project/valorant-slayer/loading-screen.png" alt="écran de chargement valorant slayer"></div>
                    <div class="align-self-center mobile"><img class="size-very-small rotate-reverse mobile ml-4" src="@/assets/img/project/valorant-slayer/jouer-accepter-match.png" alt="Lancer, accepter ou crée un match selon vos envie"></div>
                    <div class="align-self-center mobile"><img class="size-very-small rotate mobile ml-3 " src="@/assets/img/project/valorant-slayer/classement-team.png" alt="Classement général de toutes les équipes inscrites"></div>
                </div>
            </div>
            <div class="multiple-picture">
                <img class="vitrine-three" src="@/assets/img/project/valorant-slayer/fonction-match-vitrine.png" alt="Déroulement d'un match avec explications">
                <div class="bg-valorant py-3 shadow-behind">
                    <h3 class="mb-3">Vous souhaitez essayer par vous-même ? Pas de problème c'est totalement gratuit et ça marche sur Ios et Android !</h3>
                    <div class="d-flex flex-row justify-content-center">
                        <a class="mr-4" target="_blank" href="https://valorantslayer.noteatcookie.fr/">
                            <img class="link-share-project" src="@/assets/img/play.svg" alt="Lien de test">
                        </a>
                        <a class="mx-4" target="_blank" href="https://www.youtube.com/watch?v=Y6WH8TgkagU">
                            <img class="link-share-project youtube-project" src="@/assets/img/youtube.png" alt="Lien vidéo youtube">
                        </a>
                        <a class="ml-4" target="_blank" href="https://github.com/deeluxe74/ValorantSlayer">
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
            techno: ['Laravel', 'Vuejs', 'Bootstrap', 'Mysql', 'Font-awesome'],
            resumer: ["L'application permet de jouer des matchs compétitifs avec sa propre équipe, tout en gagnant ou perdant des points suivant le résultat ce qui fera évoluer le classement de votre équipe dans un ladder.","On peut créer ou rejoindre une équipe, inviter des coéquipiers, accepter ou bien lancer un match avec un horaire précis, indiqué les participants pour ce match, la map, pouvoir consulter notre adversaire pour prendre contact avec lui afin de commencer le match.", "Une fois la date du match passé, il ne reste plus qu'a rentré les scores obtenus. Chaque équipe gagnera ou perdra des points et son classement sera réévalué !"],
            difficulte: ["Cette Application(PWA) possède une base de données avec des tables étroitement liées les unes aux autres par exemple la table players. Permet de connaître le taux de victoire ou défaite de chaque joueur, a chaque match jouer une fiche players est crée pour chaque participants.", "Un système de seed est mis en place avec Faker qui crée automatiquement plusieurs team avec 3-4 joueurs a l'intérieur. Chaque team possède un nombre de victoires/défaites aléatoires avec son classement, il est parfois difficile de créer de fausses données à cause des multiples fonctionnalités qui ne sont pas forcément exécutées automatiquement.", "Un système de rôles est aussi implanté permettant à chaque équipe de posséder un Leader qui doit pouvoir gérer les recrutements ainsi que renvoyer ses membres et obtenir des évaluations sur leurs performances.","Sur une application de ce type, il y a beaucoup de variables différentes a gérer et de condition, beaucoup d'évolutions non prises en compte peuvent arriver et fausser les résultats."]
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
    color: rgb(184, 184, 184);
}

.vitrine {
    background-color: rgb(201, 53, 65);
}
.vitrine img {
    width: 30vw;
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

.bg-valorant {
    background-color: #181819;
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