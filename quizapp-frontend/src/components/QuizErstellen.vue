<template>
  <div class="quizerstellen">
    <div v-if="error">Es ist ein Fehler aufgetreten. {{errorMessage}}</div>
    <form>
      <input-feld label="Quizname" v-model="form.name" help="Bitte gib den Namen Deines Quiz ein."></input-feld>
      <div class="AlleFragenBox">
        <div v-for="i in form.fragen.length" :key="i">
          <h2 @click="frageclick(i-1)">Frage {{i}}</h2>
          <div class="fragebox" v-if="sichtbarkeit[i-1]">
            <input-feld label="Frage" v-model="form.fragen[i-1].text" help=""></input-feld>
            <input-feld label="Antwort 1" v-model="form.fragen[i-1].antworten[0]"></input-feld>
            <input-feld label="Antwort 2" v-model="form.fragen[i-1].antworten[1]"></input-feld>
            <input-feld label="Antwort 3" v-model="form.fragen[i-1].antworten[2]"></input-feld>
            <input-feld label="Antwort 4" v-model="form.fragen[i-1].antworten[3]"></input-feld>
            <div>
              <p>Richtige Antwort</p>
              <div><input type="radio" value="1" v-model="form.fragen[i-1].richtig" :id="'richtig' + i" /><label :for="'richtig' + i">Antwort 1</label></div>
              <div><input type="radio" value="2" v-model="form.fragen[i-1].richtig" :id="'richtig' + i" /><label :for="'richtig' + i">Antwort 2</label></div>
              <div><input type="radio" value="3" v-model="form.fragen[i-1].richtig" :id="'richtig' + i" /><label :for="'richtig' + i">Antwort 3</label></div>
              <div><input type="radio" value="4" v-model="form.fragen[i-1].richtig" :id="'richtig' + i" /><label :for="'richtig' + i">Antwort 4</label></div>
            </div>
            <button type="button" @click="popFrage(i-1)">Letzte Frage löschen</button>
          </div>
        </div>
        <div class="UnterBox">
          <button type="button" @click="addFrage()">Weitere Frage hinzufügen</button>
        </div>
      </div>
      <div>
        <button @click.prevent="save()">Quiz speichern</button>
      </div>
    </form>
    <transition name="fade">
      <div class="alert" v-if="emptyError">
        <span class="closebtn" @click="emptyError = false">&times;</span> <strong>Error!</strong> {{ emptyErrorMessage
        }}
      </div>
    </transition>
    <!--<p v-for="frage in form.fragen" :key="frage.id">{{ frage }}</p>-->
  </div>
</template>

<script>
  import axios from "axios";
  import InputFeld from "./InputFeld";

  export default {
    name: "QuizErstellen",
    components: {InputFeld},
    data() {
      return {
        error: false,
        errorMessage: '',
        emptyError: false,
        emptyErrorMessage: '',
        richtigeBedingungen: 0,
        sichtbarkeit: [true],
        form: {
          name: '',
          fragen: [
            {
              text: '',
              richtig: 0,
              antworten: []
            }
          ]

        }
      }
    },
    methods: {
      addFrage() {
        for (let index = 0; index < this.form.fragen.length; index++) {
          // https://vuejs.org/v2/guide/list.html#Caveats
          this.$set(this.sichtbarkeit, index, false);
        }
        this.form.fragen.push({text: '', richtig: 0, antworten: []})
      },
      frageclick(index) {
        // https://vuejs.org/v2/guide/list.html#Caveats
        this.$set(this.sichtbarkeit, index, !this.sichtbarkeit[index]);
      },
      save() {
        for (let i = 0; i < this.form.fragen.length; i++) {
          if (this.form.fragen[i].text != "" && this.form.fragen[i].antworten.length == 4 && (this.form.fragen[i].antworten[0] != "" || this.form.fragen[i].antworten[0] != null) && (this.form.fragen[i].antworten[1] != "" || this.form.fragen[i].antworten[1] != null) && (this.form.fragen[i].antworten[2] != "" || this.form.fragen[i].antworten[2] != null) && (this.form.fragen[i].antworten[3] != "" || this.form.fragen[i].antworten[3] != null)) {
            if (this.form.name != '' && this.form.name != 'Bitte gib den Namen Deines neuen Quiz ein.') {
              if (this.form.name.length > 3 && this.form.name.length < 25) {
                if (this.form.fragen[i].richtig != 0) {
                  if (this.form.fragen.length >= 3) {
                    this.richtigeBedingungen++ 
                  } else {
                    this.emptyErrorMessage = 'Dein Quiz braucht mindestens 3 Fragen'
                    this.emptyError = true
                  }
                } else {
                  this.emptyErrorMessage = 'Bitte wähle eine richtige Antwort für deine Fragen aus.'
                  this.emptyError = true
                }
              } else {
                this.emptyErrorMessage = 'Der Name deines Quiz muss 4 - 24 Buchstaben besitzen.'
                this.emptyError = true
              }

            } else {
              this.emptyErrorMessage = 'Dein Quiz braucht einen eigenen Namen.'
              this.emptyError = true
            }
          } else {
            this.emptyErrorMessage = 'Bitte keine Felder leer lassen.'
            this.emptyError = true
          }
        }
        if (this.richtigeBedingungen == this.form.fragen.length) {
          this.richtigeBedingungen = 0
          return axios.post("/api/quiz/", this.form)
                  .then(response => {
                      console.log(response.data);
                      this.$router.push("/");
                    })
                    .catch(error => {
                      this.error = true;
                      this.errorMessage = error.response.data;
                    });
        } else {
          this.richtigeBedingungen = 0
        }
      },
      popFrage(index) {
        if (this.form.fragen.length > 1) {
          this.sichtbarkeit.pop();
          this.form.fragen.pop();
        //   this.form.fragen[index] = null
        // for (let i = 0; i < this.form.fragen.length; i++) {
        //   if (this.form.fragen[i] == null) {
        //     this.form.fragen[i] = this.form.fragen[i+1]
        //     this.form.fragen[i+1] = null
        //   }
        // }
        }
      }
    }


  }
</script>

<style scoped>

  h2 {
    font-size: 100%;
    width: 100%;
    padding: 0.7em 0.5em;
    background-color: #f0f0f0;
    color: #333;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }

  .fragebox {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1em;
    padding-bottom: 1em;
  }

  .quizerstellen {
    margin: 0 auto;
    padding: 0 2em;
    max-width: 600px;
  }

  .alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: black;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
