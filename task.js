var _ = require('lodash');

var Task = function(){
  this.difficulty = 0;
  this.urgency = 0;
  this.reward = 0;
  this.completed = false;
}

Task.prototype = {
  setDifficulty: function(difficulty){
    this.difficulty = difficulty;
  },
  setUrgency: function(urgency){
    this.urgency = urgency;
  },
  setReward: function(reward){
    this.reward = reward;
  },
  setCompleted: function(){
  this.completed = true;
  }
}

module.exports = Task;
