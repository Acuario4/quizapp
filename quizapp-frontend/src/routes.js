import Vue from "vue";
import Router from "vue-router";

import Impressum from "./components/Impressum";
import QuizErstellen from "./components/QuizErstellen";
import QuizManager from "./components/QuizManager";

Vue.use(Router);

const routes = [
  {path: '/', component: QuizManager},
  {path: '/impressum', component: Impressum},
  {path: '/quizerstellen', component: QuizErstellen}
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
