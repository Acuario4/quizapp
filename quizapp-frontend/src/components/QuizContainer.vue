<template>
  <div class="fragenDiv1" v-if="gameStarted">
    <h2>{{ Themen[this.ausgewaehltesQuiz-1] }}</h2>

    <div class="fragenDiv2" v-if="this.aktuelleFrage < 11">
      <quiz-frage :frage="anzeigeFrage"></quiz-frage>
      <div class="antwortbox">
        <quiz-antwort
          @click="antwortGewaehlt(index + 1)"
          v-for="(antwort, index) in anzeigeFrage.antworten"
          :key="antwort.id"
          :antwort="antwort"
          :clicked="index+1 === gewaehlteAntwort"
          :richtig="index+1 === anzeigeFrage.richtig"
          :checked="antwortUeberprueft"
        >
        </quiz-antwort>
      </div>

      <button @click="antwortUeberpruefen()" v-if="!this.antwortUeberprueft && this.gewaehlteAntwort > 0"
              class="antwortPrüfenButton">Antwort überprüfen
      </button>

      <button @click="naechsteFrage()"
              v-if="(this.antwortUeberprueft && this.gewaehlteAntwort > 0) || this.aktuelleFrage === 0"
              class="nächsteFrageButton">{{ checkButton }}
      </button>
    </div>
    <quiz-ergebnis @click="gameStopped()" v-if="this.aktuelleFrage === 11" :richtigeAntworten="richtigeAntworten"></quiz-ergebnis>
  </div>
</template>

<script>
  import {eventBus} from "../main.js";
  import QuizAntwort from "./QuizAntwort.vue"
  import QuizFrage from "./QuizFrage.vue"
  import QuizErgebnis from "./QuizErgebnis"
  import Fragen from '../store.js';

  export default {
    data: function () {
      return {
        Fragen: Fragen,
        Themen: ["Informatik", "Mathematik", "Chemie"],
        aktuelleFrage: 0,
        ausgewaehltesQuiz: 0,
        gewaehlteAntwort: 0,
        richtigeAntworten: 0,
        checkButton: "Quiz Starten",
        antwortUeberprueft: false,
        gameStarted: false
      }
    },
    components: {
      QuizFrage,
      QuizAntwort,
      QuizErgebnis
    },
    computed: {
      anzeigeFrage() {
        return this.Fragen[this.aktuelleFrage - 1];
      }
    },
    mounted() {
      eventBus.$emit('ersteFrageAufrufen');
    },

    methods: {
      gameStopped() {
        this.gameStarted = false;
        this.aktuelleFrage = 0;
        this.ausgewaehltesQuiz = 0;
        this.gewaehlteAntwort = 0;
        this.richtigeAntworten = 0;
        this.checkButton = "Quiz Starten";
        this.antwortUeberprueft = false;
        eventBus.$emit('gameStopped');
      },
      antwortGewaehlt(ans) {
        if (!this.antwortUeberprueft) {
          this.gewaehlteAntwort = ans;
          eventBus.$emit('antwortGewaehlt', this.gewaehlteAntwort)
        }
      },
      naechsteFrage() {
        this.aktuelleFrage++;
        this.gewaehlteAntwort = 0;
        this.antwortUeberprueft = false;
        if (this.aktuelleFrage === 10) {
          this.checkButton = 'Ergebnis anschauen'
        } else if (this.aktuelleFrage === 11) {
          eventBus.$emit('ergebnisseAnschauen', this.richtigeAntworten)
        } else {
          this.checkButton = 'Nächste Frage'
        }
        eventBus.$emit('neueFrage', this.aktuelleFrage);
      },
      antwortUeberpruefen() {
        this.antwortUeberprueft = true;
        if (this.aktuelleFrage !== 0) {
          if (this.Fragen[this.aktuelleFrage - 1].richtig === this.gewaehlteAntwort) {
            this.richtigeAntworten++
          }
        }
        eventBus.$emit('antwortUeberprueft', this.Fragen[this.aktuelleFrage - 1].richtig)
      },
    },
    created() {
      eventBus.$on('gameStarted', (ausgewaehltesQuiz) => {
        this.ausgewaehltesQuiz = ausgewaehltesQuiz;
        this.gameStarted = true;
      });
      eventBus.$on('antwortGewaehlt', (gewaehlteAntwort) => {
        this.gewaehlteAntwort = gewaehlteAntwort
      });
      eventBus.$on('ersteFrageAufrufen', () => {
        if (this.aktuelleFrage === 0) {
          this.naechsteFrage()
        }
      })
    }

  }
</script>

<style scoped>

  .antwortbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  /*.antwortUnterbox {*/
  /*display: flex;*/
  /*flex-direction: row;*/
  /*flex-wrap: nowrap;*/
  /*}*/

  .fragenDiv1 {
    align-content: center;
    text-align: center;
    margin: 3%;
  }

  .fragenDiv2 {
    align-content: center;
    text-align: center;
    margin: 5%;
  }

  h2 {
    font-size: 200%;
  }

  .antwortPrüfenButton :hover {
    cursor: pointer;
  }

  .nächsteFrageButton :hover {
    cursor: pointer;
  }
</style>
