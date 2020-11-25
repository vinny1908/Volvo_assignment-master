class HomePage_CheckElements{

    get pageHeader(){return $('//section[@data-autoid="ModelIntro"]//h2');}
    get pageParagraph1(){return $('//section[@data-autoid="ModelIntro"]//p');}
    get pageParagraph2(){return $('//div[@data-autoid="VideoTestimonials-1"]//p[1]');} 
}



module.exports = new HomePage_CheckElements();
