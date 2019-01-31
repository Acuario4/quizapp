<template>
    <div class="antwortbox">
            <div class="antwortUL"
                :style="[{backgroundColor: this.antwortColor[0]},{border: this.antwortBorder[0]}]"
                v-if="antwortKennung == antwort.id"
                style="cursor: pointer"
                @click="antwortGewaehlt(1)">{{ antwort.A1 }}
                </div>
            <div class="antwortUL" :style="[{backgroundColor: this.antwortColor[1]},{border: this.antwortBorder[1]}]" v-if="antwortKennung == antwort.id" style="cursor: pointer" @click="antwortGewaehlt(2)">{{ antwort.A2 }}</div>
            <div class="antwortUL" :style="[{backgroundColor: this.antwortColor[2]},{border: this.antwortBorder[2]}]" v-if="antwortKennung == antwort.id" style="cursor: pointer" @click="antwortGewaehlt(3)">{{ antwort.A3 }}</div>
            <div class="antwortUL" :style="[{backgroundColor: this.antwortColor[3]},{border: this.antwortBorder[3]}]" v-if="antwortKennung == antwort.id" style="cursor: pointer" @click="antwortGewaehlt(4)">{{ antwort.A4 }}</div>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
    props: ['antwort', 'ausgewaehltesQuiz'],
    data: function() {
        return {
            antwortColor: ['rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)'],
            antwortBorder: ['1px solid gray','1px solid gray','1px solid gray','1px solid gray'],
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
                this.antwortColor = ['rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)']
                this.antwortColor[ans-1] = 'rgb(0, 238, 255)';
                this.antwortBorder = ['1px solid gray','1px solid gray','1px solid gray','1px solid gray']
                this.antwortBorder[ans-1] = '3px double gray'
                eventBus.$emit('antwortGewaehlt', this.gewaehlteAntwort)
            }
        }
    },
    created() {
        eventBus.$on('neueFrage', (aktuelleFrage) => {
            this.aktuelleFrage = aktuelleFrage
            this.gewaehlteAntwort = 0
            this.antwortUeberprueft = false
            this.antwortColor = ['rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)']
            this.antwortBorder = ['1px solid gray','1px solid gray','1px solid gray','1px solid gray']
        }),
        eventBus.$on('antwortUeberprueft', (richtigeAntwort) => {
            this.antwortColor = ['rgba(255, 0, 0, 0.5)','rgba(255, 0, 0, 0.5)','rgba(255, 0, 0, 0.5)','rgba(255, 0, 0, 0.5)']
            this.antwortColor[richtigeAntwort-1] = 'rgba(172, 255, 47, 0.75)'
            this.antwortUeberprueft = true
        }),
        eventBus.$on('gameStopped', () => {
            this.gameStarted = false
            this.antwortUeberprueft = false
            this.aktuelleFrage = 0
            this.ausgewaehltesQuiz = 0
            this.gewaehlteAntwort = 0
            this.antwortColor = ['rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)','rgba(167, 167, 167, 0.5)']
        })
    }
}
</script>

<style>
  .antwortbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    background-color: rgba(172, 255, 47, 0.75)
}

.falschUL {
    background-color: rgba(255, 0, 0, 0.5)
}

.gewaehltUL {
    background-color: rgba(57, 79, 178, 0.7)
}
</style>
