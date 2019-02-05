<template>
  <div class="app">
    <quiz-title></quiz-title>
    <router-view></router-view>
    <div class="footer"><router-link to="/impressum">by Lennart</router-link></div>
  </div>
</template>

<script>
  import QuizTitle from './components/QuizTitle'

  export default {
    name: "App",
    components: { QuizTitle }
  }

</script>
<style>
  body {
    padding: 0;
    margin: 0;
    font-family: Arial,sans-serif;
  }

  .footer {
    padding: 1em;
    border-top: 1px solid #ddd;
  }
</style>
