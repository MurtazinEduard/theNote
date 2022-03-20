<template>
  <div class="item">
    <div class="item-header" :style="{ 'background-color': note.color }">
      <button class="item-close" @click="removeNote(note)">
        <img src="@/assets/img/recycle.png" />
      </button>
    </div>
    <div class="item-title">{{ note.title }}</div>
    <div class="item-subtitle">{{ note.subtitle }}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "note-list-item",
  props: {
    note: {
      type: [Object],
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["deleteNote"]),
    removeNote(note) {
      const newData = this.notesData.filter((n) => n.id !== note.id);
      this.deleteNote(newData);
    },
  },
  computed: {
    ...mapActions([]),
    ...mapState(["notesData"]),
  },
};
</script>

<style lang="sass" scoped>
$RoseRed: #F41F4E
$darkgrey: #272c33
$mainFont: 'Inter', sans-serif
.item
    display: flex
    margin: 20px
    flex-direction: column
    width: 300px
    height: 300px
    background-color: #fff
    border-radius: 10px
    box-sizing: border-box
    &-header
      height: 40px
      border-radius: 10px 10px 0px 0px
      border-bottom: dotted 5px black
      display: flex
      justify-content: flex-end
    &-title
      text-align: center
      font-size: 2em
    &-subtitle
      word-wrap: break-word
      padding: 10px
    &-close
      border: none
      background-color: $darkgrey
      border-radius: 50%
      display: flex
      align-items: center
      height: 30px
      margin: 5px 5px 0px 0px
      cursor: pointer
</style>
