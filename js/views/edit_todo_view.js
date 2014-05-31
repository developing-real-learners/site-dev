
//http://emberjs.com/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted/
//this code moves the focus to the new text field after it's been inserted.
Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

//creates a custom Handlebars component called "edit-todo"
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);