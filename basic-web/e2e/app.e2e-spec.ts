import { BasicWebPage } from './app.po';

describe('basic-web App', function() {
  let page: BasicWebPage;

  beforeEach(() => {
    page = new BasicWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
