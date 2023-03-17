import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fupu-input-text',
  styleUrl: 'fupu-input-text.css',
  shadow: true,
})
export class FupuInputText {

  @Prop({ reflect: true }) inputId: string;
  @Prop({ reflect: true }) inputName: string;
  @Prop({ reflect: true }) label: string;

  @Event() fupuInputTextChange: EventEmitter<string>;
  @State() value = "";

  onInput(e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value;
    this.fupuInputTextChange.emit(this.value);
  }

  renderInputText() {
    let htmlLabel = null;
    if (this.label) {
      htmlLabel = <label htmlFor={this.inputId}>{this.label}</label>
    }
    return (
      <Host>
        {htmlLabel}
        <input type="text" name={this.inputName} id={this.inputId} value={this.value} onInput={(e) => this.onInput(e)}/>
      </Host>
    )
  }

  render() {
    return this.renderInputText();
  }

}
