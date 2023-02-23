class realworldAppLoginPage{ 
   
    elements = {
    userNameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('[data-test="signin-submit"]')
  }
  
    completeUserName(userName){
      this.elements.userNameInput().type(userName);
    }
  
    completePassword(password){
      this.elements.passwordInput().type(password);
    }
  
    clickOnSignInButton(){
      this.elements.loginButton().click();
    }
  
  }
  
  module.exports = new realworldAppLoginPage();