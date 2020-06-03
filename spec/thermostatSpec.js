'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degreees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
