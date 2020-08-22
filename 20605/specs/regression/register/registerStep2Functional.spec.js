import RegisterStep2Page from '../../../../pageObjects/registerStep2.page';
import {functionalRegisterStep2} from '../../../testData/register';

describe('REGISTER PAGE STEP-2 FUNCTIONAL', () => {
  beforeEach(() => {
    RegisterStep2Page.open();
  });

  it('TC-105 should Country field can not be empty', () => {
    expect(RegisterStep2Page.countryCurrent.getText().length).not.eq(0);
  });

  it('TC-106 Verify that Country field is clickable', () => {
    expect(RegisterStep2Page.countryCurrent.isClickable()).true;
  });

  it('TC-107 Verify that Country can be selected',() => {
    RegisterStep2Page.countryCurrent.click();
    for (let i = 0; i < 6; i++)
      browser.keys('ArrowUp');
    browser.keys("Enter");
    expect(RegisterStep2Page.countryCurrent.getText()).eq(functionalRegisterStep2.countryFieldRussia);
  });

  it('TC-108 Verify that Country code matches Country name', () => {
    RegisterStep2Page.countryCurrent.click();
    for (let i = 0; i < 6; i++)
      browser.keys('ArrowUp');
    browser.keys("Enter");
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq(functionalRegisterStep2.countryCodeRussia);
  });

  it('TC-109 should Submit button be disabled by default', () => {
    expect(RegisterStep2Page.SubmitBtn.isClickable()).false;
  });

  it('TC-110 Verify that Phone Number field can accept correct min number',() => {
    RegisterStep2Page.phoneNumber.setValue(functionalRegisterStep2.validPhoneNumberMin);
    expect(RegisterStep2Page.SubmitBtn.isClickable()).true;
  });

  it('TC-111 Verify that Phone Number field can accept correct max number',() => {
    RegisterStep2Page.phoneNumber.setValue(functionalRegisterStep2.validPhoneNumberMax);
    expect(RegisterStep2Page.SubmitBtn.isClickable()).true;
  });

  it('TC 112 Verify that Skip button is clickable', () => {
    expect(RegisterStep2Page.skipBtn.isClickable()).true;
  });
})
