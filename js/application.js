//creates a new Ember application called "Todos"
//as a data member of window object

//window.Todos = Ember.Application.create();

//uses Ember Data Fixture Adapter as Todo's Application adapter
/*
DS.FixtureAdapter is an adapter that loads records from memory. 
Its primarily used for development and testing.
You can also use DS.FixtureAdapter while working on the API but 
are not ready to integrate yet. It is a fully functioning adapter. 
All CRUD methods are implemented. You can also implement query logic 
that a remote system would do. Its possible to do develop your entire \
application with DS.FixtureAdapter.
http://emberjs.com/api/data/classes/DS.FixtureAdapter.html
*/
//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

//Uses Ember Local Storage Adapter as Todo's Application adapter

/*
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
*/

window.Projects = Ember.Application.create();
Projects.ApplicationAdapter = DS.FixtureAdapter.extend();





