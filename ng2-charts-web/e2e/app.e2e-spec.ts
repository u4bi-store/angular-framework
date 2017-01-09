import { Ng2ChartsWebPage } from './app.po';

describe('ng2-charts-web App', function() {
  let page: Ng2ChartsWebPage;

  beforeEach(() => {
    page = new Ng2ChartsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
