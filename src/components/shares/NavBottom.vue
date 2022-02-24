<template>
    <div class="nav d-flex flex-row justify-content-between px-2 py-2 w-100">
        <div>
            <a target="_blank" href="mailto:rollet.raphael@gmail.com"><img class="mr-mobile hover-rotate" src="@/assets/img/gmail.png" alt="Boite de messagerie gmail"></a>
            <a target="_blank" href="https://www.linkedin.com/in/rollet-raphael/"><img class="hover-rotate linkedin mr-mobile" src="@/assets/img/linkedin.png" alt="Contact linkedin"></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCJZkKNgLmASmb9EvLQU2saQ"><img class="hover-rotate youtube" src="@/assets/img/youtube.png" alt="Chaine youtube rollet raphael"></a>
        </div>
        <div class="mr-3"><span class="cl-pink">Update :</span> Janvier 2022</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
    z-index: 900;
    position: fixed;
    bottom: 0;
    left: 0;
}

img {
    height: 30px;
}

.linkedin {
    height: 31px;
}

.youtube {
    height: 31px;
}

.mr-3 {
    margin-bottom: 0;
    font-weight: 900;
    align-self: center;
    font-size: 0.8rem;
}

.mr-mobile  {
    margin-right: 0.8rem;
}

</style>