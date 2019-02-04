<template>
  <div class="app">
    <quiz-title></quiz-title>
    <quiz-menu></quiz-menu>
    <quiz-container></quiz-container>
    <div class="footer">by Lennart</div>
  </div>
</template>

<script>
  import QuizTitle from './components/QuizTitle.vue'
  import QuizContainer from './components/QuizContainer.vue'
  import QuizMenu from './components/QuizMenu.vue'
  import {eventBus} from './main.js'

  export default {
    data: function () {
      return {
        aktuelleFrage: 0
      }
    },
    components: {
      QuizTitle,
      QuizContainer,
      QuizMenu
    },
    created() {
      eventBus.$on('gameStopped', () => {
        this.aktuelleFrage = 0
      })
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    font-family: Arial,sans-serif;
  }

  .footer {
    padding: 1em;
    border-top: 1px solid #ddd;
  }
</style>
