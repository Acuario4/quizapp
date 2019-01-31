<template>
    <div>
        <p class="einzelneFrage" v-if="frageKennung == frage.id">Frage {{ aktuelleFrage }}: {{ frage.Frage }}</p>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
    props: ['frage','ausgewaehltesQuiz'],
    data: function() {
        return {
            aktuelleFrage: 0,
            gameStarted: false
        }
    },
    computed: {
        frageKennung() {
            return "" + this.ausgewaehltesQuiz + this.aktuelleFrage;
        }
    },
    created() {
        eventBus.$on('neueFrage', (aktuelleFrage) => {
            this.aktuelleFrage = aktuelleFrage
        }),
        eventBus.$on('gameStopped', () => {
            this.gameStarted = false
            this.aktuelleFrage = 0
        })
    }
}
</script>

<style>
.einzelneFrage {
    font-size: 100%;
}
</style>
