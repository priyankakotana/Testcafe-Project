import { ClientFunction, Selector } from 'testcafe';
import Webpage from '../pages/Webturbi';
const manualClick = ClientFunction((selector) => {

    const element = document.querySelector(selector);

    element.click()

})

fixture('Webpage')
    .page('https://www.turbify.com/');


test("First Webpage", async t => {
    await t
        .maximizeWindow()

    // .debug()
    const acceptCookies = Webpage.Cookies.with({ visibilityCheck: true, timeout: 5000 });

    if (await acceptCookies.exists && await acceptCookies.visible) {

        await t.click(Webpage.Cookies);
    }

    await t.hover(Webpage.WebEssentials)
    await manualClick('a[title][href="/hosting"]');

    await t.click(Webpage.GetStarted)
    await t.wait(90000).click(Webpage.PremierPlan)
        .typeText(Webpage.DomainName, '11HosPre')
        .click(Webpage.SearchButton)
        .click(Webpage.AddToCart)
        // .wait(90000)
        //.scrollBy(0, 900)
        .click(Webpage.Continue)
        .click(Webpage.LoginHere)
        .typeText(Webpage.EmailAddress, 'priyamokshi63@gmail.com')
        .typeText(Webpage.Password, '0987654')
        .click(Webpage.Signin)
        //sdfghkjhgf
}).skipJsErrors();