'use strict';
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let todoData = [


];

function test() {
         todoData = JSON.parse(localStorage.getItem('test'));
       render();   
 }

const saveLocalStorage = function(){
    localStorage.clear();
    localStorage.setItem('test', JSON.stringify(todoData));
    };

const render = function(){
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    todoData.forEach(function (item) {
        const li = document.createElement('li');
       
        li.classList.add('todo-item');
        
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class="todo-buttons">' +
					'<button class="todo-remove"></button>' +
					'<button class="todo-complete"></button>'+
				'</div>';
              

        if(item.completed){
            todoCompleted.append(li);
        }
        else{
            todoList.append(li);
        }
        const removeItem = function(){
            for (let i=todoData.length-1;i>=0 ; i--){
                if (todoData[i].delete == true) {
                    todoData.splice(i, 1);
                 }
            }
            saveLocalStorage();
        };
        
        li.querySelector('.todo-complete').addEventListener('click',function(){
            item.completed = !item.completed;
            render();
            saveLocalStorage();
        });
      const bin =  li.querySelector('.todo-remove');
      bin.addEventListener('click',function(){
        item.delete = !item.delete;
       removeItem();
            render();
        });
    });
   
};

todoControl.addEventListener('submit', function(event){
event.preventDefault();

const newToDo ={
    text: headerInput.value,
    completed : false
};
if(headerInput.value === ""){
    render();
}
else{
    todoData.push(newToDo);
headerInput.value = "";
render();
saveLocalStorage();
}

});
test();