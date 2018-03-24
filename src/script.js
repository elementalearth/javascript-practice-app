console.clear();

var todoContainer = document.querySelector('#todoContainer');//links data to DOM



todoContainer.addEventListener('click', function(e) {//adds eventlistener to DOM and looks for a click event. passes click event into function as 'e'
  var targetClasses = e.target.classList;//var that simplifies target id and reduces typing out extra lines for event if statements

  if (targetClasses.contains('delete-button')){//if event target classlist contains the 'delete-button' class view.js deleteTodo function is called
    view.deleteTodo(e.target.parentNode.id);//passes location if 'delete-button' id to delete function in view.js which deletes the todo located at the event target by removing the parentnode (li) by id from the array
  } else if (targetClasses.contains('toggle-button')){//if event target classlist contains the 'toggle-button' class then view.js toggleTodo function is called
    view.toggleTodo(e.target.parentNode.id);//passes location to toggle function in view.js which is the event target id (toggle-todo) parentNode which is the <li>
  } else if (targetClasses.contains('todo-text')){//if event target class contains the todo-text class then the editTodo function in view.js is called
    view.editTodo(e.target.parentNode);//passes the event target parentNode <li> to view.editTodo
  }
});



todoList.add('first');
todoList.add('second');
todoList.add('third');
todoList.update(0, 'not first anymore');
todoList.toggle(0);


// DOM Manipulation



// var li = document.createElement('li');
// li.innerHTML = "Test";
// todoContainer.appendChild(li);



view.render();//calls view.render to push data to DOM
