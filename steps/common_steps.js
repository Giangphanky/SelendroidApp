const { I } = inject();

module.exports = {

  time: {
    shortTimeOut: '30',
    longTimeOut: '100'
  },

  // insert your locators and methods here
  tapToButton(xpath){
    I.waitForElement(xpath, this.time.longTimeOut);
    I.tap(xpath);
  },

  click(xpath){
    I.waitForElement(xpath, this.time.shortTimeOut);
    I.click(xpath);
  },

  fillFieldInput(xpath, value) {
    I.waitForElement(xpath, this.time.shortTimeOut);
    I.fillField(xpath, value);
  },

  seeText(text) {
    I.see(text);
  },

  seeElement(xpath) {
    I.waitForElement(xpath, this.time.longTimeOut);
  },

  seeInSource(text) {
    I.seeInSource(text);
  },

  dontSeeInSource(text) {
    I.dontSeeInSource(text);
  },

  async grabAttributeFrom(object, attribute) {
    I.waitForElement(object, this.time.longTimeOut);
    let value = Promise.resolve(I.grabAttributeFrom(object, attribute));
    return value;
  },

  checkOptionByText(value) {
    I.see(value);
    I.checkOption(value);
  },

  isElementDisplayed(xpath){
    I.waitForElement(xpath, this.time.longTimeOut);
    I.seeElement(xpath);
  }
  

}
