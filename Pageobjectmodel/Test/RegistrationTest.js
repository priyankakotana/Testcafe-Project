import { ClientFunction, Selector } from "testcafe";
import homepage from '../Pages/HomePage';
import registerpage from "../Pages/Registerpage";
import loginpage from '../pages/LoginPage';
import customerpage from "../Pages/CustomerPage";
import HomePage from "../Pages/HomePage";

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'sdfgfd'+randomNumber+'@gmail.com';

fixture("Registration Fixture")
    .page(URL);

test('Assert Home Page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok();

});

test('User Registration', async t => {
    await t
    .click(homepage.RegisterLink)
    .expect(getURL()).contains('register')
    .click(registerpage.GenderOption)
    .typeText(registerpage.FirstName,'priya')
    .typeText(registerpage.LastName,'kotana');
    await registerpage.SelectDay('8');
    await registerpage.SelectMonth('January');
    await registerpage.SelectYear('2001');
   await t
.typeText(registerpage.Email,userEmail)
.typeText(registerpage.Password,'123456')
.typeText(registerpage.ConfirmPassword,'123456')
.click(registerpage.RegisterButton)
.expect(registerpage.SuccessfulMessage.exists).ok()

});

//Login with register account

test.page('https://demo.nopcommerce.com/')('Login Test and MyAccount Test',async t =>{
await t
.click(HomePage.LoginLink)
.expect(loginpage.accountHeader.exists).ok()
.typeText(loginpage.emailInput,userEmail)
.typeText(loginpage.passwordInput,'123456')
.click(loginpage.submitButton)
//Goto my Account
.click(homepage.MyAccountLink)
//check orders is displayed
.click(customerpage.ordersLink)
.expect(customerpage.noOrdersLabel.exists).ok()
//.takeScreenshot();
// To LogOut 
.click(HomePage.LogoutLink)

});




