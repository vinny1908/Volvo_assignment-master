const homePage = require("../checkParagraph/checkParagraph");

describe("Get the Paragraph text", function(){
   

    it("check Paragraph text", function(){
       browser.url('/intl/v/car-safety/a-million-more');
       homePage.getTextforparagraph;

    });
});