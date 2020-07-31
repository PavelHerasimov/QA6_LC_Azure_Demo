import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { newUser } from '../../data/fakeData';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsEmailPage from '../../../pageObjects/settings.email.page';
import LoginPage from '../../../pageObjects/login.page';

describe('RESET OLD EMAIL AND LOGIN WITH NEW EMAIL FOR NEW USER SMOKE)', () => {
  before(() => {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsEmailPage.emailTab.click();
  });

  it('RE01 Should reset email for new user and login with the new email', () => {
    SettingsEmailPage.oldEmailField.setValue(newUser.email);
    SettingsEmailPage.newEmailField.setValue(newUser.newEmail);
    SettingsEmailPage.confirmEmailField.setValue(newUser.newEmail);
    SettingsEmailPage.submitButton.click();
    ProfilePage.logout();
    LoginPage.login(newUser.newEmail, newUser.password);
  });
});