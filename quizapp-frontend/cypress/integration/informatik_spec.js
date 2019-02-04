describe('My Informatik Quiz Test', function () {
  it('Solves the informatic quiz entirely correctly', function () {
    cy.visit('/')
    cy.get('select').select('Informatik');
    cy.get('.startbutton').click();
    cy.contains('[Strg] + [Alt] + [Entf]').click()
      cy.should(($ausgewählteantwort) => {
        expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
        expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
      })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('... eine Software, die als kostenlose Testversion zur Verfügung gestellt wird.').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('... nur die Ziffern 0 und 1.').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('Eine Binärziffer').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('4').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('1001').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('15').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('19').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('16').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.contains('7158').click();
    cy.should(($ausgewählteantwort) => {
      expect($ausgewählteantwort).to.have.css('background-color', 'rgba(57, 79, 178, 0.7)')
      expect($ausgewählteantwort).to.have.css('border', '3px double rgb(128, 128, 128)')
    })
    cy.get('.antwortPrüfenButton').click();
    cy.get('.richtigUL')
      cy.should(($richtigeantwort) => {
        expect($richtigeantwort).to.have.css('background-color', 'rgb(172, 255, 47)')
      })
    cy.get('.falschUL')
      cy.should(($falscheantwort) => {
        expect($falscheantwort).to.have.css('background-color', 'rgba(192, 28, 0, 0.9)')
      })
    cy.get('.nächsteFrageButton').click();
    cy.get('.span1').should('contain', 'Beachtlich! ');
    cy.wait(2000);
    cy.get('.backToMenuButton').click();
    cy.get('.startmenu').should('contain', 'Quiz zum Thema')
    cy.wait(500);
  })
})
