<template>
    <div class="startMenu" v-if="!gameRunning">
        <p>Quiz zum Thema: </p>
        <select required name="Quiz Thema auswählen" id="mySelect" @change="setQuiz()">
            <option value="1">Informatik</option>
            <option value="2">Mathematik</option>
        </select>
        <br>
        <button class="startButton" @click="startGame()">Thema auswählen</button>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
    data: function() {
        return {
            gameRunning: false,
            ausgewaehltesQuiz: 1,
        }
    },
    methods: {
        startGame() {
            this.gameRunning = true
            eventBus.$emit('gameStarted', this.ausgewaehltesQuiz)
        },
        setQuiz() {
            this.ausgewaehltesQuiz = document.getElementById("mySelect").value;
            console.log('Neue Selection: '+this.ausgewaehltesQuiz)
            console.log('Neue Selection: '+(this.ausgewaehltesQuiz+3))
        }
    },
    created() {
        eventBus.$on('gameStopped', () => {
            this.gameRunning = false
        })
    }
}
</script>

<style>
.startMenu {
    text-align: center;
    align-content: center;
    margin: 1em;
}

.startButton {
    margin: 3%;
}
</style>
