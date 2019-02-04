package org.quizapp.quizapp;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FrageTest {

    @Test
    public void test() {
        Frage frage = new Frage("Was ist die Antwort?");
        assertEquals("Was ist die Antwort?", frage.getText());
    }

    @Test
    public void testAddAntwort() {
        Frage frage = new Frage("Was ist die Antwort?");
        frage.addAntwort("42");
        assertEquals(1, frage.getAnzahlAntworten());
    }
}
