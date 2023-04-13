import { Selector } from 'testcafe';

const developerName = Selector('#developer-name');
const osOption = Selector('#windows');
const submitButton = Selector('#submit-button');

fixture('First Fixture')
.page('https://devexpress.github.io/testcafe/example/');

test("Assertion Test",async t =>{
await t
    .maximizeWindow()
    .setTestSpeed(0.1)

    //to construct assertions,we used the tc expect method
.expect(developerName.value).eql('','input is empty')
.typeText(developerName,"Priyanka")
//checks if the current page URL contains the 'priya..' string or not
.expect(developerName.value).eql('Priyanka','input  contains "Priyanka"')
.click(osOption)
.click(submitButton)
.click('body');

});