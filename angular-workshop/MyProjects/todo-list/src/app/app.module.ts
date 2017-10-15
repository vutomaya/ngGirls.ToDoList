import { TodoListStorageService } from './todo-list-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-list.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
