package org.quizapp.quizapp;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class QuizController {

    private QuizRepository quizRepository;

    public QuizController(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @GetMapping(ApiUrls.API_QUIZ)
    public Iterable<Quiz> get() {
        return quizRepository.findAll();
    }

    @Transactional
    @GetMapping(ApiUrls.API_QUIZ_ID)
    public Quiz get(@PathVariable int id) {
        return quizRepository.findById(id).orElse(null);
    }

    @PostMapping(ApiUrls.API_QUIZ)
    public Quiz postQuiz(@RequestBody Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @DeleteMapping(ApiUrls.API_QUIZ_ID)
    public void delete(@PathVariable int id) {
        Quiz quiz = quizRepository.findById(id).orElse(null);
        quizRepository.delete(quiz);
    }
}
