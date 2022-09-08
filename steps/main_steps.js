const { I } = inject();
const mainPage = require('../pages/main_page.js')
const commonSteps = require('../steps/common_steps.js')
const assert = require('assert');
module.exports = {
  
  // insert your locators and methods here

case1(){
  commonSteps.seeElement(mainPage.main.toastButton);
  commonSteps.dontSeeInSource("Hello selendroid toast!")
  commonSteps.tapToButton(mainPage.main.toastButton);
  commonSteps.seeInSource("Hello selendroid toast!")
},

case2(){
  const isChecked = commonSteps.grabAttributeFrom(mainPage.main.addsCheckBox, "checked");
  I.assertDeepEqual(Promise.resolve('true'),isChecked);
  commonSteps.tapToButton(mainPage.main.addsCheckBox);
  const isNotChecked = commonSteps.grabAttributeFrom(mainPage.main.addsCheckBox, "checked");
  I.assertDeepEqual(Promise.resolve('false'),isNotChecked);
}



}
