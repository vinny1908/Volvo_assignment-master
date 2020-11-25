const { expect } = require("chai");
const checkSpecifcation = require("./checkSection/checkSpecification");
const homePage = require("./checkElements/PageObjects");


var check = require('chai').expect


describe("interaction with web element", function(){

    it("Accept the cookie", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const accept_cookie = $('div.accept-cookie-container >button');
        accept_cookie.click();
    });

    it("check if Main header is viewed", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const header = $('//section[@data-autoid="ModelIntro"]//h2');
        console.log(header.isDisplayedInViewport());
    });

    it("check if Main header is viewed", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const header = $('//section[@data-autoid="ModelIntro"]//h2');
        console.log(header.isDisplayedInViewport());
    });

    it('get the Window size', function () {
        browser.url('/intl/v/car-safety/a-million-more');
        const header = $('//section[@data-autoid="ModelIntro"]//h2');
        console.log(browser.getWindowSize());
      });

    it('should save a screenshot of the browser view', function () {
        browser.saveScreenshot('./test/screenshots/screenshot.png');
      });

    it("check if Learn about Safety link exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const safety = $("//a[text()='Learn more about car safety']");
        safety.click();
    });

    it("check if Recharge link exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const safety = $("//a[text()='Recharge']");
        safety.click();
    });


    it("check if Mild hybrid car exists link available", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const safety = $("//a[text()='Mild hybrid cars']");
        safety.click();
    });

    it("click on a promotional video", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const icon = $('//div[@data-autoid="Video-1"]//video');
        icon.click();

    });

    it("check whether car menu exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const car_menu = $('//button[@data-autoid="nav:topNavCarMenu"]');
        car_menu.click();
    });

   /* it("check if the picture size reduces", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const car_menu = $('//em[@data-autoid="productListCarouselItem:category"]');
        expect(browser.touchAction({ action: 'tap',  element: screen }))
    });*/

    it("check if title exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        var title = browser.getTitle();
        if(title === "A million more | Volvo Cars")
        console.log("true");
    });
    
    it("check if having right url", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        expect(browser.getUrl()).equals("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    });

    
    it("click if Navigation source exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const navigation_menu = $('//button[@data-autoid="nav:siteNavHamburgerIcon"]');
        navigation_menu.click();
        expect()
    });

    it("check VOLVO IMAGE which has a link", () => {    
        const image = $('//a[@data-autoid="nav:siteNavLogoSmall"]//img');
        const attr = image.getAttribute("src");
        image.click();
        expect(browser.getUrl()).equals("https://www.volvocars.com/intl");
        // const elem = $("b dy dz ea ed ei ej ek el em fo fp fq fr fs ft fu");
        //expect(elem).toBeVisible();
      });


    it("click if Cookies url works fine", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const cookies = $("//a[text()='Cookies']");
        cookies.click();
        expect(browser.getUrl()).equals("https://www.volvocars.com/intl/footer/cookies");
    });

    it("click if Legal url works fine", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const cookies = $("//a[text()='Legal']");
        cookies.click();
        expect(browser.getUrl()).equals("https://www.volvocars.com/intl/footer/legal");
    });

    it("click if Privacy url works fine", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const cookies = $("//a[text()='Privacy']");
        cookies.click();
        expect(browser.getUrl()).equals("https://www.volvocars.com/intl/footer/privacy");

    });

    it("click if social media url works fine", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const cookies = $("//a[text()='Social Media']");
        cookies.click();
        expect(browser.getUrl()).equals("https://www.volvocars.com/intl/footer/social-media");

    });

    it("click if footer note exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const footer_note = $('//div[@data-autoid="Disclaimer-1"]//p');
        footer_note.isExisting();

    });

    it("click if footer exists", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        const footer = $('//span[@data-autoid="footer:copyright"]');
        footer.isExisting();

    });


    
describe("Home Page Elements", function(){
   

    it("Verify Page Elements", function(){
       browser.url('/intl/v/car-safety/a-million-more');
       homePage.pageHeader.getText();
       homePage.pageParagraph1.getText();
       homePage.pageParagraph2.getText();
    
    });
    

  
});

describe("Get the Paragraph text from the section", function(){

    it("check Paragraph text", function(){
       browser.url('/intl/v/car-safety/a-million-more');
       checkSpecifcation.getTextforparagraph2;


    });

    it("check if header displayed", function(){
        browser.url('/intl/v/car-safety/a-million-more');
        console.log(checkSpecifcation.sectionHeader.isDisplayed());
     });

     it("check if header Enabled", function(){
      browser.url('/intl/v/car-safety/a-million-more');
      console.log(checkSpecifcation.sectionHeader.isEnabled());
   });

     
});

  
});