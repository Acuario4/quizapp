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

    @Test
    public void testAntwortenSizeZero() {
        Frage frage = new Frage("Was ist die Antwort?");
        assertEquals(0, frage.getAnzahlAntworten());
    }

    @Test
    public void testAntwortenSizeZero2() {
        Frage frage = new Frage();
        assertEquals(0, frage.getAnzahlAntworten());
    }
}
