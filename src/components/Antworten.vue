<template>
    <div>
        <quiz-antworten v-for="antwort in Antworten" :key="antwort.id" :antwort="antwort" :ausgewaehltesQuiz="ausgewaehltesQuiz"></quiz-antworten>
    </div>
</template>

<script>
import Antworten from "./Antwort.vue"
export default {
    props: ['ausgewaehltesQuiz'],
    data: function() {
        return {
            Antworten : [
                {id: 11, Richtig: 2, A1: "[Strg] + [Alt] + [Shift]", A2:"[Strg] + [Alt] + [Entf]", A3:"[Strg] + [Alt] + [Einfg]", A4:"[Strg] + [Alt] + [Esc]"},
                {id: 12, Richtig: 4, A1: "... eine Software, die sich mehrere Nutzer teilen können.", A2:"... die Auswahl preiswerter Aktienindex-Fonds durch ein Computersystem.", A3:"... eine Cloud, die die Verbreitung von besonders vielen Daten zulässt.", A4:"... eine Software, die als kostenlose Testversion zur Verfügung gestellt wird."},
                {id: 13, Richtig: 2, A1 : "... alle Zahlen von 0 bis 9.", A2:"... nur die Ziffern 0 und 1.", A3:"... alle Zahlen von 1 bis 8", A4:"... nur die Zahlen 10 und 11."},
                {id: 14, Richtig: 3, A1: "Eine Folge aus 8 Ziffern", A2:"Eine Folge aus 16 Ziffern", A3:"Eine Binärziffer", A4:"Eine Kombination nur aus Ziffern des Binärsystems"},
                {id: 15, Richtig: 2, A1: "2", A2:"4", A3:"6", A4:"8"},
                {id: 16, Richtig: 1, A1: "1001", A2:"1010", A3:"1100", A4:"1101"},
                {id: 17, Richtig: 4, A1: "1", A2:"4", A3:"7", A4:"15"},
                {id: 18, Richtig: 2, A1: "3", A2:"19", A3:"25", A4:"37"},
                {id: 19, Richtig: 4, A1: "6", A2:"8", A3:"10", A4:"16"},
                {id: 110, Richtig: 3, A1: "32", A2:"1080", A3:"7158", A4:"23445"},
                {id: 21, Richtig: 3, A1: "48", A2:"50", A3:"55", A4:"58"},
                {id: 22, Richtig: 4, A1: "61", A2:"66", A3:"71", A4:"76"},
                {id: 23, Richtig: 3, A1 : "45 Grad", A2:"55 Grad", A3:"60 Grad", A4:"66.6 Grad"},
                {id: 24, Richtig: 1, A1: "5050", A2:"6550", A3:"9950", A4:"10100"},
                {id: 25, Richtig: 2, A1: "2", A2:"4", A3:"6", A4:"8"},
                {id: 26, Richtig: 1, A1: "1001", A2:"1010", A3:"1100", A4:"1101"},
                {id: 27, Richtig: 4, A1: "1", A2:"4", A3:"7", A4:"15"},
                {id: 28, Richtig: 2, A1: "3", A2:"19", A3:"25", A4:"37"},
                {id: 29, Richtig: 4, A1: "6", A2:"8", A3:"10", A4:"16"},
                {id: 210, Richtig: 3, A1: "32", A2:"1080", A3:"7158", A4:"23445"}
            ]
        }
    }, //http://www.spiegel.de/quiztool/quiztool-61179.html?a=233
    components: {
        quizAntworten: Antworten
    }
}
</script>

<style>

</style>
