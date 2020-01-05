context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://ninjaplus-web:5000')
    })

    it("should login successfully", () => {
        const loginSucesso = {
            email: "murillo.welsi@gmail.com",
            pass: "Mw123456*"
        };

        const successMessage = {
            message: "Murillo Welsi de Souza Pereira"
        };

        cy.login(loginSucesso)
        cy.successLogin(successMessage)
        cy.logout()
    });

    it("should see incorrect user", () => {
        const loginFalha = {
            email: "murillo.welsi-gmail.com",
            pass: "Mw123456*"
        };

        const alertError = {
            message: "Usuário e/ou senha inválidos"
        };

        cy.login(loginFalha)
        cy.alertMessage(alertError)
    });

    it("should see incorrect password", () => {
        const loginFalha = {
            email: "murillo.welsi@gmail.com",
            pass: "123456"
        };

        const alertError = {
            message: "Usuário e/ou senha inválidos"
        };

        cy.login(loginFalha)
        cy.alertMessage(alertError)
    });

    it("should see email is required", () => {
        
        const email = "murillo.welsi@gmail.com";
        const pass = "Mw123456*";

        cy.get("input[placeholder='nome@gmail.com']").invoke('val', email);
        cy.get("input[placeholder=senha]").invoke('val', pass);
        cy.get("#login").click();

        cy.get(".alert span b")
          .should('contain', 'Opps. Cadê o email?');
    });

    it("should see password is required", () => {
        const email = "murillo.welsi@gmail.com";
        const pass = "Mw123456*";

        cy.get("input[placeholder='nome@gmail.com']").type(email);
        cy.get("input[placeholder=senha]").invoke('val', '');
        cy.get("#login").click();

        cy.get(".alert span b")
          .should('contain', 'Opps. Cadê a senha?');
    });
});