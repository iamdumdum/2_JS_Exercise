"use strict"

const { expect } = require('chai');
const { myNumber } = require('../index');

describe('Variable', function() {
    it('myNumber should be equal to 10', function() {
      expect(myNumber).to.equal(10)
    });
});