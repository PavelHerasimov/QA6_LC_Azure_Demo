import FooterPage from '../../../pageObjects/footer.page';
import { footer } from '../testData/expected.json';

describe('FOOTER FUNCTIONALITY', () => {
  before(() => {
    FooterPage.open();
    browser.maximizeWindow();
  });

  it('TC-066 should Check footer text', () => {
    expect(FooterPage.footer.getText()).eq(footer.footerText);
  });

  it('TC-067 should Navigate to contact us page', () => {
    FooterPage.navToContactUs();
    expect(FooterPage.header.getText()).eq(footer.contactUsPage);
  });

  it('TC-068 should Navigate to terms of service page', () => {
    FooterPage.navToTermsOfService();
    expect(FooterPage.header.getText()).eq(footer.termsOfServicePage);
  });

  it('TC-069 should Navigate to privacy policy page', () => {
    FooterPage.navToPrivacyPolicy();
    expect(FooterPage.header.getText()).eq(footer.privacyPolicyPage);
  });
});
