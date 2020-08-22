import RegisterPage from '../../../pageObjects/register.page';
import HomePage from '../../../pageObjects/home.page';
import { registration, user } from '../testData/users';
import LoginPage from '../../../pageObjects/login.page';
import { login, termsAndAgreement } from '../testData/expected.json';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import { registrationPage2 } from '../testData/expected.json';
import TermsAndAgreements from '../../../pageObjects/termsAndAgreements.page';

describe('New user registration page', () => {
  before(() => {
    HomePage.open();
  });

  it('TC-003 Register link on Home Page, should take user to the Register page', () => {
    HomePage.registerLink.click();
    expect(RegisterPage.email).to.exist;
  });
  it('TC-004 Check if the title of the page is Local Coding', () => {
    expect(browser.getTitle()).to.equal(registration.title);
  });

  it('TC-005 Check if the main text on the page is Create an account', () => {
    expect(RegisterPage.headerRegister.getText()).to.equal(registration.header);
  });

  it('TC-006 Check if the First Name textbox has a placeholder text First Name ', () => {
    expect(RegisterPage.firstNameInput.getAttribute('placeholder')).to.equal(registration.firstName);
  });

  it('TC-007 Check if the Last Name textbox has a placeholder text Last Name ', () => {
    expect(RegisterPage.lastNameInput.getAttribute('placeholder')).to.equal(registration.lastName);
  });

  it('TC-008 Check if the Email textbox has a placeholder text Email ', () => {
    expect(RegisterPage.email.getAttribute('placeholder')).to.equal(registration.email);
  });

  it('TC-009 Check if the Password textbox has a placeholder text Password ', () => {
    expect(RegisterPage.password.getAttribute('placeholder')).to.equal(registration.password);
  });

  it('TC-010 Check if checkbox is unchecked ', () => {
    RegisterPage.agreementCheckBox.click();
    expect(RegisterPage.agreementCheckBox.isSelected()).eq(true);
  });

  it('TC-011 Check if Register button is disabled until correct input is provided ', () => {
    expect(RegisterPage.registerBtn.isClickable()).to.equal(false);
  });

  it('TC-014 The Terms and agreement link opens a pop-up window on the right side of the page with the text.', () => {
    RegisterPage.agreementLabel.click();
    expect(RegisterPage.agreementDrawer.isDisplayed()).true;
    RegisterPage.drawerCloseBtn.click();
  });

  it('TC-012 Check log in link ', () => {
    RegisterPage.loginLink.click();
    expect(LoginPage.headerLogin.getText()).eq(login.header);
  });

  it('TC-018 Check if country lable text ', () => {
    RegisterStep2.open();
    expect(RegisterStep2.countryLabel.getText()).eq(registrationPage2.countryLabel);
  });

  it('TC-019 Check attribute of phone number', () => {
    expect(RegisterStep2.phoneNumber.getAttribute('placeholder')).eq(registrationPage2.phonePlaceHolder);
  });

  it('TC-020 Check submit btn text ', () => {
    expect(RegisterStep2.SubmitBtn.getText()).eq(registrationPage2.submitBtn);
  });

  it('TC-021 Check skip btn text ', () => {
    expect(RegisterStep2.skipBtn.getText()).eq(registrationPage2.skipLink);
  });

  it('TC-022 Check submit btn is disable ', () => {
    expect(RegisterStep2.SubmitBtn.isDisplayed);
  });
});
