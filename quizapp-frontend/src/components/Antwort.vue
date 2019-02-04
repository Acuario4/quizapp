<template>
  <div class="antwortbox">
        <span class="antwortUnterbox">
            <div class="antwortUL"
                 v-if="antwortKennung == antwort.id"
                 style="cursor: pointer"
                 @click="antwortGewaehlt(1)"
                 :class="{gewaehltUL: this.gewaehlteAntwort==1, richtigUL: this.richtigeAntwort==1&&this.antwortUeberprueft, falschUL: this.richtigeAntwort!=1&&this.antwortUeberprueft}"
            >{{ antwort.A1 }}
                </div>
            <div class="antwortUL" v-if="antwortKennung == antwort.id" style="cursor: pointer"
                 @click="antwortGewaehlt(2)"
                 :class="{gewaehltUL: this.gewaehlteAntwort==2, richtigUL: this.richtigeAntwort==2&&this.antwortUeberprueft, falschUL: this.richtigeAntwort!=2&&this.antwortUeberprueft}">{{ antwort.A2 }}</div>
        </span> <span class="antwortUnterbox">
            <div class="antwortUL" v-if="antwortKennung == antwort.id" style="cursor: pointer"
                 @click="antwortGewaehlt(3)"
                 :class="{gewaehltUL: this.gewaehlteAntwort==3, richtigUL: this.richtigeAntwort==3&&this.antwortUeberprueft, falschUL: this.richtigeAntwort!=3&&this.antwortUeberprueft}">{{ antwort.A3 }}</div>
            <div class="antwortUL" v-if="antwortKennung == antwort.id" style="cursor: pointer"
                 @click="antwortGewaehlt(4)"
                 :class="{gewaehltUL: this.gewaehlteAntwort==4, richtigUL: this.richtigeAntwort==4&&this.antwortUeberprueft, falschUL: this.richtigeAntwort!=4&&this.antwortUeberprueft}">{{ antwort.A4 }}</div>
        </span>
  </div>
</template>

<script>
  import {eventBus} from "../main.js";

  export default {
    props: ['antwort', 'ausgewaehltesQuiz'],
    data: function () {
      return {
        richtigeAntwort: 0,
        aktuelleFrage: 0,
        gewaehlteAntwort: 0,
        antwortUeberprueft: false,
        gameStarted: false
      }
    },
    computed: {
      antwortKennung() {
        return "" + this.ausgewaehltesQuiz + this.aktuelleFrage;
      }
    },
    methods: {
      antwortGewaehlt(ans) {
        if (!this.antwortUeberprueft) {
          this.gewaehlteAntwort = ans;
          eventBus.$emit('antwortGewaehlt', this.gewaehlteAntwort)
        }
      }
    },
    created() {
      eventBus.$on('neueFrage', (aktuelleFrage) => {
        this.aktuelleFrage = aktuelleFrage
        this.gewaehlteAntwort = 0
        this.richtigeAntwort = 0
        this.antwortUeberprueft = false
      }),
        eventBus.$on('antwortUeberprueft', (richtigeAntwort) => {
          this.richtigeAntwort = richtigeAntwort
          this.antwortUeberprueft = true
        }),
        eventBus.$on('gameStopped', () => {
          this.gameStarted = false
          this.antwortUeberprueft = false
          this.aktuelleFrage = 0
          this.gewaehlteAntwort = 0
        })
    },
    mounted() {
      eventBus.$emit('ersteFrageAufrufen');
    }
  }
</script>

<style>
  .antwortbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .antwortUnterbox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .antwortUL {
    padding: 1em;
    margin: 1em;
    min-width: 200px;
    width: 300px;
    background-color: rgba(167, 167, 167, 0.5);
    border: 1px solid gray
  }

  .richtigUL {
    background-color: rgb(172, 255, 47) !important
  }

  .falschUL {
    background-color: rgba(192, 28, 0, 0.9) !important
  }

  .gewaehltUL {
    background-color: rgba(57, 79, 178, 0.7);
    border: 3px double rgb(128, 128, 128)
  }
</style>
