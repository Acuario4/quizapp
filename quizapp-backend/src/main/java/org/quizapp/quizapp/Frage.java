package org.quizapp.quizapp;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Frage {
    @Id
    @GeneratedValue
    private Integer id;

    private String text;
    private Integer richtig;

    private Integer index;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "frage_id")
    @OrderColumn(name = "antwort_index")
    private List<Antwort> antworten = new ArrayList<>();

    Frage() {
    }

    public Frage(String text) {
        this.text = text;
    }

    public void addAntwort(String antwortText) {
        Antwort antwort = new Antwort(antwortText);
        antworten.add(antwort);
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

    public Integer getRichtig() {
        return richtig;
    }

    public void setRichtig(Integer richtig) {
        this.richtig = richtig;
    }

    public List<Antwort> getAntworten() {
        return antworten;
    }

    public void setAntworten(List<Antwort> antworten) {
        this.antworten = antworten;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public int getAnzahlAntworten() {
        return antworten.size();
    }
}
