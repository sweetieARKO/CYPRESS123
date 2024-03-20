describe("add to cart", () => {
    it("should add to cart", () => {
      // Visit eBay homepage
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
  
    cy.get(".login").click();
      // Fill in the registration form
      cy.get("#email_create").type("swjmjeekioe1k5833pa@gmail.com");
      cy.get("#SubmitCreate").click();
      cy.get("#id_gender2").click();
      cy.get("#customer_firstname").type("Sweetie");
      cy.get("#customer_lastname").type("Lovely");
      cy.get("#passwd").type("abi239&Ako");
      cy.get("#submitAccount > span").click();
  
      // Assert that the registration was successful
      cy.url().should("include", "my-account");
      cy.get(".info-account").should("contain.text", "Welcome to your account.");
      cy.get(".alert").should("contain.text", "Your account has been created")
    });
  });
  