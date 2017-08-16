import { DesplieguePage } from './app.po';

describe('despliegue App', () => {
  let page: DesplieguePage;

  beforeEach(() => {
    page = new DesplieguePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
