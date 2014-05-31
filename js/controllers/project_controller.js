Projects.ProjectController = Ember.ObjectController.extend({
  actions: {
    showDetails: function () {
	  this.set('isHidden', false);
	},
	
	hideDetails: function () {
	  this.set('isHidden', true);
	},
  
    editProject: function () {
      this.set('isEditing', true);
    },
	acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
         this.send('removeProject');
      } else {
        this.get('model').save();
      }
    },
	removeProject: function() {
      var project = this.get('model');
      project.deleteRecord();
      project.save();
    }

  },

  isEditing: false,
  isHidden: true,

});