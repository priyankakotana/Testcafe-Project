import { Selector } from "testcafe";

const cookies = Selector('.button');
const getyourname = Selector('span[class="Link buttonLink HeroImage-ctaButton"]');
const mailbox10 = Selector('#MailPricingTables > div > div > div > div > div > div > div > div.fourPlans > div > div:nth-child(1) > div > ul > li:nth-child(3) > div > div > div.CheckoutLink > span > a > button > div');
const domainName = Selector("input[name='search']");
const searchBar = Selector("div[class='linearForm-submit linearForm-submit-transparent']");
const cart = Selector("button[id='mailfornew.guru']");
const continueButton = Selector('#GlobalFooter > div > div > div.CheckoutStepButton-footer-continueButton > button > div');
const loginbtn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.LoginStep > div.LoginStep-Content > div.LoginStep-Switch > div > span > span');
const userName = Selector('input[name="userid"]');
const password = Selector('input[name="passwd"]');
const signIn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > button > div')



fixture("First Fixture")
    .page('https://www.turbify.com/mail');

test("Mail Page test", async t => {
    await t
        .maximizeWindow()
        .debug()
        .click(cookies)
        // .wait(80000)
        .click(getyourname)
        .click(mailbox10)
        .typeText(domainName, "mailfornew.guru")
        .click(searchBar)
        .click(cart)
        .click(continueButton)
        .click(loginbtn)
        .typeText(userName, "priyamokshi63@gmail.com")
        .typeText(password, "1234567")
        .click(signIn);
}).skipJsErrors();