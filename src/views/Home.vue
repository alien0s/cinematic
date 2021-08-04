<template>
  <div id="nav">
    <Nav/>
    <Banner/>
        <div class="bx-ttl">
          <ion-icon name="trending-up-outline"></ion-icon>
          <h2 class="ttl">Trending</h2>
        </div>
        <carousel class="crsl-mn" v-if="loaded" :items="6.5" :autoWidth="true" :autoHeight="true" :margin="10" :dots="false" :nav="false">
          <div class="cvr" v-for="(item, index) in results" :key="index">
            <button type="checkbox" class="btn-cvr" @click="toggleClass()">
              <router-link v-bind:to="'/'+item.id">
              <div class="skltn-cvr">
                <img :src="'https://www.themoviedb.org/t/p/w300_and_h450_face'+item.poster_path">
              </div>
              <div class="bx-txt">
                <h6 class="h6-txt">{{item.name || item.title}}</h6>
                <p class="p-inf">{{item.release_date}}</p> 
              </div>
              </router-link>
            </button>
          </div>
          <div class="shdw-cvrs"></div>
        </carousel>
        <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'
import carousel from 'vue-owl-carousel'

export default {
  name: 'Home',
  components: { 
    carousel,
    Nav,
    Banner
  },
  data () {
    return {
      results: [],
      loaded: '',
    }
  },
  methods: {
    toggleClass: function(){
      this.active = true;
    }
  },
  mounted () {
  axios
    .get('https://api.themoviedb.org/3/trending/all/day?api_key=f7e761c206ae5ab58bf5617450066a0a&language=pt-BR') 
    .then(response => { 
      this.results = response.data.results
      this.loaded = true
      console.log(this.results)
    })
    // .catch(error => {
    //   console.log(error)
    // })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
:root {
  --clr--dflt: #141b23;
}
body {
  background-color: var(--clr--dflt);
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
.bx-ttl {
  align-items: center;
  align-self: start;
  margin-left: 60px;
  display: flex;
}
ion-icon {
  margin-right: 20px;
  width: 2em;
    height: 2em;
}
.crsl-mn {
  position: relative;
  display: flex;
}
.crsl-mn::after,.crsl-mn::before {
  width: 4.7%;
  height: 100%;
  position: absolute;
  display: block;
  z-index: 2;
  content: '';
}
.crsl-mn::before {
  background-image: linear-gradient(to left, transparent,var(--clr--dflt));
  left: 0;
}
.crsl-mn::after {
  background-image: linear-gradient(to right, transparent,var(--clr--dflt));
  right: 0;
}
.owl-carousel .owl-stage-outer {
  padding-left: 60px;
}
/* .owl-carousel.owl-loaded {
    z-index: -1;
} */
.shdw-cvrs {
  width: 5%;
  right: 0;
  background-image: linear-gradient(to right,transparent,transparent,transparent,transparent,#2a3d50);
  display: block;
  position: absolute;
    top: 0;
    box-sizing: border-box;
    height: 100%;
    z-index: 1;
    transition: opacity .5s;
    cursor: pointer;
}
.btn-cvr {
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
.shw {
  display: block;
}
/* .hddn {
  display:none;
} */
.cvr {
  width: 200px;
}
.skltn-cvr {
  width: auto;
  display: flex;
  padding-bottom: 150%;
  position: relative;
  background-color: blue;
}
.skltn-cvr img {
  position: absolute;
  width: 100%;
}
.bx-txt {
  padding: 0;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  text-align: left;
  overflow: hidden;
}
.h6-txt {
  width: 99%;
  font-size: .89rem;
  margin:10px 0 5px 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-transform: capitalize;
    white-space: normal;
}
.p-inf {
  color: rgba(255,255,255,0.63);
  font-size: 0.779rem;
  margin:0
}
</style>
