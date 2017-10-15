import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p class = "todo-item" >
    {{todoItem.title}}
    <button class = "btn btn-red" (click)="removeItem()">
    remove
  </button> 
    </p>
 
    
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  constructor() { }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  ngOnInit() {
  }
 
}
