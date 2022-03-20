<template>
  <div class="navigation">
    <div class="navigation-label">design by Edward</div>
    <div style="display: flex">
      <select
        class="navigation-select"
        v-model="modelValue"
        @change="changeOption"
      >
        <option class="navigation-select__option" disabled value="">
          СОРТИРОВКА:
        </option>
        <option
          :value="option.value"
          class="navigation-select__option"
          v-for="option in selectOptions"
          :key="option.value"
        >
          {{ option.name }}
        </option>
      </select>
      <a target="_blank" href="https://hh.ru/resume/df7857dfff09c6ba010039ed1f47344f333776" class="navigation-link">Резюме hh.ru</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "nav-bar",
  methods: {
    ...mapMutations(["sortNotes"]),
    changeOption() {
      this.sortNotes(this.modelValue);
    },
  },
  computed: {
    ...mapState(["selectOptions"]),
  },
  data() {
    return {
      modelValue: "",
    };
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Lobster&display=swap')
$Rosewater: #FFC2C7
$roseBrown: #b0818f
$mainFont: 'Inter', sans-serif
$roseFont: 'Lobster', cursive
.navigation
    display: flex
    justify-content: space-between
    width: 100%
    align-items: center
    height: 10vh
    background-color: $Rosewater
    box-sizing: border-box
    &-label
        color: #fff
        font-family: $roseFont
        font-size: 42px
        font-weight: bold
        margin: 20px
        box-sizing: border-box
    &-link
        color: #fff
        background-color: $roseBrown
        padding: 20px
        margin-right: 20px
        border-radius: 10px
        font-family: $mainFont
        font-weight: 900
        cursor: pointer
        box-sizing: border-box
    &-select
        @extend .navigation-link
        border: none
        &__option
            color: #fff
            font-weight: bold
            text-align: center
@media screen and (max-width: 660px)
  .navigation
    &-label
      font-size: 1em
    &-link
      padding: 5px
</style>
