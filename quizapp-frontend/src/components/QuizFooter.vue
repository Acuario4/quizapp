<template>

  <div class="footer">
    <router-link to="/impressum">Impressum</router-link>
    <router-link to="/quizerstellen">Neues Quiz erstellen</router-link>
  </div>

</template>
<style>

  .footer {
    width: 100%;
    margin-top: 3em;
    border-top: 1px solid #ddd;
  }
  .footer a {
    text-decoration: none;
    color: #888;
    font-size: 90%;
    display: inline-block;
    padding: 0.5em 0.6em;
  }
  .footer a:hover {
    background-color: #efefef;
    color: #666;
  }
</style>
