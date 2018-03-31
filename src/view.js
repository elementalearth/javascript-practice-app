import todoList from './todolist';

//Object that writes the todo list data to the DOM
var view = {
  init: function() {
    this.cacheDOM();
    this.bindClick();
  },

  render: function() {
    this.todoContainer.innerHTML = ''; //sets DOM to blank
    var todos = todoList.todos; //sets todos equal to todos array in todolist.js

    todos.forEach(function(todo, pos) {
      //parses the todo array and creates an li for each item
      var li = document.createElement('li'); //writes li data to DOM
      //li.innerHTML = todo.todoText; //sets text to text in todo array
      li.id = pos; //adds pos id for toggle & delete functions
      li.classList.add('list-item'); //adds list-item class for toggle function

      if (todo.completed) {
        //short hand- checks if todo.completed == true
        li.classList.add('item-completed'); //adds text strikethrough in css if completed = true
      }

      var span = document.createElement('span'); //stores the actual todoText in a span which is appended to the parentNode <li>
      span.innerHTML = todo.todoText; //sets contents of the span to todo.todoText
      span.classList.add('todo-text'); //adds the 'todo-text' class to the span which is used as identification by the click eventListener in script.js to update the todoText

      var input = document.createElement('input'); //creates an input box element on each todo which is hidden from view in the .css
      input.value = todo.todoText; //sets the contents of the input text to todo.todoText
      input.classList.add('edit-text'); //adds the 'edit-text' class to 'input' for id in .css and
      input.addEventListener('blur', view.deselectEdit); //calls the 'deselectEdit' function in view.js when the target is unfocused'
      input.addEventListener('keypress', view.updateTodo);

      var toggleButton = document.createElement('button'); //creates button
      toggleButton.innerHTML = '✔'; //adds a checkmark to the button. check mark found by google search of "ascii checkmark"
      toggleButton.classList.add('toggle-button'); //adds class to button for .css use and id via click eventListener in script.js

      var deleteTodoButton = document.createElement('button'); //creates button
      deleteTodoButton.innerHTML = 'delete'; //adds text to button
      deleteTodoButton.classList.add('delete-button'); //adds class to button for .css use and id via click eventListener in script.js

      li.appendChild(input); //appends input to each <li>
      li.appendChild(span); //appends 'span' to each <li>
      li.appendChild(toggleButton); //appends the toggle button to each <li>
      li.appendChild(deleteTodoButton); //appends button to each li created
      todoContainer.appendChild(li); //appends button to each li created in todoContainer
    });
  },

  cacheDOM: function() {
    this.todoContainer = document.querySelector('#todoContainer');
  },

  bindClick: function() {
    todoContainer.addEventListener('click', function(e) {
      //adds eventlistener to DOM and looks for a click event. passes click event into function as 'e'
      var targetClasses = e.target.classList; //var that simplifies target id and reduces typing out extra lines for event if statements

      if (targetClasses.contains('delete-button')) {
        //if event target classlist contains the 'delete-button' class view.js deleteTodo function is called
        view.deleteTodo(e.target.parentNode.id); //passes location if 'delete-button' id to delete function in view.js which deletes the todo located at the event target by removing the parentnode (li) by id from the array
      } else if (targetClasses.contains('toggle-button')) {
        //if event target classlist contains the 'toggle-button' class then view.js toggleTodo function is called
        view.toggleTodo(e.target.parentNode.id); //passes location to toggle function in view.js which is the event target id (toggle-todo) parentNode which is the <li>
      } else if (targetClasses.contains('todo-text')) {
        //if event target class contains the todo-text class then the editTodo function in view.js is called
        view.editTodo(e.target.parentNode); //passes the event target parentNode <li> to view.editTodo
      }
    });
  },

  deleteTodo: function(pos) {
    //removes a todo based off click position listed in event listener in script.js
    todoList.remove(pos); //calls function in todolist.js
    this.render(); //calls render function and writes data to DOM
  },

  toggleTodo: function(pos) {
    //adds item-completed class a todo based off click position listed in event listener in script.js
    todoList.toggle(pos); //calls function in todolist.js
    this.render(); //calls render function and writes data to DOM
  },

  editTodo: function(targetParent) {
    //edits the text in a todo
    targetParent.classList.add('edit'); //adds the 'edit' class for use in .css which then hides the span and replaces it with the input class
    var input = targetParent.querySelector('input'); //declares the the variable passed to the function from the eventListener in script.js is equal to 'input'
    input.focus(); //focuses the target input for use with the updateTodo function in view.js when key 13 (Enter) is pressed
    input.setSelectionRange(0, input.value.length); //automatically highlights the text in todo
  },

  deselectEdit: function(e) {
    //deselects a todo and reverts the .css
    e.target.parentNode.classList.remove('edit'); //removes the 'edit' class from the parentNode <li> which reverts the .css for the 'input' and 'span' classes to their normal state ***This will not cause the text in a todo to update! Key 13 (Enter) must be pressed for that to happen***
  },

  updateTodo: function(e) {
    //updates the text in a todo item
    if (e.keyCode === 13) {
      //key code for the Enter key. Can be found in the console
      todoList.update(e.target.parentNode.id, e.target.value); //calls todoList.update function in todoList.js and passes it the target parentNode id <li> and the targets value (the current text in the span) and replaces it with the new text typed into the input
      e.target.blur(); //blurs/unfocuses the target
      view.render(); //calls view.render to update the text in the DOM after key 13 is pressed
    } else {
      return; //seems inefficient but is actually very efficient for checking for keypress. this function will fire after every single key press when updating a todo
    }
  },
};

view.init();

export default view;
