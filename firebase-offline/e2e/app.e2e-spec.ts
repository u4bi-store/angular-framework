import { FirebaseOfflinePage } from './app.po';

describe('firebase-offline App', () => {
  let page: FirebaseOfflinePage;

  beforeEach(() => {
    page = new FirebaseOfflinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
