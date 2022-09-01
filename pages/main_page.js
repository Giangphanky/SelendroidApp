const { I } = inject();

module.exports = {

  // insert your locators and methods here
  forward: {
    viewForwardText: '//*[@class="android.widget.TextView" and @text="Forward"]',
    forwardSuccessMessage: '//android.widget.TextView[@text="{0}"]//parent::android.view.ViewGroup//parent::android.view.ViewGroup//preceding-sibling::android.widget.TextView[@text="Forwarded"]',
    forwardUserInListChats: '//android.view.ViewGroup[@content-desc="conversation_0"]/android.widget.TextView[@text="2, 1"]',
    searchUserForward: '//android.view.ViewGroup[@content-desc="forward_message_cancel"]//parent::android.view.ViewGroup//parent::android.view.ViewGroup//following-sibling::android.view.ViewGroup[1]//android.widget.EditText[@content-desc="contact_search"]',
    teamTabForward: '//android.view.ViewGroup[@content-desc="contact_tab_teams"]/android.view.ViewGroup',
},

}
