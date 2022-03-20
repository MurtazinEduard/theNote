import { createStore } from "vuex";

export default createStore({
  state: () => ({
    notesData: [
      {
        id: '1',
        title: "Для HR/TL",
        subtitle: "Стек технологий: vue, vuex, sass, vue cli. UPD: Если найдете косяки в проекте, прошу отписать в сообщения на hh.ru",
        color: "#F9DC5C",
      },
      {
        id: '2',
        title: "Купить сахар",
        subtitle: "",
        color: "#465362",
      },
      {
        id: '3',
        title: "Позвонить hr",
        subtitle: "Марина: 88005553535",
        color: "#A8D5E2",
      },
    ],
    selectOptions: [
      { value: "id", name: "ДАТА:" },
      { value: "title", name: "ЗАГОЛОВОК:" },
      { value: "color", name: "ЦВЕТ:" },
    ],
    sortOption: "",
  }),
  getters: {
    sortedNotes(state) {
      return [...state.notesData].sort((fNote, sNote) =>
        fNote[state.sortOption]?.localeCompare(sNote[state.sortOption])
      );
    },
  },
  mutations: {
    addNote(state, note) {
      state.notesData.push(note);
    },
    deleteNote(state, notesData) {
      state.notesData = notesData;
    },
    sortNotes(state, option) {
      state.sortOption = option;
    },
  },
  actions: {},
  modules: {},
});
