<template>
    <nav>
                <router-link to="/" class="bx-lg">
                    <ion-icon name="play-outline"></ion-icon>
                    <h1 class="h1-lg">cinematic</h1>
                </router-link>
    </nav>
</template>

<script>
export default {
}
</script>
<style scoped>
nav {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    padding: 0 60px;
    background-color: rgb(35, 40, 65);
    display: flex;
    align-items: center;
    align-self: flex-start;
    z-index: 100;
}
.bx-lg {
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    align-self: flex-start;
}
.lnk-lg, .h1-lg {
    display: inline-block;
    margin-block: 0;
}
</style>