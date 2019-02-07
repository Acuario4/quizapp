<template>
  <div class="antwortUL"
       style="cursor: pointer"
       @click="$emit('click')"
       :class="{  gewaehltUL: this.clicked,
                  richtigUL: this.richtig && this.checked,
                  falschUL: !this.richtig && this.checked
                }"
  >{{ antwort }}
  </div>
</template>

<script>
  export default {
    props: ['antwort', 'clicked', 'richtig', 'checked'],
  }
</script>

<style>

  .antwortUL {
    padding: 1em;
    margin: 1em;
    min-width: 200px;
    width: 300px;
    background-color: rgba(167, 167, 167, 0.5);
    border: 1px solid gray
  }

  .richtigUL {
    background-color: rgb(172, 255, 47) !important
  }

  .falschUL {
    background-color: rgba(192, 28, 0, 0.9) !important
  }

  .gewaehltUL {
    background-color: rgba(57, 79, 178, 0.7);
    border: 3px double rgb(128, 128, 128)
  }
</style>
