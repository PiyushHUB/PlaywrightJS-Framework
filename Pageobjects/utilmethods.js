const Excel = require('exceljs');
const { request } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

class utilmethods {
   
  
    async enterUrl(url,page) {
        await page.goto(url);
        await page.waitForLoadState();
    }

    async waitforelement(locatorValue,page){
        await page.waitForSelector(locatorValue);
    }

    async scrollToElement(element){
        await element.scrollIntoViewIfNeeded();
    }

    async clickElement(element)
    {
        await element.click();
    }

    async selectDropdownByValue(element,value)
    {
        await element.selectOption(value);
    }

    async selectDropdownByIndex(element,value)
    {
        await element.selectOption(new SelectOption().setIndex(value));
    }

    async focus(element)
    {
        await element.focus();
    }

    async sendkeys(element,value)
    {
        await element.fill(value);
    }
    async upload (element,path,page)
    {
        element.click();
        const [fileChooser] = await Promise.all([
            await page.waitForEvent('filechooser'),
           
          ]);
          await fileChooser.setFiles(path);
    }

    async readDataFromExcel(filepath,filename,sheetname,row_n,col_n)
    {
        const wb=new Excel.Workbook();
        wb.xlsx.readFile(filename).then(function(data){
        const sh = wb.getWorksheet(sheetname);
        const val=(sh.getCell('B1').value);		
        console.log(val);
        
        });
    }

    async detectFramebyURL(url,page)
    {
        const frame=await page.frameByUrl(url);
    }
    async detectFramebyname(name,page)
    {
        const frame=await page.frame(name);

    }
    async enter_key(page)
    {
        await page.keyboard.press("Enter");
    }
    async tab_key(page)
    {
        await page.keyboard.press("Tab");
    }

    async up_arrow(page)
    {
        await page.keyboard.press("Up");
    }
    async Down_arrow(page)
    {
        await page.keyboard.press("Down");
    }
    async api_post() //update headers, body and url as required
    {
        const requestContext = await request.newContext({
            extraHTTPHeaders: {
      
                'Content-Type': 'application/json',
                //'Authorization': token
            },
            data:{
                "property" : ["Sites"], "report_type" : ["ALL"]
            }
          });
        const resp= (await requestContext.post("http://ip.jsontest.com/"))
        console.log(await resp.json())
        requestContext.dispose(); 
    }
    async api_get()  //update headers and url as needed
    {
        const requestContext = await request.newContext({
            extraHTTPHeaders: {
               // 'Authorization': token,
               // 'X-Correlation-Id': '3daf080b-d372-4010-b78f-b4f3c7425ebf',
               // 'Content-Type': 'application/json'
            }
          });
        const resp= (await requestContext.get("specify the url"));
        console.log(await resp.json())
        requestContext.dispose();
    }
    async accessibility_test_AXE(page)
    {
        try {
            const results = await new AxeBuilder({ page }).analyze();
            console.log(results.violations);
            console.log(page.url());
          } catch (e) {
            // do something with the error
          }
    }
}

module.exports = { utilmethods };
