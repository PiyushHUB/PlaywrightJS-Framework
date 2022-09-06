const { test,expect } = require('@playwright/test');
const { utilmethods } = require('../Pageobjects/utilmethods');
const util = new utilmethods();
exports.Demo=class Demo {
   
    constructor(page) {
        this.page = page;
        this.Register_link = page.locator("//a[contains(text(),'REGISTER')]");
        this.Firstname_Textbox = page.locator("//input[@name='firstName']");
        this.Lastname_Textbox = page.locator("//input[contains(@name,'lastName')]");
        this.Phone = page.locator("input[name='phone']");
        this.Emailid_Textbox = page.locator("//input[contains(@name,'userName')]");
        this.Address_Textbox=page.locator("//input[contains(@name,'address1')]");
        this.City_Textbox = page.locator("//input[contains(@name,'city')]");
        this.State_Textbox=page.locator("//input[contains(@name,'state')]");
        this.Postalcode_Textbox=page.locator("//input[contains(@name,'postalCode')]");
        this.Country_DD=page.locator("//select[contains(@name,'country')]");
        this.selenium_tab=page.locator('a:has-text("Selenium") >> nth=0');
        this.file_upload=page.locator("//a[contains(text(),'File Upload using Sikuli Demo')]");
        this.upload_btn=page.locator("//input[@type='file']");

      }
     
    async Register() {
        
        await util.enterUrl('http://demo.guru99.com/test/newtours/register.php',this.page);
        await util.clickElement(this.Register_link);
        await util.sendkeys(this.Firstname_Textbox,"John");
        await util.sendkeys(this.Lastname_Textbox,"ludwig");
        await util.sendkeys(this.Phone,"9853654343");
        await util.sendkeys(this.Emailid_Textbox,"abc@gmail.com");
        await util.sendkeys(this.Address_Textbox,"Chennai");
        await util.sendkeys(this.City_Textbox,"Chennai");
        await util.sendkeys(this.State_Textbox,"Tamilnadu");
        await util.sendkeys(this.Postalcode_Textbox,"600116");
        await util.selectDropdownByValue(this.Country_DD,"INDIA");
        //await util.clickElement(this.selenium_tab);
        //await util.clickElement(this.file_upload);
        //await this.page.waitForTimeout(10000);
        //await util.upload(this.upload_btn,"C:\\Users\\divya.b.sellamuthu\\Downloads\\testfile.txt",this.page);
        //await this.page.waitForTimeout(20000);
        
       
    }
    async common_func(){
        await util.readDataFromExcel("./Pageobjects","./Pageobjects/Sample_excel.xlsx","Sheet1",1,1);
        await util.api_post();

    }
}


