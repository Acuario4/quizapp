<template>
  <div>
    <div>
      <div class="nummer">Frage {{ nummer }}</div>
      <div class="frage">{{ frage.text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['nummer', 'frage'],
  }
</script>

<style>
  .nummer {
      color: #555;
  }
  .frage {
    color: #333;
    font-weight: bold;
  }
</style>
