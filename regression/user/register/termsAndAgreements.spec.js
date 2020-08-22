import RegisterPage from '../../../pageObjects/register.page';
import TermsAndAgreementsPage from '../../../pageObjects/termsAndAgreements.page';
import expected from '../data/expected.js';

before(() => {
  RegisterPage.open();
});

describe('VERIFY TERMS AND CONDITIONS', () => {
  it('TC-007-001 Verify that "Term and Agreements"  link is displayed', () => {
    expect(RegisterPage.termsAndAgreementsLink.isDisplayed()).true;
  });

  it('TC-007-002 Verify than "Term and Agreements" link is clickable ', () => {
    expect(RegisterPage.termsAndAgreementsLink.isClickable()).true;
  });

  it('TC-007-003  Verify that pop-up window has correct header "Terms and agreements" ', () => {
    RegisterPage.termsAndAgreementsLink.click();
    expect(TermsAndAgreementsPage.drawerTitle.getText()).eq(expected.termsAndAgreements.drawerTitle);
  });

  it('Verify that last modify date is correct', () => {
    TermsAndAgreementsPage.lastModified.scrollIntoView();
    expect(TermsAndAgreementsPage.lastModified.getText()).eq(expected.termsAndAgreements.lastModified);
  });

  it('Verify that pop-up window has close icon', () => {
    TermsAndAgreementsPage.termsAndAgreementsLinkClose.click();
  });
});
