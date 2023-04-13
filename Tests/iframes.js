import { Selector } from "testcafe";

const iframeName = Selector('#mce_0_ifr');
const textArea = Selector('#tinymce');

fixture("Iframe Fixture")
.page('https://the-internet.herokuapp.com/iframe');

 test("iframe test",async t =>{
await t
         //it is used to switches the tests browsing content to specified iframe
    .switchToIframe(iframeName)
    .click(textArea)
        //it can presses the specified keys,if need to select all the text inside the text area
    .pressKey('ctrl+a delete')
    .typeText(textArea,'Good Morning All')
        //to check that required/particular text be inside or not,if it is not there then it will be fail
    .expect(textArea.innerText).contains('All')
    .switchToMainWindow();
 
 
});