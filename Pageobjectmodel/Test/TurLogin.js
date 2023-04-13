import TurLoginpage from '../pages/LoginTurbi';

fixture('LoginTurbi')
    .page('https://www.turbify.com/');


test("First loginpage", async t => {
    await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .click(TurLoginpage.cookies)
        .click(TurLoginpage.login)
        .typeText(TurLoginpage.username, 'priyamokshi63@gmail.com')
        .typeText(TurLoginpage.password, '12345678')
        .click(TurLoginpage.loginbutton);


}).skipJsErrors();