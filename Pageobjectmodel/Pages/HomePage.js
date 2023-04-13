//here we import selector and t as a test controller from TC
import { Selector, t } from "testcafe";

class Homepage{
    constructor(){
         this.subtitleHeader = Selector('h2').withText('Welcome to our store')
         this.RegisterLink = Selector('a').withText('Register')
         this.LoginLink = Selector('a').withText('Login in')
         this.CartLink = Selector('a').withText('Shopping cart')
         this.MyAccountList = Selector('a').withText('My account')
         this.LogoutLink = Selector('a').withText('Log out')
         this.currencyList = Selector('select#customerCurrency')

    }
          get productSearch(){
                 return Selector("input[id='#small-searchterms']");
          }


          async search(){
            await t
                    .typeText(this.productSearch,product)
                    .wait(3000)
                    .pressKey('enter');
          }
    
          async changeCurrency(){
            await t
            .click(this.currencyList)
            .click(Selector('option',{text: currency}));
          }

}
export default new Homepage();

