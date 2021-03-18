# stylish-quiz
Simple and stylish quiz web-component

##Usage

###Javascript

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
###CSS

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

###HTML

````
<script type="module" src="https://unpkg.com/stylish-quiz@1.0.2"></script>
<quiz-component></quiz-component>
````
