module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]', 1000)
      .sendKeys('input[name=btnK]', browser.Keys.ENTER)
      .pause(2000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};