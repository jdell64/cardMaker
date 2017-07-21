import { CardMakerPage } from './app.po';

describe('card-maker App', () => {
  let page: CardMakerPage;

  beforeEach(() => {
    page = new CardMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cm works!');
  });
});
