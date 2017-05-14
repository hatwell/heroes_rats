var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');


beforeEach(function(){
  hero1 = new Hero({'name': "harry", 'faveFood': 'curry'})
  food2 = new Food({'name': 'ice cream', 'replenishmentValue': 20});
  hero2 = new Hero({'name': 'troy', 'faveFood': 'ice cream'});

  task = new Task();
  task2 = new Task;
  task3 = new Task();
  hero4 = new Hero({'name':'bear', 'faveFood': 'berry'});

  task.setDifficulty(10);
  task2.setUrgency(10);
  task3.setReward(10);
  task.setCompleted();
  hero4.addTasks(task);
  task2.setCompleted();


  hero4.addTasks(task2);
  hero4.addTasks(task3);

});

describe('Hero', function(){

  it('hero has health', function(){
    assert.equal(100, hero1.health);
  });

  it('hero has name', function(){
    assert.equal('harry', hero1.name);
  })

  it('hero has favourite food', function(){
    assert.equal('curry', hero1.faveFood);
  })
  it('hero has empty task list', function(){
    assert.equal(0, hero1.tasks.length);
  })

  it('food replenishes', function(){
    hero1.eatFood(food2);
    assert.equal(120, hero1.health);
  })

  it('food replenishes extra if favourite food', function(){
    hero2.eatFood(food2);
    assert.equal(150, hero2.health);
  })

  it('sorts by urgency', function(){
    hero4.sortTasksByUrgency();
    sortedTaskOne = hero4.tasks[0];
    assert.equal(task2, sortedTaskOne);
  })

  it('sorts by difficulty', function(){
    hero4.sortTasksByDifficulty();
    sortedTaskOne = hero4.tasks[0];
    assert.equal(task, sortedTaskOne);
  })

  it('sorts by reward', function(){
    hero4.sortTasksByReward();
    sortedTaskOne = hero4.tasks[0];
    assert.equal(task3, sortedTaskOne);
  })

  it('shows completed tasks', function(){
    for (task of hero4.tasks){
      task.setCompleted();
    }
    var completedTasks = hero4.viewCompletedTasks();
    assert.equal(3, completedTasks.length);
  })

  it('shows incomplete tasks', function(){
    for (task of hero4.tasks){
      task.setCompleted();
    }
    var incompleteTasks = hero4.viewIncompleteTasks();
    assert.equal(0, incompleteTasks.length);
  })




})
