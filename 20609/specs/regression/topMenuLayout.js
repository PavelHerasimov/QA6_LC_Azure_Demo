import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import { topMenuDashboard } from '../../data/topMenuData';

describe('TOP MENU ELEMENTS ARE DISPLAYED AND CLICKABLE FOR ADMIN ROLE', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed(WAIT_TIME_MEDIUM);
  });

  it('should logo is displayed', () => {
    expect(TopMenuPage.logo.isDisplayed()).true;
  });

  it('should Home Page Link is displayed', () => {
    expect(TopMenuPage.homePageLink.isDisplayed()).true;
  });

  it('should Base Page Link is displayed', () => {
    expect(TopMenuPage.baseLink.isDisplayed()).true;
  });

  it('should Courses Page Link is displayed', () => {
    expect(TopMenuPage.coursesLink.isDisplayed()).true;
  });

  it('should Cards Page Link is displayed', () => {
    expect(TopMenuPage.cardsLink.isDisplayed()).true;
  });

  it('should Diary Page Link is displayed', () => {
    expect(TopMenuPage.diaryLink.isDisplayed()).true;
  });

  it('should Groups Page Link is displayed', () => {
    expect(TopMenuPage.groupsLink.isDisplayed()).true;
  });

  it('should Users Page Link is displayed', () => {
    expect(TopMenuPage.usersLink.isDisplayed()).true;
  });

  it('should Challenges Page Link is displayed', () => {
    expect(TopMenuPage.challengesLink.isDisplayed()).true;
  });

  it('should Telephony Page Link is displayed', () => {
    expect(TopMenuPage.telephonyLink.isDisplayed()).true;
  });

  it('should Shop Page Link is displayed', () => {
    expect(TopMenuPage.shopLink.isDisplayed()).true;
  });

  it('should Orders Page Link is displayed', () => {
    expect(TopMenuPage.adminOrderLink.isDisplayed()).true;
  });

  it('should Courses Page Link is clickable and redirect to the Courses Page', () => {
    expect(TopMenuPage.coursesLink.isClickable()).true;
    TopMenuPage.coursesLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.coursesLink);
  });

  it('should Cards Page Link is clickable and redirect to the Cards Page', () => {
    expect(TopMenuPage.cardsLink.isClickable()).true;
    TopMenuPage.cardsLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.cardsLink);
  });

  it('should Diary Page Link is clickable and redirect to the Diary Page', () => {
    expect(TopMenuPage.diaryLink.isClickable()).true;
    TopMenuPage.diaryLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.diaryLink);
  });

  it('should Groups Page Link is clickable and redirect to the Groups Page', () => {
    expect(TopMenuPage.groupsLink.isClickable()).true;
    TopMenuPage.groupsLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.groupsLink);
  });

  it('should Users Page Link is clickable and redirect to the Users Page', () => {
    expect(TopMenuPage.usersLink.isClickable()).true;
    TopMenuPage.usersLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.usersLink);
  });

  it('should Challenges Page Link is clickable and redirect to the Challenges Page', () => {
    expect(TopMenuPage.challengesLink.isClickable()).true;
    TopMenuPage.challengesLink.click();
    expect(TopMenuPage.headerChallenge.getText()).equal(topMenuDashboard.challengesLink);
  });

  it('should Telephony Page Link is clickable and redirect to the Telephony Page', () => {
    expect(TopMenuPage.telephonyLink.isClickable()).true;
    TopMenuPage.telephonyLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.telephonyLink);
  });

  it('should Shop Page Link is clickable and redirect to the Shop Page', () => {
    expect(TopMenuPage.shopLink.isClickable()).true;
    TopMenuPage.shopLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.shopLink);
  });

  it('should Orders Page Link is clickable and redirect to the Orders Page', () => {
    expect(TopMenuPage.adminOrderLink.isClickable()).true;
    TopMenuPage.adminOrderLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.ordersLink);
  });

  it('should Coins link (coin image) redirect user to the Achievements Page', () => {
    TopMenuPage.coinImg.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.achievements);
  });

  it('should Coins link (coin quantity) redirect user to the Achievements Page', () => {
    TopMenuPage.achievementsLink.click();
    expect(TopMenuPage.headerUniversal.getText()).equal(topMenuDashboard.achievements);
  });
});
