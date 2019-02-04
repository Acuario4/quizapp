<template>
  <div>
    <h3><span class="span1"><strong>{{ nachrichten.text1 }}</strong></span> {{ nachrichten.text3}} {{richtigeAntworten}}
      von 10 Fragen richtig beantwortet <br> <span class="span2">{{ nachrichten.text2 }}</span></h3>
    <button @click="$emit('click')" class="backToMenuButton">Zurück zum Hauptmenü</button>
  </div>
</template>

<script>
  export default {
    props: {
      'richtigeAntworten': {
        type: Number,
        required: true
      }
    },
    data: function () {
      return {
        nachricht1: '',
        nachricht2: ''
      }
    },

    computed: {
      nachrichten() {
        if (this.richtigeAntworten === 0) {
          return {
            text1: 'Schade! ',
            text3: 'Du hast keine, also wirklich ',
            text2: 'Mehr Glück (oder zumnindest etwas Glück) beim nächsten Mal'
          }
        } else if (this.richtigeAntworten === 1) {
          return {
            text1: 'Glückwunsch! ',
            text3: "Du hast ",
            text2: 'Positiv bleiben! Ein Mal richtig ist besser als kein Mal richtig'
          }
        } else if (this.richtigeAntworten > 1 && this.richtigeAntworten < 5) {
          return {
            text1: 'Glückwunsch! ',
            text3: "Du hast ",
            text2: 'Es hätte auch schlimmer werden können!'
          }
        } else if (this.richtigeAntworten === 5) {
          return {
            text1: 'Glückwunsch! ',
            text3: "Du hast ",
            text2: 'Eine Hälfte hast du erreicht, die andere schaffst Du beim nächsten Mal!'
          }
        } else if (this.richtigeAntworten > 5 && this.richtigeAntworten > 10) {
          return {
            text1: 'Glückwunsch! ',
            text3: "Du hast ",
            text2: 'Du kennst dich gut mit dem Thema aus!'
          }
        }
        return {
          text1: 'Beachtlich! ',
          text3: "Du hast alle ",
          text2: 'Ab jetzt darfst du dich einen richtigen Profi in dem Thema nennen!'
        }
      }
    }
  }
</script>

<style scoped>
  .span1 {
    font-size: 150%;
  }

  .span2 {
    line-height: 300%;
  }

  .backToMenuButton :hover {
    cursor: pointer;
  }
</style>
