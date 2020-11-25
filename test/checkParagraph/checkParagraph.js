class CheckParagraph{

    get parent(){
        return $('//a[@data-autoid="nav:siteNavLogoSmall"]//img');
    }

    get child(){
        return this.parent.$$('p');
    }


    get getTextforparagraph(){
        return this.child.filter(element => {
            console.log(element.getText());
    });
}

}

module.exports = new CheckParagraph();
