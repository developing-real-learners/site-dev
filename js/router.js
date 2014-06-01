//a route is an object which tells a template which model(s) it should display

/*
//create a mapping from Todos object to 'todos' resource in index.html
Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    //child routes go here
	this.route('active');
	this.route('completed');
  });
});

//creates a function that acts as ("fulfils") a model 
//the function returns all records of type "todo"
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});
*/


Projects.Router.map(function() {
  this.resource('projects', { path: '/' }, function () {
    //child routes go here
  });
});

//creates a function that acts as ("fulfils") a model 
//the function returns all records of type "todo"
Projects.ProjectsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('project');
  },
});

Projects.ProjectsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('projects');
  }
});






