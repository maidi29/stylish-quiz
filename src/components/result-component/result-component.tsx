import {Component, Host, h, Prop, EventEmitter, Event} from '@stencil/core';

@Component({
  tag: 'result-component',
  styleUrl: 'result-component.scss',
  shadow: true,
})
export class ResultComponent {
  @Prop() points?: number = 0;
  @Prop() text?: string = "";
  @Prop() restart?: string;

  @Event() restartAction: EventEmitter<boolean>;

  render() {
    return (
      <Host>
        <div class={'results'}>
          <div class={'text'}>{this.text}</div>
          {this.restart && (<button onClick={()=>this.restartAction.emit(true)}>{this.restart}</button>)}
        </div>
      </Host>
    );
  }

}
