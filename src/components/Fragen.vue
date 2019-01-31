<template>
  <div class="fragenDiv1" v-if="gameStarted">
    <h2>{{ themen[this.ausgewaehltesQuiz].name }}</h2>
    <div class="fragenDiv2">
      <frage v-if="aktuelleFrage" :frage="aktuelleFrage"></frage>
      <button
        @click="antwortUeberpruefen()"
        v-if="!this.antwortUeberprueft && this.gewaehlteAntwort > 0"
      >Antwort überprüfen</button>
      <button
        @click="naechsteFrage()"
        v-if="(this.antwortUeberprueft && this.gewaehlteAntwort > 0) || this.fragenummer == -1"
      >{{ checkButton }}</button>
      <quiz-ergebnis v-if="this.fragenummer == 10" :richtigeAntworten="richtigeAntworten"></quiz-ergebnis>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import Frage from "./Frage.vue"
import Ergebnis from "./Ergebnis"
import quizdaten from '../store'
export default {
    data: function() {
        return {
            aktuelleFrage: null,
            themen: quizdaten,
            fragenummer: -1,
            ausgewaehltesQuiz: 0,
            gewaehlteAntwort: 0,
            richtigeAntworten: 0,
            checkButton: "Quiz Starten",
            antwortUeberprueft: false,
            gameStarted: false
        }
    },
    components: {
        Frage,
        quizErgebnis: Ergebnis
    },
    methods: {
        naechsteFrage() {
            this.fragenummer++;
            this.gewaehlteAntwort = 0;
            this.antwortUeberprueft = false;
            if (this.fragenummer == 10) {
                this.checkButton = 'Ergebnis anschauen'
            } else if (this.fragenummer == 11) {
                console.log('Ergebnisse werden aufgerufen')
                eventBus.$emit('ergebnisseAnschauen', this.richtigeAntworten)                
            } else {
                this.checkButton = 'Nächste Frage'
            }
            this.aktuelleFrage = this.themen[this.ausgewaehltesQuiz].fragen[this.fragenummer];
            eventBus.$emit('neueFrage', this.fragenummer);
        },
        antwortUeberpruefen() {
            this.antwortUeberprueft = true;
            if (this.fragenummer!= -1) {
            if (this.themen[this.ausgewaehltesQuiz].fragen[this.fragenummer].Richtig == this.gewaehlteAntwort) {
                alert("Frage "+this.fragenummer+": Richtig");
                this.richtigeAntworten++
            } else {
                alert("Frage "+this.fragenummer+": Falsch")
            } }
            eventBus.$emit('antwortUeberprueft', this.Fragen[this.fragenummer-1].Richtig)
        },
    },
    created() {
       // this.naechsteFrage();
        eventBus.$on('gameStarted', (ausgewaehltesQuiz) => {
            this.ausgewaehltesQuiz = ausgewaehltesQuiz;
            this.gameStarted = true;
        }),
        eventBus.$on('antwortGewaehlt', (gewaehlteAntwort) => {
            this.gewaehlteAntwort = gewaehlteAntwort
        }),
        eventBus.$on('gameStopped', () => {
            this.gameStarted = false
            this.fragenummer = -1
            this.ausgewaehltesQuiz = 0
            this.gewaehlteAntwort = 0
            this.richtigeAntworten = 0
            this.checkButton = "Quiz Starten"
            this.antwortUeberprueft = false
        })
    }
    
}
</script>

<style scoped>
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
.antwortenDiv {
  text-align: left;
}
</style>
