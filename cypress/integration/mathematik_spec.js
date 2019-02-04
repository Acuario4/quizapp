describe('My Maths Quiz Test', function () {
    it('Solves the maths quiz entirely correct', function () {
      cy.visit('/')
      cy.get('select').select('Mathematik');
      cy.get('.startbutton').click();
      cy.contains('55').click()
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
      cy.contains('76').click();
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
      cy.contains('60 Grad').click();
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
      cy.contains('3.25 €').click();
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
      cy.contains('5050').click();
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
      cy.contains('876').click();
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
      cy.contains('12').click();
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
      cy.contains('10 ').click();
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
      cy.contains('168').click();
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
      cy.contains('15:33 Uhr').click();
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
      cy.wait(500)
    })
  })
  