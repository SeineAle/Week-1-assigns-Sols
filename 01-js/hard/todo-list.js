/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to this.list of todos
    - remove(indexOfTodo): remove todo from this.list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor () {
    this.list = [];
  }
  add(todo){
    this.list.push(todo);
  }
  remove(index){
    if(index<this.list.length){
      for(let i = index+1; i < this.list.length; i ++){
        this.list[i-1] = this.list[i];
      }
      this.list.pop();
    }
  }
  update(index, updatedTodo){
    if(index < this.list.length){
      this.list[index] = updatedTodo;
    }
  }
  getAll(){
    return this.list;
  }
  get(indexOfTodo){
    if(indexOfTodo < this.list.length){
      return this.list[indexOfTodo];
    }return null;
  }
  clear(){
    this.list = [];
  }
}

module.exports = Todo;
