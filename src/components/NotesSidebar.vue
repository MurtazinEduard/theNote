<template>
  <div class="add-note">
    <div class="title">Добавить заметку</div>
    <input
      v-model="noteTitle"
      class="input"
      placeholder="Введите название заметки"
      maxlength="14"
    />
    <textarea
      v-model="noteSubtitle"
      :class="['input', 'textarea']"
      placeholder="Введите описание заметки"
      maxlength="150"
    />
    <div class="color-input">
      <button
        @click="changeColor(color)"
        :class="[{ 'color-active': color.active }, 'color-button']"
        v-for="color in buttonColors"
        :key="color.id"
        :style="`background-color: ${color.color} `"
      ></button>
    </div>
    <button
      :disabled="disabled"
      :class="{ disabled: disabled }"
      @click="addNoteToData"
      class="button"
    >
      <div v-if="disabled">Сначала название...</div>
      <div v-else>ДОБАВИТЬ</div>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "notes-sideBar",
  data() {
    return {
      noteTitle: "",
      noteSubtitle: "",
      buttonColors: [
        { id: 0, color: "#F41F4E", active: false },
        { id: 1, color: "#F9DC5C", active: false },
        { id: 2, color: "#011936", active: false },
        { id: 3, color: "#465362", active: false },
        { id: 4, color: "#548C2F", active: false },
        { id: 5, color: "#A8D5E2", active: false },
        { id: 6, color: "#AC9FBB", active: false },
      ],
      buttonColor: { id: 0, color: "#F41F4E", active: true },
    };
  },
  methods: {
    ...mapMutations(["addNote"]),
    addNoteToData() {
      const newNote = {
        id: Date.now().toString(),
        title: this.noteTitle,
        subtitle: this.noteSubtitle,
        color: this.buttonColor.color,
      };
      this.addNote(newNote);
      this.noteTitle = "";
      this.noteSubtitle = "";  
    },
    changeColor(color) {
      this.buttonColors.map((a) =>
        (a.color === color.color) ? a.active = true : a.active = false
      );
      this.buttonColor = color;
    },
  },
  computed: {
    ...mapState(['notesData']),
    disabled() {
      return this.noteTitle === "" ? true : false;
    },
  },
};
</script>

<style lang="sass" scoped>
$darkgrey: #272c33
$grey: #3f4652
$mainFont: 'Inter', sans-serif
$RoseRed: #F41F4E
.title
  display: flex
  justify-content: center
  margin-bottom: 20px
  font-weight: bold
  font-size: 24px
.add-note
  display: flex
  flex-direction: column
  background-color: $darkgrey
  border-radius: 0px 10px 10px 0px
  padding: 20px
  color: #fff
  font-family: $mainFont
  width: 300px
  height: 350px
.input
  border: none
  padding: 10px
  border-radius: 5px
  margin-bottom: 20px
  font-family: $mainFont
  font-weight: 700
.textarea
  resize: none
.button
  border: none
  padding: 10px
  border-radius: 5px
  cursor: pointer
  background: $RoseRed
  font-family: $mainFont
  font-weight: bold
  color: #fff
  margin-top: 20px
.disabled
  background-color: $grey
.color
  &-input
    width: 100%
    height: 30px
    display: flex
    justify-content: center
    align-items: center
  &-button
    background-color: green
    width: 20px
    height: 20px
    border-radius: 50%
    margin: 0 5px
    cursor: pointer
  &-active
    border-color: red
@media screen and (max-width: 660px)
  .add-note
    border-radius: 10px
</style>
