package org.quizapp.quizapp;

import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "quiz")
    @OrderColumn(name = "frage_index")
    private List<Frage> fragen = new ArrayList<>();


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    List<Frage> getFragen() {
        return fragen;
    }

    void setFragen(List<Frage> fragen) {
        this.fragen = fragen;
    }

    void addFrage(Frage frage) {
        frage.setQuiz(this);
        fragen.add(frage);
    }
}
