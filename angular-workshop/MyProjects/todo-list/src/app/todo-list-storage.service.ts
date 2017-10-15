import { Injectable } from '@angular/core';


const storageName = 'aah_todo_list';
const defaultList = [
  {title : 'buy milk'},
  {title : 'buy bread'},
  {title : 'visit mum'},
  {title : 'buy tickets to Budapest'},
  {title : 'read book'},
  {title : 'but dress'},
  {title : 'call granny'},
  {title : 'go to the gym'},
  {title : 'plan a trip to Budapest'},

];

@Injectable()
export class TodoListStorageService {

  private todoList;
  
  constructor() {this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;JSON.parse(localStorage.getItem(storageName));
  }

  get()  {
    return [...this.todoList]
  }
  post(item) {
    this.todoList.push(item);
    return this.update();
  }
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }
  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }
  destroy(item) {
    this.todoList.splice(this.todoList.indexOf(item), 1);
    return this.update();
  }
}
