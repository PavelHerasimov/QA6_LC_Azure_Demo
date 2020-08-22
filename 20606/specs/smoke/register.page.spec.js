import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { registerNew } from '../../testData/register_new';
import ProfilePage from '../../../pageObjects/profile.page';
before(() => {
  RegisterPage.open();
  browser.maximizeWindow();
});
describe('REGISTER NEW USER POSITIVE', () => {
  it('TC-02 Register New User ', () => {
    RegisterPage.registerUser(registerNew);
    expect(RegisterStep2Page.headerRegisterStep2.getText()).include(
      'Dear ' + registerNew.firstName + ' ' + registerNew.lastName + '!',
    );
  });
  it('Register New User Second Page', () => {
    RegisterStep2Page.registerUserStep2(registerNew);
    expect(ProfilePage.headerProfile.getText()).include(registerNew.firstName + ' ' + registerNew.lastName);
  });
});
