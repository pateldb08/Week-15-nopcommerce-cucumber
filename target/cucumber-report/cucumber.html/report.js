$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPage Test",
  "description": "As a user I can arrange products and add in to shopping cart successfully",
  "id": "computerpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9512889900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to arrange the product in alphabetical order",
  "description": "",
  "id": "computerpage-test;user-should-able-to-arrange-the-product-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 207912800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputer()"
});
formatter.result({
  "duration": 1425303000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 704806200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 286760400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.after({
  "duration": 1045460500,
  "status": "passed"
});
formatter.before({
  "duration": 5391361200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can add product to shopping cart successfully",
  "description": "",
  "id": "computerpage-test;user-can-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on computer",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select sort by position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CLick on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Text Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can Select ram \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I can Select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can Select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I can Select check box \"Total Commander\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the price \"$1,475.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I can close the bar clicking on close button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can MouseHover on Shopping cart and Click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can Verify the message \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can change the Qty to \"2\" and Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify the Total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I can click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I can click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can click on checkout as a guest tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I can fill all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I can click on next day air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select credit card radio button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on the continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I can select master card",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I can fill all mandatory field for payment",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify payment method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify shipping method is \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I can click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I can Verify text \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Verify the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify text \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputer()"
});
formatter.result({
  "duration": 1149329800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 611235900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 229491500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCart()"
});
formatter.result({
  "duration": 5139713600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyTheTextBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1616225500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iCanSelectProcessor(String)"
});
formatter.result({
  "duration": 252729700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iCanSelectRam(String)"
});
formatter.result({
  "duration": 221568400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iCanSelectHDDRadio(String)"
});
formatter.result({
  "duration": 144021700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iCanSelectOSRadio(String)"
});
formatter.result({
  "duration": 126670900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iCanSelectCheckBox(String)"
});
formatter.result({
  "duration": 132137300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.verifyThePrice(String)"
});
formatter.result({
  "duration": 2092865900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 172147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.verifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 336177900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanCloseTheBarClickingOnCloseButton()"
});
formatter.result({
  "duration": 497878900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanMouseHoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1249513500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iCanVerifyTheMessage(String)"
});
formatter.result({
  "duration": 62958400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iCanChangeTheQtyToAndClickOnUpdateShoppingCart(String)"
});
formatter.result({
  "duration": 1481105700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.verifyTheTotal(String)"
});
formatter.result({
  "duration": 154792000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 403452900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCheckout()"
});
formatter.result({
  "duration": 1198246100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 145845500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCheckoutAsAGuestTab()"
});
formatter.result({
  "duration": 1414433200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanFillAllMandatoryField()"
});
formatter.result({
  "duration": 2405941000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnNextDayAirRadioButton()"
});
formatter.result({
  "duration": 441371000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnContinue()"
});
formatter.result({
  "duration": 125874600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.selectCreditCardRadioButton()"
});
formatter.result({
  "duration": 370857700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnTheContinue()"
});
formatter.result({
  "duration": 127226100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanSelectMasterCard()"
});
formatter.result({
  "duration": 438855700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanFillAllMandatoryFieldForPayment()"
});
formatter.result({
  "duration": 836175500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.verifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 292219700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.verifyShippingMethodIs(String)"
});
formatter.result({
  "duration": 42682700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnConfirmButton()"
});
formatter.result({
  "duration": 94238200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iCanVerifyText(String)"
});
formatter.result({
  "duration": 788046800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 48547300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnTheContinueButton()"
});
formatter.result({
  "duration": 518509500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.verifyText(String)"
});
formatter.result({
  "duration": 88483900,
  "status": "passed"
});
formatter.after({
  "duration": 943643800,
  "status": "passed"
});
formatter.uri("electronics.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Test",
  "description": "As a user I can navigate the product and place the order successfully",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4787619800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to cell phones page successfully",
  "description": "",
  "id": "electronics-test;user-should-navigate-to-cell-phones-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I can mouse hover on electronics tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can mouse hover on cell phones and click",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can verify the text \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 96200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanMouseHoverOnElectronicsTab()"
});
formatter.result({
  "duration": 246085800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanMouseHoverOnCellPhonesAndClick()"
});
formatter.result({
  "duration": 1184615400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iCanVerifyTheText(String)"
});
formatter.result({
  "duration": 61092400,
  "status": "passed"
});
formatter.after({
  "duration": 869885700,
  "status": "passed"
});
formatter.before({
  "duration": 4674979800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "USer can add the product and place the order successfully",
  "description": "",
  "id": "electronics-test;user-can-add-the-product-and-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I can mouse hover on electronics tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I can mouse hover on cell phones and click",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should click on list view tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should click on nokia lumia product",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the text \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should verify the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should change the quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should mouse hover on shopping cart and click on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should verify msg \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify the quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should verify total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should click on the checkbox of agree terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should click on the checkout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should verify text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should verify \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should able to fill all mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should click on continue tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 106800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanMouseHoverOnElectronicsTab()"
});
formatter.result({
  "duration": 254419600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanMouseHoverOnCellPhonesAndClick()"
});
formatter.result({
  "duration": 1190978900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iCanVerifyTheText(String)"
});
formatter.result({
  "duration": 60742600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnListViewTab()"
});
formatter.result({
  "duration": 138603200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnNokiaLumiaProduct()"
});
formatter.result({
  "duration": 6414971700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 17
    }
  ],
  "location": "ElectronicsSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 69335100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 27
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyThePrice(String)"
});
formatter.result({
  "duration": 62091400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "ElectronicsSteps.iShouldChangeTheQuantityTo(int)"
});
formatter.result({
  "duration": 334634000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnAddToCartTab()"
});
formatter.result({
  "duration": 136387300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 267158400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnCloseButton()"
});
formatter.result({
  "duration": 123797300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldMouseHoverOnShoppingCartAndClickOnGoToCartButton()"
});
formatter.result({
  "duration": 1625718800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 21
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyMsg(String)"
});
formatter.result({
  "duration": 54328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTheQuantity(int)"
});
formatter.result({
  "duration": 65134900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTotal(String)"
});
formatter.result({
  "duration": 61241100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnTheCheckboxOfAgreeTermsOfService()"
});
formatter.result({
  "duration": 321011900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnTheCheckout()"
});
formatter.result({
  "duration": 767277500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyText(String)"
});
formatter.result({
  "duration": 227670500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnRegisterTab()"
});
formatter.result({
  "duration": 559715700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 17
    }
  ],
  "location": "ElectronicsSteps.iShouldVerify(String)"
});
formatter.result({
  "duration": 73286500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldAbleToFillAllMandatoryFields()"
});
formatter.result({
  "duration": 1465728200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnRegisterButton()"
});
formatter.result({
  "duration": 1042694400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 105280400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnContinueTab()"
});
formatter.result({
  "duration": 1263956700,
  "status": "passed"
});
formatter.after({
  "duration": 1505219800,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage Test",
  "description": "As a user I can navigate the pages successfully",
  "id": "homepage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4926066300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can navigate computer page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Computers text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 286300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectComputers()"
});
formatter.result({
  "duration": 828450100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.computersTextDisplayed()"
});
formatter.result({
  "duration": 40062800,
  "status": "passed"
});
formatter.after({
  "duration": 897317000,
  "status": "passed"
});
formatter.before({
  "duration": 5139679400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can navigate electronics page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-electronics-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select electronics",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Electronics text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectElectronics()"
});
formatter.result({
  "duration": 1286828900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.electronicsTextDisplayed()"
});
formatter.result({
  "duration": 40090500,
  "status": "passed"
});
formatter.after({
  "duration": 896656600,
  "status": "passed"
});
formatter.before({
  "duration": 5307445300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User can navigate apparel page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-apparel-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I select apparel",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Apparel text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectApparel()"
});
formatter.result({
  "duration": 847025900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.apparelTextDisplayed()"
});
formatter.result({
  "duration": 38330800,
  "status": "passed"
});
formatter.after({
  "duration": 834053700,
  "status": "passed"
});
});