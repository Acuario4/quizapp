<template>
  <div>
    <div v-if="error">Es ist ein Fehler aufgetreten. {{errorMessage}}</div>
    <form>
      <div class="formrow">
        <div class="formlabel">
          <label>Quizname</label>
        </div>
        <div class="forminput">
          <input type="text" v-model="form.name"/>
        </div>
        <div class="formhelp">
          <p>Bitte gib den Namen Deines neuen Quiz ein.</p>
          <p>{{form.name}}</p>
        </div>
      </div>
      <div class="formrow">
        <div class="formlabel">
          <label>Frage 1</label>
        </div>
        <div class="forminput">
          <input type="text" v-model="form.fragen[0].text"/>
        </div>
      </div>
      <div class="formrow">
        <div class="formlabel">
          <label>Antwort 1</label>
        </div>
        <div class="forminput">
          <input type="text" v-model="form.fragen[0].antworten[0]"/>
        </div>
      </div>
      <div class="formrow">
        <div class="formlabel">
          <label>Antwort 2</label>
        </div>
        <div class="forminput">
          <input type="text" v-model="form.fragen[0].antworten[1]"/>
        </div>
      </div>
      <div class="formrow">
        <div class="formlabel">
          <label>Antwort 3</label>
        </div>
        <div class="forminput">
          <input type="text" v-model="form.fragen[0].antworten[2]"/>
        </div>
      </div>
      <div class="formrow">
        <div class="formlabel">
          <label>Antwort 4</label>
        </div>
        <div class="forminput">
          <input type="text" v-model="form.fragen[0].antworten[3]"/>
        </div>
      </div>
      <div>
        <button @click.prevent="save()">Quiz speichern</button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "QuizErstellen",
    data() {
      return {
        error: false,
        errorMessage: '',
        form: {
          name: 'Chemie',
          fragen: [
            {
              text: '',
              antworten: []
            }
          ]

        }
      }
    },
    methods: {
      save() {
        return axios.post("/api/quiz/", this.form)
          .then(response => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch(error => {
            this.error = true;
            this.errorMessage = error.response.data;
          });
      }
    }


  }
</script>

<style scoped>

</style>
