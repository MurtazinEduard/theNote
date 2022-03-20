<template>
  <div class="home">
    <notes-sidebar class="sidebar" />
    <notes-list class="list" />
  </div>
</template>

<script>
import NotesSidebar from "@/components/NotesSidebar.vue";
import NotesList from "@/components/NotesList.vue";

export default {
  name: "HomeView",
  components: {
    NotesSidebar,
    NotesList,
  },
};
</script>
<style lang="sass" scoped>
$grey: #3f4652
$darkgrey: #272c33
.home
  display: flex
  max-width: 1300px
  height: auto
  background-color: $grey
  box-sizing: border-box
  border-radius: 10px
  margin-top: 20px
.sidebar
  margin: 40px 0
  box-sizing: border-box
.list

@media screen and (max-width: 660px)
  .home
    flex-direction: column
    justify-content: center
    align-items: center
@media screen and (min-width: 660px)
  .home
    width: 600px
@media screen and (min-width: 970px)
  .home
    width: 945px
@media screen and (min-width: 1300px)
  .home
    width: 1285px

</style>
