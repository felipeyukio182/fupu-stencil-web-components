import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fupu-button',
  styleUrl: 'fupu-button.css',
  shadow: true,
})
export class FupuButton {

  @Prop({ reflect: true }) label: string = "Clique aqui.";

  @Event() fupuButtonClick: EventEmitter<MouseEvent>;

  onClick(e: MouseEvent) {
    this.fupuButtonClick.emit(e);
  }

  render() {
    return (
      <Host>
        <button onClick={(e) => this.onClick(e)}>{this.label}</button>
      </Host>
    );
  }

}
