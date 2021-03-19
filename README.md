# stylish-quiz
Simple, stylish and responsive quiz Web Component

Colors and Font are adaptable through CSS Variables.

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
Integrate the package script:
````html
<script type="module" src="https://unpkg.com/stylish-quiz@1.0.8"></script>
````
#### Option 1: Pure HTML
`JSON.stringify` your questions and result object arrays before adding them to HTML and you have no need for JavaScript:
````html
<quiz-component questions='[{"question":"Question one?","answers":[{"text":"Answer 1.1","points":3},{"text":"Answer 1.2","points":2},{"text":"Answer 1.3","points":0},{"text":"Answer 1.4","points":1}],"index":0},{"question":"Question two?","answers":[{"text":"Answer 2.1","points":0},{"text":"Answer 2.2","points":2},{"text":"Answer 2.3","points":0}],"index":1}]'
                result='[{"points":"0-2","text":"Your result text"},{"points":"3-5","text":"Your awesome result text"}]'
                restart="Try again!">
</quiz-component>
````

#### Option 2: With JavaScript
Have a more structured overview over your questions and result objects:
````html
<quiz-component restart="Try again!"></quiz-component>
````
```javascript
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
### Styling
You can adjust colors and fonts through the following CSS variables:
```css
quiz-component { 
  --color-primary: #1B1B3A; /* background of the slides */
  --color-primary-bright: #34346F; /* :active background of the answer when clicked */
  --color-primary-highlight: #C09BE9; /* :hover effect of the answer */
  --color-secondary: #DCDFE5; /* font color of the slides */
  --font-type: Arial;
  --font-size-question: 1.5rem;
  --font-size-answer: 1rem;
  --font_size_result: 1.2rem;
  --font_size_restart: 1rem;
}
````

## Attributes and JSON Structure
### Questions
The questions are displayed subsequently in the order determined by the index property.

Insert _questions_ (= attribute name) as **Array** of objects matching the question interface:
````typescript
interface Question {
  question: string; // displayed question text
  answers: {
      text: string, // displayed answer text
      points: number // received points when choosing this answer
  }[];
  index: number; // order (when is the question displayed in the sequence)
}
````

### Result
The result is displayed at the end of all questions depending on the points that the user has reached.

Insert _result_ (= attribute name) as **Array** of objects matching the result interface:
````typescript
interface Result {
  points: string; // the result is displayed for this amount of points, can be inserted as range '0-5' or single number '8'
  text: string; // displayed result text for this amount of points
}
````
Take attention that the full range of points that can be achieved through your questions is mapped in the results.

### Restart
A restart button is displayed below the result text if you insert this attribute.
Insert _restart_ (= attribute name) as **string** with the label text of the restart button.