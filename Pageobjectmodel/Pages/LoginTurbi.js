import { Selector } from "testcafe";

class TurLogin{
constructor(){
         this.cookies = Selector('.button')
         this.login = Selector('a').withText('Login')
         this.username = Selector("input[id='s-user']")
         this.password = Selector("input[id='s-pass']")
         this.loginbutton = Selector("button[id='btnLogin']")

}

}
export default new TurLogin();