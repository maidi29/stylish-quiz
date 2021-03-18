import {Component, h, Host, Listen, Prop, State, Element, Watch} from '@stencil/core';

export interface Question {
  question: string;
  answers: {text: string, points: number}[];
  index: number;
}

export interface Result {
  points: string;
  text: string;
}

@Component({
  tag: 'quiz-component',
  styleUrl: 'quiz-component.scss',
  shadow: true,
})
export class QuizComponent {
  @Element() host: HTMLQuizComponentElement;

  @Prop({reflect: true, mutable: true}) questions?: string;
  @Prop({reflect: true, mutable: true}) result?: string;
  @Prop({reflect: false}) restart?: string;

  @State() activeQuestionIndex = 0;

  private allQuestions: Question[];
  private allResult: Result[];
  private resultObject = {};
  private pointsTotal = 0;

  @Watch('questions')
  watchHandlerQuestions(): void {
    this.setupResultsOrQuestions('questions');
  }

  @Watch('result')
  watchHandlerResults(): void {
    this.setupResultsOrQuestions('result');
  }

  @Listen('answerClick')
  answerClickHandler(event: CustomEvent<number>): void {
    this.pointsTotal += event.detail;
    this.activeQuestionIndex += 1;
    this.scrollToQuestion();
  }

  @Listen('restartAction')
  restartHandler() {
    this.pointsTotal = 0;
    this.activeQuestionIndex = 0;
    this.scrollToQuestion();
  }

  componentWillLoad(): void {
    this.setupResultsOrQuestions('questions');
    this.setupResultsOrQuestions('result');
    this.createResultObject();
  }

  private scrollToQuestion(): void {
    this.host.scrollIntoView(true);
  }

  private setupResultsOrQuestions(name: string): void {
    if (this[`${name}`] !== "") {
      this[`all${name.charAt(0).toUpperCase() + name.slice(1)}`] = QuizComponent.isJsonString(this[`${name}`]) ? JSON.parse(this[`${name}`]) : [];
      this[`${name}`] = "";
    }
  }

  private createResultObject(): void {
    this.allResult.map(res => {
      if (res.points.indexOf('-') !== -1) {
        const pointsArray = res.points.split('-');
        const range = this.createRange(parseInt(pointsArray[0], 10), parseInt(pointsArray[1], 10), 1);
        range.forEach((num: number) => {
          Object.assign(this.resultObject, {[num]: res.text});
        })
      } else {
        Object.assign(this.resultObject, {[res.points]: res.text});
      }
    });
  }

  private static isJsonString(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      console.error('Quiz Attribute is not set up correctly: ', e);
      return false;
    }
    return true;
  }

  private createRange(start: number, stop: number, step: number): number[] {
    return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  }

  render() {
    return (
      <Host>
        {this.allQuestions.length > 0 ?
          this.activeQuestionIndex >= this.allQuestions.length ?
            <result-component points={this.pointsTotal} text={this.resultObject[this.pointsTotal]} restart={this.restart}/>
          : this.allQuestions.map((quest: Question) =>
              quest.index === this.activeQuestionIndex ? <question-slide text={quest.question} answers={quest.answers} index={quest.index}/> : null
            )
        : <div>No questions found, see console for error information.</div>
        }
      </Host>
    )
  }
}
