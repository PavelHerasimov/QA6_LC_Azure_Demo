import RegisterPage from '../../../../pageObjects/register.page';
import { registerPageTestResult } from '../../../testResult/register';

describe('REGISTER PAGE STEP 1', () => {
  before(() => {
    RegisterPage.open();
  });

  describe('HEADER', () => {
    it('TC-055 header should be displayed', () => {
      expect(RegisterPage.headerRegister.isDisplayed()).true;
    });

    it('TC-056 header should have correct text', () => {
      expect(RegisterPage.headerRegister.getText()).eq(registerPageTestResult.header);
    });
  });

  describe('ELEMENTS ARE DISPLAYED', () => {
    it('TC-057 First Name field should be displayed', () => {
      expect(RegisterPage.firstNameInput.isDisplayed()).true;
    });

    it('TC-058 Last Name field should be displayed', () => {
      expect(RegisterPage.lastNameInput.isDisplayed()).true;
    });

    it('TC-059 Email field should be displayed', () => {
      expect(RegisterPage.email.isDisplayed()).true;
    });

    it('TC-060 Password field should be displayed', () => {
      expect(RegisterPage.password.isDisplayed()).true;
    });

    it('TC-061 Eye icon should be displayed', () => {
      expect(RegisterPage.eyeIconClosed.isDisplayed()).true;
    });

    it('TC-062 Lock icon should be displayed', () => {
      expect(RegisterPage.lockIcon.isDisplayed()).true;
    });

    it('TC-063 Terms and agreements checkbox should be displayed', () => {
      expect(RegisterPage.agreementCheckBox.isSelected()).false;
    });

    it('TC-064 Terms and agreements link should be displayed', () => {
      expect(RegisterPage.termsAndAgreementsLink.isDisplayed()).true;
    });

    it('TC-065 Register button should be displayed', () => {
      expect(RegisterPage.registerBtn.isDisplayed()).true;
    });

    it('TC-066 Log in link should be displayed', () => {
      expect(RegisterPage.loginLink.isDisplayed()).true;
    });
  });

  describe('ELEMENTS HAVE CORRECT TEXT', () => {
    it('TC-068 First Name field placeholder should have correct text', () => {
      expect(RegisterPage.firstNameInput.getAttribute('placeholder')).eq(registerPageTestResult.firstNamePlaceholder);
    });

    it('TC-069 Last Name field placeholder should have correct text', () => {
      expect(RegisterPage.lastNameInput.getAttribute('placeholder')).eq(registerPageTestResult.lastNamePlaceholder);
    });

    it('TC-070 Email field placeholder should have correct text', () => {
      expect(RegisterPage.email.getAttribute('placeholder')).eq(registerPageTestResult.email);
    });

    it('TC-071 Password field placeholder should have correct text', () => {
      expect(RegisterPage.password.getAttribute('placeholder')).eq(registerPageTestResult.password);
    });

    it('TC-072 Agreement label should have correct text', () => {
      expect(RegisterPage.agreementLabel.getText()).eq(
        registerPageTestResult.agreementLabel + registerPageTestResult.termsAndAgreementsLink,
      );
    });

    it('TC-073 Terms and agreements link should have correct text', () => {
      expect(RegisterPage.termsAndAgreementsLink.getText()).eq(registerPageTestResult.termsAndAgreementsLink);
    });

    it('TC-074 Register button should have correct text', () => {
      expect(RegisterPage.registerBtn.getText()).eq(registerPageTestResult.registerBtn);
    });

    it('TC-067 Log in prompt label should have correct text', () => {
      expect(RegisterPage.promptLabel.getText()).eq(
        registerPageTestResult.loginPromptLabel + ' ' + registerPageTestResult.loginLink + '.',
      );
    });

    it('TC-075 Log in link should have correct text', () => {
      expect(RegisterPage.loginLink.getText()).eq(registerPageTestResult.loginLink);
    });
  });
});
