import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import user from '../../../testData/user';
import LoginPage from '../../../pageObjects/login.page';
import { dailyReport } from '../../testData/dailyReport';
import { createDailyRep } from '../../helpers/createDailyReport.js';

describe('DAILY REPORTS FUNCTIONALITY FOR LEARNER', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
  });

  it('TC-220 daily report can be created by learner', () => {
    let dailyReportsQty = +DailyReportsPage.reportQty.getText();
    createDailyRep(dailyReport.moraleSelectorIndex, dailyReport.hoursSelectorIndex, dailyReport.dailyReportText);
    expect(+DailyReportsPage.reportQty.getText()).eq(dailyReportsQty + 1);
  });

  it('TC-221 created daily report contains selected by learner checkbox "I need help"', () => {
    // browser.waitUntil(() => DailyReportsPage.dailyReportTag[0].isDisplayed());
    expect(DailyReportsPage.dailyReportTag[0].getText()).eq(dailyReport.tagText);
  });

  it('TC-222 created daily report contains text created by learner', () => {
    expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReport.dailyReportText);
  });
});

describe('DAILY REPORTS FUNCTIONALITY FOR STUDENT', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
  });

  it('TC-315 daily report can be created by student', () => {
    let dailyReportsQty = +DailyReportsPage.reportQty.getText();
    createDailyRep(dailyReport.moraleSelectorIndex, dailyReport.hoursSelectorIndex, dailyReport.dailyReportText);
    expect(+DailyReportsPage.reportQty.getText()).eq(dailyReportsQty + 1);
  });

  it('TC-316 created daily report contains selected by student checkbox "I need help"', () => {
    // browser.waitUntil(() => DailyReportsPage.dailyReportTag[0].isDisplayed());
    expect(DailyReportsPage.dailyReportTag[0].getText()).eq(dailyReport.tagText);
  });

  it('TC-317 created daily report contains text created by student', () => {
    expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReport.dailyReportText);
  });
});
