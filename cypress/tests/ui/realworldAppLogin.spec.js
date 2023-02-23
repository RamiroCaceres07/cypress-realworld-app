import realworldAppLoginPage from "../../support/pages/realworldAppLoginPage";
import realworldAppHomePage from "../../support/pages/realworldAppHomePage";
import dataBaseData from "../../../data/database.json"

const userName = dataBaseData.users[5].username;
const password = dataBaseData.users[5].password;

describe('example', function ()  {
    beforeEach(() => {
         cy.visit('http://localhost:3000/signin');
    })
    
    it('The user completes all fields and logs in successfully', () => {
        realworldAppLoginPage.completeUserName(userName);
        realworldAppLoginPage.completePassword(password);
        realworldAppLoginPage.clickOnSignInButton();
        realworldAppHomePage.checkTheUserLoggedIn('@'+userName);
    })

})