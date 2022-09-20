// Test script via https://github.com/cypress-io/cypress-recorder-extension

describe("Blog funnel", () => {
    it("tests Blog funnel", () => {
    
      cy.visit("https://www.kairosds.com/");
    
      cy.get("#main > header > kw-header").click(); // Web Components 🙈
      cy.location("href").should("eq", "https://blog.kairosds.com/");
    
      cy.get("#post-9619 > div.et_pb_image_container > a > img").click(); // Web Components 🙈
      cy.location("href").should("eq", "https://blog.kairosds.com/mas-alla-del-api-rest-asyncapi/");
    
      });
    });
    