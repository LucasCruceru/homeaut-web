import { HomeautWebPage } from './app.po';

describe('homeaut-web App', () => {
  let page: HomeautWebPage;

  beforeEach(() => {
    page = new HomeautWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
