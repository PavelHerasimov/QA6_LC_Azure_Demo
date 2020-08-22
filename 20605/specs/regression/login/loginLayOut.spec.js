import LoginPage from '../../../../pageObjects/login.page';
import { loginPage } from '../../../testResult/login';

describe('LOGIN PAGE', () => {
  before(() => {
    LoginPage.open();
  });

  describe('HEADER', () => {
    it('TC-255 header should be displayed', () => {
      expect(LoginPage.headerLogin.isDisplayed()).true;
    });

    it('TC-016 header should have correct text', () => {
      expect(LoginPage.headerLogin.getText()).eq(loginPage.header);
    });
  });

  describe('ALL ELEMENTS ARE DISPLAYED', () => {
    it('TC-017 should verify that "Mail" icon is displayed', () => {
      expect(LoginPage.mailIcon.isDisplayed()).true;
    });

    it('TC-018 should verify that "Email" input field is displayed', () => {
      expect(LoginPage.inputUsername.isDisplayed()).true;
    });

    it('TC-019 should verify that "Email" input field has placeholder "Email"', () => {
      expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(loginPage.emailPlaceholder);
    });

    it('TC-020 should verify that "Lock" icon is displayed', () => {
      expect(LoginPage.lockIcon.isDisplayed()).true;
    });

    it('TC-021 should verify that "Password" input field is displayed', () => {
      expect(LoginPage.inputPassword.isDisplayed()).true;
    });

    it('TC-022 should verify that "Password" input field has placeholder "Email"', () => {
      expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(loginPage.passwordPlaceholder);
    });

    it('TC-023 should verify that "Log in" button is displayed', () => {
      expect(LoginPage.loginBtn.isDisplayed()).true;
    });

    it('TC-024 should verify that register link is displayed', () => {
      expect(LoginPage.registerLink.isDisplayed()).true;
    });

    it('TC-025 should verify that reset link is displayed', () => {
      expect(LoginPage.resetLink.isDisplayed()).true;
    });

    it('TC-026 should verify that GoogleSignIn link is displayed', () => {
      expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
    });

    it('TC-027 should verify that FacebookSignIn link is displayed', () => {
      expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
    });
  });
});
