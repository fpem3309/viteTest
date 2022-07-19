<template>
    <div id="area">

        <div class="area" v-if="$store.state.menu == 'mountain'">
            <div class="write">
                <!-- <div>{{ $store.state.img }}</div> -->
                
                <img :src="`${$store.state.img}`">
                <!-- <div :style="`background-image:url(${$store.state.img})`"></div> -->
            </div>
        </div>

        <div v-if="$store.state.menu == 'water'">
            <div class="write">
                {{ $store.state.img2 }}
                <img :src="`${$store.state.img2}`">
                <!-- <div :style="`background-image:url(${$store.state.img2})`"></div> -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ContainerTe'
}
</script>

<style>
#area{
  height: 100%;
  width: 100px;
}
img{
    height: 50px;
    width: 50px;
}
</style>