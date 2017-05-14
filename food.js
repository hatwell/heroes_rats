var _ = require('lodash');

var Food = function(params){
  this.name = params['name'];
  this.replenishmentValue = params['replenishmentValue'];
  this.poisonous = false;
}

module.exports = Food;
