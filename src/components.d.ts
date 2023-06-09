/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TodoListItemModel } from "./models/TodoListItem.model";
export { TodoListItemModel } from "./models/TodoListItem.model";
export namespace Components {
    interface FupuButton {
        "label": string;
    }
    interface FupuInputCheckbox {
        "checkboxId": string;
        "value": string;
    }
    interface FupuInputText {
        "inputId": string;
        "inputName": string;
        "label": string;
    }
    interface FupuTodoList {
        "todoList": TodoListItemModel[] | string;
        "todoTitle": string;
    }
}
export interface FupuButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFupuButtonElement;
}
export interface FupuInputCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFupuInputCheckboxElement;
}
export interface FupuInputTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFupuInputTextElement;
}
export interface FupuTodoListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFupuTodoListElement;
}
declare global {
    interface HTMLFupuButtonElement extends Components.FupuButton, HTMLStencilElement {
    }
    var HTMLFupuButtonElement: {
        prototype: HTMLFupuButtonElement;
        new (): HTMLFupuButtonElement;
    };
    interface HTMLFupuInputCheckboxElement extends Components.FupuInputCheckbox, HTMLStencilElement {
    }
    var HTMLFupuInputCheckboxElement: {
        prototype: HTMLFupuInputCheckboxElement;
        new (): HTMLFupuInputCheckboxElement;
    };
    interface HTMLFupuInputTextElement extends Components.FupuInputText, HTMLStencilElement {
    }
    var HTMLFupuInputTextElement: {
        prototype: HTMLFupuInputTextElement;
        new (): HTMLFupuInputTextElement;
    };
    interface HTMLFupuTodoListElement extends Components.FupuTodoList, HTMLStencilElement {
    }
    var HTMLFupuTodoListElement: {
        prototype: HTMLFupuTodoListElement;
        new (): HTMLFupuTodoListElement;
    };
    interface HTMLElementTagNameMap {
        "fupu-button": HTMLFupuButtonElement;
        "fupu-input-checkbox": HTMLFupuInputCheckboxElement;
        "fupu-input-text": HTMLFupuInputTextElement;
        "fupu-todo-list": HTMLFupuTodoListElement;
    }
}
declare namespace LocalJSX {
    interface FupuButton {
        "label"?: string;
        "onFupuButtonClick"?: (event: FupuButtonCustomEvent<MouseEvent>) => void;
    }
    interface FupuInputCheckbox {
        "checkboxId"?: string;
        "onFupuInputCheckboxChange"?: (event: FupuInputCheckboxCustomEvent<boolean>) => void;
        "value"?: string;
    }
    interface FupuInputText {
        "inputId"?: string;
        "inputName"?: string;
        "label"?: string;
        "onFupuInputTextChange"?: (event: FupuInputTextCustomEvent<string>) => void;
    }
    interface FupuTodoList {
        "onFupuTodoListChange"?: (event: FupuTodoListCustomEvent<TodoListItemModel[]>) => void;
        "todoList"?: TodoListItemModel[] | string;
        "todoTitle"?: string;
    }
    interface IntrinsicElements {
        "fupu-button": FupuButton;
        "fupu-input-checkbox": FupuInputCheckbox;
        "fupu-input-text": FupuInputText;
        "fupu-todo-list": FupuTodoList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fupu-button": LocalJSX.FupuButton & JSXBase.HTMLAttributes<HTMLFupuButtonElement>;
            "fupu-input-checkbox": LocalJSX.FupuInputCheckbox & JSXBase.HTMLAttributes<HTMLFupuInputCheckboxElement>;
            "fupu-input-text": LocalJSX.FupuInputText & JSXBase.HTMLAttributes<HTMLFupuInputTextElement>;
            "fupu-todo-list": LocalJSX.FupuTodoList & JSXBase.HTMLAttributes<HTMLFupuTodoListElement>;
        }
    }
}
