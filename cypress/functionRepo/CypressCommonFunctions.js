
import CypressHomePage from "../pages/CypressHomePage.js"

class CypressCommonFunctions {
    cypressHomePageCommonFunctions() {
        cy.wait(1000);
        const cypressHP = new CypressHomePage();
        cy.log('==================> Entered in Common Functions class <========================');
        cypressHP.cypressHomePageProductLinkClick();
        let totalSubProducts;
        cy.get(cypressHP.subLinksOfProducts).then(($value) => {
            totalSubProducts = $value.length
            cy.log("Total Numner of values" + totalSubProducts);
            for (let i = 1; i < totalSubProducts; i++) {
                cy.log("Clicking on " + i);
                cy.then(() => {
                    cy.get(cypressHP.subLinksOfProducts).eq(i).click().then(($value) => {
                        cy.wait(2000);
                        cypressHP.cypressHomePagecypresslogo;
                        const textValue = $value.text().replace('\u00A0','').trim();
                        cy.log("Clicked on text "+textValue);
                        cy.screenshot('cypress/screenshots/'+textValue+'.png');
                        cy.wait(2000);
                        cypressHP.cypressHomePageProductLinkClick();
                        cy.wait(500);
                        cypressHP.cypressHomePageProductLinkClick();
                        // cy.log("Value of I is: " + i);
                        // let tobeVerified = i - 1;
                        // cy.log("Value to be verified against "+tobeVerified);
                        // if (i != tobeVerified)  {
                        //     cypressHP.cypressHomePageProductLinkClick();
                        //     cy.wait(1000);
                        // }
                    })
                })
            }
        }).then(()=>{
            cypressHP.cypressHomePagecypresslogo;
        })
        // cy.log("Now starting for loop with values are"+totalSubProducts);


        // for(let i = 0; i < totalSubProducts; i++) {
        //     log("Clicking on "+i);
        //     // cy.get(cypressHP.subLinksOfProducts).eq(i).click();
        //     // cypressHP.cypressHomePageProductLinkClick();
        // }

        // var genArr = Array.from({ length: totalSubProducts }, (v, k) => k + 1)
        // cy.wrap(genArr).each((index) => {
        //     cy.log("Clicking on "+index)
        //     cy.get(cypressHP.subLinksOfProducts + index).click()
        // })


        // cy.get(cypressHP.subLinksOfProducts).eq(1).click();
        // cypressHP.cypressHomePageProductLinkClick();
        // cy.get(cypressHP.subLinksOfProducts).eq(2).click();
        // cypressHP.cypressHomePageProductLinkClick();
        // cy.get(cypressHP.subLinksOfProducts).eq(3).click();
        // cy.get(cypressHP.subLinksOfProducts).each(($ele, index, $list)=>{
        //     cy.log("Value of Link to be clicked "+$ele.text);
        //     cy.get($ele).click();
        //     cy.log("Clicked on :"+$ele.text);
        //     cypressHP.cypressHomePageProductLinkClick();
        // })

    }
}

module.exports = CypressCommonFunctions