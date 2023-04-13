import { Selector } from 'testcafe';

fixture('Test Structure')
    .page('https://www.turbify.com/');

test('Login page to test', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .setTestSpeed(0.01)
        .click('#header-content > div.header-right > div.header-right-wrapper > div > span:nth-child(3) > a')
        .typeText('#s-user', "priyamokshi63@gmail.com")
        .typeText('#s-pass', "123456")
        .click('#btnLogin')

    //.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});