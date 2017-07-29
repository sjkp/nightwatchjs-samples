module.exports = {
  'my ip' : function (browser) {
    browser
      .url('http://myip.dk/')
      .waitForElementVisible('body', 1000)            
      .assert.containsText('body', 'Internet Protocol version 4 (IPv4)')
      .end();
  }
};