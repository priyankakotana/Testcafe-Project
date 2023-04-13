fixture('First Fixture')
.page('https://devexpress.github.io/testcafe/example/')

//here we specified a hook for each test in a fixture with the beforeeach...
.beforeEach(async t => {
   await t
   .maximizeWindow()
   .setTestSpeed(0.1)
   .click('#windows')
   
});

test('First Test tc')
.page('https://devexpress.github.io/testcafe/example/')
('First Test',async t =>{
await t
       .typeText('#developer-name',"priyanka")
       .click('#macos')
       .click('#submit-button');
});


test('Second test in tc')
.page('https://devexpress.github.io/testcafe/example/')
('Second Test',async t =>{
await t
       .typeText('#developer-name',"kotana")
       .click('#macos')
       .click('#submit-button')
       .click('body');
});