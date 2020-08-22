import LoginPage from '../../../../pageObjects/login.page';
import topMenuPage from '../../../../pageObjects/topMenu.page';
import user from '../../../../testData/user';
import { topMenu } from '../../../testResult/topMenu';

describe('TOPMENU LAYOUT', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  describe('MAIN ELEMENTS ARE DISPLAYED FOR ALL ROLES', () => {
    it('TC-134 logo is displayed', () => {
      expect(topMenuPage.logo.isDisplayed());
    });

    it('TC-135 label is displayed', () => {
      expect(topMenuPage.homePageLink.isDisplayed());
    });

    it('TC-136 label has correct text', () => {
      expect(topMenuPage.homePageLink.getText()).eq(topMenu.label);
    });

    it('TC-155 CoinImg is displayed', () => {
      expect(topMenuPage.coinImg.isDisplayed());
    });

    it('TC-156 AchievmentsLink is displayed', () => {
      expect(topMenuPage.achievementsLink.isDisplayed());
    });

    it('UserAvatarImg is displayed', () => {
      expect(topMenuPage.userAvatarImg.isDisplayed());
    });

    it('UserAvatarName is displayed', () => {
      expect(topMenuPage.userAvatarName.isDisplayed());
    });

    it('TC-157 DropDownArrow is displayed', () => {
      expect(topMenuPage.dropDownArrow.isDisplayed());
    });

    it('TC-158 DropDownMenuProfile is displayed', () => {
      expect(topMenuPage.dropDownMenuProfile.isDisplayed());
    });

    it('TC-160 DropDownMenuSettings is displayed', () => {
      expect(topMenuPage.dropDownMenuSettings.isDisplayed());
    });

    it('TC-162 DropDownMenuOrders is displayed', () => {
      expect(topMenuPage.dropDownMenuOrders.isDisplayed());
    });

    it('TC-164 DropDownMenuLogOut is displayed', () => {
      expect(topMenuPage.dropDownMenuLogOut.isDisplayed());
    });
  });

  describe('MAIN ELEMENTS ARE DISPLAYED for ADMIN', () => {
    it('TC-137 Base Link is displayed', () => {
      expect(topMenuPage.baseLink.isDisplayed());
    });

    it('TC-138 Base Link has correct text', () => {
      expect(topMenuPage.baseLink.getText()).eq(topMenu.baseLink);
    });

    it('TC-139 Courses Link is displayed', () => {
      expect(topMenuPage.coursesLink.isDisplayed());
    });

    it('TC-140 Courses Link has correct text', () => {
      expect(topMenuPage.coursesLink.getText()).eq(topMenu.coursesLink);
    });

    it('TC-141 Cards Link is displayed', () => {
      expect(topMenuPage.cardsLink.isDisplayed());
    });

    it('TC-142 Cards Link has correct text', () => {
      expect(topMenuPage.cardsLink.getText()).eq(topMenu.cardsLink);
    });

    it('TC-143 Diary Link is displayed', () => {
      expect(topMenuPage.diaryLink.isDisplayed());
    });

    it('TC-144 Diary Link has correct text', () => {
      expect(topMenuPage.diaryLink.getText()).eq(topMenu.diaryLink);
    });

    it('TC-145 Groups Link is displayed', () => {
      expect(topMenuPage.groupsLink.isDisplayed());
    });

    it('TC-146 Groups Link has correct text', () => {
      expect(topMenuPage.groupsLink.getText()).eq(topMenu.groupsLink);
    });

    it('TC-147 Users Link is displayed', () => {
      expect(topMenuPage.usersLink.isDisplayed());
    });

    it('TC-148 Users Link has correct text', () => {
      expect(topMenuPage.usersLink.getText()).eq(topMenu.usersLink);
    });

    it('TC-149 Challenges Link is displayed', () => {
      expect(topMenuPage.challengesLink.isDisplayed());
    });

    it('TC-150 Challenges Link has correct text', () => {
      expect(topMenuPage.challengesLink.getText()).eq(topMenu.challengesLink);
    });

    it('TC-151 Telephony Link is displayed', () => {
      expect(topMenuPage.telephonyLink.isDisplayed());
    });

    it('TC-152 Telephony Link has correct text', () => {
      expect(topMenuPage.telephonyLink.getText()).eq(topMenu.telephonyLink);
    });

    it('TC-153 Shop Link is displayed', () => {
      expect(topMenuPage.shopLink.isDisplayed());
    });

    it('TC-154 Shop Link has correct text', () => {
      expect(topMenuPage.shopLink.getText()).eq(topMenu.shopLink);
    });

    it('TC-223 Orders Link is displayed', () => {
      expect(topMenuPage.ordersLink.isDisplayed());
    });

    it('TC-224 Orders Link has correct text', () => {
      expect(topMenuPage.ordersLink.getText()).eq(topMenu.ordersLink);
    });
  });
});
