import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  constructor(private storage:TodoListStorageService) {
  }  
  private todoList = [
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
  getTodoList() : Array<any> {
    return this.storage.get();
}

addItem(item) {
    return this.storage.post(item);
}
removeItem(item) {
  return this.storage.destroy(item);
}

}
