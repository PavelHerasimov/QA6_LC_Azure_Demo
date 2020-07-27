import BasePage from './../pageObjects/Base.page';
import RegisterStep2Page from './registerStep2.page';

class RegisterPage extends BasePage {
  get headerRegister() {
    return $('h1');
  }

  get firstNameInput() {
    return $('#user_login_firstName');
  }

  get lastNameInput() {
    return $('#user_login_lastName');
  }

  get email() {
    return $('#user_login_email');
  }

  get password() {
    return $('#user_login_password');
  }

  get termsAndAgreementsLink() {
    return $('.ant-btn.pl-1.ant-btn-link.ant-btn-sm');
  }

  get termsAndAgreementsLinkClose() {
    return $('[data-icon="close"]');
  }

  get agreementCheckBox() {
    return $('#user_login_agreement');
  }

  get registerBtn() {
    return $('button[type="submit"]');
  }

  get eyeIconClosed () {
    return $('.anticon-eye-invisible');
  }

  get agreementLabel () {
    return $('.ant-checkbox-wrapper');
  }

  get agreementDrawer () {
    return $('div.ant-drawer-body');
  }

  get drawerCloseBtn () {
    return $('button[aria-label="Close"]');
  }

  get promptLabel () {
    return $('p');
  }

  get loginLink () {
    return $('a[href="/user/login"]')
  }

  get errorIncorrectEmail(){
    return $('.ant-form-item-explain  div');
  }

  termsAndAgreements() {
    this.agreementCheckBox.click();
    this.termsAndAgreementsLink.click();
    this.termsAndAgreementsLinkClose.waitForClickable({ timeout: 5000 });
    this.termsAndAgreementsLinkClose.click();
  }

  registerUser(data) {
    this.firstNameInput.setValue(data.firstName);
    this.lastNameInput.setValue(data.lastName);
    this.email.setValue(data.email);
    this.password.setValue(data.password);
    this.termsAndAgreements();
    this.registerBtn.click();
  }

  open(path) {
    return super.open('user/register');
  }
}
export default new RegisterPage();
