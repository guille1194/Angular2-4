import { GraficosPage } from './app.po';

describe('graficos App', () => {
  let page: GraficosPage;

  beforeEach(() => {
    page = new GraficosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
