import { Selector } from 'testcafe';

fixture('Test Structure')
    .page('https://www.turbify.com/domains');

test('Domains Part', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .debug()
       // .setTestSpeed(0.01)
      
        //bussiness maker
        .click('#page-domains > div.section.CrossSell.section-fluidHeight.section-vertical-centered > div > div > div.row.CrossSell-Cards > div:nth-child(3) > div > div.Help-Card-cta > span > a > button')
        //Pauses a test for a specified period of time
        .wait(20000)
       
        //clicks on get started
       .click('#page-businessMaker > div.section.HeroSection__StyledSection-sc-e34his-0.cOmnol.HeroSection.section-fluidHeight.section-vertical-centered > div > div > div > div > span > a > button > div')
    //to give credentials 
    .typeText('#OnboardingFlow-Category-input',"foodtruck")
    .typeText('#OnboardingFlow-Name',"MyResto")
    //click on continue button
    .click('#PageTakeoverContainer > div > div > div > div > div > form > div.OnboardingFlow-Cta > button > div');  

   
}) .skipJsErrors();
