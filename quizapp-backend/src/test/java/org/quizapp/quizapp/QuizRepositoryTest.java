package org.quizapp.quizapp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QuizRepositoryTest {

    @Autowired
    private QuizRepository quizRepository;

    @Test
    public void saveTest() {
        Quiz quiz = new Quiz();
        Frage frage = new Frage("Was ist die Antwort?");
        frage.addAntwort("42");
        frage.addAntwort("41");
        frage.addAntwort("36");
        frage.addAntwort("50");
        quiz.addFrage(frage);
        quizRepository.save(quiz);
    }
}