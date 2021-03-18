import {Component, Host, h, Prop, EventEmitter, Event} from '@stencil/core';

@Component({
  tag: 'result-component',
  styleUrl: 'result-component.scss',
  shadow: true,
})
export class ResultComponent {
  @Prop() points?: number = 0;
  @Prop() text?: string = "";

  @Event() restart: EventEmitter<boolean>;

  render() {
    return (
      <Host>
        <div class={'results'}>
          <div class={'text'}>{this.text}</div>
          <button onClick={()=>this.restart.emit(true)}>Neu starten</button>
        </div>
      </Host>
    );
  }

}
