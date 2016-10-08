import { McuTiersPage } from './app.po';

describe('mcu-tiers App', function() {
  let page: McuTiersPage;

  beforeEach(() => {
    page = new McuTiersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
