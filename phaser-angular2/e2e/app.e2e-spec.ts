import { PhaserAngular2Page } from './app.po';

describe('phaser-angular2 App', function() {
  let page: PhaserAngular2Page;

  beforeEach(() => {
    page = new PhaserAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
