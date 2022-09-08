const { I } = inject();
const mainPage = require('../pages/main_page.js')
const registerPage = require('../pages/register_page.js')
const commonSteps = require('../steps/common_steps.js')

module.exports = {

  // insert your locators and methods here
  selectProgrammingLanguage(value){
    commonSteps.tapToButton(registerPage.register.programmingLanguageList);
    commonSteps.isElementDisplayed(registerPage.register.programmingLanguagePopup);
    commonSteps.tapToButton(registerPage.programmingLanguageRadioBtn(value));
  },

  fillRegisterForm(randomName, randomUserName, randomPassword, randomEmail, randomPL, randomCheckAddson){
    //Fill the form
    commonSteps.fillFieldInput(registerPage.register.userNameTextBox, randomUserName);
    commonSteps.fillFieldInput(registerPage.register.emailTextBox, randomEmail);
    commonSteps.fillFieldInput(registerPage.register.passwordTextBox, randomPassword);
    commonSteps.fillFieldInput(registerPage.register.nameTextBox, randomName);

    this.selectProgrammingLanguage(randomPL);
    
    commonSteps.tapToButton(registerPage.register.acceptAddsCheckBox);
  },

  verifyInformation(randomName, randomUserName, randomPassword, randomEmail, randomPL, randomCheckAddson){
    //Verify information
    commonSteps.seeElement(registerPage.registerSuccess.nameTextView);
    commonSteps.seeText(randomName);
    commonSteps.seeElement(registerPage.registerSuccess.userNameTextView);
    commonSteps.seeText(randomUserName);
    commonSteps.seeElement(registerPage.registerSuccess.passwordTextView);
    commonSteps.seeText(randomPassword);
    commonSteps.seeElement(registerPage.registerSuccess.emailTextView);
    commonSteps.seeText(randomEmail);
    commonSteps.seeElement(registerPage.registerSuccess.programmingLanguageTextView);
    commonSteps.seeText(randomPL);
    commonSteps.seeElement(registerPage.registerSuccess.acceptAddsTextView);
    commonSteps.seeText(randomCheckAddson);
  },

  case3(randomName, randomUserName, randomPassword, randomEmail, randomPL, randomCheckAddson){
    //Click on Show progress btn
    commonSteps.tapToButton(mainPage.main.showProgressBarButton);
    commonSteps.seeElement(registerPage.register.userNameTextBox);

    // //Fill the form
    // commonSteps.fillFieldInput(registerPage.register.userNameTextBox, randomUserName);
    // commonSteps.fillFieldInput(registerPage.register.emailTextBox, randomEmail);
    // commonSteps.fillFieldInput(registerPage.register.passwordTextBox, randomPassword);
    // commonSteps.fillFieldInput(registerPage.register.nameTextBox, randomName);

    // this.selectProgrammingLanguage(randomPL);
    
    // commonSteps.tapToButton(registerPage.register.acceptAddsCheckBox);
    this.fillRegisterForm(randomName, randomUserName, randomPassword, randomEmail, randomPL, randomCheckAddson);

    //Click on Register btn
    commonSteps.tapToButton(registerPage.register.registerUserButton);

    //Verify information
    // commonSteps.seeElement(registerPage.registerSuccess.nameTextView);
    // commonSteps.seeText(randomName);
    // commonSteps.seeElement(registerPage.registerSuccess.userNameTextView);
    // commonSteps.seeText(randomUserName);
    // commonSteps.seeElement(registerPage.registerSuccess.passwordTextView);
    // commonSteps.seeText(randomPassword);
    // commonSteps.seeElement(registerPage.registerSuccess.emailTextView);
    // commonSteps.seeText(randomEmail);
    // commonSteps.seeElement(registerPage.registerSuccess.programmingLanguageTextView);
    // commonSteps.seeText(randomPL);
    // commonSteps.seeElement(registerPage.registerSuccess.acceptAddsTextView);
    // commonSteps.seeText(randomCheckAddson);
    this.verifyInformation(randomName, randomUserName, randomPassword, randomEmail, randomPL, randomCheckAddson);

    //Click on Register button
    commonSteps.tapToButton(registerPage.registerSuccess.registerUserButton);

    //Verify homepage
    commonSteps.seeElement(mainPage.main.showProgressBarButton);
    
  }


}
