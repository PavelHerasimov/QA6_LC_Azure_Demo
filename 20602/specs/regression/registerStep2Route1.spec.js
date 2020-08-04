import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../data/users';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import { WAIT_TIME_MEDIUM } from '../../../testData/waitTimes';

before(() => {
  HomePage.open();
  HomePage.registerLink.click();
  RegisterPage.registerUser(user);
});

describe('Register step-2 elements', () => {
  it('TC-008-001 Verify that homepage link is clickable', function () {
    expect(RegisterStep2Page.homePageLink.isClickable()).true;
  });

  it('TC-008-002 Verify that header is displayed', function () {
    expect(RegisterStep2Page.headerRegisterStep2.waitForDisplayed(WAIT_TIME_MEDIUM));
  });

  it(`TC-008-003 Verify that header has right text`, function () {
    expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(
      `Dear ${user.firstName} ${user.lastName}!\nPlease complete these fields`,
    );
  });

  it('TC-008-004 Verify that country label is displayed', function () {
    expect(RegisterStep2Page.countryLabel.isDisplayed()).true;
  });

  it('TC-008-005 Verify that country label reads "Country"', function () {
    expect(RegisterStep2Page.countryLabel.getText()).eq(expected.registerStep2Data.countryLabel);
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email.toLowerCase());
  expect(res.success).eq(true);
});

