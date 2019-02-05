<template>
  <div>
    <div v-if="error">Es ist ein Fehler aufgetreten. {{errorMessage}}</div>
    <form>
      <div class="formrow">
        <div class="formlabel">
          <label>Quizname</label>
        </div>
        <br>
        <div class="forminput">
          <input type="text" v-model="form.name"/>
        </div>
        <div class="formhelp">
          <p v-if="form.name=='Bitte gib den Namen Deines neuen Quiz ein.' || form.name==''">Bitte gib den Namen Deines neuen Quiz ein.</p>
          <br v-else>
          <hr>
          <br>
        </div>
      </div>
      <div class="AlleFragenBox">
        <div class="UnterBox">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 1</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 2">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 2</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 3">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 3</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 4">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 4</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 5">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 5</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 6">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 6</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 7">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 7</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 8">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 8</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 9">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 9</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

      <div class="UnterBox" v-if="form.fragen.length >= 10">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage 10</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[0].text"/>
          </div>
        </div>
        <br>
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
      </div>

        <div class="UnterBox">
          <button type="button" class="btn btn-outline-success" @click="form.fragen.push({
              text: '',
              antworten: []
            })">+</button>
          <button type="button" class="btn btn-outline-danger" @click="popFrage()">-</button>
        </div>
    </div>
    <div>
        <button @click.prevent="save()">Quiz speichern</button>
      </div>
    </form>
    <p v-for="frage in form.fragen" :key="frage">{{ frage }}</p>
    <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
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
          name: 'Bitte gib den Namen Deines neuen Quiz ein.',
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
      },
      popFrage() {
        if (this.form.fragen.length > 1) {
          this.form.fragen.pop()
          }
      }
    }


  }
</script>

<style scoped>
  .AlleFragenBox {
    display: flex;
    flex-direction: row;
  }
  .UnterBox {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center;
  }
</style>
