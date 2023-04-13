import { Selector, t } from "testcafe";


class Registerpage {
     constructor() {
          this.GenderOption = Selector('#gender-female')
          this.FirstName = Selector('#FirstName')
          this.LastName = Selector('#LastName')
          this.DateOfBirthDayList = Selector("select[name='DateOfBirthDay']")
          this.DataOfBirthMonthList = Selector("select[name='DateOfBirthMonth']")
          this.DateOfBirthYearList = Selector("select[name='DateOfBirthYear']")
          this.Email = Selector('#Email')
          this.Password = Selector('#Password')
          this.ConfirmPassword = Selector('#ConfirmPassword')
          this.RegisterButton = Selector('#register-button')
          this.SuccessfulMessage = Selector('div.result').withText('Your registration completed');

     }
     async SelectDay(day) {
          const DayOption = this.DateOfBirthDayList.find('option');
          await t
               .click(this.DateOfBirthDayList)
               .click(DayOption.withText(day));

     }
    async SelectMonth(month){
          const MonthOption = this.DataOfBirthMonthList.find('option');
          await t 
               .click(this.DataOfBirthMonthList)
               .click(MonthOption.withText(month));

    }

     
     async SelectYear(year) {
          const YearOption = this.DateOfBirthYearList.find('option');
          await t
               .click(this.DateOfBirthYearList)
               .click(YearOption.withText(year));

     }
}
export default new Registerpage();
