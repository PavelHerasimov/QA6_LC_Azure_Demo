import HomePage from '../../../pageObjects/home.page';
import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import { homePage } from '../../testResult/homePage';
import { loginPage } from '../../testResult/login';
import { registerPageTestResult } from '../../testResult/register';

describe('HOME PAGE  ELEMENTS', () => {
  before(() => {
    HomePage.open();
  });

  it('TC-001 header  is displayed', () => {
    expect(HomePage.header.isDisplayed()).true;
  });

  it('TC-002 header  has the correct text', () => {
    expect(HomePage.header.getText()).eq(homePage.header);
  });

  it('TC-003 local coding logo is displayed', () => {
    expect(HomePage.homePageLink.isDisplayed()).eq(true);
  });

  it('TC-004 login button is clickable', () => {
    expect(HomePage.loginLink.isClickable());
  });

  it('TC-005 redirect to login page ', () => {
    HomePage.loginLink.click();
    expect(LoginPage.header.getText()).eq(loginPage.header);
  });

  it('TC-006 register button is clickable', () => {
    HomePage.open();
    expect(HomePage.registerLink.isClickable());
  });

  it('TC-007 redirect to register page', () => {
    HomePage.registerLink.click();
    expect(RegisterPage.header.getText()).eq(registerPageTestResult.header);
  });
});
