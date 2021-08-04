<template>
    <div class="bnnr">
        <div class="dtls-bnnr">
            <div class="bnnr-shdw"></div>
            <div class="bnnr-img"></div>
        </div>
        <div class="dtls-txt">
            <div class="bx-dtls">
                <h1>a guerra do amanhã</h1>
                <p>Em 2051, a humanidade está perdendo uma guerra global contra uma espécie mortal de alienígenas. Para garantir a sobrevivência dos humanos, soldados e civis do presente são transportados para o futuro e se juntam à luta, entre eles Dan Forester, um pai de família determinado a salvar o mundo para sua filha.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Banner'
}
</script>
<style scoped>
.bnnr {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
}
.dtls-bnnr, .bnnr-shdw, .bnnr-img, .dtls-txt{
    position: absolute;
    top: 0;
    bottom: 0;
}
.dtls-bnnr, .bnnr-shdw, .dtls-txt {
    right: 0;
    left: 0;
}
.bnnr-shdw {
    z-index: 1;
}
.bnnr-shdw::after {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    content: '';
    display: block;
    background-image: linear-gradient(-136deg,transparent,transparent,rgba(0, 0, 0, 48%));
}
.bnnr-img {
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom;
    background-image: url(https://www.themoviedb.org/t/p/original/nVKRspU9SQEs2gNrms8cDKsI4vx.jpg);
    height: 100%;
}
.dtls-txt {
    height: 100%;
}
.bx-dtls {
    padding: 0 60px;
}
.dtls-txt {
    width: 60%;
    display: flex;
    align-items: center;
    z-index: 2
}
.dtls-txt h1{
    text-transform: capitalize;
    font-size: 2.6rem;
    margin-bottom: 0;
}
.dtls-txt h1, .dtls-txt p {
    float: left;
    text-align: left;
}
</style>
