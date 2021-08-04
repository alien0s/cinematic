<template>
    <div class="caixa">
    <div class="bx-bnnr-itm" v-for="value in results" :key="value.id">
            <h1>{{value}}</h1>
            {{i.id}}
        </div>
        <p>lorem ipsum</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            results: "",
            id: this.$route.params.id,
            active: true
        }
    },
    mounted () {
    axios.get(`https://api.themoviedb.org/3/movie/`+this.id+`?api_key=f7e761c206ae5ab58bf5617450066a0a&language=pt-BR`)
    .then(response => { 
      this.results = response.data
      console.log(this.id)
      console.log(this.results)
    })
    }
}
</script>
<style>
.caixa{
  width: 100%;
  height: 500px;
  background-color: blue;
  display: block;
}
</style>