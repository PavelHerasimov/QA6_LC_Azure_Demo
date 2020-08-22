import DailyReportsPage from '../../pageObjects/dailyReports.page';
import user from '../../testData/user';
import LoginPage from '../../pageObjects/login.page';
import randomData from './daily.data';

describe('DAILY REPORT CREATED', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
  });

  it('should Create daily report', () => {
    DailyReportsPage.createRandomDayReport();
    expect(DailyReportsPage.lastDailyReportText.getText()).eq(randomData.text);
  });
});
