import HomePage from '../../pageObjects/home.page';
import LoginPage from '../../pageObjects/login.page';
import RegisterPage from '../../pageObjects/register.page';
import expected from '../../20601/data/expected.json';

describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('verify that Register link open Register Page', () => {
    HomePage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq(expected.pagesHeaders.RegisterPageHeader);
  });

  it('verify that Login Link open Login Page', () => {
    HomePage.loginLink.click();
    expect(LoginPage.header.getText()).contains(expected.pagesHeaders.LoginHeader);
  });
});
