<template>
  <div>

    <!-- <img src="https://source.unsplash.com/featured/?water,mountain">
  {{ $store.state.images }}-->
  <div v-for="(a,i) in $store.state.images" :key="i">
    <img :src="`${$store.state.images[i].urls.full}`">
  </div>
 
  <!--{{$store.state.images[0].urls.full}}-->
  <button @click="$store.dispatch('getData')">사진</button>
  {{ $store.state.menu }}
    <button @click="$store.commit('setMenu')">1</button>
    <button @click="$store.commit('setMenu2')">2</button>
    <button>3</button>

  <Container />

 <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>

  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Container from './components/Container.vue'




export default {
  name: 'App',
  components: {
    Container,
    VueSlickCarousel
  },
  data() {
    return {

    }
  },
  mutations :{
    setMenu(state){
    state.menu = 'mountain'
    console.log(state.menu);
    }
    
  }
  ,
  methods: {

  },
  

}

</script>

<style>


</style>
