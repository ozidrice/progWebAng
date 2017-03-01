import { ProgWebAngPage } from './app.po';

describe('prog-web-ang App', () => {
  let page: ProgWebAngPage;

  beforeEach(() => {
    page = new ProgWebAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
