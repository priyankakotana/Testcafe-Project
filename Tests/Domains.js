import { Selector } from "testcafe";

const domainName = Selector('#main-content > div.DomainPortalContainer > div > div.col-12.col-sm-12.col-md-12.col-lg-4.DomainPortalContainer-row-col1 > div > form > div.linearForm-input > div > div.input-container > div > label');
const searchBar = Selector('#main-content > div.DomainPortalContainer > div > div.col-12.col-sm-12.col-md-12.col-lg-4.DomainPortalContainer-row-col1 > div > form > div.linearForm-submit.linearForm-submit-transparent > button');
const cart = Selector("button[id='priya.top']");
const continuebutton = Selector('#GlobalFooter > div > div > div.CheckoutStepButton-footer-continueButton > button > div')

fixture("First Fixture")
    .page('https://www.turbify.com/');

test("Domain test", async t => {
    await t
        .maximizeWindow()
        .click('.button')
        // .setTestSpeed(0.01)
        .wait(80000)
        .typeText(domainName,'priya')
        .click(searchBar)
        .wait(10000)
        .click(cart)
        .click(continuebutton);

}).skipJsErrors();