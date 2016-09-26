import { Angular2TypescriptPage } from './app.po';

describe('angular2-typescript App', function() {
  let page: Angular2TypescriptPage;

  beforeEach(() => {
    page = new Angular2TypescriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
