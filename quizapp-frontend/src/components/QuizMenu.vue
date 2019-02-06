<template>
  <div class="startmenu" v-if="!gameRunning">
    <p><label for="quizauswahl">Quiz zum Thema</label></p>
    <div>
      <select required name="Quiz Thema auswählen" id="quizauswahl" v-model="quizIndex">
        <option v-for="(quiz, index) in quizlist" :key="index" :value="index">{{quiz.name}}</option>
      </select>
    </div>
    <button class="startbutton" @click="startGame()">Thema auswählen</button>
  </div>
</template>

<script>
  import eventBus from "../eventbus";
  import axios from "axios";

  export default {
    data: function () {
      return {
        quizlist: [],
        quizIndex: 0,
        gameRunning: false
      }
    },
    mounted() {
      axios.get("/api/quiz").then(
        (response) => {
          this.quizlist = response.data;
        }
      )
    },
    methods: {
      startGame() {
        this.gameRunning = true;
        eventBus.$emit('gameStarted', this.quizlist[this.quizIndex])
      },
    },
    created() {
      eventBus.$on('gameStopped', () => {
        this.gameRunning = false
      })
    }
  }
</script>

<style>
  .startmenu {
    text-align: center;
    align-content: center;
    margin: 1em;
  }

  .startbutton {
    margin: 3%;
  }
</style>
