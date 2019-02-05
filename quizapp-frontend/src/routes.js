import Vue from "vue";
import Router from "vue-router";

import Impressum from "./components/Impressum";
import QuizErstellen from "./components/QuizErstellen";
import Quiz from "./components/Quiz";

Vue.use(Router);

const routes = [
  {path: '/impressum', component: Impressum},
  {path: '/', component: Quiz},
  {path: '/quizerstellen', component: QuizErstellen}
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
