import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fupu-input-checkbox',
  styleUrl: 'fupu-input-checkbox.css',
  shadow: true,
})
export class FupuInputCheckbox {

  @Prop({ reflect: true }) checkboxId: string;
  @Prop({ reflect: true }) value: string;

  @Event() fupuInputCheckboxChange: EventEmitter<boolean>;

  onInput(e: InputEvent) {
    this.fupuInputCheckboxChange.emit((e.target as HTMLInputElement).checked);
  }

  render() {
    return (
      <Host>
        <input type="checkbox" name={this.value} id={this.checkboxId} onInput={(e) => this.onInput(e)} />
        <label htmlFor={this.checkboxId}>{this.value}</label>
      </Host>
    );
  }

}
