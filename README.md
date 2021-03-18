# stylish-quiz
Simple and stylish quiz web-component.

Colors and Font adaptable through CSS Variables.
Questions and result texts (for different point ranges) can be inserted through JSON into attributes.
## Demo
See it in action and play around:

⚡
https://jsfiddle.net/maidi/o90hzqdk/
⚡

## Screenshots
![Desktop View](https://raw.githubusercontent.com/maidi29/stylish-quiz/screenshots/screenshots/desktop.PNG)
![Mobile View](https://raw.githubusercontent.com/maidi29/stylish-quiz/screenshots/screenshots/mobile.PNG)

## Usage


### HTML

````
<script type="module" src="https://unpkg.com/stylish-quiz@1.0.6"></script>
<quiz-component restart="Try again!"></quiz-component>
````

### Javascript

```
const questions =
  JSON.stringify([
  {
      question: "Question one?",
      answers: [
        {text: "Answer 1.1", points: 3},
        {text: "Answer 1.2", points: 2},
        {text: "Answer 1.3", points: 0},
        {text: "Answer 1.4", points: 1}
      ],
      index: 0
  },{
      question: "Question two?",
      answers: [
        {text: "Answer 2.1", points: 0},
        {text: "Answer 2.2", points: 2},
        {text: "Answer 2.3", points: 0}
      ],
      index: 1
  }
]);

const result = 
   JSON.stringify([
   {
        points:"0-2",
        text:"Your result text"
   }, {
        points:"3-5",
        text:"Your awesome result text"
   }
]);

document.querySelector('quiz-component').setAttribute('questions', questions);
document.querySelector('quiz-component').setAttribute('result', result);
``````
### CSS

```
quiz-component { 
  --color-primary: #1B1B3A;
  --color-primary-bright: #34346F;
  --color-primary-highlight: #C09BE9;
  --color-secondary: #DCDFE5;
  --font-type: Arial;
  --font-size-question: 1.5rem;
  --font-size-answer: 1rem;
  --font_size_result: 1.2rem;
  --font_size_restart: 1rem;
}
````
