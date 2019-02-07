<template>
  <div class="formrow">
    <div class="formlabel">
      <label>{{ label }}</label>
    </div>
    <div class="forminput">
      <input class="input-text" type="text" :value="value"
             @blur="$emit('blur', $event)" @input="$emit('input', $event.target.value)"
             required/>
    </div>
    <div class="formhelp">
      {{help}}
    </div>
  </div>

</template>

<script>
  export default {
    name: "InputFeld",
    props: ['label', 'value', 'help']
  }
</script>

<style scoped>

  .formrow {
    margin-bottom: 1.5em;
    padding: 0.7em 0.6em 0 0;
  }

  .formlabel {
    font-weight: bold;
    color: #555;
    padding: 0 0 0.1em 0.3em;
  }

  .formhelp {
    padding: 0.2em 0 0 0.3em;
    color: #777;
  }

  .input-text {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #555;
    outline: 0 none;
    padding: 0.8em 1em 0.7em 8px;
    width: 100%;
    border-radius: 0;
    margin: 0;
    font-size: inherit;
    background-color: #fff;
    border: 1px solid #ddd;
  }
</style>
