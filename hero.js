var _ = require('lodash');

var Hero = function(params){
  this.name = params['name'];
  this.faveFood = params['faveFood'];
  this.health = 100;
  this.tasks = [];
}

Hero.prototype = {
  eatFood: function(food){
    food.name === this.faveFood ? this.health *= 1.5 : this.health += food.replenishmentValue;
  },
  addTasks: function(task){
    this.tasks.push(task);
  },
  sortTasksByUrgency: function(){
    var newTasks = _.sortBy(this.tasks, [function(task) { return task.urgency}]);
    this.tasks = _.reverse(newTasks);
    },

  sortTasksByReward: function(){
    var newTasks = _.sortBy(this.tasks, [function(task) { return task.reward}]);
    this.tasks = _.reverse(newTasks);
  },

  sortTasksByDifficulty: function(){
    var newTasks = _.sortBy(this.tasks, [function(task) { return task.difficulty}]);
    this.tasks = _.reverse(newTasks);
  },

  viewCompletedTasks: function(){
    var completedTasks = [];
    for (task of this.tasks){
      if (task.completed === true){
        completedTasks.push(task);
        }
      }
      return completedTasks;
    },

    viewIncompleteTasks: function(){
      var incompleteTasks = [];
      for (task of this.tasks){
        if (!task.completed === true){
          incompleteTasks.push(task);
          }
        }
        return incompleteTasks;
    }

  }






module.exports = Hero;
