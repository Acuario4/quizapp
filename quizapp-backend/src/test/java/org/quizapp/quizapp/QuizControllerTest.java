package org.quizapp.quizapp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
public class QuizControllerTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    public void testPost() {
        Quiz quiz = new Quiz();
        Frage frage = new Frage("Was ist die Antwort?");
        frage.addAntwort("42");
        frage.addAntwort("41");
        frage.addAntwort("36");
        frage.addAntwort("50");
        quiz.addFrage(frage);

        webTestClient
                .post()
                .uri("/quiz/")
                .syncBody(quiz)
                .exchange()
                .expectStatus()
                .isOk();
    }
}