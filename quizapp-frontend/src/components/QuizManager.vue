<template>
  <div>
    <quiz-menu></quiz-menu>
    <quiz-container></quiz-container>
  </div>
</template>

<script>
  import eventBus from '../eventbus.js'
  import QuizContainer from '../components/QuizContainer.vue'
  import QuizMenu from '../components/QuizMenu.vue'

  export default {
    name: "Quiz",
    data: function () {
      return {
        aktuelleFrage: 0
      }
    },
    components: {
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

<style scoped>

</style>
