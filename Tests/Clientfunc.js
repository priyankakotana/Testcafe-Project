import { Selector,ClientFunction } from "testcafe";

const developerName = Selector('#developer-name');
const osOption = Selector('#windows');
const submitButton = Selector('#submit-button');

//returs the URL of the current page,also we have to check whether a particular string is present in the url or not
const getPageURL = ClientFunction(() => window.location.href)

fixture('First Fixture')
.page('https://devexpress.github.io/testcafe/example/');

test("Client Function Test",async t =>{
await t
    .maximizeWindow()
    .setTestSpeed(0.1)
    .typeText(developerName,"priya")
    .click(osOption)
    .click(submitButton)
    .click('body')
    //it checks if the current page URL contains the "..." that string or not
    .expect(getPageURL()).contains('thank-you');
});