<template>
  <div>
    <quiz-title></quiz-title>
    <quiz-menu></quiz-menu>
    <quiz-frage></quiz-frage>
  </div>
</template>

<script>
  import Title from './components/Title.vue'
  import Frage from './components/Fragen.vue'
  import Menu from './components/StarterMenu.vue'
  import {eventBus} from './main.js'

  export default {
    data: function () {
      return {
        aktuelleFrage: 0
      }
    },
    components: {
      quizTitle: Title,
      quizFrage: Frage,
      quizMenu: Menu
    },
    created() {
      eventBus.$on('gameStopped', () => {
        this.aktuelleFrage = 0
      })
    }
  }
</script>

<style>

</style>
