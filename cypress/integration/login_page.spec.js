context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://ninjaplus-web:5000')
    })

    it("should login successfully", () => {
        const loginSucesso = {
            email: "qa@gmail.com",
            pass: "qa@123*"
        };

        const successMessage = {
            message: "QA"
        };

        cy.login(loginSucesso)
        cy.successLogin(successMessage)
        cy.logout()
    });

    it("should see incorrect user", () => {
        const loginFalha = {
            email: "qa-@gmail.com",
            pass: "qa@123"
        };

        const alertError = {
            message: "Usuário e/ou senha inválidos"
        };

        cy.login(loginFalha)
        cy.alertMessage(alertError)
    });

    it("should see incorrect password", () => {
        const loginFalha = {
            email: "qa@gmail.com",
            pass: "123456"
        };

        const alertError = {
            message: "Usuário e/ou senha inválidos"
        };

        cy.login(loginFalha)
        cy.alertMessage(alertError)
    });

    it("should see email is required", () => {
        const loginFalha = {
            pass: "qa@123"
        };

        const alertError = {
            message: "Opps. Cadê o email?"
        };

        cy.loginWithoutEmail(loginFalha)
        cy.alertMessage(alertError)
    });

    it("should see password is required", () => {
        const loginFalha = {
            email: "qa@gmail.com"
        };

        const alertError = {
            message: "Opps. Cadê a senha?"
        };

        cy.loginWithoutPass(loginFalha)
        cy.alertMessage(alertError)
    });
});