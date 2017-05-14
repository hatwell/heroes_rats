var assert = require('assert');
var Food = require('../food.js')

beforeEach(function(){
  food1 = new Food({'name': "beans", 'replenishmentValue': 10})
});

describe('Food', function(){
  it('food has a name', function(){
    assert.equal("beans", food1.name);
  })

  it('food has a replenishmentValue', function(){
    assert.equal(10, food1.replenishmentValue);
  })
})
