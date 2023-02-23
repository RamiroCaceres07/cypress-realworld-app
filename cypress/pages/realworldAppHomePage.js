class realworldAppHomePage{
   elements = {
      userLoggedIn: () => cy.get('[data-test="sidenav-username"]')
   }

   checkTheUserLoggedIn(userName){
      this.elements.userLoggedIn().should('have.text', userName);
    }
}

module.exports = new realworldAppHomePage();