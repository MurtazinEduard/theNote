<template>
  <div class="noteList">
      <note-list-item v-for="note in sortedNotes" :key="note.id" :note="note"/>
  </div>
</template>

<script>
import NoteListItem from "./NoteListItem.vue";
import {mapState, mapGetters} from 'vuex'
export default {
  components: { NoteListItem },
  name: "notes-list",
  computed: {
    ...mapState(['notesData']),
    ...mapGetters([
      'sortedNotes'
    ])
  }
};
</script>

<style lang="sass" scoped>
.noteList
  display: flex
  flex-direction: row
  justify-content: flex-start
  flex-wrap: wrap
  box-sizing: border-box
@media screen and (max-width: 660px)
  .noteList
    justify-content: center
</style>
