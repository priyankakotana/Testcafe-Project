//here we Import the Selector class in the beginning of the test file
import {Selector} from 'testcafe';

fixture('Gmail Loginpage') 
//Use the page method to set the starting URL of the fixture.
    .page ('https://accounts.google.com/v3/signin/identifier?dsh=S-1476335625%3A1679569052264958&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AQMjQ7Thgrc8Q4TRUcus8SVe8oklHeYwcRrT8FMAoqWqc2U8SkIkBAxePkhFG03z27d23T7yWX00&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin');

    //declare a new test with the test method
  test('First loginpage in TC', async t => {
    await t

    //here we are giving credentials of gmail account
    //The first argument is a CSS Selector that identifies the target element,The second argument contains the input value
    .typeText('#identifierId',"priyamokshi63@gmail.com")

    //This action requires a single argument — a CSS Keyword that identifies the target element.
    .click("#identifierNext")
    
    //here we are giving password for that account
     .typeText('#password ',"123456789")
      .click("#identifierNext") 
      
    
    await t.wait(1000)


//If a test fails, TestCafe outputs the error and highlights the failed action

})
