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
          <input type="text" v-model="form.name" class="nameInput"/>
        </div>
        <div class="formhelp">
          <p v-if="form.name=='Bitte gib den Namen Deines neuen Quiz ein.' || form.name==''">Bitte gib den Namen Deines neuen Quiz ein.</p>
          <br v-else>
          <hr>
          <br>
        </div>
      </div>
      <div class="AlleFragenBox">
        <div class="UnterBox" v-for="i in form.fragen.length" :key="i">
        <div class="formrow">
          <div class="formlabel">
            <label>Frage {{ i }}</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[i-1].text" required/>
          </div>
        </div>
        <br>
        <div class="formrow">
          <div class="formlabel">
            <label>Antwort 1</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[i-1].antworten[0]" required/>
          </div>
        </div>
        <div class="formrow">
          <div class="formlabel">
            <label>Antwort 2</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[i-1].antworten[1]" required/>
          </div>
        </div>
        <div class="formrow">
          <div class="formlabel">
            <label>Antwort 3</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[i-1].antworten[2]" required/>
          </div>
        </div>
        <div class="formrow">
          <div class="formlabel">
            <label>Antwort 4</label>
          </div>
          <div class="forminput">
            <input type="text" v-model="form.fragen[i-1].antworten[3]" required/>
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
    <transition name="fade">
      <div class="alert" v-if="emptyError">
        <span class="closebtn" @click="emptyError = false">&times;</span> 
        <strong>Error!</strong> {{ emptyErrorMessage }}
      </div>
    </transition>
    <p v-for="frage in form.fragen" :key="frage">{{ frage }}</p>
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
        emptyError: false,
        emptyErrorMessage: '',
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
        for (let i = 0; i < this.form.fragen.length; i++) {
          const element = this.form.fragen[i];
          if (this.form.fragen[i].text != "" && this.form.fragen[i].antworten.length == 4 && (this.form.fragen[i].antworten[0] != "" || this.form.fragen[i].antworten[0] != Null) && (this.form.fragen[i].antworten[1] != "" || this.form.fragen[i].antworten[1] != Null) && (this.form.fragen[i].antworten[2] != "" || this.form.fragen[i].antworten[2] != Null) && (this.form.fragen[i].antworten[3] != "" || this.form.fragen[i].antworten[3] != Null)) {
            if (this.form.name != '' && this.form.name != 'Bitte gib den Namen Deines neuen Quiz ein.') {
              if (this.form.name.length > 3 && this.form.name.length < 25 ) {
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
                this.emptyErrorMessage = 'Der Name deines Quiz muss 4 - 24 Buchstaben besitzen';
                this.emptyError = true;
              }
              
            } else {
              this.emptyErrorMessage = 'Dein Quiz braucht einen eigenen Namen.';
              this.emptyError = true;
            }  
          } else {
            this.emptyErrorMessage = 'Bitte keine Felder leer lassen.';
            this.emptyError = true;
          }
        };
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
  .nameInput {
    width: 20em;
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

}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
