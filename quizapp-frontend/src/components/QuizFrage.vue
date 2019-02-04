<template>
  <div>
    <div>
      <p class="einzelneFrage">Frage {{ frage.id }}: {{ frage.text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['frage'],
  }
</script>

<style>
  .einzelneFrage {
    font-size: 100%;
  }
</style>
