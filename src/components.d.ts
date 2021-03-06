/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface QuestionSlide {
        "answers": { text: string, points: number }[];
        "index": number;
        "text": string;
    }
    interface QuizComponent {
        "questions"?: string;
        "restart"?: string;
        "result"?: string;
    }
    interface ResultComponent {
        "points"?: number;
        "restart"?: string;
        "text"?: string;
    }
}
declare global {
    interface HTMLQuestionSlideElement extends Components.QuestionSlide, HTMLStencilElement {
    }
    var HTMLQuestionSlideElement: {
        prototype: HTMLQuestionSlideElement;
        new (): HTMLQuestionSlideElement;
    };
    interface HTMLQuizComponentElement extends Components.QuizComponent, HTMLStencilElement {
    }
    var HTMLQuizComponentElement: {
        prototype: HTMLQuizComponentElement;
        new (): HTMLQuizComponentElement;
    };
    interface HTMLResultComponentElement extends Components.ResultComponent, HTMLStencilElement {
    }
    var HTMLResultComponentElement: {
        prototype: HTMLResultComponentElement;
        new (): HTMLResultComponentElement;
    };
    interface HTMLElementTagNameMap {
        "question-slide": HTMLQuestionSlideElement;
        "quiz-component": HTMLQuizComponentElement;
        "result-component": HTMLResultComponentElement;
    }
}
declare namespace LocalJSX {
    interface QuestionSlide {
        "answers"?: { text: string, points: number }[];
        "index"?: number;
        "onAnswerClick"?: (event: CustomEvent<number>) => void;
        "text"?: string;
    }
    interface QuizComponent {
        "questions"?: string;
        "restart"?: string;
        "result"?: string;
    }
    interface ResultComponent {
        "onRestartAction"?: (event: CustomEvent<boolean>) => void;
        "points"?: number;
        "restart"?: string;
        "text"?: string;
    }
    interface IntrinsicElements {
        "question-slide": QuestionSlide;
        "quiz-component": QuizComponent;
        "result-component": ResultComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "question-slide": LocalJSX.QuestionSlide & JSXBase.HTMLAttributes<HTMLQuestionSlideElement>;
            "quiz-component": LocalJSX.QuizComponent & JSXBase.HTMLAttributes<HTMLQuizComponentElement>;
            "result-component": LocalJSX.ResultComponent & JSXBase.HTMLAttributes<HTMLResultComponentElement>;
        }
    }
}
