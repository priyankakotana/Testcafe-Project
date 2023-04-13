import {Selector} from 'testcafe';

fixture('Test structure') 
//Use the page method to set the starting URL of the fixture.
    .page ('https://www.turbify.com/');

    //declare a new test with the test method
  test('First test in TC', async t => {

        await t
        .maximizeWindow()
        .setTestSpeed(0.01)
     await t.click('.button')
     await t.click("a[aria-label='Web Essentials']")
   //await t.click("div.Dropdown ul li .Link a.Link-content.Link-navigation[href='/hosting']");
  });