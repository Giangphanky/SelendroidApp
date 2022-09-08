const { I } = inject();

module.exports = {

  // insert your locators and methods here

  register: {
    warningDialog: '#android:id/message',
    welComeRegisterFormText: 'Welcome to register a new User',
    userNameTextBox: '#io.selendroid.testapp:id/inputUsername',
    emailTextBox: '#io.selendroid.testapp:id/inputEmail',
    passwordTextBox: '#io.selendroid.testapp:id/inputPassword',
    nameTextBox: '#io.selendroid.testapp:id/inputName',
    programmingLanguageList: '#io.selendroid.testapp:id/input_preferedProgrammingLanguage',
    acceptAddsCheckBox: '#io.selendroid.testapp:id/input_adds',
    registerUserButton: '#io.selendroid.testapp:id/btnRegisterUser',
    programmingLanguagePopup: '#android:id/parentPanel'
},
  registerSuccess: {
    nameTextView: '#io.selendroid.testapp:id/label_name_data',
    userNameTextView: '#io.selendroid.testapp:id/label_username_data',
    passwordTextView: '#io.selendroid.testapp:id/label_password_data',
    emailTextView: '#io.selendroid.testapp:id/label_email_data',
    programmingLanguageTextView: '#io.selendroid.testapp:id/label_preferedProgrammingLanguage_data',
    acceptAddsTextView: '#io.selendroid.testapp:id/label_acceptAdds_data',
    registerUserButton: '#io.selendroid.testapp:id/buttonRegisterUser'
  },
  programmingLanguageRadioBtn(value) {
    return '//android.widget.CheckedTextView[@text=\"'+value+'\"]';
	},

}
