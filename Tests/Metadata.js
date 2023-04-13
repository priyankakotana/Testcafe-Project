
//to declare a test fixture using this function
fixture("First Fixture") 
              //Use the page method to set the starting URL of the fixture.
    .page('https://devexpress.github.io/testcafe/');

              //declare a new test with the test method
              //if we want to run individual test then we have to use meta
  test.meta('env',"production")
  .page('https://devexpress.github.io/testcafe/example/')
     ('First test in TC', async t => {

        await t.maximizeWindow()
        .typeText("#developer-name","priya")
        .setTestSpeed(0.01)
        .click('#windows')
        .click('#tried-test-cafe')
        .typeText('#comments',"good")
        .click('#submit-button');
  });

  test
  .page('https://devexpress.github.io/testcafe/example/')
     ('Second test in TC', async t => {

        await t.maximizeWindow()
        .typeText("#developer-name","kotana")
        .setTestSpeed(0.01)
        .click('#windows')
        .click('#submit-button');
     });