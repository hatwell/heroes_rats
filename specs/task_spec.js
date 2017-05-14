var assert = require('assert');
var Task = require('../task.js');
var Hero = require('../hero.js');

beforeEach(function(){
  task = new Task();
  task2 = new Task;
  task3 = new Task();
  hero4 = new Hero({'name':'bear', 'faveFood': 'berry'});

  task.setDifficulty(10);
  task2.setUrgency(10);
  task3.setReward(10);

  hero4.addTasks(task);
  hero4.addTasks(task2);
  hero4.addTasks(task3);


})

describe('Task', function(){

  it('takes tasks in', function(){
    assert.equal(3, hero4.tasks.length);
  })
})
