import { expect } from 'chai';
import LoginPage from './../../../pageObjects/login.page';
import loginData from './../../data/login.data.json';
import homePageData from './../../data/homePage.data.json';

describe('LOGIN PAGE ELEMENTS', () => {
  before('', () => {
    browser.maximizeWindow();
    LoginPage.open();
  });

  it('TC-N Home link is displayed', () => {
    expect(LoginPage.homePageLink.isClickable()).to.be.true;
  });

  it('TC-N Home link text = "Local Coding"', () => {
    expect(LoginPage.homePageLink.getText()).eq(homePageData.homePageLink);
  });

  it('TC-N Header is displayed', () => {
    expect(LoginPage.headerLogin.isDisplayed()).to.be.true;
  });

  it('TC-N Header text = "Welcome Back!"', () => {
    expect(LoginPage.headerLogin.getText()).eq(loginData.header);
  });

  it('TC-N Email field is displayed', () => {
    expect(LoginPage.inputUsername.isDisplayed()).to.be.true;
  });

  it('TC-N Email field placeholder = "Email"', () => {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(loginData.emailPlaceholder);
  });

  it('TC-N Email icon is displayed', () => {
    expect(LoginPage.mailIcon.isDisplayed()).to.be.true;
  });

  it('TC-N Password field is displayed', () => {
    expect(LoginPage.inputPassword.isDisplayed()).to.be.true;
  });

  it('TC-N Password field placeholder = "Password"', () => {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(loginData.passwordPlaceholder);
  });

  it('TC-N Password icon is displayed', () => {
    expect(LoginPage.lockIcon.isDisplayed()).to.be.true;
  });

  it('TC-N Log in button is displayed', () => {
    expect(LoginPage.loginBtn.isDisplayed()).to.be.true;
  });

  it('TC-N Log in button is disabled by default', () => {
    expect(LoginPage.loginBtn.isEnabled()).to.be.false;
  });

  it('TC-N Log in button text = "Log in"', () => {
    expect(LoginPage.loginBtn.getText()).eq(loginData.loginBtn);
  });

  it('TC-N Register account link is displayed', () => {
    expect(LoginPage.registerLink.isClickable()).to.be.true;
  });

  it('TC-N Register account link text = "Creat one"', () => {
    expect(LoginPage.registerLink.getText()).eq(loginData.registerAccountLink);
  });

  it('TC-N Register account description is displayed', () => {
    expect(LoginPage.txtCreateOne.isDisplayed()).to.be.true;
  });

  it('TC-N Register account description text = "Don’t have an account? Create one."', () => {
    expect(LoginPage.txtCreateOne.getText()).eq(loginData.registerAccountDescription);
  });

  it('TC-N Reset password link is displayed', () => {
    expect(LoginPage.resetLink.isClickable()).to.be.true;
  });

  it('TC-N Reset password link text = "Reset it"', () => {
    expect(LoginPage.resetLink.getText()).eq(loginData.resetPasswordLink);
  });

  it('TC-N Forgot password description is displayed', () => {
    expect(LoginPage.txtResetIt.isDisplayed()).to.be.true;
  });

  it('TC-N Forgot password description = "Forgot your password? Reset it."', () => {
    expect(LoginPage.txtResetIt.getText()).eq(loginData.forgotPasswordDescription);
  });

  it('TC-N Sign in with Google button is displayed', () => {
    expect(LoginPage.loginGoogleBtn.isClickable()).to.be.true;
  });

  it('TC-N Sign in with Google button text = "Sign in with Google"', () => {
    expect(LoginPage.loginGoogleBtn.getText()).eq(loginData.signInWithGoogle);
  });

  it('TC-N Sign in with Facebook button is displayed', () => {
    expect(LoginPage.loginFacebookBtn.isClickable()).to.be.true;
  });

  it('TC-N Sign in with Facebook button text = "Sign in with Facebook"', () => {
    expect(LoginPage.loginFacebookBtn.getText()).eq(loginData.signInWithFacebook);
  });
});
