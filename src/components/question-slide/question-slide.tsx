import {Component, Host, h, Prop, Event, EventEmitter, Watch, State} from '@stencil/core';

@Component({
  tag: 'question-slide',
  styleUrl: 'question-slide.scss',
  shadow: true,
})
export class QuestionSlide {
  @Prop() text: string;
  @Prop() answers: { text: string, points: number }[];
  @Prop({reflect: true}) index: number;

  @Event() answerClick: EventEmitter<number>

  @State() triggerAnimation = true;

  @Watch('text')
  watchHandler(): void {
    this.triggerAnimation = true;
    setTimeout(()=> this.triggerAnimation = false, 500);
  }

  componentDidLoad() {
    this.watchHandler();
  }

  render() {
    return (
      <Host id={this.index}>
        <div class={`${this.triggerAnimation && 'run-animation'} card question-card`}>
          <div class={'card__inner'}>{this.text}</div>
        </div>
        <div class={'answers'}>
        {this.answers.map((answer)=>
          <div class={`${this.triggerAnimation && 'run-animation'} card answer-card`} onClick={()=> {
            this.answerClick.emit(answer.points);
          }}>{answer.text}</div>
        )}
        </div>
      </Host>
    );
  }

}
