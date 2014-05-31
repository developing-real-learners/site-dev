Projects.ProjectsController = Ember.ArrayController.extend({
 actions: {
    createProject: function() {
      // Get the todo title set by the "New Project" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var project = this.store.createRecord('project', {
        title: title,
      });

      // Clear the "New Project" text field
      this.set('newTitle', '');

      // Save the new model
      project.save();
    }
  },

  
  
});