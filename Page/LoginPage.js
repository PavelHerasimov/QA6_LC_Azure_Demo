import BasePage from './BasePage';
import userData from './../Data/userData';
class LoginPage extends BasePage{

  get inputEmail() { return $('#normal_login_email')}
  get inputPassword() { return $('#normal_login_password')}
  get loginBtn() { return $('[type="submit"]')}
  get header() { return $('h1')}
  get linkGoogle() { return $('[data-provider-id="google.com"]')}
  get linkFacebook() { return browser.$('//span[text()="Sign in with Facebook"]')}
  get linkResetPassword() { return browser.$('//a[text()="Reset it"]')}
  get linkCreateNewAccount() { return browser.$('//a[text()="Create one"]')}
  get linkHomePage() { return $('.site-name')}

  open(path) {
    super.open('user/login');
  }

  login() {
    this.open();
    this.inputEmail.setValue(userData.userAdmin.email);
    this.inputPassword.setValue(userData.userAdmin.password);
    this.loginBtn.click();

    // browser.pause(2000)
  }
}

export default new LoginPage();