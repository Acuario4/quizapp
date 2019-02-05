<template>
  <div class="app">
    <quiz-title></quiz-title>
    <router-view></router-view>
    <quiz-footer></quiz-footer>
  </div>
</template>

<script>
  import QuizTitle from './components/QuizTitle'
  import QuizFooter  from './components/QuizFooter'
  export default {
    name: "App",
    components: { QuizTitle, QuizFooter }
  }

</script>
<style>
  body {
    padding: 0;
    margin: 0;
    font-family: Arial,sans-serif;
  }

</style>
