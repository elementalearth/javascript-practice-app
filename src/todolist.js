// Creates the Todo list and sets completed to false for each todo in the array

var todoList = {
  todos: [],
  init: function() {
    todoList.add('first');
    todoList.add('second');
    todoList.add('third');
    todoList.update(0, 'not first anymore');
    todoList.toggle(0);
  },

  print: function(caller) {
    if (this.todos.length === 0) {
      console.log('You have no todos');
    } else {
      console.log(caller + ': ');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          console.log('( ) ' + this.todos[i].todoText);
        } else {
          console.log('(x) ' + this.todos[i].todoText);
        }
      }
    }
  },

  // Adds a todo at the end of the array and sets completed to false
  add: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },

  //Removes a todo when the 'delete' button is pressed
  remove: function(pos) {
    //position of the parentNode which comes from the delete-button click eventListener in script.js
    this.todos.splice(pos, 1); //cuts out the <li> at only (pos, 1) the position clicked in the array
  },

  // Updates a todo
  update: function(pos, newText) {
    //all new inputs are stored in newText
    this.todos[pos].todoText = newText; //sets todoText as equal to newText
    this.print('Updated a todo');
  },

  // Toggles the 'completed' element when the li is clicked
  toggle: function(pos) {
    this.todos[pos].completed = !this.todos[pos].completed; //flips completed class when function is called
    this.print('Toggled a todo');
  },
};

todoList.init();

export default todoList;
