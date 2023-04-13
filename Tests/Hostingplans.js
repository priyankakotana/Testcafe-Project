import { Selector } from 'testcafe';

fixture('Test Structure')
    .page('https://www.turbify.com/hosting');

test('Web Hosting', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .setTestSpeed(0.01)
        //here it be click on Get Started
       // .click('#page-webhosting > div.section.Hero.section-fluidHeight.section-vertical-centered > div > div > div > div > div > div > div:nth-child(3) > span > a > button > div')
    
       .scrollBy(0,3400)
       .wait(10000)
        //here it be click on premium plan
        .click('#HostingPricingTables > div > div > div > div > div > div > div > div.threePlans > div > div:nth-child(1) > div > ul > li:nth-child(3) > div > div.PriceCard > div.CheckoutLink > span > a > button > div')
       // .typeText('#\32 056a58c-70c6-4304-9174-233048fe8f3a',"Qe27hos")
       
        
    });