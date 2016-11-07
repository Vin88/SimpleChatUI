'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('portalSeedApp', function() {

  it('should have a title', function() {
    browser.get('http://localhost:9000');

    expect(browser.getTitle()).toEqual('Dashboard_Seed');
  });

});
