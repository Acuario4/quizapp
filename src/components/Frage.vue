<template>
    <div>
        <p class="einzelneFrage">Frage Nr. {{ frage.id }}: {{ frage.Frage }}</p>
        <antwort v-for="(antwort, index) in frage.antworten" :key="index" :index="index" :antwort="antwort" :clicked="clicked[index]" :richtig="richtig[index]"></antwort>
    </div>
</template>

<script>
import Antwort from './Antwort'
import { eventBus } from "../main.js";

export default {
    components: {
        Antwort
    },
    props: ['frage'],
    data() {
        return {
            ausgewaehlt: -1
        }
    },
    computed: {
        richtig() {
            return [
                this.ausgewaehlt == 0,
                this.ausgewaehlt == 1,
                this.ausgewaehlt == 2,
                this.ausgewaehlt == 3
            ]
        },
        clicked() {
            return [
                this.ausgewaehlt == 0,
                this.ausgewaehlt == 1,
                this.ausgewaehlt == 2,
                this.ausgewaehlt == 3
            ]
        }
    },
    created() {
        eventBus.$on('antwortGewaehlt', (index) => {
            this.ausgewaehlt = index;
        })
    }
}
</script>

<style>
.einzelneFrage {
    font-size: 100%;
}
</style>
