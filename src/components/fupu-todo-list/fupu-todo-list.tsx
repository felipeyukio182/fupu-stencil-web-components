import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { TodoListItemModel } from '../../models/TodoListItem.model';

@Component({
  tag: 'fupu-todo-list',
  styleUrl: 'fupu-todo-list.css',
  shadow: true,
})
export class FupuTodoList {

  @Event() fupuTodoListChange: EventEmitter<TodoListItemModel[]>

  @Prop({ reflect: true }) todoTitle = "Título";

  @State() _todoList: TodoListItemModel[] = [];
  @Prop({ reflect: true }) todoList: TodoListItemModel[] | string = "[]";
  @Watch("todoList")
  todoListWatcher(newValue: TodoListItemModel[] | string) {
    try {
      if (typeof(newValue) === "string") {
        this._todoList = JSON.parse(newValue);
      } else {
        this._todoList = newValue;
      }
    } catch (error) {
      console.log(error);
      this._todoList = [];
    }
  }

  onInput(e: CustomEvent<boolean>, item: TodoListItemModel) {
    item.checked = e.detail;
    this.fupuTodoListChange.emit(this._todoList);
  }

  renderTodoListItems() {
    return this._todoList.map(item => (
      <li>
        <fupu-input-checkbox checkbox-id={item.name} value={item.name} onFupuInputCheckboxChange={(e) => this.onInput(e, item)}></fupu-input-checkbox>
      </li>
    ));
  }

  componentWillLoad() {
    this.todoListWatcher(this.todoList);
  }

  render() {
    return (
      <Host>
        <h1>{this.todoTitle}</h1>
        <ul>
          {this.renderTodoListItems()}
        </ul>
      </Host>
    );
  }

}
