import { FirebaseLab01Page } from './app.po';

describe('firebase-lab01 App', () => {
  let page: FirebaseLab01Page;

  beforeEach(() => {
    page = new FirebaseLab01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
