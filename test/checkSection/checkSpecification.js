class CheckSpecification{

    get sectionHeader(){
        return $("//h2[text()='One of a million']");
    }

    get section(){
        return $('//div[@data-autoid="VideoTestimonials-1"]//section');
    }

    get section_paragraph(){
        return this.section.$$('p');
    }
  
    get getTextforparagraph2(){
        return this.section_paragraph.filter(element => {
            console.log(element.getText());
    });  
    
}

}

module.exports = new CheckSpecification();