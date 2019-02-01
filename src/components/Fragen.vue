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
                {id: 11, Richtig: 2, Frage: "Was ist der Affengriff für Windows-Nutzer?"},
                {id: 12, Richtig: 4, Frage: "Shareware ist ..."},
                {id: 13, Richtig: 2, Frage: "Im Binärsystem gibt es ..."},
                {id: 14, Richtig: 3, Frage: "Was ist ein Bit?"},
                {id: 15, Richtig: 2, Frage: "Wie viele Zustände kann man mit zwei Bits herstellen?"},
                {id: 16, Richtig: 1, Frage: "Weiter im Binär-/Dualsystem. Wie lautet die nächste Zahl in dieser Reihe? 0, 1, 10, 11, 100, 101, 110, 111, 1000, ..."},
                {id: 17, Richtig: 4, Frage: "Dualsystem: 1111 -Dezimalsystem: ..."},
                {id: 18, Richtig: 2, Frage: "Dualsystem: 10011 -Dezimalsystem: ..."},
                {id: 19, Richtig: 4, Frage: "Das Hexadezimalsystem ist ein Stellenwertsystem zur Basis ..."},
                {id: 110, Richtig: 3, Frage: "Rechne folgende Hexadezimalzahl in eine Dezimalzahl um: 1BF6ₕₑₓ"},
                {id: 21, Richtig: 3, Frage: "Was ist die Summe der Zahlen von 1 bis 10?"},
                {id: 22, Richtig: 4, Frage: "Sie stapeln fünf Würfel übereinander zu einem Turm. Die Augenzahl auf der Oberseite des obersten Würfels ist sechs. Wie lautet die Summe aller sichtbaren Augenzahlen?"},
                {id: 23, Richtig: 3, Frage: "Es ist Punkt 14 Uhr. In welchem Winkel stehen großer und kleiner Zeiger in diesem Moment zueinander?"},
                {id: 24, Richtig: 1, Frage: "300 g Erdbeeren kosten 1,95 €. Wie viel kosten 500 g?"},
                {id: 25, Richtig: 1, Frage: "Das Ergebnis, wenn man alle Zahlen von 1 bis 100 addiert, lautet..."},
                {id: 26, Richtig: 4, Frage: "767.376 ist das Quadrat einer natürlichen Zahl. Eine der folgenden drei Zahlen ist die richtige Lösung - welche?"},
                {id: 27, Richtig: 2, Frage: "An einem Holzwürfel wird jede seiner acht Ecken abgesägt. Die Schnitte beginnen genau in der Mitte der Würfelkanten. Wie viele Ecken hat der so entstandene Körper?"},
                {id: 28, Richtig: 2, Frage: "Wie lautet das Ergebnis einer beliebigen Zahl X nach folgenden Rechenschritten: ((X+11)*2-20)*5-10X"},
                {id: 29, Richtig: 3, Frage: "Was ist die Summe der Quersummen der Zahlen von 1 bis 30?"},
                {id: 210, Richtig: 2, Frage: "Punkt 15 Uhr stehen großer und kleiner Uhrzeiger genau im rechten Winkel zueinander. Zu welcher Zeit zwischen 15 und 16 Uhr ist das nochmals der Fall?"}
                

            ],
            Quiz : [{quizId:1, name: "Informatik", fragen: [
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
            ]},
            {quizId:2, name: "Mathematik", fragen: [
                {text:"Was ist die Summe der Zahlen von 1 bis 10?", antworten: [
                    "48","50","55","58"
                ], richtig: 3},
                {text:"Sie stapeln fünf Würfel übereinander zu einem Turm. Die Augenzahl auf der Oberseite des obersten Würfels ist sechs. Wie lautet die Summe aller sichtbaren Augenzahlen?", antworten: [
                    "61","66","71","76"
                ], richtig: 4},
                {text:"Es ist Punkt 14 Uhr. In welchem Winkel stehen großer und kleiner Zeiger in diesem Moment zueinander?", antworten: [
                    "45 Grad","55 Grad","60 Grad","66.6 Grad"
                ], richtig: 3},
                {text:"300 g Erdbeeren kosten 1,95 €. Wie viel kosten 500 g?", antworten: [
                    "3.25 €","3 €","2.75 €","2.65 €"
                ], richtig: 1},
                {text:"Das Ergebnis, wenn man alle Zahlen von 1 bis 100 addiert, lautet...", antworten: [
                    "5050","6550","9950","10100"
                ], richtig: 1},
                {text:"767.376 ist das Quadrat einer natürlichen Zahl. Eine der folgenden drei Zahlen ist die richtige Lösung - welche?", antworten: [
                    "862","868","871","876"
                ], richtig: 4},
                {text:"An einem Holzwürfel wird jede seiner acht Ecken abgesägt. Die Schnitte beginnen genau in der Mitte der Würfelkanten. Wie viele Ecken hat der so entstandene Körper?", antworten: [
                    "8","12","16","24"
                ], richtig: 2},
                {text:"Wie lautet das Ergebnis einer beliebigen Zahl X nach folgenden Rechenschritten: ((X+11)*2-20)*5-10X", antworten: [
                    "5","10","11","20"
                ], richtig: 2},
                {text:"Was ist die Summe der Quersummen der Zahlen von 1 bis 30?", antworten: [
                    "149","155","168","210"
                ], richtig: 3},
                {text:"Punkt 15 Uhr stehen großer und kleiner Uhrzeiger genau im rechten Winkel zueinander. Zu welcher Zeit zwischen 15 und 16 Uhr ist das nochmals der Fall?", antworten: [
                    "15:30 Uhr","15:33 Uhr","15:36 Uhr","15:40 Uhr"
                ], richtig: 2}
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
            if (this.Fragen[(this.ausgewaehltesQuiz-1)*10+this.aktuelleFrage-1].Richtig == this.gewaehlteAntwort) {
                this.richtigeAntworten++
            }  }
            eventBus.$emit('antwortUeberprueft', this.Fragen[((this.ausgewaehltesQuiz-1)*10)+this.aktuelleFrage-1].Richtig)
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
