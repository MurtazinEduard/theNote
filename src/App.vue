<template>
  <div class="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar,
  },
  methods:{
  },
};
</script>
<style lang="sass" scoped>
$gold: #ffd700
$cream: #F4EBD0
$Rosewater: #FFC2C7
$RoseRed: #F41F4E
$grey: #3f4652
$darkgrey: #272c33
$mainFont: 'Inter', sans-serif
.app
  display: flex
  flex-direction: column
  align-items: center
  background-color: $darkgrey
  min-height: 100vh
</style>
