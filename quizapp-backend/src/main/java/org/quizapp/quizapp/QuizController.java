package org.quizapp.quizapp;

import org.springframework.web.bind.annotation.*;

@RestController
public class QuizController {

    private QuizRepository quizRepository;

    public QuizController(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @GetMapping("/quiz/")
    public Iterable<Quiz> get() {
        return quizRepository.findAll();
    }

    @GetMapping("/quiz/{id}")
    public Quiz get(@PathVariable int id) {
        return quizRepository.findById(id).orElse(null);
    }

    @PostMapping("/quiz/")
    public Quiz postQuiz(@RequestBody Quiz quiz) {
        return quizRepository.save(quiz);
    }
}
