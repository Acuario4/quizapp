package org.quizapp.quizapp;

import javax.persistence.*;

@Entity
public class Antwort {
    @Id
    @GeneratedValue
    private Integer id;

    private Integer index;

    private String text;

    Antwort() {}

    public Antwort(String antwort) {
        this.text = antwort;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }
}
