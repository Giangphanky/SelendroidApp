exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      device: 'Samsung Galaxy S5',
      automationName: 'Appium',
      //port:7000,
      desiredCapabilities: {
        appPackage: 'io.selendroid.testapp',
        appActivity: 'io.selendroid.testapp.HomeScreenActivity',
        noReset: false,
        fullReset: false,
        //automationName: 'UIAutomator2',
        newCommandTimeout: 30000
      }
    },

    Puppeteer: {
      show: false,
      windowSize: '1536x864',
      chrome: {
        args: ['--ignore-certificate-errors']
      },
      firefox: {
        args: ['--ignore-certificate-errors']
      }
    },
    MailSlurp: {
      apiKey: '<insert api key here>',
      require: '@codeceptjs/mailslurp-helper'    
    },
    // REST: {
    //   endpoint: 'https://api.adaptavist.io/tm4j/v2',
    //   onRequest: [Function: onRequest]
    // }
  },
  include: {
    I: './steps_file.js',
    loginMobilePage: './pages/main_page.js',
    loginMobileStep: './steps/main_steps.js'
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output/result.html',
      attachments: true
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  rerun: {
    minSuccess: 1,
    maxReruns: 6
  },
  name: 'lxp-android-automation'
}
