import { FirebasefotosPage } from './app.po';

describe('firebasefotos App', () => {
  let page: FirebasefotosPage;

  beforeEach(() => {
    page = new FirebasefotosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
