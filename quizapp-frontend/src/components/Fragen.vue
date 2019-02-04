<template>
    <div class="fragenDiv1" v-if="gameStarted">
        <h2>{{ Themen[this.ausgewaehltesQuiz-1] }}</h2>
        <div class="fragenDiv2">
            <quiz-fragen v-for="frage in Fragen" :key="frage.id" :frage="frage" :ausgewaehltesQuiz="ausgewaehltesQuiz"></quiz-fragen>
            <quiz-antworten class="antwortenDiv" :ausgewaehltesQuiz="ausgewaehltesQuiz"></quiz-antworten>
            <button @click="antwortUeberpruefen()" v-if="!this.antwortUeberprueft && this.gewaehlteAntwort > 0" class="antwortPrüfenButton">Antwort überprüfen</button>
            <button @click="naechsteFrage()" v-if="(this.antwortUeberprueft && this.gewaehlteAntwort > 0) || this.aktuelleFrage == 0" class="nächsteFrageButton">{{ checkButton }}</button>
            <quiz-ergebnis v-if="this.aktuelleFrage == 11" :richtigeAntworten="richtigeAntworten"></quiz-ergebnis>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
import einzelneFragen from "./Frage.vue"
import Antworten from "./Antworten.vue"
import Ergebnis from "./Ergebnis"
export default {
    data: function() {
        return {
            Fragen : [
                {id: 1, Richtig: 2, Frage: "Was ist der Affengriff für Windows-Nutzer?"},
                {id: 2, Richtig: 4, Frage: "Shareware ist ..."},
                {id: 3, Richtig: 2, Frage: "Im Binärsystem gibt es ..."},
                {id: 4, Richtig: 3, Frage: "Was ist ein Bit?"},
                {id: 5, Richtig: 2, Frage: "Wie viele Zustände kann man mit zwei Bits herstellen?"},
                {id: 6, Richtig: 1, Frage: "Weiter im Binär-/Dualsystem. Wie lautet die nächste Zahl in dieser Reihe? 0, 1, 10, 11, 100, 101, 110, 111, 1000, ..."},
                {id: 7, Richtig: 4, Frage: "Dualsystem: 1111 -Dezimalsystem: ..."},
                {id: 8, Richtig: 2, Frage: "Dualsystem: 10011 -Dezimalsystem: ..."},
                {id: 9, Richtig: 4, Frage: "Das Hexadezimalsystem ist ein Stellenwertsystem zur Basis ..."},
                {id: 10, Richtig: 3, Frage: "Rechne folgende Hexadezimalzahl in eine Dezimalzahl um: 1BF6ₕₑₓ"}
            ],
            Quiz : [{quizId:1, name: "Informatik", author: "Lennart G.", fragen: [
                {text: "Was ist der Affengriff für Windows-Nutzer?", antworten: [
                    "[Strg] + [Alt] + [Shift]","[Strg] + [Alt] + [Entf]","[Strg] + [Alt] + [Einfg]","[Strg] + [Alt] + [Esc]"
                ], richtig: 2},
                {text: "Shareware ist ...", antworten: [
                    "... eine Software, die sich mehrere Nutzer teilen können.","... die Auswahl preiswerter Aktienindex-Fonds durch ein Computersystem.","... eine Cloud, die die Verbreitung von besonders vielen Daten zulässt.","... eine Software, die als kostenlose Testversion zur Verfügung gestellt wird."
                ], richtig: 4},
                {text: "Im Binärsystem gibt es ...", antworten: [
                    "... alle Zahlen von 0 bis 9.","... nur die Ziffern 0 und 1.","... alle Zahlen von 1 bis 8","... nur die Zahlen 10 und 11."
                ], richtig: 2},
                {text: "Was ist ein Bit?", antworten: [
                    "Eine Folge aus 8 Ziffern","Eine Folge aus 16 Ziffern","Eine Binärziffer","Eine Kombination nur aus Ziffern des Binärsystems"
                ], richtig: 3},
                {text: "Wie viele Zustände kann man mit zwei Bits herstellen?", antworten: [
                    "2","4","6","8"
                ], richtig: 2},
                {text: "Weiter im Binär-/Dualsystem. Wie lautet die nächste Zahl in dieser Reihe? 0, 1, 10, 11, 100, 101, 110, 111, 1000, ...", antworten: [
                    "1001","1010","1100","1101"
                ], richtig: 1},
                {text: "Dualsystem: 1111 -Dezimalsystem: ...", antworten: [
                    "1","4","7","15"
                ], richtig: 4},
                {text: "Dualsystem: 10011 -Dezimalsystem: ...", antworten: [
                    "3","19","25","37"
                ], richtig: 2},
                {text: "Das Hexadezimalsystem ist ein Stellenwertsystem zur Basis ...", antworten: [
                    "6","8","10","16"
                ], richtig: 4},
                {text: "Rechne folgende Hexadezimalzahl in eine Dezimalzahl um: 1BF6ₕₑₓ", antworten: [
                    "32","1080","7158","23445"
                ], richtig: 3}
            ]}],
            Themen : ["Informatik", "Mathematik", "Chemie"],
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
        quizFragen: einzelneFragen,
        quizAntworten: Antworten,
        quizErgebnis: Ergebnis
    },
    methods: {
        naechsteFrage() {
            this.aktuelleFrage++;
            this.gewaehlteAntwort = 0;
            this.antwortUeberprueft = false;
            if (this.aktuelleFrage == 10) {
                this.checkButton = 'Ergebnis anschauen'
            } else if (this.aktuelleFrage == 11) {
                eventBus.$emit('ergebnisseAnschauen', this.richtigeAntworten)                
            } else {
                this.checkButton = 'Nächste Frage'
            }
            eventBus.$emit('neueFrage', this.aktuelleFrage);
        },
        antwortUeberpruefen() {
            this.antwortUeberprueft = true;
            if (this.aktuelleFrage!= 0) {
            if (this.Fragen[this.aktuelleFrage-1].Richtig == this.gewaehlteAntwort) {
                this.richtigeAntworten++
            }  }
            eventBus.$emit('antwortUeberprueft', this.Fragen[this.aktuelleFrage-1].Richtig)
        },
    },
    created() {
        eventBus.$on('gameStarted', (ausgewaehltesQuiz) => {
            this.ausgewaehltesQuiz = ausgewaehltesQuiz;
            this.gameStarted = true;
        }),
        eventBus.$on('antwortGewaehlt', (gewaehlteAntwort) => {
            this.gewaehlteAntwort = gewaehlteAntwort
        }),
        eventBus.$on('gameStopped', () => {
            this.gameStarted = false
            this.aktuelleFrage = 0
            this.ausgewaehltesQuiz = 0
            this.gewaehlteAntwort = 0
            this.richtigeAntworten = 0
            this.checkButton = "Quiz Starten"
            this.antwortUeberprueft = false
        }),
        eventBus.$on('ersteFrageAufrufen', () => {
            if (this.aktuelleFrage == 0) {
                this.naechsteFrage()
            }
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
.antwortPrüfenButton :hover {
    cursor: pointer;
}
.nächsteFrageButton :hover {
    cursor: pointer;
}
</style>
