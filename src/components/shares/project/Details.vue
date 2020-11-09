<template>
    <div class="details">
        <div class="tech bg-white">
            <h1>Technologie</h1>
            <div v-for="(name,index) in techno" :key="index + 'techno'" class="badge bg-pink hover-scale">{{ name }}</div>
        </div>
        <div class="resume">
            <h1>Résumé</h1>
            <p v-for="(paragraphe,index) in resumer" :key="index + 'paragraphe'">{{ paragraphe }} <br><br></p>

            <h1 class="difficulté py-2 my-4">Difficultés techniques</h1>
            <p v-for="(paragraphe,index) in difficulte" :key="index + 'difficulte'">{{ paragraphe }} <br><br></p>

        </div>
    </div>
</template>

<script>

export default {
    props: ['techno','resumer', 'difficulte']
}
</script>

<style scoped>
h1 {
    color:  rgba(223, 223, 223, 0.4);
    font-size: 8rem;
    font-weight: 800;
}
p {
    margin: 0 13vw;
    font-size: 1rem;
    font-weight: 200;
}

.bg-pink h1 {
    color: rgba(0, 0, 0, 0.15);
}

.tech {
    position: relative;
    padding: 2.5rem 0;
}

.resume {
    padding: 2rem 0;
}

.details {
    text-align: center;
}

.difficulté {
    background-color: brown;
    font-size: 1.5rem;
    color: black;
}

.title {
    position: absolute;
    top: 0vh;
}

.badge {
    margin: 0.5rem 1rem;
    padding: 0.5rem 2.5rem;
    z-index: 5;
    border-radius: 0;
    font-size: 1.3rem;
}

@media screen and (max-width: 650px) {
    h1 {
        font-size: 6rem;
    }
    .difficulté {
        font-size: 2rem;
    }
    
}

@media screen and (max-width: 350px) {
    h1 {
        font-size: 4rem;
    }

}
</style>