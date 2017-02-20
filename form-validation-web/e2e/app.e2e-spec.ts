import { FormValidationWebPage } from './app.po';

describe('form-validation-web App', function() {
  let page: FormValidationWebPage;

  beforeEach(() => {
    page = new FormValidationWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
