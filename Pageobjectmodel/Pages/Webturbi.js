import { Selector } from "testcafe";

class Webturbi{
constructor(){
        
         this.Cookies = Selector('.button')
         this.WebEssentials = Selector("a[aria-label='Web Essentials']")
         //this.Hosting = Selector('a[title][href="/hosting"]')
         this.GetStarted = Selector('div').withText('Get Started')
         this.PremierPlan = Selector('#HostingPricingTables > div > div > div > div > div > div > div > div.threePlans > div > div:nth-child(1) > div > ul > li:nth-child(3) > div > div.PriceCard > div.CheckoutLink > span > a > button > div')
         this.DomainName = Selector('input[name="search"]')
         this.SearchButton = Selector('div[class="linearForm-submit linearForm-submit-transparent"]')
         this.AddToCart = Selector('button[id="11hospre.com"]')
         this.Continue = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > div > button > div')
         this.LoginHere = Selector('span[class="Link login-ctalink"]')
         this.EmailAddress = Selector('input[name="userid"]')
         this.Password = Selector('input[name="passwd"]')
         this.Signin = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div')


}

}
export default new Webturbi();