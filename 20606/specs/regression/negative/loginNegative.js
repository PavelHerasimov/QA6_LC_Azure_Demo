import LoginPage from '../../../../pageObjects/login.page';
import { WAIT_TIME_LONG } from '../../../../testData/waitTimes';
const user = require('../../../../testData/user');
import { incorrectInput } from '../../../testData/login.funct';
import { loginPage } from '../../../testResult/login.page.expected';

describe('LOGIN NEGATIVE REGRESSION', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-42 User can not login without password', () => {
    LoginPage.inputUsername.setValue(user.learner.email);
    expect(LoginPage.loginBtn.isClickable()).false;
  });

  it('TC-43 User can not login without email', () => {
    LoginPage.inputUsername.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputUsername.getValue().length !== 0);
    LoginPage.inputPassword.setValue(user.learner.password);
    expect(LoginPage.loginBtn.isClickable()).false;
  });

  it('TC-44 User can not login without email and password', () => {
    LoginPage.inputPassword.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputPassword.getValue().length !== 0);
    expect(LoginPage.loginBtn.isClickable()).false;
  });

  it('TC-45 User can not login with correct Email and incorrect password', () => {
    LoginPage.inputUsername.setValue(user.learner.email);
    LoginPage.inputPassword.setValue(incorrectInput.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_LONG });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
    LoginPage.errorMessageCloseBtn.click();
  });

  it('TC-46 User  can not login with correct password and incorrect Email', () => {
    LoginPage.inputUsername.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputUsername.getValue().length !== 0);
    LoginPage.inputUsername.setValue(incorrectInput.email2);
    LoginPage.inputPassword.setValue(user.learner.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_LONG });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
    LoginPage.errorMessageCloseBtn.click();
  });

  it('TC-47 Field email does not accept name without @ - type vasyamail.ru', () => {
    LoginPage.inputUsername.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputUsername.getValue().length !== 0);
    LoginPage.inputUsername.setValue(incorrectInput.email3);
    expect(LoginPage.txtEmailNotValid.getText()).eq(loginPage.emailNotValid);
  });

  it('TC-48 Field email does not accept name without .', () => {
    LoginPage.inputUsername.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputUsername.getValue().length !== 0);
    LoginPage.inputUsername.setValue(incorrectInput.email);
    expect(LoginPage.txtEmailNotValid.getText()).eq(loginPage.emailNotValid);
  });

  it('TC-49 user can not login if he uses Email that does not exist in the system but uses correct password ', () => {
    LoginPage.inputUsername.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputUsername.getValue().length !== 0);
    LoginPage.inputUsername.setValue(incorrectInput.email2);
    LoginPage.inputPassword.setValue(user.learner.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_LONG });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
    LoginPage.errorMessageCloseBtn.click();
  });

  it('TC-50 user can not login if he uses password that does not exist in the system but uses correct email ', () => {
    LoginPage.inputUsername.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputUsername.getValue().length !== 0);
    LoginPage.inputUsername.setValue(user.learner.email);
    LoginPage.inputPassword.click();
    do {
      browser.keys('Backspace');
    } while (LoginPage.inputPassword.getValue().length !== 0);
    LoginPage.inputPassword.setValue(incorrectInput.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: WAIT_TIME_LONG });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
    LoginPage.errorMessageCloseBtn.click();
  });

  it('TC-51 user can not login if press button sighn in with google - redirect', () => {
    LoginPage.loginGoogleBtn.click();
    expect(LoginPage.headerLogin.getText()).eq(loginPage.header);
  });

  it('TC-52 user can not login if press button sighn in with facebook - redirect', () => {
    LoginPage.loginFacebookBtn.click();
    expect(LoginPage.headerLogin.getText()).eq(loginPage.header);
  });
});
